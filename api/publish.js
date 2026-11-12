// Saves the edited catalogue (and any new photos) to GitHub as ONE commit. Vercel then redeploys the site.
const { json, authed, configured, ENV, gh, fromAdmin, readBody } = require('./_lib');
const okPath = p => /^products\/[a-z0-9][a-z0-9-]{0,120}\.(webp|jpg|jpeg|png)$/.test(p);
function validate(c) {
  if (!c || !Array.isArray(c.departments) || !Array.isArray(c.categories) || !Array.isArray(c.products)) return 'Catalogue format is invalid.';
  if (c.products.length > 5000) return 'Too many products.';
  const ids = new Set();
  for (const p of c.products) {
    if (!p || typeof p.id !== 'string' || !/^[a-z0-9-]{1,140}$/.test(p.id)) return 'A product has an invalid id.';
    if (ids.has(p.id)) return `Duplicate product id: ${p.id}`; ids.add(p.id);
    if (typeof p.n !== 'string' || !p.n.trim()) return `Product ${p.id} has no name.`;
    if (!Number.isInteger(p.c) || p.c < 0 || p.c >= c.categories.length) return `Product ${p.id} has an invalid category.`;
    for (const k of ['b', 'd', 'i']) if (p[k] != null && typeof p[k] !== 'string') return `Product ${p.id} has an invalid ${k}.`;
    if (p.st != null && !['out', 'soon'].includes(p.st)) return `Product ${p.id} has an invalid stock status.`;
  }
  return null;
}
module.exports = async (req, res) => {
  if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' });
  if (!fromAdmin(req) || !authed(req)) return json(res, 401, { error: 'Please log in again.' });
  if (!configured().github) return json(res, 503, { error: 'GitHub key (GITHUB_TOKEN) is not set up yet.' });
  let b; try { b = await readBody(req) } catch (_) { return json(res, 400, { error: 'Bad request' }) }
  const bad = validate(b.catalog); if (bad) return json(res, 400, { error: bad });
  const imgs = Array.isArray(b.images) ? b.images : [];
  if (imgs.length > 40) return json(res, 400, { error: 'Too many photos in one save. Publish in smaller batches.' });
  for (const im of imgs) if (!okPath(im.path) || typeof im.b64 !== 'string' || im.b64.length > 3_000_000) return json(res, 400, { error: 'A photo is invalid or too large.' });
  const e = ENV(), R = `/repos/${e.repo}`;
  try {
    const cur = await gh(`${R}/contents/catalog.json?ref=${encodeURIComponent(e.branch)}`);
    if (b.sha && cur.sha !== b.sha) return json(res, 409, { error: 'The catalogue was changed somewhere else since you opened it. Reload to get the latest, then redo your edit.' });
    const ref = await gh(`${R}/git/ref/heads/${encodeURIComponent(e.branch)}`);
    const head = ref.object.sha, commit = await gh(`${R}/git/commits/${head}`);
    const cat = { ...b.catalog, v: Date.now() };
    const files = [{ path: 'catalog.json', content: Buffer.from(JSON.stringify(cat)).toString('base64') }, ...imgs.map(i => ({ path: i.path, content: i.b64 }))];
    const tree = [];
    for (const f of files) {
      const bl = await gh(`${R}/git/blobs`, { method: 'POST', body: JSON.stringify({ content: f.content, encoding: 'base64' }) });
      tree.push({ path: f.path, mode: '100644', type: 'blob', sha: bl.sha });
    }
    const t = await gh(`${R}/git/trees`, { method: 'POST', body: JSON.stringify({ base_tree: commit.tree.sha, tree }) });
    const msg = String(b.message || 'Update products').slice(0, 200) + '\n\nSaved from the Zaitoon admin dashboard.';
    const nc = await gh(`${R}/git/commits`, { method: 'POST', body: JSON.stringify({ message: msg, tree: t.sha, parents: [head] }) });
    await gh(`${R}/git/refs/heads/${encodeURIComponent(e.branch)}`, { method: 'PATCH', body: JSON.stringify({ sha: nc.sha }) });
    const after = await gh(`${R}/contents/catalog.json?ref=${nc.sha}`);
    json(res, 200, { ok: true, commit: nc.sha, sha: after.sha, v: cat.v });
  } catch (err) { json(res, 500, { error: 'Could not publish: ' + err.message }) }
};

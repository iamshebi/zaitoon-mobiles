// Local test harness for the admin dashboard: serves the static site + /api functions + a mock GitHub API
// that writes into the folder you pass. Usage: node tools/dev-server.js <site-folder-copy>  → http://localhost:8090/admin
// Test login: owner@test.local / Test-Pass-123 (never use real secrets here).
const http = require('http'), fs = require('fs'), path = require('path'), crypto = require('crypto');
const ROOT = process.argv[2];
Object.assign(process.env, { ADMIN_EMAIL: 'owner@test.local', ADMIN_PASSWORD: 'Test-Pass-123', SESSION_SECRET: 'x'.repeat(40), GITHUB_TOKEN: 'mock', GITHUB_REPO: 'o/r', GITHUB_BRANCH: 'main', GITHUB_API: 'http://localhost:8090/gh' });
const blobs = {}, commits = {}; let head = 'c0'; commits.c0 = { tree: { sha: 't0' } }; const trees = {};
const sha = b => crypto.createHash('sha1').update(b).digest('hex');
const send = (res, c, j) => { res.writeHead(c, { 'Content-Type': 'application/json' }); res.end(JSON.stringify(j)) };
const body = req => new Promise(r => { let d = ''; req.on('data', c => d += c); req.on('end', () => r(d ? JSON.parse(d) : {})) });
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.txt': 'text/plain' };
http.createServer(async (req, res) => {
  const u = new URL(req.url, 'http://x');
  if (u.pathname.startsWith('/gh/')) {
    if (req.headers.authorization !== 'Bearer mock') return send(res, 401, { message: 'Bad credentials' });
    const p = u.pathname.replace('/gh/repos/o/r', '');
    if (p === '/contents/data/admin-notes.enc') {
      const fp = path.join(ROOT, 'data/admin-notes.enc');
      if (req.method === 'PUT') { const b = await body(req); const cur = fs.existsSync(fp) ? sha(fs.readFileSync(fp)) : null; if ((b.sha || null) !== cur) return send(res, 409, { message: 'sha mismatch' }); fs.mkdirSync(path.dirname(fp), { recursive: true }); fs.writeFileSync(fp, Buffer.from(b.content, 'base64')); console.log('NOTES', b.message); return send(res, 200, { content: { sha: sha(fs.readFileSync(fp)) } }) }
      if (!fs.existsSync(fp)) return send(res, 404, { message: 'Not Found' });
      const b = fs.readFileSync(fp); return send(res, 200, { sha: sha(b), encoding: 'base64', content: b.toString('base64') });
    }
    if (p === '/contents/catalog.json') { const b = fs.readFileSync(path.join(ROOT, 'catalog.json')); return send(res, 200, { sha: sha(b), encoding: 'base64', content: b.toString('base64') }) }
    if (p === '/git/ref/heads/main') return send(res, 200, { object: { sha: head } });
    if (p.startsWith('/git/commits/') && req.method === 'GET') return send(res, 200, commits[p.split('/').pop()]);
    if (p === '/git/blobs') { const b = await body(req); const s = 'b' + Object.keys(blobs).length; blobs[s] = b.content; return send(res, 201, { sha: s }) }
    if (p === '/git/trees') { const b = await body(req); const s = 't' + Object.keys(trees).length + 1; trees[s] = b.tree; return send(res, 201, { sha: s }) }
    if (p === '/commits' || p.startsWith('/commits?')) { const all = Object.entries(commits).filter(([k]) => k.startsWith('c')).reverse().map(([k, c]) => ({ sha: k.padEnd(40, '0'), commit: { message: c.message, committer: { date: c.date }, author: { date: c.date } } })); return send(res, 200, all) }
    if (p === '/git/commits') { const b = await body(req); const s = 'c' + Object.keys(commits).length; commits[s] = { tree: { sha: b.tree }, message: b.message, date: new Date().toISOString() }; return send(res, 201, { sha: s }) }
    if (p === '/git/refs/heads/main') { const b = await body(req); head = b.sha; for (const e of trees[commits[head].tree.sha]) { const fp = path.join(ROOT, e.path); fs.mkdirSync(path.dirname(fp), { recursive: true }); fs.writeFileSync(fp, Buffer.from(blobs[e.sha], 'base64')) } console.log('COMMIT', commits[head].message.split('\n')[0], trees[commits[head].tree.sha].map(e => e.path).join(',')); return send(res, 200, {}) }
    return send(res, 404, { message: 'nf ' + p });
  }
  if (u.pathname.startsWith('/api/')) {
    const n = u.pathname.slice(5); const f = path.join(ROOT, 'api', n + '.js');
    if (n.startsWith('_') || !fs.existsSync(f)) return send(res, 404, {});
    delete require.cache[f]; try { return await require(f)(req, res) } catch (e) { console.error(e); return send(res, 500, { error: String(e) }) }
  }
  let fp = u.pathname === '/' ? '/index.html' : u.pathname; if (!path.extname(fp)) fp += '.html';
  fp = path.join(ROOT, fp); if (!fs.existsSync(fp)) { res.writeHead(404); return res.end('nf') }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(fp)] || 'application/octet-stream', 'Cache-Control': 'no-store' }); fs.createReadStream(fp).pipe(res);
}).listen(8090, () => console.log('dev on 8090'));

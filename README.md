# Zaitoon Mobiles

Storefront for Al Zaitoon Computer & Mobile Phones, Ras Al Khaimah. Static site on Vercel.

- `catalog.json`: all products (`departments`, `categories`, `products`). Product fields: `b` brand, `n` name, `d` details, `c` category index, `i` photo in `/products`.
- No prices on the site. Every product has an "Enquire" button that opens WhatsApp with the product name, details, category and link prefilled.
- To add a product, add a line to `products` in `catalog.json` (and an 800×800 white-background `.webp` in `/products` if there's a photo).

## Admin dashboard (/admin)

Zaitoon edits products at **/admin** (works on phone and desktop). Saving publishes `catalog.json` (and new photos in `/products`) to this repo as one commit; Vercel redeploys automatically (~1 minute).

Vercel environment variables (Production):
- `ADMIN_EMAIL`, `ADMIN_PASSWORD` – the admin login. Extra logins: `ADMIN_EMAIL_2` + `ADMIN_PASSWORD_2` (up to `_5`). Each email key can also list several emails, comma-separated, sharing that password.
- `SESSION_SECRET` – random string (32+ chars) used to sign the login cookie
- `GITHUB_TOKEN` – fine-grained token with **Contents: Read and write** on this repo only
- optional: `GITHUB_REPO` (default `iamshebi/zaitoon-mobiles`), `GITHUB_BRANCH` (default `main`)

Product fields in `catalog.json`: `id`, `c` (category index), `b` brand, `n` name, `d` details, `i` photo file, `st` (`out` | `soon`), `h` (1 = hidden from site).

### Admin notes
The Notes button in the admin top bar keeps private notes shared by all admins. They are saved encrypted
(key derived from `SESSION_SECRET`) in `data/admin-notes.enc` in the repo; saving a note does not redeploy the
site (`ignoreCommand` in vercel.json) and the file is never served (`.vercelignore`). Changing `SESSION_SECRET`
makes existing notes unreadable, so copy them out first if you rotate it.

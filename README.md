# Zaitoon Mobiles

Storefront for Al Zaitoon Computer & Mobile Phones, Ras Al Khaimah. Static site on Vercel.

- `catalog.json`: all products (`departments`, `categories`, `products`). Product fields: `b` brand, `n` name, `d` details, `c` category index, `i` photo in `/products`.
- No prices on the site. Every product has an "Enquire" button that opens WhatsApp with the product name, details, category and link prefilled.
- To add a product, add a line to `products` in `catalog.json` (and an 800×800 white-background `.webp` in `/products` if there's a photo).

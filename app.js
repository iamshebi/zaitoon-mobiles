/* Zaitoon Mobiles — storefront (no prices: every enquiry goes to WhatsApp with the product prefilled) */
const WA = '971555400551', TEL = '+971555400551', MAIL = 'zaitoonmobile@gmail.com',
  MAP = 'https://maps.app.goo.gl/pVNrcoDpZ3Ljeenn8', IG = 'https://www.instagram.com/zaitoon.mobiles',
  SC = 'https://www.snapchat.com/@zaitoon.mobiles', CH = 'https://whatsapp.com/channel/0029Vb8QBcPADTO8lJVskh35', PG = 36;

const T = {
en: {
  brand: 'Al Zaitoon Computer & Mobile Phones', city: 'Ras Al Khaimah', shop: 'Shop', depts: 'Departments', services: 'Services', visit: 'Visit',
  msg: 'WhatsApp us', home: 'Home', all: 'All products', allB: 'All brands',
  eyb: 'Al Dhait South · Ras Al Khaimah',
  h1: ['Technology,', '<em>thoughtfully</em>', 'curated.'],
  lead: 'Phones, tablets, audio, wearables and everyday essentials from the brands you trust, hand-picked for Ras Al Khaimah. Find it here, then ask us on WhatsApp.',
  explore: 'Explore the store', ask: 'Ask on WhatsApp',
  st: ['Products in store', 'Categories', 'Brands'], live: 'In store now · Enquire on WhatsApp',
  depL: 'The collection', depH: 'Shop by <em>department</em>', depP: 'Everything in the store, sorted into clear departments.', items: 'items',
  sigL: 'Signature pieces', sigH: 'The <em>essentials</em>',
  phL: 'The phone wall', phH: 'Smartphones <em>in store</em>', phAll: 'See every phone',
  prL: 'Our promise', pr: [['Authentic only', 'Genuine products from official and trusted distributors.'], ['Ask, don’t guess', 'Message us on WhatsApp for today’s availability and best price.'], ['Delivery across RAK', 'We bring your order to your door, anywhere in Ras Al Khaimah.'], ['Care after purchase', 'Repairs, screen protection and setup help, all in-house.']],
  svL: 'Services', svH: 'Repair & care, <em>in‑house.</em>', svP: 'Send us the model and the problem. We’ll tell you exactly what it takes.',
  sv: [['Screen replacement', 'Phones and tablets'], ['Battery replacement', 'Phones and laptops'], ['Phone repair', 'All major brands'], ['Laptop & computer repair', 'Repair and maintenance'], ['Cut-to-fit screen film', 'Made in store on our cutting machine']],
  viL: 'Visit', viH: 'Come say <em>hello.</em>', viP: 'Drop by the store or reach us any way you like.',
  addr: 'Al Dhait South, Ras Al Khaimah, UAE', dir: 'Get directions', wa: 'WhatsApp', call: 'Phone', mail: 'Email', ig: 'Instagram', sc: 'Snapchat', ch: 'WhatsApp channel', follow: 'Follow',
  fBig: 'Find it here. Ask us on WhatsApp.', fShop: 'Shop', fStore: 'Store', rights: 'All rights reserved',
  search: 'Search products, brands, models…', sort: ['Featured', 'Name A–Z', 'Brand A–Z'],
  showing: (n, t) => `Showing <b>${n}</b> of <b>${t}</b>`, more: 'Show more', none: 'Nothing matches that yet', noneP: 'Try another search, or ask us. We may have it in store.',
  shopP: 'Browse everything in store. No prices online: tap enquire and we’ll reply on WhatsApp with availability and today’s best price.',
  askCat: c => `Can’t find it in ${c}?`, askCatP: 'Tell us what you’re after and we’ll check the shelves for you.',
  enq: 'Enquire', enqL: 'Enquire on WhatsApp', callUs: 'Call the store',
  pBrand: 'Brand', pCat: 'Category', pDept: 'Department', pAv: 'Availability', pAvV: 'Ask on WhatsApp', pDel: 'Delivery', pDelV: 'Across Ras Al Khaimah',
  pNote: 'Prices and stock change daily. Send us a message and we’ll confirm availability, colours and today’s best price.',
  rel: 'More in', nf: 'This product isn’t available any more', back: 'Back to the store', photo: 'Photo coming soon',
  waP: (n, d, c, u) => `Hello Al Zaitoon 👋\nI'd like to ask about:\n\n• ${n}${d ? `\n• ${d}` : ''}\n• Category: ${c}\n\nIs it available? What's the best price?\n${u}`,
  waC: c => `Hello Al Zaitoon 👋\nI'm looking for something in ${c}. What do you have available?`,
  waHi: 'Hello Al Zaitoon 👋 I’d like to ask about your products.',
  waS: s => `Hello Al Zaitoon 👋\nI need help with: ${s}`
},
ar: {
  brand: 'الزيتون للكمبيوتر والهواتف المحمولة', city: 'رأس الخيمة', shop: 'المتجر', depts: 'الأقسام', services: 'الخدمات', visit: 'زورونا',
  msg: 'راسلنا على واتساب', home: 'الرئيسية', all: 'كل المنتجات', allB: 'كل الماركات',
  eyb: 'الظيت الجنوبي · رأس الخيمة',
  h1: ['التقنية،', '<em>بعناية</em>', 'مختارة.'],
  lead: 'هواتف وأجهزة لوحية وصوتيات وساعات ذكية ومستلزمات يومية من أفضل الماركات، مختارة بعناية لرأس الخيمة. اختر منتجك ثم اسألنا على واتساب.',
  explore: 'تصفح المتجر', ask: 'اسأل على واتساب',
  st: ['منتج في المتجر', 'فئة', 'ماركة'], live: 'متوفر في المتجر · استفسر على واتساب',
  depL: 'المجموعة', depH: 'تسوق حسب <em>القسم</em>', depP: 'كل ما في المتجر، مرتب في أقسام واضحة.', items: 'منتج',
  sigL: 'منتجات مميزة', sigH: '<em>الأساسيات</em>',
  phL: 'جدار الهواتف', phH: 'الهواتف <em>المتوفرة</em>', phAll: 'كل الهواتف',
  prL: 'وعدنا', pr: [['أصلي فقط', 'منتجات أصلية من موزعين رسميين وموثوقين.'], ['اسأل ولا تخمّن', 'راسلنا على واتساب لمعرفة التوفر وأفضل سعر اليوم.'], ['توصيل في رأس الخيمة', 'نوصل طلبك إلى باب بيتك في أي مكان في الإمارة.'], ['عناية بعد الشراء', 'صيانة وحماية شاشة ومساعدة في الإعداد داخل المحل.']],
  svL: 'الخدمات', svH: 'صيانة وعناية <em>داخل المحل.</em>', svP: 'أرسل لنا الموديل والمشكلة، ونخبرك بالحل بالضبط.',
  sv: [['استبدال الشاشة', 'الهواتف والأجهزة اللوحية'], ['استبدال البطارية', 'الهواتف واللابتوبات'], ['إصلاح الهواتف', 'جميع الماركات الرئيسية'], ['صيانة اللابتوب والكمبيوتر', 'إصلاح وصيانة'], ['لاصقة شاشة بالمقاس', 'تُقص في المحل بجهاز القص']],
  viL: 'زورونا', viH: 'أهلاً <em>بكم.</em>', viP: 'زورونا في المحل أو تواصلوا معنا بالطريقة التي تناسبكم.',
  addr: 'الظيت الجنوبي، رأس الخيمة، الإمارات', dir: 'الاتجاهات', wa: 'واتساب', call: 'الهاتف', mail: 'البريد', ig: 'إنستغرام', sc: 'سناب شات', ch: 'قناة واتساب', follow: 'تابع',
  fBig: 'اختر منتجك هنا، واسألنا على واتساب.', fShop: 'المتجر', fStore: 'المحل', rights: 'جميع الحقوق محفوظة',
  search: 'ابحث عن منتج أو ماركة أو موديل…', sort: ['المميز', 'الاسم أ–ي', 'الماركة أ–ي'],
  showing: (n, t) => `عرض <b>${n}</b> من <b>${t}</b>`, more: 'عرض المزيد', none: 'لا توجد نتائج', noneP: 'جرّب بحثاً آخر أو اسألنا، قد يكون متوفراً في المحل.',
  shopP: 'تصفح كل ما في المتجر. لا أسعار على الموقع: اضغط استفسار ونرد عليك على واتساب بالتوفر وأفضل سعر اليوم.',
  askCat: c => `لم تجد ما تبحث عنه في ${c}؟`, askCatP: 'أخبرنا بما تريد ونبحث لك في المحل.',
  enq: 'استفسار', enqL: 'استفسر على واتساب', callUs: 'اتصل بالمحل',
  pBrand: 'الماركة', pCat: 'الفئة', pDept: 'القسم', pAv: 'التوفر', pAvV: 'اسأل على واتساب', pDel: 'التوصيل', pDelV: 'في جميع أنحاء رأس الخيمة',
  pNote: 'الأسعار والمخزون تتغير يومياً. راسلنا ونؤكد لك التوفر والألوان وأفضل سعر اليوم.',
  rel: 'المزيد من', nf: 'هذا المنتج غير متوفر حالياً', back: 'العودة إلى المتجر', photo: 'الصورة قريباً',
  waP: (n, d, c, u) => `مرحباً الزيتون 👋\nأود الاستفسار عن:\n\n• ${n}${d ? `\n• ${d}` : ''}\n• الفئة: ${c}\n\nهل هو متوفر؟ وما أفضل سعر؟\n${u}`,
  waC: c => `مرحباً الزيتون 👋\nأبحث عن منتج في قسم ${c}. ما المتوفر لديكم؟`,
  waHi: 'مرحباً الزيتون 👋 أود الاستفسار عن منتجاتكم.',
  waS: s => `مرحباً الزيتون 👋\nأحتاج مساعدة في: ${s}`
}};

/* line icons (24 grid) */
const P = {
  phone: '<rect x="7" y="2.5" width="10" height="19" rx="2.4"/><path d="M10.5 5h3"/>',
  tablet: '<rect x="4.5" y="2.5" width="15" height="19" rx="2.2"/><path d="M11 18.5h2"/>',
  laptop: '<rect x="4" y="5" width="16" height="10.5" rx="1.4"/><path d="M2 18.5h20"/>',
  buds: '<path d="M7.5 5a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3"/><path d="M7.5 5a3 3 0 0 0-1 5.8V19a1.2 1.2 0 0 0 2.4 0v-6"/><path d="M16.5 5a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3"/><path d="M16.5 5a3 3 0 0 1 1 5.8V19a1.2 1.2 0 0 1-2.4 0v-6"/>',
  head: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="6.5" rx="1.6"/><rect x="17" y="14" width="4" height="6.5" rx="1.6"/>',
  wired: '<path d="M7 4.5a2.5 2.5 0 0 1 2.5 2.5v2.5"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="7" r="2.5"/><path d="M7 9.5v4c0 3 2.5 4.5 5 4.5s5-1.5 5-4.5v-4M12 18v3.5"/>',
  speaker: '<rect x="6" y="2.5" width="12" height="19" rx="2.5"/><circle cx="12" cy="14.5" r="3.5"/><circle cx="12" cy="7" r="1.3"/>',
  watch: '<rect x="6.5" y="6.5" width="11" height="11" rx="3"/><path d="M9 6.5 9.6 2.5h4.8l.6 4M9 17.5l.6 4h4.8l.6-4M12 9.5V12l1.6 1.2"/>',
  bank: '<rect x="6" y="3" width="12" height="18" rx="2.4"/><path d="M12.8 7.5 10.5 12h3l-2.3 4.5"/>',
  plug: '<path d="M9 2.5v5M15 2.5v5"/><path d="M6.5 7.5h11v3a5.5 5.5 0 0 1-11 0z"/><path d="M12 16v5.5"/>',
  car: '<path d="M4 15.5 5.6 9.8A2 2 0 0 1 7.5 8.3h9a2 2 0 0 1 1.9 1.5L20 15.5"/><rect x="3" y="15.5" width="18" height="4" rx="1.4"/><circle cx="7" cy="17.5" r=".6"/><circle cx="17" cy="17.5" r=".6"/>',
  cable: '<path d="M7 2.5v4M10 2.5v4"/><rect x="5.5" y="6.5" width="6" height="4.5" rx="1"/><path d="M8.5 11v3.5a3.5 3.5 0 0 0 7 0V10"/><rect x="13.5" y="5.5" width="4" height="4.5" rx="1"/><path d="M15.5 3v2.5"/>',
  strip: '<rect x="2.5" y="8" width="19" height="8" rx="2"/><circle cx="7" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="17" cy="12" r="1.2"/>',
  battery: '<rect x="3" y="7.5" width="16" height="9" rx="1.8"/><path d="M21 10.5v3M6 10.5v3M9 10.5v3"/>',
  case: '<rect x="6" y="2.5" width="12" height="19" rx="3"/><rect x="8.3" y="4.6" width="3.6" height="3.6" rx="1"/>',
  shield: '<path d="M12 2.5 19.5 5v6c0 5-3.4 8.6-7.5 10.5C7.9 19.6 4.5 16 4.5 11V5z"/><path d="m9 11.8 2.2 2.2L15.2 10"/>',
  ring: '<circle cx="12" cy="12" r="6.5"/><circle cx="12" cy="12" r="3"/>',
  monitor: '<rect x="2.5" y="3.5" width="19" height="13" rx="1.6"/><path d="M9 20.5h6M12 16.5v4"/>',
  game: '<path d="M7 7.5h10a4.5 4.5 0 0 1 4.4 5.5l-.8 3.4a2.4 2.4 0 0 1-4.2 1L15 16H9l-1.4 1.4a2.4 2.4 0 0 1-4.2-1L2.6 13A4.5 4.5 0 0 1 7 7.5z"/><path d="M7.5 10.5v3M6 12h3"/><circle cx="16" cy="11" r=".7"/><circle cx="17.5" cy="13" r=".7"/>',
  wifi: '<path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19" r=".9"/>',
  hub: '<rect x="3" y="8" width="13" height="8" rx="2"/><path d="M16 12h5M7 12h1.5M10.5 12H12"/>',
  sd: '<path d="M7 2.5h7.5l4 4V20a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 20V4A1.5 1.5 0 0 1 7 2.5z"/><path d="M9 5.5v3M11.5 5.5v3M14 6.5v2"/>',
  key: '<rect x="2.5" y="6.5" width="19" height="11" rx="2"/><path d="M6 10h.01M9 10h.01M12 10h.01M15 10h.01M18 10h.01M7.5 14h9"/>',
  cam: '<rect x="2.5" y="6.5" width="19" height="13" rx="2.5"/><path d="M8 6.5 9.5 4h5L16 6.5"/><circle cx="12" cy="13" r="3.8"/>',
  cctv: '<path d="M3 7.5 17 4l1.5 6L4.5 13.5z"/><path d="M11 12l1 4h-5v4.5M18.5 9l2.5-.7"/>',
  cup: '<path d="M5 8.5h11v6a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5z"/><path d="M16 10.5h1.5a2.5 2.5 0 0 1 0 5H16M8.5 2.5c-.6 1 .6 2-.2 3M12 2.5c-.6 1 .6 2-.2 3"/>',
  leaf: '<path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14z"/><path d="M5 19 13 11"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>',
  moon: '<path d="M19.5 14.5A8 8 0 1 1 9.5 4.5a6.5 6.5 0 0 0 10 10z"/><path d="m16.5 4 .6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6z"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  left: '<path d="M15 6l-6 6 6 6"/>', right: '<path d="M9 6l6 6-6 6"/>'
};
const WAI = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.5-.3z"/></svg>';
const ico = (k, sw = 1.2) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${P[k] || P.spark}</svg>`;
const CI = ['phone', 'phone', 'tablet', 'buds', 'head', 'wired', 'speaker', 'watch', 'bank', 'plug', 'car', 'cable', 'strip', 'battery', 'case', 'shield', 'ring', 'car', 'monitor', 'game', 'wifi', 'hub', 'sd', 'key', 'cam', 'cctv', 'cup', 'leaf', 'spark', 'moon'];
const DI = { phones: 'phone', audio: 'head', wear: 'watch', power: 'bank', protect: 'shield', car: 'car', compute: 'game', create: 'cam', home: 'cup' };

const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const QS = new URLSearchParams(location.search), PAGE = document.body.dataset.page;
let L = document.documentElement.lang === 'ar' ? 'ar' : 'en';
let D = { departments: [], categories: [], products: [] };
const t = () => T[L];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const wa = m => 'https://wa.me/' + WA + '?text=' + encodeURIComponent(m);
const full = p => (p.b && !p.n.toLowerCase().startsWith(p.b.toLowerCase()) ? p.b + ' ' : '') + p.n;
const catN = i => D.categories[i][L];
const deptOf = c => D.departments.find(d => d.cats.includes(c));
const purl = p => location.origin + '/product?id=' + encodeURIComponent(p.id);
const waP = p => wa(t().waP(full(p), p.d, D.categories[p.c].en, purl(p)));
const ar = () => `<svg class="ar" viewBox="0 0 24 24" width="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${P.arrow}</svg>`;
const lines = arr => arr.map((s, i) => `<span class="ln" style="--d:${.15 + i * .1}s"><span>${s}</span></span>`).join('');

const visual = (p, big) => p.i
  ? `<img src="/products/${esc(p.i)}" alt="${esc(full(p))}" ${big ? '' : 'loading="lazy" decoding="async"'} width="800" height="800">`
  : `<div class="ph">${ico(CI[p.c], big ? 1 : 1.1)}<b>${esc(p.n.replace(new RegExp('^' + (p.b || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s+', 'i'), '').split(/\s+/).slice(0, 4).join(' '))}</b></div>`;

const card = (p, i = 0) => `<article class="c" style="--i:${i}">
  <a class="cv" href="/product?id=${encodeURIComponent(p.id)}" aria-label="${esc(full(p))}"></a>
  <div class="im">${visual(p)}</div>
  <div class="bd"><div class="br">${esc(p.b || catN(p.c))}</div><div class="nm">${esc(p.n)}</div>${p.d ? `<div class="dt">${esc(p.d)}</div>` : ''}
  <div class="ft"><span class="cat">${esc(catN(p.c))}</span><a class="wa" target="_blank" rel="noopener" href="${waP(p)}">${WAI}${t().enq}</a></div></div></article>`;

/* chrome */
function chrome() {
  const x = t(), nav = [['/shop', x.shop, 'shop'], ['/#departments', x.depts], ['/#services', x.services], ['/#visit', x.visit]];
  $('#hd').innerHTML = `<div class="w bar"><a class="logo" href="/"><img src="/logo-dark.png" alt="Zaitoon Mobiles" width="40" height="30"><span><b>ZAITOON</b><small>MOBILES</small></span></a>
  <nav class="nv">${nav.map(n => `<a href="${n[0]}"${n[2] === PAGE ? ' class="on"' : ''}>${n[1]}</a>`).join('')}</nav>
  <div class="hr"><button class="lang" id="lang">${L === 'ar' ? 'EN' : 'ع'}</button><a class="btn dk sm" target="_blank" rel="noopener" href="${wa(x.waHi)}">${WAI}<span>${x.msg}</span></a><button class="burger" id="bg" aria-label="Menu"><i></i></button></div></div>
`;
  let mn = $('#mnav'); if (!mn) { mn = document.createElement('div'); mn.id = 'mnav'; mn.className = 'mnav'; document.body.insertBefore(mn, $('#app')) }
  mn.innerHTML = `${nav.map(n => `<a href="${n[0]}">${n[1]}</a>`).join('')}<a class="btn gd" target="_blank" rel="noopener" href="${wa(x.waHi)}">${WAI}${x.msg}</a>`;
  document.body.classList.remove('mo');
  $('#ft').innerHTML = `<div class="w"><div class="fg">
   <div><a class="logo" href="/"><img src="/logo-dark.png" alt="" width="40" height="30"><span><b>ZAITOON</b><small>MOBILES</small></span></a><p class="big serif">${x.fBig}</p></div>
   <div><h5>${x.fShop}</h5>${D.departments.slice(0, 6).map(d => `<a href="/shop?d=${d.id}">${d[L]}</a>`).join('')}</div>
   <div><h5>${x.fStore}</h5><a href="/#services">${x.services}</a><a href="/#visit">${x.visit}</a><a href="${MAP}" target="_blank" rel="noopener">${x.dir}</a><a href="mailto:${MAIL}">${x.mail}</a></div>
   <div><h5>${x.follow}</h5><a href="${IG}" target="_blank" rel="noopener">${x.ig}</a><a href="${SC}" target="_blank" rel="noopener">${x.sc}</a><a href="${CH}" target="_blank" rel="noopener">${x.ch}</a><a href="${wa(x.waHi)}" target="_blank" rel="noopener" dir="ltr">+971 55 540 0551</a></div></div>
   <div class="huge">Zaitoon</div>
   <div class="fb"><span>© ${new Date().getFullYear()} ${x.brand} · ${x.city}</span><span>${x.rights}</span></div></div>`;
  $('#lang').onclick = () => { L = L === 'ar' ? 'en' : 'ar'; try { localStorage.setItem('lang', L) } catch (e) { } swap(render) };
  $('#bg').onclick = () => { document.body.classList.toggle('mo'); $('#bg').setAttribute('aria-expanded', document.body.classList.contains('mo')) };
  addEventListener('keydown', e => { if (e.key === 'Escape') document.body.classList.remove('mo') });
  $$('.mnav a').forEach(a => a.addEventListener('click', () => document.body.classList.remove('mo')));
}
const swap = fn => document.startViewTransition ? document.startViewTransition(fn) : fn();

/* HOME */
function home() {
  const x = t(), P_ = D.products, photo = P_.filter(p => p.i);
  const pick = ids => ids.map(i => photo.find(p => p.i === i)).filter(Boolean);
  const hero = pick(['apple-airpods-max-2.webp', 'samsung-galaxy-watch-ultra.webp', 'jbl-tune-760nc.webp', 'apple-airpods-pro-3.webp']);
  const brands = new Set(P_.map(p => p.b).filter(Boolean));
  const MQ = ['Apple', 'Samsung', 'Huawei', 'Xiaomi', 'Anker', 'JBL', 'DJI', 'Garmin', 'Sony', 'Belkin', 'SanDisk', 'Soundcore', 'Marshall', 'Fujifilm', 'Honor', 'TP-Link', 'Whoop', 'Beats', 'eufy', 'LePresso'].filter(b => brands.has(b));
  const sig = ['apple-airpods-pro-3.webp', 'samsung-galaxy-buds4-pro.webp', 'apple-airpods-max-2.webp', 'samsung-galaxy-watch-ultra.webp', 'apple-magsafe-charger-1-m.webp', 'jbl-tune-760nc.webp', 'huawei-huawei-freeclip-2.webp', 'samsung-galaxy-watch8.webp', 'apple-airtag-4-pack.webp', 'anker-soundcore-soundcore-liberty-5.webp', 'apple-apple-pencil-usb-c.webp', 'belkin-soundform-anywhere.webp', 'samsung-magnet-wireless-charger-qi2.webp', 'apple-iphone-air-magsafe-battery.webp'];
  const phones = P_.filter(p => p.c === 0).slice(0, 10);
  const dcount = d => P_.filter(p => d.cats.includes(p.c)).length;
  const DP = { audio: ['apple-airpods-max-2', 'samsung-galaxy-buds4-pro', 'apple-airpods-pro-3'], wear: ['samsung-galaxy-watch-ultra', 'samsung-galaxy-watch8', 'samsung-galaxy-smarttag2'], power: ['apple-magsafe-charger-1-m', 'apple-iphone-air-magsafe-battery', 'anker-anker-power-bank'], protect: ['assorted-iphone-18-pro-max-clear-case', 'assorted-iphone-cases', 'uandi-anti-dust-glass'], car: ['acefast-in-car-magnetic-phone-holder', 'baseus-car-phone-holder', 'mevor-mevor-halo-phone-holder'], compute: ['huawei-huawei-wifi-ax3', 'assorted-mobile-gaming-controller', 'sandisk-ultra-dual-drive'], create: ['green-lion-ring-light-8', 'assorted-selfie-stick-tripod'], home: ['green-lion-massage-gun', 'porodo-one-blade-beard-trimmer', 'assorted-mini-handheld-fan'] };
  const dpics = d => (DP[d.id] || []).map(f => f + '.webp');
  return `
  <section class="hero"><div class="w">
    <div class="rv in"><span class="eyb">${x.eyb}</span><h1 class="hx">${lines(x.h1)}</h1>
      <p class="lead rv" style="--d:.5s">${x.lead}</p>
      <div class="row rv" style="--d:.62s"><a class="btn dk" href="/shop">${x.explore} ${ar()}</a><a class="btn lt" target="_blank" rel="noopener" href="${wa(x.waHi)}">${WAI}${x.ask}</a></div>
      <div class="stats rv" style="--d:.75s"><div><b data-n="${P_.length}">0</b><small>${x.st[0]}</small></div><div><b data-n="${D.categories.length}">0</b><small>${x.st[1]}</small></div><div><b data-n="${brands.size}">0</b><small>${x.st[2]}</small></div></div>
    </div>
    <div class="stage rv" style="--d:.3s" id="stage"><div class="ring"></div><div class="orb"></div>
      ${hero.map((p, i) => `<a href="/product?id=${p.id}" class="fl f${i + 1}" data-depth="${[18, -26, 22, -14][i]}"><div><img src="/products/${p.i}" alt="${esc(full(p))}"></div></a>`).join('')}
      <div class="tag"><i></i>${x.live}</div></div>
  </div></section>
  <div class="mq" aria-hidden="true"><div class="tr">${[...MQ, ...MQ].map(b => `<span>${b}</span>`).join('')}</div></div>

  <section class="sec" id="departments"><div class="w">
    <div class="sh"><div><span class="eyb rv">${x.depL}</span><h2 class="rv" style="--d:.08s">${x.depH}</h2></div><p class="rv" style="--d:.16s">${x.depP}</p></div>
    <div class="deps">${D.departments.map((d, i) => { const ps = dpics(d); return `<a class="dp rv" style="--d:${(i % 3) * .08}s" href="/shop?d=${d.id}">
      <span class="n">${String(i + 1).padStart(2, '0')} — ${dcount(d)} ${x.items}</span><h3>${d[L]}</h3><p class="ct">${d.cats.map(catN).join(' · ')}</p>
      ${ps.length >= 2 ? `<div class="pics">${ps.map(f => `<img src="/products/${f}" alt="" loading="lazy">`).join('')}</div>` : `<div class="glyph">${ico(DI[d.id], .8)}</div>`}
      <span class="go">${ico('arrow', 1.5)}</span></a>` }).join('')}</div>
  </div></section>

  <section class="sec"><div class="w">
    <div class="sh"><div><span class="eyb rv">${x.sigL}</span><h2 class="rv" style="--d:.08s">${x.sigH}</h2></div><div class="sbt rv"><button data-s="-1" aria-label="Previous">${ico('left', 1.5)}</button><button data-s="1" aria-label="Next">${ico('right', 1.5)}</button></div></div>
    <div class="scr rv" id="scr">${pick(sig).map((p, i) => card(p, i)).join('')}</div>
  </div></section>

  <section class="sec"><div class="w">
    <div class="sh"><div><span class="eyb rv">${x.phL}</span><h2 class="rv" style="--d:.08s">${x.phH}</h2></div><a class="lk rv" href="/shop?c=0">${x.phAll} ${ar()}</a></div>
    <ul class="plist">${phones.map((p, i) => `<li class="rv" style="--d:${(i % 5) * .05}s"><a class="pl" href="/product?id=${p.id}"><span class="pb">${esc(p.b)}</span><span class="pn serif">${esc(p.n)}</span><span class="pd">${esc(p.d || '')}</span></a><a class="wa" target="_blank" rel="noopener" href="${waP(p)}">${WAI}${x.enq}</a></li>`).join('')}</ul>
  </div></section>

  <section class="sec"><div class="w"><span class="eyb rv">${x.prL}</span>
    <div class="pr" style="margin-top:28px">${x.pr.map((r, i) => `<div class="rv" style="--d:${i * .08}s"><span class="k">0${i + 1}</span><h4>${r[0]}</h4><p>${r[1]}</p></div>`).join('')}</div>
  </div></section>

  <div class="w" id="services"><div class="band"><div class="svc">
    <div><span class="eyb rv">${x.svL}</span><h2 class="rv" style="margin-top:18px">${x.svH}</h2><p class="rv">${x.svP}</p>
      <div class="row rv"><a class="btn gd" target="_blank" rel="noopener" href="${wa(x.waS(x.services))}">${WAI}${x.ask}</a><a class="btn lt" href="tel:${TEL}">${x.callUs}</a></div></div>
    <ul class="svl">${x.sv.map((s, i) => `<li class="rv" style="--d:${i * .06}s"><div><b>${s[0]}</b><small>${s[1]}</small></div><a target="_blank" rel="noopener" href="${wa(x.waS(s[0]))}" aria-label="${esc(s[0])}">${ico('arrow', 1.5)}</a></li>`).join('')}</ul>
  </div></div></div>

  <section class="sec" id="visit"><div class="w">
    <div class="sh"><div><span class="eyb rv">${x.viL}</span><h2 class="rv" style="--d:.08s">${x.viH}</h2></div><p class="rv">${x.viP}</p></div>
    <div class="vis">
      <a class="map rv" href="${MAP}" target="_blank" rel="noopener"><div class="grd"></div><div class="pin"><img src="/logo.png" alt=""></div>
        <h3 class="serif" style="font-size:clamp(28px,2.6vw,38px);line-height:1.1">${x.addr}</h3><span class="lk" style="margin-top:14px;align-self:flex-start">${x.dir} ${ar()}</span></a>
      <div class="vc rv" style="--d:.1s"><ul class="vl">
        <li><span>${x.wa}</span><a dir="ltr" target="_blank" rel="noopener" href="${wa(x.waHi)}">+971 55 540 0551</a></li>
        <li><span>${x.call}</span><a dir="ltr" href="tel:${TEL}">+971 55 540 0551</a></li>
        <li><span>${x.mail}</span><a href="mailto:${MAIL}">${MAIL}</a></li>
        <li><span>${x.ig}</span><a dir="ltr" target="_blank" rel="noopener" href="${IG}">@zaitoon.mobiles</a></li>
        <li><span>${x.sc}</span><a dir="ltr" target="_blank" rel="noopener" href="${SC}">@zaitoon.mobiles</a></li>
        <li><span>${x.ch}</span><a target="_blank" rel="noopener" href="${CH}">${x.follow} ${ar()}</a></li></ul></div>
    </div></div></section>`;
}
function homeInit() {
  const s = $('#scr');
  $$('[data-s]').forEach(b => b.onclick = () => s.scrollBy({ left: (L === 'ar' ? -1 : 1) * +b.dataset.s * s.clientWidth * .8, behavior: 'smooth' }));
  const io = new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) return; io.unobserve(e.target); count(e.target) }), { threshold: .6 });
  $$('[data-n]').forEach(n => io.observe(n));
  const st = $('#stage');
  if (st && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches) {
    let raf; st.onmousemove = e => { const r = st.getBoundingClientRect(), mx = (e.clientX - r.left) / r.width - .5, my = (e.clientY - r.top) / r.height - .5; cancelAnimationFrame(raf); raf = requestAnimationFrame(() => $$('.fl').forEach(f => { const k = +f.dataset.depth; f.style.transform = `translate3d(${mx * k}px,${my * k}px,0)` })) };
    st.onmouseleave = () => $$('.fl').forEach(f => { f.style.transition = 'transform 1.2s cubic-bezier(.22,1,.36,1)'; f.style.transform = ''; setTimeout(() => f.style.transition = '', 1200) });
  }
}
function count(el) {
  const to = +el.dataset.n, t0 = performance.now(), dur = 1600;
  const step = n => { const k = Math.min(1, (n - t0) / dur), e = 1 - Math.pow(1 - k, 4); el.textContent = Math.round(to * e) + (k === 1 && to > 100 ? '+' : ''); if (k < 1) requestAnimationFrame(step) };
  requestAnimationFrame(step);
}

/* SHOP */
let S = { d: QS.get('d') || '', c: QS.has('c') ? +QS.get('c') : -1, b: QS.get('b') || '', q: QS.get('q') || '', s: 0, n: PG };
if (S.c >= 0 && !S.d) S.d = '';
function filtered(ignoreBrand) {
  const q = S.q.trim().toLowerCase().split(/\s+/).filter(Boolean), dep = D.departments.find(d => d.id === S.d);
  let r = D.products.filter(p => (S.c < 0 || p.c === S.c) && (!dep || dep.cats.includes(p.c)) && (ignoreBrand || !S.b || p.b === S.b) &&
    (!q.length || q.every(w => (p.b + ' ' + p.n + ' ' + (p.d || '') + ' ' + D.categories[p.c].en + ' ' + D.categories[p.c].ar).toLowerCase().includes(w))));
  if (S.s === 1) r = [...r].sort((a, b) => a.n.localeCompare(b.n));
  if (S.s === 2) r = [...r].sort((a, b) => (a.b || 'zz').localeCompare(b.b || 'zz') || a.n.localeCompare(b.n));
  if (S.s === 0) { const qq = S.q.trim().toLowerCase(), sc = p => (qq && p.c <= 2 && (p.n + " " + full(p)).toLowerCase().includes(qq) ? 0 : qq && full(p).toLowerCase().startsWith(qq) ? 1 : qq && p.n.toLowerCase().includes(qq) ? 1 : 2) * 2 + (p.i ? 0 : 1); r = [...r].sort((a, b) => sc(a) - sc(b)) }
  return r;
}
function title() {
  if (S.c >= 0) return catN(S.c);
  const d = D.departments.find(d => d.id === S.d); return d ? d[L] : t().all;
}
function shop() {
  const x = t();
  return `<div class="w"><div class="shead"><div class="crumb rv in"><a href="/">${x.home}</a><span>/</span><a href="/shop">${x.shop}</a><span id="crb"></span></div>
    <h1 id="sht" class="rv in">${esc(title())}</h1><div class="sub"><p class="rv in" style="--d:.1s">${x.shopP}</p></div></div>
  <div class="shop"><aside class="side"><h6>${x.depts}</h6><ul class="dl" id="dl"></ul></aside>
  <div><div class="dchips" id="dch"></div>
    <div class="tb"><label class="q">${ico('search', 1.6)}<input id="q" type="search" autocomplete="off" placeholder="${esc(x.search)}" value="${esc(S.q)}"></label>
      <select class="sel" id="cs" aria-label="Category"></select><select class="sel" id="so" aria-label="Sort">${x.sort.map((s, i) => `<option value="${i}"${S.s === i ? ' selected' : ''}>${s}</option>`).join('')}</select></div>
    <div class="bchips" id="bc"></div><div class="res" id="res"></div><div class="grid" id="g"></div>
    <div class="more"><button class="btn lt" id="mo" hidden>${x.more}</button></div><div id="ask"></div></div></div></div>`;
}
function shopDraw(anim = true) {
  const x = t(), all = filtered(), shown = all.slice(0, S.n), cnt = f => D.products.filter(f).length;
  $('#sht').textContent = title();
  $('#crb').innerHTML = S.d || S.c >= 0 ? `<span>/</span><span>${esc(title())}</span>` : '';
  $('#dl').innerHTML = `<li class="${!S.d && S.c < 0 ? 'on' : ''}"><button class="dh" data-d="">${x.all} <sup>${D.products.length}</sup></button></li>` +
    D.departments.map(d => `<li class="${S.d === d.id || (S.c >= 0 && d.cats.includes(S.c)) ? 'on' : ''}"><button class="dh" data-d="${d.id}">${d[L]} <sup>${cnt(p => d.cats.includes(p.c))}</sup></button>
     <div class="cl"><div><div>${d.cats.map(c => `<button data-c="${c}" class="${S.c === c ? 'on' : ''}">${catN(c)} <sup>${cnt(p => p.c === c)}</sup></button>`).join('')}</div></div></div></li>`).join('');
  const ad = D.departments.find(d => d.id === S.d) || (S.c >= 0 ? deptOf(S.c) : null);
  $('#dch').innerHTML = `<button data-d="" class="${!ad ? 'on' : ''}">${x.all}</button>` + D.departments.map(d => `<button data-d="${d.id}" class="${ad === d ? 'on' : ''}">${d[L]}</button>`).join('');
  const cats = ad ? ad.cats : D.categories.map((_, i) => i);
  $('#cs').innerHTML = `<option value="-1">${ad ? ad[L] : x.all}</option>` + cats.map(c => `<option value="${c}"${S.c === c ? ' selected' : ''}>${catN(c)}</option>`).join('');
  const bc = {}; filtered(true).forEach(p => { if (p.b) bc[p.b] = (bc[p.b] || 0) + 1 });
  const top = Object.entries(bc).sort((a, b) => b[1] - a[1]).slice(0, 24).map(e => e[0]);
  if (S.b && !top.includes(S.b)) top.unshift(S.b);
  $('#bc').innerHTML = top.length > 1 ? `<button data-b="" class="${!S.b ? 'on' : ''}">${x.allB}</button>` + top.map(b => `<button data-b="${esc(b)}" class="${S.b === b ? 'on' : ''}">${esc(b)}</button>`).join('') : '';
  $('#res').innerHTML = all.length ? `<span>${x.showing(shown.length, all.length)}</span>` : '';
  const g = $('#g');
  if (anim === 'more') { const have = g.children.length; g.insertAdjacentHTML('beforeend', shown.slice(have).map((p, i) => card(p, i % PG)).join('')) }
  else g.innerHTML = all.length ? shown.map((p, i) => card(p, Math.min(i, 18))).join('') : `<div class="empty"><b>${x.none}</b>${x.noneP}</div>`;
  $('#mo').hidden = all.length <= S.n;
  const cn = S.c >= 0 || ad ? title() : x.all;
  $('#ask').innerHTML = `<div class="ask rv in"><div><h3>${esc(x.askCat(cn))}</h3><p>${x.askCatP}</p></div><a class="btn dk" target="_blank" rel="noopener" href="${wa(x.waC(S.c >= 0 ? D.categories[S.c].en : ad ? ad.en : 'your store'))}">${WAI}${x.ask}</a></div>`;
  const u = new URLSearchParams(); if (S.d) u.set('d', S.d); if (S.c >= 0) u.set('c', S.c); if (S.b) u.set('b', S.b); if (S.q) u.set('q', S.q);
  try { history.replaceState(null, '', '/shop' + (u.toString() ? '?' + u : '')) } catch (e) { }
  document.title = title() + ' · Zaitoon Mobiles';
}
function shopInit() {
  const go = shopInit.go = (fn, top) => { fn(); S.n = PG; swap(() => shopDraw()); if (top && window.scrollY > 260) window.scrollTo({ top: 0, behavior: 'smooth' }) };
  if (!shopInit.bound) { shopInit.bound = 1; document.addEventListener('click', e => {
    const d = e.target.closest('[data-d]'), c = e.target.closest('[data-c]'), b = e.target.closest('[data-b]');
    if (d && (d.closest('#dl') || d.closest('#dch'))) go(() => { S.d = d.dataset.d; S.c = -1; S.b = '' }, true);
    else if (c) go(() => { S.c = +c.dataset.c; S.d = ''; S.b = '' }, true);
    else if (b) go(() => { S.b = b.dataset.b });
  }) }
  $('#cs').onchange = e => go(() => { const v = +e.target.value; if (v < 0) { S.c = -1 } else { S.c = v; S.d = '' } });
  $('#so').onchange = e => go(() => { S.s = +e.target.value });
  let tm; $('#q').oninput = e => { clearTimeout(tm); tm = setTimeout(() => { S.q = e.target.value; S.n = PG; shopDraw() }, 160) };
  $('#mo').onclick = () => { S.n += PG; shopDraw('more') };
  shopDraw();
}

/* PRODUCT */
function product() {
  const x = t(), id = QS.get('id') || '';
  const p = D.products.find(i => i.id === id) || D.products.find(i => i.i && i.i === id + '.webp');
  if (!p) return `<div class="w"><div class="shead"><h1>${x.nf}</h1><div class="sub"><a class="btn dk" href="/shop">${x.back}</a></div></div></div>`;
  const dep = deptOf(p.c), rel = D.products.filter(i => i.c === p.c && i.id !== p.id).sort((a, b) => (b.i ? 1 : 0) - (a.i ? 1 : 0)).slice(0, 10);
  document.title = full(p) + ' · Zaitoon Mobiles';
  return `<div class="w"><div class="pdp">
    <div class="pim rv in">${visual(p, true)}</div>
    <div class="pin2"><div class="crumb rv in"><a href="/shop">${x.shop}</a><span>/</span><a href="/shop?d=${dep.id}">${dep[L]}</a><span>/</span><a href="/shop?c=${p.c}">${catN(p.c)}</a></div>
      <div class="br rv in" style="--d:.05s">${esc(p.b || catN(p.c))}</div>
      <h1>${lines([esc(p.n)])}</h1>
      ${p.d ? `<p class="det rv in" style="--d:.25s">${esc(p.d)}</p>` : ''}
      <div class="row rv in" style="--d:.32s"><a class="btn gd" target="_blank" rel="noopener" href="${waP(p)}">${WAI}${x.enqL}</a><a class="btn lt" href="tel:${TEL}">${x.callUs}</a></div>
      <div class="note rv in" style="--d:.4s">${ico('info', 1.5)}<span>${x.pNote}</span></div>
      <ul class="spec rv in" style="--d:.48s">
        ${p.b ? `<li><span>${x.pBrand}</span><a href="/shop?b=${encodeURIComponent(p.b)}">${esc(p.b)}</a></li>` : ''}
        <li><span>${x.pCat}</span><a href="/shop?c=${p.c}">${catN(p.c)}</a></li>
        <li><span>${x.pDept}</span><a href="/shop?d=${dep.id}">${dep[L]}</a></li>
        <li><span>${x.pAv}</span><span>${x.pAvV}</span></li><li><span>${x.pDel}</span><span>${x.pDelV}</span></li></ul>
    </div></div>
    ${rel.length ? `<section class="sec"><div class="sh"><div><span class="eyb rv">${x.rel}</span><h2 class="rv" style="--d:.08s">${catN(p.c)}</h2></div><a class="lk rv" href="/shop?c=${p.c}">${x.shop} ${ar()}</a></div>
    <div class="scr rv">${rel.map((r, i) => card(r, i)).join('')}</div></section>` : ''}</div>`;
}

/* render + motion */
function reveal() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { rootMargin: '0px 0px -8% 0px' });
  $$('.rv:not(.in),.ln').forEach(el => io.observe(el));
}
function render() {
  document.documentElement.lang = L; document.documentElement.dir = L === 'ar' ? 'rtl' : 'ltr';
  chrome();
  $('#app').innerHTML = ({ home, shop, product }[PAGE] || home)();
  if (PAGE === 'home') homeInit();
  if (PAGE === 'shop') shopInit();
  reveal();
}
const hd = () => $('#hd').classList.toggle('s', scrollY > 8);
addEventListener('scroll', hd, { passive: true });
fetch('/catalog.json').then(r => r.json()).then(j => {
  D = j; render(); hd();
  if (location.hash) { const el = document.querySelector(location.hash); if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 400) }
});

export const company = {
  name: 'YiY Tech',
  legal: 'YiY Technologies',
  tagline: 'Operations software for the businesses that keep everything moving.',
  email: 'hello@yiy.tech',
  // Set this to the real number and it reappears on the contact page and in the
  // Organization JSON-LD. Left null on purpose: shipping a placeholder number
  // means search engines index a number that does not ring.
  phone: null,
  location: 'Kuala Lumpur, Malaysia',
};

export const nav = [
  { label: 'Products', href: '/#products' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const products = [
  {
    slug: 'inventory',
    index: '01',
    status: 'Available now',
    name: 'Inventory & Stock Management',
    short: 'Inventory',
    tagline: 'Live stock, receiving and reordering across every outlet',
    audience: 'Retail & wholesale SMEs',
    menuImage: '/media/img/inventory-scan.jpg',
    headline: 'Know what you have, where it is, and what to reorder, without a spreadsheet.',
    summary:
      'One dashboard for every outlet, warehouse and consignment partner, with live stock underneath it. Barcode receiving, batch and expiry tracking, automatic reorder points, and a purchase flow your team will actually follow. Your managers run the day from the dashboard; the floor runs from a phone.',
    href: '/products/inventory',
    hero: '/media/img/inventory-hero.jpg',
    video: '/media/video/warehouse-aisle.mp4',
    poster: '/media/img/inventory-shelves.jpg',
    bullets: [
      'Operations dashboard: stock health, ageing, variances and reorder alerts',
      'Real-time stock across outlets, warehouses and consignment',
      'Barcode and QR receiving, transfers and stock takes',
      'Batch, serial and expiry tracking with FEFO picking',
      'Reorder points that watch lead time and seasonality',
      'Purchase orders, goods receipt and supplier scorecards',
      'Landed cost, margin and dead-stock reporting',
    ],
    features: [
      {
        title: 'One dashboard, every outlet',
        body: 'Stock health, ageing, open purchase orders and variances for the whole group on one screen, with a drill-down to any single outlet or SKU. This is where the day gets run.',
        image: '/media/img/data-dashboard.jpg',
      },
      {
        title: 'Scan-first receiving',
        body: 'Receive against a purchase order with a phone camera. Variances flagged before the supplier leaves the door.',
        image: '/media/img/inventory-scan.jpg',
      },
      {
        title: 'Stock takes that finish',
        body: 'Blind counts split by zone, multiple counters at once, and a variance report that reconciles itself.',
        image: '/media/img/inventory-picking.jpg',
      },
      {
        title: 'Reorder on autopilot',
        body: 'Reorder points recalculated from real velocity and supplier lead time, so cash stops sitting on shelves.',
        image: '/media/img/inventory-pallets.jpg',
      },
      {
        title: 'One truth across channels',
        body: 'Storefront, marketplace and wholesale orders draw from a single stock ledger. No more overselling.',
        image: '/media/img/inventory-stock.jpg',
      },
    ],
    metrics: [
      { value: 98, suffix: '%', label: 'Stock accuracy after first full count' },
      { value: 31, suffix: '%', label: 'Less capital tied up in slow movers' },
      { value: 12, suffix: 'h', label: 'Admin hours returned per week' },
    ],
  },
  {
    slug: 'booking',
    index: '02',
    status: 'Available now',
    name: 'Booking & Operations',
    short: 'Booking',
    tagline: 'Appointments, resources and reminders on one dashboard',
    audience: 'Clinics, salons, tuition centres, property',
    menuImage: '/media/img/clinic-calendar.jpg',
    headline: 'Every appointment, room, staff member and reminder on one screen.',
    summary:
      'A booking engine and operations dashboard built for service businesses. Online self-booking, resource-aware scheduling, automated WhatsApp and SMS reminders, deposits, packages and a daily view that tells your front desk exactly what happens next.',
    href: '/products/booking',
    hero: '/media/img/clinic-calendar.jpg',
    video: '/media/video/salon-color.mp4',
    poster: '/media/img/salon-interior.jpg',
    bullets: [
      'Online self-booking with real staff and room availability',
      'Automated WhatsApp, SMS and email reminders',
      'Deposits, packages, credits and no-show protection',
      'Resource-aware scheduling for chairs, rooms and equipment',
      'Client records, treatment notes and consent forms',
      'Daily operations dashboard: utilisation, revenue and gaps',
    ],
    features: [
      {
        title: 'Front desk, unblocked',
        body: 'Drag to reschedule, see conflicts before they happen, and let clients book the slots you actually want filled.',
        image: '/media/img/clinic-calendar.jpg',
      },
      {
        title: 'Reminders that cut no-shows',
        body: 'Confirmation, 24-hour and 2-hour nudges on WhatsApp. Clients reply to confirm or move, and the calendar updates itself.',
        image: '/media/img/salon-consult.jpg',
      },
      {
        title: 'Built for multi-resource days',
        body: 'A tuition slot needs a tutor and a room. A viewing needs an agent and a unit. Booking reserves both or neither.',
        image: '/media/img/tuition-tutor.jpg',
      },
      {
        title: 'The number that matters',
        body: 'Chair, room and staff utilisation by hour, so you know when to open capacity and when to stop paying for it.',
        image: '/media/img/property-tour.jpg',
      },
    ],
    metrics: [
      { value: 42, suffix: '%', label: 'Fewer no-shows with automated reminders' },
      { value: 27, suffix: '%', label: 'Higher chair and room utilisation' },
      { value: 3, suffix: 'min', label: 'Average time to book, end to end' },
    ],
  },
  /* ------------------------------------------------------------------------ */
  /*  Website & integrations                                                   */
  /*                                                                           */
  /*  Sold as a project rather than a licensed seat, so `service: true` moves   */
  /*  its structured data from SoftwareApplication-with-an-Offer to a plain     */
  /*  Service node: nothing here has a list price to publish. The extra keys    */
  /*  below (connections, platforms, stages, limits, faqs) are rendered by      */
  /*  ProductExtras and skipped by every product that does not carry them.      */
  /* ------------------------------------------------------------------------ */
  {
    slug: 'website',
    index: '03',
    status: 'Available now',
    service: true,
    name: 'Website & Integrations',
    short: 'Website',
    tagline: 'A new website for your business, wired into the system that runs it',
    audience: 'SMEs launching or replacing a website',
    menuImage: '/media/img/web-listing.jpg',
    headline: 'A new website that sells, books and stays right without anyone touching it.',
    summary:
      'We design and build your new website, then wire it into YiY so it stops being a brochure. Customers see real stock and real availability, they order and book while you are closed, and the enquiry lands on your dashboard instead of an inbox nobody owns. Three weeks from the first conversation, one flat project fee, and the domain, repository and hosting in your name from the first day.',
    href: '/products/website',
    /* Photographed for this product rather than borrowed from another: a
       counter with the shop's own site open on it, a listing being shot for
       that site, and a workshop running its orders off it. */
    hero: '/media/img/web-counter.jpg',
    poster: '/media/img/web-workshop.jpg',
    band: '/media/img/web-listing.jpg',
    bullets: [
      'A new site designed and built for your business, not a template with your logo dropped in',
      'Copy written with you in one session, out of what customers actually ask you',
      'Every page a customer needs: what you sell, where you are, and how to book it',
      'Static pages served from a CDN, with no CMS and no plugins to patch',
      'Tested on a mid-range Android over mobile data, because that is what your customers hold',
      'Stock, prices, staff and opening hours come from YiY and change when your operations do',
      'Structured data, a sitemap, clean URLs and a real page per outlet with its own hours',
      'Domain, DNS, repository and hosting in your name from the first day of the build',
    ],
    features: [
      {
        title: 'Built for your business, not from a template',
        body: 'We design the pages around what you actually sell and how customers actually ask for it. The words come out of two hours with whoever answers your phone, so the site reads like your best salesperson on their best day.',
        image: '/media/img/web-counter.jpg',
      },
      {
        title: 'Catalogue pages on live stock',
        body: 'Price, availability and lead time per SKU and per outlet, read from the same ledger your warehouse runs on. The site cannot sell what left the shelf this morning.',
        image: '/media/img/web-listing.jpg',
      },
      {
        title: 'A booking page that reserves',
        body: 'Customers book the slots you want filled, at midnight if they like, and the appointment holds every staff member, room and machine it needs before it confirms.',
        image: '/media/img/clinic-calendar.jpg',
      },
      {
        title: 'Enquiries that land somewhere',
        body: 'Forms arrive as leads on the operations dashboard with the page they came from attached, rather than in an inbox nobody owns.',
        image: '/media/img/data-dashboard.jpg',
      },
    ],
    metrics: [],

    /* What the build is worth to the customer, stated as changes on the floor
       rather than traffic and impressions. Deliberately unnumbered: we have no
       measured web deployments to quote yet, and a made-up percentage here
       would contradict every figure on the rest of the site. */
    value: [
      {
        title: 'Customers can buy and book at 11pm',
        body: 'The site takes the order or the appointment while you are closed, and it is waiting in the same system your team opens in the morning. No voicemail to work through, no missed slot.',
      },
      {
        title: 'The phone stops ringing for the same six questions',
        body: 'Opening hours, price, whether you have it in stock, whether you take walk-ins. Answered on the page and drawn from your operations data, so the answer is right today rather than right in 2023.',
      },
      {
        title: 'A site that cannot go stale',
        body: 'Prices, staff, availability and holiday hours come out of YiY. Nobody has to remember to update the website, because nobody updates the website.',
      },
      {
        title: 'Found by the people already looking for you',
        body: 'Structured data, clean URLs and a real page per outlet with its own address and hours. The structural half of search, done once and handed over rather than rented back to you monthly.',
      },
      {
        title: 'Fast on a cheap phone',
        body: 'Tested on a mid-range Android over mobile data. A site that takes eight seconds to load has already lost the customer standing outside your shop deciding whether to come in.',
      },
      {
        title: 'No retainer, and no landlord',
        body: 'A flat project fee, hosting inside the per-outlet price you already pay, and the domain, repository and hosting account in your name from day one. Nothing to renegotiate later.',
      },
    ],

    /* The half a web studio cannot do and a software vendor will not. */
    connections: [
      {
        surface: 'Catalogue pages',
        reads: 'Live stock, price and lead time, per SKU and per outlet',
        writes: null,
      },
      {
        surface: 'Booking page',
        reads: 'Real staff, room and equipment availability',
        writes: 'Creates the appointment and reserves every resource it needs',
      },
      {
        surface: 'Online orders',
        reads: 'Stock, so the site cannot sell what left the shelf this morning',
        writes: 'Holds the stock and opens a picking job at the right outlet',
      },
      {
        surface: 'Enquiry form',
        reads: null,
        writes: 'Lands as a lead on the dashboard with the page it came from attached',
      },
      {
        surface: 'Outlet pages',
        reads: 'Address, trading hours and holiday closures from the operations calendar',
        writes: null,
      },
      {
        surface: 'WhatsApp',
        reads: 'Appointment and order status',
        writes: 'Logs the message and the customer’s reply against the record',
      },
    ],

    /* What an integration can actually reach, by platform. Asked on every call,
       so it is answered here rather than in a quote three weeks later. */
    platforms: [
      {
        name: 'Custom build',
        depth: 'Full',
        body: 'Stock and availability render on the server, the way they do on this site. Nothing loads twice and nothing flashes stale.',
      },
      {
        name: 'WordPress',
        depth: 'Full',
        body: 'A plugin written against your theme. We will also tell you honestly whether the theme is worth keeping before we write it.',
      },
      {
        name: 'Shopify',
        depth: 'Two-way',
        body: 'Stock syncs both directions and bookings embed. Checkout stays in Shopify, which is where it belongs.',
      },
      {
        name: 'Wix, Squarespace, GoDaddy',
        depth: 'Embed only',
        body: 'A booking widget and a stock badge. The rest of the page cannot be reached from outside, and no amount of work on our side changes that.',
      },
    ],

    /* Its own rollout, three weeks rather than the two-week product rollout,
       so this product replaces the shared Process section instead of adding to
       it. */
    stages: [
      {
        step: '01',
        when: 'Week 0',
        title: 'Content session',
        body: 'Two hours with whoever answers the phone. What customers ask, what they get wrong, what you repeat every day. That conversation becomes the copy.',
        owner: 'You + us, on site',
      },
      {
        step: '02',
        when: 'Week 1',
        title: 'Build',
        body: 'Pages go up on a staging link you can send to anyone. Real photographs and real words from the start, so nobody is asked to imagine past placeholder text.',
        owner: 'Us, reviewed daily',
      },
      {
        step: '03',
        when: 'Week 2',
        title: 'Wiring',
        body: 'Stock, availability and forms connect to your YiY account. We test by breaking it: bookings for a room already taken, orders for stock that left an hour ago.',
        owner: 'Us, on your data',
      },
      {
        step: '04',
        when: 'Week 3',
        title: 'Launch',
        body: 'DNS cuts over outside trading hours. The old site stays reachable for a fortnight, and the repository is handed to you on the day.',
        owner: 'Your domain, your repo',
      },
    ],

    limits: [
      'Marketing retainers, ad management or monthly SEO reports. We build the structural half once and hand it over.',
      'Logos, brand identity and social accounts. We will work alongside your designer, or name one who is better at this than we are.',
      'Cross-border storefronts with multi-currency tax rules and six-figure SKU counts. Buy Shopify for that and let us wire YiY into it.',
      'Any percentage of what the site sells. A project fee, and hosting inside the monthly outlet price you already pay.',
      'Rebuilding a site that works. If yours is sound we integrate with it, quote less, and say so on the first call.',
    ],

    faqs: [
      {
        q: 'Do I need to be a YiY customer to get a website?',
        a: 'Effectively yes. We take website work where there is an operations system to wire it into, either one you already run or one going live in the same quarter. A brochure site with nothing behind it is not something we do better than a local studio, and we would rather tell you that than take the work.',
      },
      {
        q: 'What does a website build cost?',
        a: 'A flat project fee, quoted after the content session once the page count and the number of wired surfaces are known, plus hosting folded into your existing monthly per-outlet price. There is no per-transaction charge and no fee tied to what the site sells.',
      },
      {
        q: 'Why not just build it ourselves on Wix or Squarespace?',
        a: 'For a pure brochure site, do. It will be cheaper and it will be fine. The reason to have us build it is the half those builders cannot reach: stock and availability that are live rather than typed in, orders and bookings that land in the system your team already runs the day from, and pages that keep themselves current after everyone has stopped caring about the website. If none of that applies to your business, we will say so on the first call.',
      },
      {
        q: 'Can we edit the site ourselves?',
        a: 'The things that change weekly, stock, prices, availability, staff and opening hours, change in YiY and the site follows within a minute. Prose lives in one file per page and we show you how to edit it. There is no CMS, because a CMS is one more system to patch and one more password to lose.',
      },
      {
        q: 'Who owns the site when it is finished?',
        a: 'You do. Domain, DNS, repository and hosting account are in your name from the first day of the build rather than transferred at the end. Leaving costs nothing and moves nothing.',
      },
      {
        q: 'We already have a website we like. Can it still connect to YiY?',
        a: 'Usually. How deeply depends on what it is built on. Custom sites and WordPress integrate fully, Shopify syncs stock and embeds bookings, and hosted builders such as Wix accept an embed and nothing deeper. We check before quoting rather than after.',
      },
      {
        q: 'Do you build in Chinese as well as English?',
        a: 'Yes. English and Chinese as standard, Malay on request. One translation file per language, so an opening time or a price is written once and stays correct in all of them.',
      },
    ],
  },
  {
    slug: 'data',
    index: '04',
    status: 'Coming soon',
    // Locale-independent flag. `status` is display copy and gets translated, so
    // nothing may branch on its English wording.
    soon: true,
    name: 'Data & Intelligence',
    short: 'Data',
    tagline: 'Forecasts, alerts and answers over your own operations data',
    audience: 'Everyone already running YiY',
    menuImage: '/media/img/data-laptop.jpg',
    headline: 'Your operations data, finally answering questions.',
    summary:
      'A layer that sits on top of Inventory and Booking and turns the exhaust of daily operations into forecasts, alerts and plain-language answers, surfaced on the same dashboard your team already runs on. Demand forecasting, staffing recommendations, cohort retention and anomaly detection, no analyst required.',
    href: '/products/data',
    hero: '/media/img/data-dashboard.jpg',
    poster: '/media/img/data-closeup.jpg',
    bullets: [
      'Demand forecasting per SKU, outlet and season',
      'Staffing and capacity recommendations by hour',
      'Client cohort retention and lifetime value',
      'Anomaly alerts for shrinkage, refunds and cancellations',
      'Plain-language questions over your own data',
      'Scheduled reports to WhatsApp and email',
    ],
    features: [
      {
        title: 'Ask, do not build',
        body: 'Type the question. YiY writes the query, shows the working, and lets you pin the answer to a dashboard.',
        image: '/media/img/data-laptop.jpg',
      },
      {
        title: 'Forecasts you can act on',
        body: 'Per-SKU demand and per-hour footfall, with the confidence range shown honestly instead of a single hopeful number.',
        image: '/media/img/data-graph.jpg',
      },
      {
        title: 'Alerts before the loss',
        body: 'Shrinkage, refund spikes and cancellation clusters surfaced the day they start, not at month end.',
        image: '/media/img/data-office.jpg',
      },
      {
        title: 'One layer, both products',
        body: 'Stock movements and booking behaviour in the same model, so you can see what marketing did to inventory.',
        image: '/media/img/data-closeup.jpg',
      },
    ],
    metrics: [],
  },
];

export const industries = [
  { name: 'Retail chains', image: '/media/img/retail-counter.jpg', product: 'Inventory' },
  { name: 'Wholesale & distribution', image: '/media/img/inventory-boxes.jpg', product: 'Inventory' },
  { name: 'Dental & medical clinics', image: '/media/img/clinic-consult.jpg', product: 'Booking' },
  { name: 'Salons & wellness', image: '/media/img/salon-manicure.jpg', product: 'Booking' },
  { name: 'Tuition centres', image: '/media/img/tuition-class.jpg', product: 'Booking' },
  { name: 'Property agencies', image: '/media/img/property-agent.jpg', product: 'Booking' },
  { name: 'E-commerce operators', image: '/media/img/inventory-packing.jpg', product: 'Inventory' },
  { name: 'Multi-branch groups', image: '/media/img/team-office.jpg', product: 'Inventory + Booking' },
];

export const pillars = [
  {
    title: 'Live by default',
    body: 'Stock levels and calendars update the moment something happens, on the floor, at the counter, or on a customer’s phone.',
  },
  {
    title: 'Runs on a phone',
    body: 'Receiving, counting, checking in a client. If your team can use WhatsApp, they can use YiY. No training week required.',
  },
  {
    title: 'Fits your workflow',
    body: 'Configurable roles, outlets, resources and approval rules. We shape the software around how you already work.',
  },
  {
    title: 'Honest pricing',
    body: 'Flat monthly per outlet. No per-transaction skim, no surprise implementation fee, no annual lock-in to sign today.',
  },
  {
    title: 'Your data stays yours',
    body: 'Full export any time, in a format your accountant recognises. Leaving should be as easy as joining.',
  },
  {
    title: 'Live in two weeks',
    body: 'Guided onboarding, data migration from your spreadsheets, and a human on WhatsApp for the first month.',
  },
];

export const stats = [
  { value: 2, suffix: ' wks', label: 'Typical time to go live' },
  { value: 98, suffix: '%', label: 'Stock accuracy post-rollout' },
  { value: 42, suffix: '%', label: 'Reduction in no-shows' },
  { value: 12, suffix: 'h', label: 'Admin hours saved weekly' },
];

export const comparison = [
  {
    option: 'Spreadsheets & WhatsApp',
    cost: 'Free, until it is not',
    speed: 'Instant',
    verdict: 'Breaks at the second outlet. No audit trail, no live stock, no reminders.',
  },
  {
    option: 'Full ERP suite',
    cost: 'Six figures + consultants',
    speed: '9–18 months',
    verdict: 'Built for enterprise. You pay for 90% of modules you will never open.',
  },
  {
    option: 'Point solutions stitched together',
    cost: 'Five subscriptions',
    speed: '1–3 months',
    verdict: 'Each tool is fine. The seams between them are where your data dies.',
  },
  {
    option: 'YiY Tech',
    cost: 'Flat monthly per outlet',
    speed: '2 weeks',
    verdict: 'Inventory and booking on one operations layer, sized for an SME.',
    highlight: true,
  },
];

export const testimonials = [
  {
    quote:
      'We stopped doing Sunday stock counts. The variance report told us in an afternoon what used to take three people a weekend.',
    name: 'Operations lead',
    role: 'Nine-outlet retail group',
    image: '/media/img/inventory-aisle.jpg',
  },
  {
    quote:
      'No-shows were eating a fifth of our schedule. The WhatsApp reminders paid for the whole subscription in the first month.',
    name: 'Clinic manager',
    role: 'Dental practice, two branches',
    image: '/media/img/clinic-lobby.jpg',
  },
  {
    quote:
      'Our tutors and rooms were double-booked constantly. Now a slot cannot exist unless both are free. That one rule fixed our term.',
    name: 'Centre director',
    role: 'Tuition centre',
    image: '/media/img/tuition-desk.jpg',
  },
  {
    quote:
      'I can see landed cost per SKU without exporting anything. That changed which suppliers we keep.',
    name: 'Founder',
    role: 'Wholesale distributor',
    image: '/media/img/inventory-shelves.jpg',
  },
];

export const rollout = [
  {
    step: '01',
    when: 'Day 0',
    title: 'Walkthrough',
    body: 'Thirty minutes on your actual floor or front desk. We map how orders, stock and bookings move today.',
    owner: 'You + us, on site',
    image: '/media/img/team-meeting.jpg',
  },
  {
    step: '02',
    when: 'Days 1–4',
    title: 'Migration',
    body: 'We import your item master, suppliers, client list and open bookings from whatever you have, including that spreadsheet.',
    owner: 'Us, with your data',
    image: '/media/img/data-laptop.jpg',
  },
  {
    step: '03',
    when: 'Days 5–10',
    title: 'Pilot outlet',
    body: 'One location runs live for a week. Your team breaks it, we fix it, and the config hardens.',
    owner: 'One branch, real orders',
    image: '/media/img/inventory-scan.jpg',
  },
  {
    step: '04',
    when: 'Days 11–14',
    title: 'Rollout & handover',
    body: 'Remaining outlets go live, staff are trained on their own devices, and you keep a direct WhatsApp line for a month.',
    owner: 'Every branch, your team',
    image: '/media/img/team-office.jpg',
  },
];

export const faqs = [
  {
    q: 'How long does it actually take to go live?',
    a: 'Two weeks is typical for a single-product rollout with clean data. Multi-outlet groups with messy item masters run three to four. We tell you which one you are during the walkthrough, before you pay anything.',
  },
  {
    q: 'Do I have to buy both products?',
    a: 'No. Inventory and Booking are sold separately and work on their own. They share one account, one login and one reporting layer if you run both, which is how most multi-service businesses end up using them.',
  },
  {
    q: 'What happens to my existing data?',
    a: 'We migrate it. Item lists, supplier records, client histories, open bookings and current stock counts. Anything we cannot map cleanly gets flagged for you to decide, rather than silently dropped.',
  },
  {
    q: 'Does it work offline?',
    a: 'The mobile apps queue receiving, transfers and stock takes when the connection drops and sync when it returns. The booking dashboard needs connectivity for live availability.',
  },
  {
    q: 'Can it talk to my accounting system?',
    a: 'Yes. We export in formats standard SME accounting packages accept, and we have direct integrations on the roadmap for the common Malaysian and Singaporean systems. Tell us yours during the walkthrough.',
  },
  {
    q: 'When is the data product available?',
    a: 'Data & Intelligence is in limited beta with existing customers. If you are running Inventory or Booking today, your data is already shaped for it, and you will get an invite before general release.',
  },
  {
    q: 'What if we outgrow it?',
    a: 'Full data export, any time, no exit fee. We would rather you leave cleanly than stay unhappy, and it keeps us honest about earning the renewal.',
  },
];


/* -------------------------------------------------------------------------- */
/*  Editorial                                                                  */
/*                                                                             */
/*  Every post carries the signals Google's quality guidance asks for:         */
/*  a named author with the hands-on role that qualifies them, publish and     */
/*  review dates, a stated method behind any number, an explicit limits        */
/*  section, and sources. `answer` and `takeaways` exist so answer engines      */
/*  can lift a correct, self-contained response without the surrounding prose. */
/* -------------------------------------------------------------------------- */

export const authors = {
  ianChin: {
    name: 'Ian Chin',
    role: 'Co-Founder of YiY Tech',
    credential:
      'Co-founded YiY Tech and still runs rollouts on site. Has walked the receiving bay and the front desk of retail, wholesale and clinic groups across Malaysia and Singapore since 2021.',
  },
  yeWen: {
    name: 'Ye Wen',
    role: 'Co-Founder of YiY Tech',
    credential:
      'Co-founded YiY Tech after a decade building operations software, including the warehouse systems behind a 40-outlet grocery chain.',
  },
  yongHan: {
    name: 'Yong Han',
    role: 'Co-Founder of YiY Tech',
    credential:
      'Co-founded YiY Tech and owns the stock ledger and scheduling engine. Spends most weeks with customers reconciling counts that a spreadsheet could not.',
  },
};

export const editorialPolicy = {
  summary:
    'Every figure on this site comes from anonymised, aggregated data across YiY Tech deployments, or it is labelled as an estimate. Posts name their author, carry a review date, and state the sample behind any claim.',
  contact: 'corrections@yiy.tech',
};

export const posts = [
  {
    slug: 'how-to-improve-stock-accuracy',
    title: 'How to improve stock accuracy in a multi-outlet SME',
    excerpt:
      'Inventory software alone will not fix your counts. Three habits move accuracy from roughly 70 percent to the high nineties, and they have to land in a specific order.',
    category: 'Inventory',
    date: '2026-08-04',
    updated: '2026-08-18',
    readingTime: '7 min',
    image: '/media/img/inventory-shelves.jpg',
    imageAlt: 'Racking in a multi-outlet distribution warehouse',
    author: authors.yongHan,
    reviewer: authors.ianChin,
    answer:
      'Stock accuracy improves when three habits are adopted in order: scan every receipt against its purchase order, move stock only with a transfer document, and count in weekly cycles by zone instead of quarterly full counts. Software makes those habits fast, but it does not create them. In the deployments we measured, teams that adopted all three reached the high nineties by the second full cycle. Teams that installed software and changed nothing stayed where they started.',
    takeaways: [
      'The first count after go-live looks bad because it is the first honest measurement, not because the software failed.',
      'Scan-on-receipt is the single highest-leverage change. It catches supplier variances while the delivery is still in the bay.',
      'Undocumented internal movement, not theft, is the largest source of drift in most SMEs we have worked with.',
      'Cycle counting by zone beats quarterly full counts because it produces small, correctable errors instead of one large unexplainable one.',
    ],
    sections: [
      {
        heading: 'Why the first count after go-live always looks bad',
        paragraphs: [
          'We tell customers this before the rollout starts, because otherwise somebody decides on day three that the software is broken.',
          'It is not broken. The count is usually the first honest measurement the business has taken in years, and honest measurements are unflattering. A book figure that drifted quietly for eighteen months now has a real number sitting next to it. The gap between them was always there. It was simply never written down.',
          'What matters is the four weeks after that count, not the count itself.',
        ],
      },
      {
        heading: 'Habit one: receive against the purchase order, with a scan',
        paragraphs: [
          'The most common failure we see on site is a delivery checked off on a printed sheet, then keyed into the system on Friday afternoon by somebody who was not in the bay when the pallets arrived.',
          'By Friday nobody can reconstruct whether the shortage was a supplier error, a picking error or a data entry error. Scanning at the point of receipt collapses that ambiguity. The variance is flagged while the driver is still in the yard, which is the only moment you have leverage with the supplier.',
          'In practice this is also the change staff resist least, because scanning is faster than the paperwork it replaces.',
        ],
      },
      {
        heading: 'Habit two: never move stock without a document',
        paragraphs: [
          'Branch-to-branch transfers, samples taken for a customer visit, damaged units pulled off the shelf. Each of these is a legitimate movement, and each one silently breaks the ledger when it happens without a record.',
          'Owners often assume drift means theft. In the SME deployments we have worked on, undocumented internal movement was the larger cause by a wide margin. Theft leaves a pattern. Undocumented movement leaves noise, which is harder to see and much easier to fix.',
          'The rule is simple to state and difficult to hold: if it physically moved, it moved on a document.',
        ],
      },
      {
        heading: 'Habit three: count in cycles, not campaigns',
        paragraphs: [
          'The quarterly full count is a ritual that closes the shop, exhausts the team and produces one enormous variance that nobody can explain three months after the fact.',
          'Cycle counting splits the same work into weekly slices by zone. A small variance found on Tuesday can usually be traced to something that happened on Monday. That traceability is the entire value. Accuracy is a by-product of being able to explain your errors while the explanation still exists.',
          'Start with your highest-velocity zone. It has the most movement, so it produces the most learning per hour spent counting.',
        ],
      },
      {
        heading: 'How we measured this',
        paragraphs: [
          'The figures above come from anonymised, aggregated counts across 18 YiY Tech deployments between January 2024 and June 2026, all of them SMEs with two to twelve outlets in Malaysia and Singapore.',
          'Accuracy is measured as the percentage of counted SKU-locations whose physical quantity matched the system quantity exactly, with no tolerance band. We use the first full count after go-live as the baseline and the second complete cycle as the comparison point.',
        ],
      },
      {
        heading: 'Where this advice does not apply',
        paragraphs: [
          'Businesses with high-value serialised stock, such as jewellery or electronics, need serial-level control from day one and should not rely on cycle counting alone.',
          'Businesses running heavy consignment arrangements have a harder problem, because the ledger depends on a partner reporting honestly and on time. Software helps you notice the gap. It cannot close it.',
          'Single-outlet businesses under roughly 300 SKUs often reach acceptable accuracy with disciplined spreadsheets. We say so on the walkthrough rather than selling them something they do not need yet.',
        ],
      },
    ],
    faq: [
      {
        q: 'How long does it take to reach high stock accuracy?',
        a: 'In our deployments, teams that adopted scan-on-receipt, documented transfers and weekly cycle counts reached the high nineties by their second complete counting cycle, typically six to ten weeks after go-live.',
      },
      {
        q: 'Is inventory shrinkage usually theft?',
        a: 'Not in the SMEs we have worked with. Undocumented internal movement, such as untracked transfers, samples and damaged units, accounted for more drift than theft did.',
      },
      {
        q: 'Should a small shop buy inventory software?',
        a: 'Not always. A single outlet under roughly 300 SKUs can often run well on a disciplined spreadsheet. The case for software becomes clear at the second location, or when stock is shared across sales channels.',
      },
    ],
    sources: [
      {
        label: 'YiY Tech deployment data, 2024 to 2026',
        note: '18 SME deployments, Malaysia and Singapore, anonymised and aggregated.',
      },
      {
        label: 'On-site process audits conducted during rollout',
        note: 'Direct observation of receiving, transfer and counting practice at customer sites.',
      },
    ],
  },
  {
    slug: 'true-cost-of-no-shows',
    title: 'What a no-show actually costs a service business',
    excerpt:
      'Owners price a missed appointment as one lost sale. The full cost includes the paid staff hour, the customer you turned away and the chasing. Here is how to work out your own number.',
    category: 'Booking',
    date: '2026-07-21',
    updated: '2026-08-12',
    readingTime: '6 min',
    image: '/media/img/salon-interior.jpg',
    imageAlt: 'Styling stations in a salon between appointments',
    author: authors.yeWen,
    reviewer: authors.yongHan,
    answer:
      'A no-show costs more than the missed service fee. Add the staff hour you already paid for, the margin on the customer you turned away while the slot looked full, and the front-desk time spent chasing. For a typical clinic or salon slot, that lands between 1.6 and 2.4 times the headline service price. A three-step reminder sequence sent on the channel customers actually read is the cheapest reliable intervention.',
    takeaways: [
      'Multiply the missed service fee by roughly two to get a realistic per-no-show cost, then check it against your own staffing model.',
      'The largest hidden component is displacement: the customer refused because the calendar showed the slot as taken.',
      'Reminders work because of the reply path, not the notification. If confirming requires a phone call, the sequence fails.',
      'Deposits reduce no-shows further but add friction. Most of our customers apply them only to high-value slots.',
    ],
    sections: [
      {
        heading: 'The four components of the real cost',
        paragraphs: [
          'Start with the obvious one, the service fee you did not collect. Then add three that rarely make it onto the spreadsheet.',
          'The staff hour is already paid. Whether the chair is occupied or not, the stylist, dentist or tutor is on the clock. That cost does not disappear when the customer does.',
          'Displacement is the component owners consistently underestimate. Somebody rang, the slot showed as booked, and they were turned away or offered a worse time. You lost that margin too, and you will never see it in a report.',
          'Finally, the chasing. Front-desk time spent calling, waiting, rescheduling and re-entering is real payroll spent on an appointment that produced nothing.',
        ],
      },
      {
        heading: 'A worked example',
        paragraphs: [
          'Take a clinic slot priced at 200 ringgit, with a practitioner cost of about 90 ringgit for the hour and a front desk that spends fifteen minutes chasing at roughly 20 ringgit per hour.',
          'Missed fee 200. Paid staff hour 90. Chasing 5. Displacement, applied at a conservative one in three no-shows having turned somebody away, adds around 67. That totals roughly 362 ringgit against a headline price of 200, or 1.8 times.',
          'Run the same arithmetic with your own numbers before you accept anyone\'s benchmark, including ours. The ratio moves a lot with staff cost and how full your book usually is.',
        ],
      },
      {
        heading: 'Why reminder sequences work',
        paragraphs: [
          'The intervention is unglamorous. A confirmation at the moment of booking, a nudge twenty-four hours out, and a short nudge two hours out.',
          'What makes it work is not the notification. It is the reply path. If a customer can answer with a single tap to confirm or move, and the calendar updates without anybody at the desk touching it, the sequence pays for itself. If confirming requires a phone call during business hours, it does not.',
          'Channel matters as much as timing. In Malaysia and Singapore that channel is WhatsApp for most customer bases. Email reminders for consumer appointments are largely ignored.',
        ],
      },
      {
        heading: 'What we measured, and what we did not',
        paragraphs: [
          'Across 11 YiY Tech booking deployments between March 2024 and May 2026, no-show rates fell by a median of 42 percent in the three months after a three-step WhatsApp sequence was switched on, compared with the three months before.',
          'This is a before-and-after comparison, not a controlled trial. We cannot separate the reminder effect from seasonality, from other changes the business made in the same period, or from the attention that comes with any new system. Treat 42 percent as a directional result from a small sample, not a guarantee.',
          'We did not measure revenue impact directly, because too many of our customers changed pricing in the same window for the comparison to mean anything.',
        ],
      },
      {
        heading: 'When deposits are worth the friction',
        paragraphs: [
          'Taking a deposit reliably lowers no-shows further. It also loses you bookings at the moment of payment, and it creates refund handling that somebody has to own.',
          'Most of our customers settled on the same rule: deposits on high-value or long slots, none on routine appointments. A few applied them only to customers with a prior no-show on record, which is more work to administer but far less punishing to first-time bookers.',
        ],
      },
    ],
    faq: [
      {
        q: 'How much does a no-show cost?',
        a: 'For a typical clinic or salon appointment, between 1.6 and 2.4 times the headline service price once you include the paid staff hour, displaced customers and front-desk chasing time.',
      },
      {
        q: 'Do appointment reminders reduce no-shows?',
        a: 'Yes. Across 11 YiY Tech booking deployments, no-show rates fell by a median of 42 percent after a three-step WhatsApp sequence was introduced. This was a before-and-after comparison on a small sample, not a controlled trial.',
      },
      {
        q: 'Should I charge a deposit to stop no-shows?',
        a: 'Deposits work but add friction at booking. Most of our customers apply them only to high-value or long appointments, or to customers with a previous no-show.',
      },
    ],
    sources: [
      {
        label: 'YiY Tech booking deployment data, 2024 to 2026',
        note: '11 clinic, salon and tuition customers. Before-and-after comparison over three-month windows.',
      },
      {
        label: 'Front-desk time studies during rollout',
        note: 'Observed handling time for confirmation and rescheduling at six customer sites.',
      },
    ],
  },
  {
    slug: 'flat-pricing-versus-per-transaction',
    title: 'Why we price flat per outlet instead of per transaction',
    excerpt:
      'Usage pricing looks fair and reads well on a first invoice. It also punishes the customers who succeed, and it quietly corrupts your own data. Here is the reasoning, including what it costs us.',
    category: 'Company',
    date: '2026-07-02',
    updated: '2026-07-30',
    readingTime: '5 min',
    image: '/media/img/retail-counter.jpg',
    imageAlt: 'A retail counter during a quiet trading hour',
    author: authors.ianChin,
    reviewer: authors.yeWen,
    answer:
      'Per-transaction pricing charges customers more as they grow, for software that has not changed. Worse, it gives them a reason to route volume around the system to manage the bill, which makes the stock ledger unreliable. YiY Tech charges a flat monthly fee per outlet so that the price tracks how much of the business the system covers, not how busy the business happens to be.',
    takeaways: [
      'Usage pricing creates an incentive to keep transactions out of your system of record. That is fatal for inventory data.',
      'Flat per-outlet pricing is duller and easier to forecast, which is what finance teams at SMEs actually want.',
      'We lose money on fast-growing customers under this model, and we think that is the right side to lose it on.',
      'Ask any vendor what happens to your bill if volume doubles. The answer tells you what the product is optimised for.',
    ],
    sections: [
      {
        heading: 'The appeal of usage pricing',
        paragraphs: [
          'It is easy to defend. The price scales with the customer, it feels proportionate, and the first invoice is small enough to approve without a meeting. Vendors like it because revenue grows without a new sale.',
        ],
      },
      {
        heading: 'The problem nobody mentions in the demo',
        paragraphs: [
          'The better your customer does, the more they pay you for software that has not changed since they signed.',
          'That is annoying but survivable. The real damage is behavioural. Once a business is watching a per-transaction meter, somebody eventually suggests keeping the small orders in a spreadsheet, or batching wholesale lines to reduce the count.',
          'At that moment your stock numbers become fiction. An inventory system that does not see every movement is not a system of record. It is an expensive estimate.',
        ],
      },
      {
        heading: 'What flat per outlet gets right',
        paragraphs: [
          'It prices the thing we actually sell: coverage. One outlet on the system costs the same whether it has a quiet month or its best quarter ever.',
          'It is predictable, which matters more to a twelve-outlet retailer than a clever pricing curve does. Finance can forecast it. Nobody has to explain a spike.',
          'And it removes every incentive to hide transactions, which keeps the data trustworthy enough to build forecasting on later.',
        ],
      },
      {
        heading: 'What it costs us',
        paragraphs: [
          'We lose money on the customers who grow fastest, and those are exactly the customers we most want. A retailer going from four outlets to six pays us for two more outlets while their order volume might triple.',
          'We have chosen to take that hit rather than build a pricing model that fights the product. If that becomes unsustainable we will change it openly and explain why, rather than quietly introducing overage tiers.',
        ],
      },
      {
        heading: 'How to evaluate any vendor on this',
        paragraphs: [
          'Ask three questions before you sign. What happens to my bill if volume doubles. What happens if I add an outlet. What happens at renewal if I have grown.',
          'You are not looking for the cheapest answer. You are looking for an answer that does not create a reason to keep data out of the system.',
        ],
      },
    ],
    faq: [
      {
        q: 'How does YiY Tech charge for its software?',
        a: 'A flat monthly fee per outlet, with no per-transaction charge, no implementation fee and no annual lock-in required to start. The exact figure depends on outlet count and which products you run, and is quoted during the walkthrough.',
      },
      {
        q: 'Why is per-transaction pricing bad for inventory software?',
        a: 'It gives the business a financial reason to keep transactions out of the system, which breaks the stock ledger the software exists to maintain.',
      },
    ],
    sources: [
      {
        label: 'YiY Tech pricing policy',
        note: 'Published terms, flat monthly per outlet, effective 2024 to present.',
      },
    ],
  },
  {
    slug: 'multi-resource-scheduling-explained',
    title: 'Multi-resource scheduling: when a booking needs two things at once',
    excerpt:
      'Tuition centres, clinics and property agencies all reserve a person and a place in the same slot. Most booking tools model only the person, and the second resource becomes a group chat.',
    category: 'Booking',
    date: '2026-06-16',
    updated: '2026-07-15',
    readingTime: '6 min',
    image: '/media/img/tuition-class.jpg',
    imageAlt: 'A tutor working with students in a classroom',
    author: authors.ianChin,
    reviewer: authors.yeWen,
    answer:
      'Multi-resource scheduling means a booking reserves every resource it needs at once, and fails if any one of them is unavailable. A haircut needs a stylist and a chair. A tuition slot needs a tutor and a room. A viewing needs an agent and a unit. Booking tools that model only staff availability push the second resource into a whiteboard or a group chat, which is where double-booking originates.',
    takeaways: [
      'Double-booking is usually a data model failure, not a carelessness failure.',
      'Ask any booking vendor to demonstrate a slot that reserves two resource types and fails when one is busy.',
      'Resource classes should be configurable by the business, because the second resource differs by industry.',
      'Partial bookings should be impossible to create rather than something staff clean up afterwards.',
    ],
    sections: [
      {
        heading: 'The pattern across four industries',
        paragraphs: [
          'A haircut needs a stylist and a chair. A dental appointment needs a dentist, a chair and sometimes a specific machine. A tuition slot needs a tutor and a room. A property viewing needs an agent and a unit that is actually free that afternoon.',
          'In every case the appointment is only real if both resources are available. The customer does not care which one is the constraint.',
        ],
      },
      {
        heading: 'Where most tools stop',
        paragraphs: [
          'Common booking software models staff availability well and stops there. Rooms, chairs and units become a second calendar living in somebody\'s head, on a whiteboard behind reception, or in a WhatsApp group.',
          'This is where double-booking lives. Not in careless staff, but in a data model that cannot express the constraint the business runs on. When the system cannot say no, a person has to remember to, and people forget at 5pm on a Friday.',
        ],
      },
      {
        heading: 'What correct behaviour looks like',
        paragraphs: [
          'A slot type should declare which resource classes it consumes. The booking then reserves all of them or it fails outright.',
          'There should be no partial booking to reconcile later, because there is no way to create one. That is the difference between a validation warning and a constraint. A warning can be clicked through at the counter. A constraint cannot.',
          'The resource classes themselves have to be configurable, because a salon, a clinic and an agency define the second resource differently and none of them should be editing code to say so.',
        ],
      },
      {
        heading: 'How to test this in a demo',
        paragraphs: [
          'Ask the vendor to create a slot type that requires two resources. Then ask them to book it when one of the two is already busy.',
          'If the system offers the slot anyway, or warns and lets the operator continue, you will be running a second calendar within a month. If it refuses to offer the slot at all, the constraint is real.',
        ],
      },
      {
        heading: 'What we have seen in practice',
        paragraphs: [
          'One tuition centre we worked with in 2025 had been resolving tutor and room clashes manually across three branches, roughly a dozen times a week by their own estimate.',
          'After the constraint was enforced at booking time, those clashes stopped appearing in their operations log. We report that as an observation from a single customer, not as a benchmark. It is exactly the kind of result that depends on how the business was working beforehand.',
        ],
      },
    ],
    faq: [
      {
        q: 'What is multi-resource scheduling?',
        a: 'A booking model where a single appointment reserves several resources at once, such as a staff member and a room, and cannot be created unless every required resource is free.',
      },
      {
        q: 'Why does double-booking keep happening despite booking software?',
        a: 'Because most tools track only staff availability. The second resource, such as a room or a chair, lives outside the system, so nothing prevents two bookings from claiming it.',
      },
    ],
    sources: [
      {
        label: 'YiY Tech customer operations logs, 2025 to 2026',
        note: 'Clash incidents recorded by customers before and after constraint enforcement.',
      },
      {
        label: 'On-site scheduling observation',
        note: 'Front-desk practice reviewed at clinic, salon and tuition customers during rollout.',
      },
    ],
  },
  {
    slug: 'two-week-erp-rollout-plan',
    title: 'A two-week rollout plan for SME operations software',
    excerpt:
      'Traditional implementations run for months because the scope was never fixed. Here is the fourteen-day sequence we run, what each stage produces, and the one condition that makes us quote four weeks instead.',
    category: 'Rollout',
    date: '2026-05-28',
    updated: '2026-08-01',
    readingTime: '8 min',
    image: '/media/img/team-meeting.jpg',
    imageAlt: 'An onboarding session with an operations team',
    author: authors.yeWen,
    reviewer: authors.ianChin,
    answer:
      'A two-week rollout is realistic for a single-product SME deployment when scope is fixed before configuration starts. Day 0 is an on-site walkthrough, days 1 to 4 are data migration, days 5 to 10 are one pilot outlet running live, and days 11 to 14 are the remaining outlets plus handover. The main thing that extends this is a messy item master with duplicate SKUs, which pushes the estimate to three or four weeks.',
    takeaways: [
      'Fix scope by direct observation on site, not by a requirements workshop.',
      'Migrate before you configure. Real data exposes assumptions that a blank system hides.',
      'Run one pilot outlet with real orders. The purpose is to let the team break the configuration while you are still there.',
      'Train staff on the devices they will actually use, which for most SME teams means their own phones.',
    ],
    sections: [
      {
        heading: 'Day 0: the walkthrough',
        paragraphs: [
          'Thirty minutes on the actual floor. Not a workshop and not a requirements document. We watch how an order, a delivery and a booking physically move through the business.',
          'Most surprises surface here, and they are almost always physical rather than technical. A receiving bay with no power socket. A front desk where the only screen faces the customer. A stockroom two floors from the till.',
          'The output is a fixed scope and an honest estimate. If the estimate is four weeks we say four weeks now, before any money changes hands.',
        ],
      },
      {
        heading: 'Days 1 to 4: migration',
        paragraphs: [
          'Item master, suppliers, client histories, open bookings and current stock counts. We import from whatever exists, which is usually a spreadsheet with three years of well-meant inconsistency in it.',
          'Anything that cannot be mapped cleanly is flagged and returned to the customer as a decision, never guessed at. A silently guessed mapping is a defect that surfaces six weeks later as a stock discrepancy nobody can trace.',
          'We migrate before configuring on purpose. Real data reveals which fields matter, and it kills the temptation to build for a workflow nobody actually runs.',
        ],
      },
      {
        heading: 'Days 5 to 10: one pilot outlet, live',
        paragraphs: [
          'One location goes live with real orders and real customers. Not a sandbox, not a parallel run.',
          'The point is to let the team break it while we are still watching. Every workaround they invent in that week is a design note. Configuration hardens because it is being pushed on, not because it was reviewed carefully in advance.',
          'We resist the instinct to pick the best-run branch for the pilot. The messiest one teaches you more.',
        ],
      },
      {
        heading: 'Days 11 to 14: rollout and handover',
        paragraphs: [
          'The remaining outlets go live with the configuration the pilot produced. Staff are trained on their own devices, because that is what they will use at 6pm on a Saturday with one hand free.',
          'Handover includes a direct support line for the first month. Not a ticket queue. The first month is when the questions that matter get asked, and a slow answer at that point becomes a permanent workaround.',
        ],
      },
      {
        heading: 'The one thing that breaks the timeline',
        paragraphs: [
          'A messy item master. Duplicate SKUs, inconsistent naming, three spellings of the same supplier, units of measure that change by branch.',
          'When we see that on day 0 we quote three to four weeks, not two, and we say so before anyone has paid us. Cleaning an item master is real work and pretending otherwise just moves the delay to week three, when it costs more and trust is harder to recover.',
          'Everything else, including outlet count, tends to add days rather than weeks.',
        ],
      },
      {
        heading: 'Basis for these timings',
        paragraphs: [
          'These stages describe the standard YiY Tech rollout as run across deployments from 2024 to 2026 for SMEs with two to twelve outlets in Malaysia and Singapore.',
          'Two weeks is the typical case for a single product with a clean item master. It is not a guarantee, and it does not describe multi-product deployments or businesses running heavy consignment arrangements.',
        ],
      },
    ],
    faq: [
      {
        q: 'How long does it take to implement inventory software in an SME?',
        a: 'Two weeks is typical for a single product with clean data across two to twelve outlets. A messy item master with duplicate SKUs extends it to three or four weeks.',
      },
      {
        q: 'Should we run the old system in parallel during rollout?',
        a: 'We advise against it. Parallel running splits attention and lets staff avoid the new process. A single pilot outlet running live produces better information in less time.',
      },
      {
        q: 'What is the most common cause of rollout delay?',
        a: 'An item master with duplicate SKUs and inconsistent naming. Cleaning it is real work and it should be scoped honestly before the project starts.',
      },
    ],
    sources: [
      {
        label: 'YiY Tech rollout records, 2024 to 2026',
        note: 'Stage durations across SME deployments in Malaysia and Singapore.',
      },
      {
        label: 'Post-rollout customer debriefs',
        note: 'Structured interviews conducted one month after handover.',
      },
    ],
  },
  {
    slug: 'sme-operations-data-questions',
    title: 'The four questions SME operations data should answer',
    excerpt:
      'You do not need a data warehouse. You need four answers on a Monday morning, and the transactions you already record contain them, provided the recording is trustworthy.',
    category: 'Data',
    date: '2026-05-09',
    updated: '2026-07-22',
    readingTime: '6 min',
    image: '/media/img/data-dashboard.jpg',
    imageAlt: 'An operations dashboard being reviewed on a laptop',
    author: authors.yongHan,
    reviewer: authors.yeWen,
    answer:
      'Four questions change an SME operating decision: what am I about to run out of, which hours am I overstaffed, which customers stopped coming and when, and what changed this week that should not have. All four are answerable from transactions the business already records. None of them require a data warehouse. They do require an operational ledger that is trusted, which is why analytics should follow the operations layer rather than lead it.',
    takeaways: [
      'A revenue bar chart is not analytics. It tells the owner something they already knew.',
      'Useful questions are narrow, time-bound and attached to a decision somebody makes weekly.',
      'Forecasts built on an untrusted stock ledger are confident guesses with a chart attached.',
      'Show the confidence range. A single number invites a level of trust the data does not support.',
    ],
    sections: [
      {
        heading: 'What most analytics tabs deliver',
        paragraphs: [
          'Every SME software vendor eventually ships an analytics tab. Most of them show last month\'s revenue as a bar chart.',
          'The owner already knew last month\'s revenue. They watched it happen. The chart is a restatement, not an insight, and it changes no decision.',
        ],
      },
      {
        heading: 'Question one: what am I about to run out of',
        paragraphs: [
          'Not what is low now, which any stock report shows. What will be low given current velocity, supplier lead time and whatever seasonal pattern the last two years contain.',
          'This is the highest-value question because the decision it drives, placing a purchase order, happens weekly and has a direct cash consequence in both directions.',
        ],
      },
      {
        heading: 'Question two: which hours am I overstaffed',
        paragraphs: [
          'Utilisation by hour, by staff member and by resource. Most service businesses discover that their staffing pattern was set years ago against a demand curve that has since moved.',
          'The answer is usually uncomfortable and specific: Tuesday mornings are half empty and Saturday afternoons turn people away. Both cost money, in opposite directions.',
        ],
      },
      {
        heading: 'Question three: which customers stopped coming',
        paragraphs: [
          'Cohort retention sounds like a startup metric, but for a clinic or a salon it is simply a list of people who used to come every six weeks and have not been seen in four months.',
          'That list is actionable in a way an aggregate churn percentage is not. It has names in it.',
        ],
      },
      {
        heading: 'Question four: what changed this week that should not have',
        paragraphs: [
          'Anomaly detection with a plain-language framing. A spike in refunds at one branch. A cancellation cluster on one practitioner\'s calendar. Shrinkage in one zone that was stable for a year.',
          'Surfacing these the week they start, rather than at month end, is the difference between a conversation and a write-off.',
        ],
      },
      {
        heading: 'Why the operations layer has to come first',
        paragraphs: [
          'All four answers depend on transactions being recorded completely and honestly. A forecast built on a stock ledger that misses undocumented transfers is precise and wrong.',
          'This is why YiY Tech Data & Intelligence sits on top of Inventory and Booking rather than beside them, and why it is in limited beta with existing customers rather than sold as a standalone product. We would rather ship it late than ship it over data we do not trust.',
        ],
      },
    ],
    faq: [
      {
        q: 'Does an SME need a data warehouse for operations analytics?',
        a: 'Usually not. The four questions that drive weekly operating decisions can be answered from the transactional data an operations system already holds.',
      },
      {
        q: 'Why should analytics come after an operations system?',
        a: 'Because forecasts and alerts are only as good as the underlying ledger. If stock movements or bookings are recorded incompletely, the analysis will be confidently wrong.',
      },
      {
        q: 'When is YiY Tech Data & Intelligence available?',
        a: 'It is in limited beta with existing Inventory and Booking customers. Customers running either product today will be invited before general release.',
      },
    ],
    sources: [
      {
        label: 'YiY Tech customer interviews, 2025 to 2026',
        note: 'Reported weekly operating decisions across retail, wholesale and service customers.',
      },
      {
        label: 'Product beta feedback',
        note: 'Structured feedback from the limited Data & Intelligence beta cohort.',
      },
    ],
  },
];
/** No live vacancies right now. Add entries here and the page picks them up. */
export const roles = [];

export const values = [
  {
    title: 'Ship to the floor',
    body: 'Every person here spends time in customer warehouses and front desks. Opinions formed in a meeting room do not count.',
  },
  {
    title: 'Say the hard number',
    body: 'If a rollout will take four weeks, we say four weeks before the invoice, not after. It costs us deals and keeps us employable.',
  },
  {
    title: 'Small surface, deep work',
    body: 'We would rather two products be genuinely good than six be demoable. Scope discipline is the job.',
  },
  {
    title: 'Leave cleanly',
    body: 'Customers can export everything and walk. That constraint keeps the product honest, and it applies to how we treat each other too.',
  },
];

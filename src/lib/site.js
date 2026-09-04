export const company = {
  name: 'BIYY Tech',
  legal: 'BIYY Technologies',
  tagline: 'Dashboards and databases for the businesses still running on spreadsheets.',
  email: 'hello@yiy.tech',
  // Set this to the real number and it reappears on the contact page and in the
  // Organization JSON-LD. Left null on purpose: shipping a placeholder number
  // means search engines index a number that does not ring.
  phone: null,
  location: 'Kuala Lumpur, Malaysia',
};

/* `panel` names the dropdown a link opens in the masthead. Anything without
   one is a plain link, in both the desktop bar and the mobile sheet. */
export const nav = [
  { label: 'Products', href: '/#products', panel: 'products' },
  { label: 'Industries', href: '/industries', panel: 'industries' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const products = [
  /* ------------------------------------------------------------------------ */
  /*  Dashboards & Databases                                                   */
  /*                                                                           */
  /*  The core product. Sold per outlet per month like the rest of the         */
  /*  catalogue, so it stays a SoftwareApplication with an Offer rather than   */
  /*  a Service node. It carries `value`, `limits` and `faqs`, which           */
  /*  ProductExtras renders under the `dash` copy namespace named by           */
  /*  `extrasKey` below.                                                       */
  /* ------------------------------------------------------------------------ */
  {
    slug: 'dashboards',
    index: '01',
    status: 'Available now',
    extrasKey: 'dash',
    name: 'Dashboards & Databases',
    short: 'Dashboards',
    tagline: 'The dashboard your business runs on, with a real database under it',
    audience: 'SMEs running the business on spreadsheets',
    menuImage: '/media/img/data-laptop.jpg',
    headline: 'Everything you track in spreadsheets, on one dashboard that cannot go out of date.',
    summary:
      'We take the spreadsheets your business actually runs on, put a proper database underneath them, and build the dashboard your team opens every morning. The screens are shaped around your industry rather than a generic template, the numbers update as work happens instead of when somebody remembers to re-export, and there is exactly one version of the file because there is no file.',
    href: '/products/dashboards',
    hero: '/media/img/data-dashboard.jpg',
    /* The hero plays footage of the floor the data comes off rather than a
       screen recording of the product. `poster` is a still from the same
       clip, so the fade from image to video does not jump. */
    video: '/media/video/warehouse-work.mp4',
    poster: '/media/img/inventory-aisle.jpg',
    band: '/media/img/data-laptop.jpg',
    bullets: [
      'A database designed around how your business actually records work, not a spreadsheet copied into SQL',
      'Dashboards laid out for your industry: retail, distribution, clinics, salons, tuition, property',
      'Every figure live, so nobody is reading Tuesday’s export on Friday',
      'Roles and permissions, so a branch manager sees their branch and the owner sees all of it',
      'Forms and mobile entry that replace the shared file and the WhatsApp photo of a handwritten page',
      'Full history and an audit trail on every record, including who changed it and when',
      'Migration from the spreadsheets you have today, duplicates and all',
      'Export to Excel and CSV any time, because leaving should cost nothing',
    ],
    features: [
      {
        title: 'One screen the whole day runs from',
        body: 'The numbers your managers currently rebuild by hand each morning, laid out once and updating themselves. Drill from the group down to a single branch, a single customer or a single line without opening another file.',
        image: '/media/img/data-dashboard.jpg',
      },
      {
        title: 'A database, not a bigger spreadsheet',
        body: 'Proper tables, relationships and constraints underneath. Two people can work at once, nothing gets pasted over, and a wrong entry is rejected instead of quietly stored.',
        image: '/media/img/data-closeup.jpg',
      },
      {
        title: 'Laid out for your industry',
        body: 'A distribution dashboard and a clinic dashboard measure different things. We build the screens around the decisions your business makes weekly, not around a demo that had to suit everyone.',
        image: '/media/img/retail-counter.jpg',
      },
      {
        title: 'Entry that happens where the work does',
        body: 'Forms on a phone at the counter, the bay or the front desk. If your team can use WhatsApp they can enter a record, and the dashboard moves the moment they do.',
        image: '/media/img/data-office.jpg',
      },
      {
        title: 'Every change has a name on it',
        body: 'Full record history and an audit trail. When a figure looks wrong you can see what it was, who changed it and when, instead of comparing four copies of the same file.',
        image: '/media/img/data-graph.jpg',
      },
    ],
    metrics: [
      { value: 12, suffix: 'h', label: 'Admin hours returned per week' },
      { value: 2, suffix: ' wks', label: 'From first walkthrough to live' },
      { value: 1, suffix: '', label: 'Version of the truth, instead of nine' },
    ],

    /* Why an owner buys this, stated as changes in the working week rather
       than as feature counts. Unnumbered on purpose: the honest figures we
       have live on the blog with their sample size attached. */
    value: [
      {
        title: 'Monday morning stops being a rebuild',
        body: 'The report somebody currently assembles from four exports is already on the screen when they sit down. That hour comes back every week, to the person you can least afford to have doing data entry.',
      },
      {
        title: 'There is only one version',
        body: 'No final, no final_v2, no “which one did you send the accountant”. Everyone reads the same record, and two people editing at once is a normal Tuesday rather than a lost afternoon.',
      },
      {
        title: 'The numbers are today’s numbers',
        body: 'A spreadsheet is a photograph of the moment somebody last updated it. A dashboard over a live database is the thing itself, which is the difference between reacting on Tuesday and finding out at month end.',
      },
      {
        title: 'Mistakes get caught at entry',
        body: 'A database can refuse a duplicate supplier, an impossible date or a quantity nobody meant to type. A spreadsheet accepts all three and hands you the consequence six weeks later.',
      },
      {
        title: 'You can finally ask a second question',
        body: 'Once the data is structured, “which customers stopped coming” and “which lines lose money” are two clicks instead of a project. That is the whole reason to leave spreadsheets, and it only works if the schema was built properly first.',
      },
      {
        title: 'It survives the person who built it',
        body: 'Most SME spreadsheets have one author and no documentation. When they leave, the business inherits a file nobody dares change. A database with roles, history and an export is not a hostage situation.',
      },
    ],

    limits: [
      'Replacing your accounting package. We export in the formats standard SME accounting software accepts and leave the ledger where it belongs.',
      'Enterprise data warehouses, streaming pipelines and anything that needs a full-time analyst to operate. If that is genuinely what you need, we will say so and name someone who does it.',
      'One-off dashboards over a spreadsheet you keep maintaining by hand. Without the database underneath, the dashboard is decoration and it goes stale in a fortnight.',
      'Machine learning on a few hundred rows. Forecasting needs history, and we would rather tell you that than sell it.',
      'Rebuilding a system that works. If your current setup is sound we will integrate with it, quote less, and say so on the first call.',
    ],

    faqs: [
      {
        q: 'What actually happens to our spreadsheets?',
        a: 'We read them, work out the structure hiding inside them, and design tables that match how your business really records work. Then we migrate the contents. Duplicates, three spellings of the same supplier and columns that changed meaning halfway down are flagged for you to decide rather than guessed at.',
      },
      {
        q: 'How is this different from a BI tool pointed at our files?',
        a: 'A BI tool draws charts over whatever you feed it, so it inherits every duplicate and every stale export. We replace the source: the data goes into a real database with constraints, and the dashboard reads from that. The charts are the easy half.',
      },
      {
        q: 'What does “tailored to the industry” mean in practice?',
        a: 'A distribution business needs ageing, lead times and margin per line. A clinic needs utilisation, recall lists and no-show rates. A tuition centre needs enrolment and attendance by class. We start from the screens that industry actually needs and configure from there, rather than shipping one dashboard and asking you to adapt.',
      },
      {
        q: 'Can our team still use Excel?',
        a: 'Yes, and most do for one-off analysis. Every view exports to Excel or CSV in one click. The difference is that Excel stops being the place the data lives and becomes the place somebody occasionally takes a copy to.',
      },
      {
        q: 'Who owns the database?',
        a: 'You do. Full export at any time, in a standard format, with no exit fee. If you leave, you leave with the data and the schema, not with a PDF of some charts.',
      },
      {
        q: 'How long before we are actually using it?',
        a: 'Two weeks is typical: walkthrough on day 0, schema and migration days 1 to 4, one team or branch running live days 5 to 10, everyone else and handover days 11 to 14. Messy source spreadsheets push that to three or four weeks, and we say which one you are before you pay anything.',
      },
      {
        q: 'What if we need something the dashboard does not show?',
        a: 'New views and fields are configuration, not a rebuild, because the database was designed for the business rather than copied from the spreadsheet. Ask for it during the first month and it is usually live the same week.',
      },
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
    index: '02',
    status: 'Available now',
    service: true,
    name: 'Website & Integrations',
    short: 'Website',
    tagline: 'A new website for your business, wired into the database that runs it',
    audience: 'SMEs launching or replacing a website',
    menuImage: '/media/img/web-listing.jpg',
    headline: 'A new website that sells, answers and stays right without anyone touching it.',
    summary:
      'We design and build your new website, then wire it into your BIYY database so it stops being a brochure. Customers see real prices and real availability, they order and enquire while you are closed, and what they send lands on your dashboard instead of an inbox nobody owns. Three weeks from the first conversation, one flat project fee, and the domain, repository and hosting in your name from the first day.',
    href: '/products/website',
    /* Photographed for this product rather than borrowed from another: a
       counter with the shop's own site open on it, a listing being shot for
       that site, and a workshop running its orders off it. */
    hero: '/media/img/web-counter.jpg',
    video: '/media/video/warehouse-aisle.mp4',
    poster: '/media/img/inventory-shelves.jpg',
    band: '/media/img/web-listing.jpg',
    bullets: [
      'A new site designed and built for your business, not a template with your logo dropped in',
      'Copy written with you in one session, out of what customers actually ask you',
      'Every page a customer needs: what you sell, where you are, and how to reach you',
      'Static pages served from a CDN, with no CMS and no plugins to patch',
      'Tested on a mid-range Android over mobile data, because that is what your customers hold',
      'Prices, availability, staff and opening hours come from your database and change when your operations do',
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
        title: 'Pages that read the live database',
        body: 'Price, availability and lead time per line and per outlet, read from the same tables your dashboard runs on. The site cannot advertise something that changed this morning.',
        image: '/media/img/web-listing.jpg',
      },
      {
        title: 'Forms that write records, not emails',
        body: 'An order or an enquiry arrives as a row in your database with the page it came from attached, ready on the dashboard, instead of as one more message in a shared inbox.',
        image: '/media/img/data-dashboard.jpg',
      },
      {
        title: 'A site that cannot drift',
        body: 'Opening hours, prices and outlet details are read at build time from your own data. Nobody has to remember to update the website, because nobody updates the website.',
        image: '/media/img/web-workshop.jpg',
      },
    ],
    metrics: [],

    /* What the build is worth to the customer, stated as changes on the floor
       rather than traffic and impressions. Deliberately unnumbered: we have no
       measured web deployments to quote yet, and a made-up percentage here
       would contradict every figure on the rest of the site. */
    value: [
      {
        title: 'Customers can buy and ask at 11pm',
        body: 'The site takes the order or the enquiry while you are closed, and it is waiting as a record in the same system your team opens in the morning. No voicemail to work through, nothing retyped.',
      },
      {
        title: 'The phone stops ringing for the same six questions',
        body: 'Opening hours, price, whether you have it, whether you take walk-ins. Answered on the page and drawn from your own database, so the answer is right today rather than right in 2023.',
      },
      {
        title: 'A site that cannot go stale',
        body: 'Prices, staff, availability and holiday hours come out of BIYY. Nobody has to remember to update the website, because nobody updates the website.',
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
        reads: 'Live price, availability and lead time, per line and per outlet',
        writes: null,
      },
      {
        surface: 'Online orders',
        reads: 'Availability, so the site cannot sell what changed this morning',
        writes: 'Creates the order record and opens the job at the right outlet',
      },
      {
        surface: 'Enquiry form',
        reads: null,
        writes: 'Lands as a record on the dashboard with the page it came from attached',
      },
      {
        surface: 'Customer portal',
        reads: 'That customer’s own records, and nothing belonging to anyone else',
        writes: 'Logs what they changed, with a timestamp and their name on it',
      },
      {
        surface: 'Outlet pages',
        reads: 'Address, trading hours and holiday closures from your own tables',
        writes: null,
      },
      {
        surface: 'WhatsApp',
        reads: 'Order and enquiry status',
        writes: 'Logs the message and the customer’s reply against the record',
      },
    ],

    /* What an integration can actually reach, by platform. Asked on every call,
       so it is answered here rather than in a quote three weeks later. */
    platforms: [
      {
        name: 'Custom build',
        depth: 'Full',
        body: 'Prices and availability render on the server, the way they do on this site. Nothing loads twice and nothing flashes stale.',
      },
      {
        name: 'WordPress',
        depth: 'Full',
        body: 'A plugin written against your theme. We will also tell you honestly whether the theme is worth keeping before we write it.',
      },
      {
        name: 'Shopify',
        depth: 'Two-way',
        body: 'Catalogue and availability sync both directions. Checkout stays in Shopify, which is where it belongs.',
      },
      {
        name: 'Wix, Squarespace, GoDaddy',
        depth: 'Embed only',
        body: 'A form and a live badge. The rest of the page cannot be reached from outside, and no amount of work on our side changes that.',
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
        body: 'Prices, availability and forms connect to your BIYY database. We test by breaking it: orders for something that changed an hour ago, forms submitted twice.',
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
      'Cross-border storefronts with multi-currency tax rules and six-figure catalogues. Buy Shopify for that and let us wire BIYY into it.',
      'Any percentage of what the site sells. A project fee, and hosting inside the monthly outlet price you already pay.',
      'Rebuilding a site that works. If yours is sound we integrate with it, quote less, and say so on the first call.',
    ],

    faqs: [
      {
        q: 'Do I need to be a BIYY customer to get a website?',
        a: 'Effectively yes. We take website work where there is a database to wire it into, either one you already run or one going live in the same quarter. A brochure site with nothing behind it is not something we do better than a local studio, and we would rather tell you that than take the work.',
      },
      {
        q: 'What does a website build cost?',
        a: 'A flat project fee, quoted after the content session once the page count and the number of wired surfaces are known, plus hosting folded into your existing monthly per-outlet price. There is no per-transaction charge and no fee tied to what the site sells.',
      },
      {
        q: 'Why not just build it ourselves on Wix or Squarespace?',
        a: 'For a pure brochure site, do. It will be cheaper and it will be fine. The reason to have us build it is the half those builders cannot reach: prices and availability that are live rather than typed in, orders and enquiries that land in the system your team already runs the day from, and pages that keep themselves current after everyone has stopped caring about the website. If none of that applies to your business, we will say so on the first call.',
      },
      {
        q: 'Can we edit the site ourselves?',
        a: 'The things that change weekly, prices, availability, staff and opening hours, change in BIYY and the site follows within a minute. Prose lives in one file per page and we show you how to edit it. There is no CMS, because a CMS is one more system to patch and one more password to lose.',
      },
      {
        q: 'Who owns the site when it is finished?',
        a: 'You do. Domain, DNS, repository and hosting account are in your name from the first day of the build rather than transferred at the end. Leaving costs nothing and moves nothing.',
      },
      {
        q: 'We already have a website we like. Can it still connect to BIYY?',
        a: 'Usually. How deeply depends on what it is built on. Custom sites and WordPress integrate fully, Shopify syncs two ways, and hosted builders such as Wix accept an embed and nothing deeper. We check before quoting rather than after.',
      },
      {
        q: 'Do you build in Chinese as well as English?',
        a: 'Yes. English and Chinese as standard, Malay on request. One translation file per language, so an opening time or a price is written once and stays correct in all of them.',
      },
    ],
  },
  /* ------------------------------------------------------------------------ */
  /*  AI Development                                                           */
  /*                                                                           */
  /*  Sold as a project like the website build, so `service: true` again keeps  */
  /*  it a Service node with no published Offer. It carries `value`,            */
  /*  `connections`, `stages`, `limits` and `faqs`, rendered by ProductExtras   */
  /*  under the `ai` copy namespace named in `extrasKey`. No `platforms`: the   */
  /*  question this product gets asked is what the model may touch, not which   */
  /*  website builder it can reach.                                            */
  /*                                                                           */
  /*  Photography gap: the library has no AI-specific footage, so this reuses   */
  /*  the data set. Replace before it is shown to a customer.                   */
  /* ------------------------------------------------------------------------ */
  {
    slug: 'ai-development',
    index: '03',
    status: 'Available now',
    service: true,
    extrasKey: 'ai',
    name: 'AI Development',
    serviceType: 'Applied AI development and workflow automation over an operational database',
    short: 'AI',
    tagline: 'AI built on the database your business already runs on',
    audience: 'SMEs with a working database and a job worth automating',
    menuImage: '/media/img/data-graph.jpg',
    headline: 'AI that answers from your own records, and shows you where the answer came from.',
    summary:
      'Once your work is in a real database, a model can be pointed at it. We build the narrow, checkable pieces that earn their keep: ask a question of your own data in plain language, have the week’s report drafted before anyone sits down, get an invoice or a delivery order read into a record instead of retyped, and see the exceptions surface without anyone running a report to find them. Every answer carries the records it came from, and anything the model is unsure of goes to a person rather than into the database.',
    href: '/products/ai-development',
    hero: '/media/img/data-graph.jpg',
    /* No footage of an AI, and a stock server-room clip would be a lie about
       what this is, so the poster carries the hero on its own. */
    video: null,
    poster: '/media/img/data-closeup.jpg',
    band: '/media/img/data-office.jpg',
    bullets: [
      'Ask your data a question in plain English or Chinese and get the figure with the records behind it',
      'Documents read into records: invoices, delivery orders, purchase orders and handwritten forms',
      'Reports and summaries drafted on a schedule, in the wording your business already uses',
      'Exceptions found and flagged, so the unusual order reaches a person the day it happens',
      'Classification and routing on what arrives all day: enquiries, tickets, orders, messages',
      'Forecasts only where there is enough history to support one, and a straight answer when there is not',
      'Every output shows its source records, so a figure can be checked instead of trusted',
      'Confidence thresholds and a human step on anything that writes, so nothing is committed silently',
    ],
    features: [
      {
        title: 'A question, not a report request',
        body: '“Which customers ordered less this quarter than last” answered against your own tables, with the list of customers underneath it. The answer is a query the model wrote and you can read, not a number it produced from memory.',
        image: '/media/img/data-graph.jpg',
      },
      {
        title: 'Paper stops being typed twice',
        body: 'A supplier invoice photographed at the counter arrives as a draft record with lines, quantities and totals filled in. Anything the model is not sure of is left blank and marked, rather than guessed and buried.',
        image: '/media/img/inventory-scan.jpg',
      },
      {
        title: 'The exception finds you',
        body: 'A price that moved, an order three times the usual size, a customer who has gone quiet. Checked continuously against your own history and sent to the person who can act on it, instead of waiting to be noticed at month end.',
        image: '/media/img/data-dashboard.jpg',
      },
      {
        title: 'Grounded, and auditable',
        body: 'Answers are drawn from your records and cite them. Nothing is written back without passing a confidence threshold and, where it matters, a person. When it does not know, it says so and hands over.',
        image: '/media/img/data-office.jpg',
      },
    ],
    metrics: [],

    /* Written as what changes in the working week, like the rest of the site,
       and deliberately unnumbered: we have no measured AI deployments to quote
       yet, and a percentage invented here would contradict every other figure
       we publish. */
    value: [
      {
        title: 'The question gets asked, because asking is cheap',
        body: 'Most questions in an SME never get answered, not because the data is missing but because somebody would have to spend an afternoon on it. When the answer takes a sentence, people ask the second and the third one too.',
      },
      {
        title: 'Retyping stops',
        body: 'Invoices, delivery orders and forms arrive as drafts instead of as a stack somebody keys in after hours. The person still checks it. They no longer type it.',
      },
      {
        title: 'You hear about it on the day',
        body: 'A margin that slipped or a customer who stopped ordering is a problem while it is small and a write-off when it surfaces at year end. Continuous checking is the whole difference.',
      },
      {
        title: 'The answer can be checked',
        body: 'Every figure comes with the records it was computed from. That is what separates something you can run a business on from a confident sentence that happens to be wrong.',
      },
      {
        title: 'It is narrow on purpose',
        body: 'We build the three or four things that are worth the money and refuse the rest. An assistant that does everything badly is abandoned within a month, and you have paid for it either way.',
      },
      {
        title: 'Nothing writes without permission',
        body: 'Low confidence goes to a person, not into the database. Your records keep the property that made them worth building: when the dashboard says something, it is true.',
      },
    ],

    /* The same table as the website build, asked of the model instead of the
       site: what it may read, and what it is allowed to write. It is the first
       question on every one of these calls. */
    connections: [
      {
        surface: 'Ask your data',
        reads: 'Whatever tables that person is already permitted to see, and nothing else',
        writes: null,
      },
      {
        surface: 'Document capture',
        reads: 'Suppliers, price lists and open orders, to match what it is reading against',
        writes: 'Creates a draft record and marks every field it was unsure of',
      },
      {
        surface: 'Scheduled reports',
        reads: 'The same tables the dashboard reads, at the moment it is scheduled to run',
        writes: null,
      },
      {
        surface: 'Exception watch',
        reads: 'Your own history, so normal means normal for your business',
        writes: 'Raises a flagged item with the records that triggered it attached',
      },
      {
        surface: 'Enquiry routing',
        reads: 'Existing customers and open jobs, to place what has just arrived',
        writes: 'Files the message against the right record and assigns it',
      },
      {
        surface: 'Drafted replies',
        reads: 'The order or the job the message is about',
        writes: 'Leaves a draft for a person to send. It does not send.',
      },
    ],

    /* Four weeks on its own timeline, so this product replaces the shared
       two-week rollout section rather than contradicting it. */
    stages: [
      {
        step: '01',
        when: 'Week 0',
        title: 'Pick the job',
        body: 'Half a day finding the repetitive work actually worth automating, and saying out loud which parts are not. We would rather cut two of your four ideas now than deliver four mediocre ones.',
        owner: 'You + us, on site',
      },
      {
        step: '02',
        when: 'Week 1',
        title: 'Ground it',
        body: 'The model is wired to your tables under the permissions you already have, and the evaluation set is built from your real documents and real questions, including the awkward ones.',
        owner: 'Us, on your data',
      },
      {
        step: '03',
        when: 'Weeks 2–3',
        title: 'Measure',
        body: 'We run it against cases where the answer is already known and show you the score, including where it fails. Thresholds come from that number rather than from optimism, and anything below one routes to a person.',
        owner: 'Us, reviewed with you',
      },
      {
        step: '04',
        when: 'Week 4',
        title: 'Live, with a person in the loop',
        body: 'It goes live checking rather than committing. Once a month of output has been reviewed and holds up, we widen what it may do on its own, one step at a time.',
        owner: 'Your team, our support',
      },
    ],

    limits: [
      'AI on top of spreadsheets. Without the database underneath, a model inherits every duplicate and every stale export, and a confident wrong answer is worse than no answer. The database comes first.',
      'Forecasting on a few hundred rows. Prediction needs history, and where you do not have it we will say so rather than sell it.',
      'Anything that writes to your records unsupervised on day one. The confidence threshold and the human step are not a phase we quietly remove later.',
      'Bots that answer your customers without review. We build the draft and the routing; a person still presses send.',
      'Training anything on your data for anyone else, or moving your records somewhere you have not approved in writing.',
      'Replacing your team. Where the honest answer is that the job needs a person, that is the answer you get on the first call.',
    ],

    faqs: [
      {
        q: 'Do we need to be on your database first?',
        a: 'Effectively yes. Every useful part of this is grounded in structured records: without them the model is guessing over exports, and it will guess fluently. If you are already live on Dashboards & Databases we can start immediately. If you are not, that build comes first, and we will say so rather than take the work.',
      },
      {
        q: 'How do we know the answers are right?',
        a: 'Two ways. Every answer shows the records it came from, so it can be checked in one click instead of trusted. And before anything goes live we score it against cases where you already know the answer, show you the result including the failures, and set the confidence threshold from that number.',
      },
      {
        q: 'Where does our data go?',
        a: 'Into the model call for that one question, and nowhere else. It trains nothing, we retain nothing beyond a log you can read, and the provider that processes it is named in the agreement rather than left vague. If a workload has to stay in the country or on your own hardware, say so on the walkthrough and we will either scope it that way or tell you it is not economic.',
      },
      {
        q: 'What happens when it gets something wrong?',
        a: 'For anything that writes, low confidence never reaches your records: it arrives as a draft with the uncertain fields marked. For answers, the citation is the safety net, and wrong answers go back into the evaluation set so the same class of mistake is caught the next time rather than repeated.',
      },
      {
        q: 'Is this just a chatbot on our website?',
        a: 'No. A site assistant is a separate and much smaller thing. This is automation of internal work: reading documents into records, drafting the report somebody assembles by hand, watching for exceptions, routing what arrives. It is measured in hours returned, not conversations held.',
      },
      {
        q: 'What does it cost?',
        a: 'A flat project fee per piece of work, quoted after the half day where we pick the job, plus model usage at cost with the month’s figure shown to you. There is no per-seat AI licence and no percentage of what it saves you.',
      },
      {
        q: 'What if the model we are on stops being the best one?',
        a: 'The prompts, the evaluation set and the grounding are yours; the model is a supplier. We keep the same evaluation set and swap the model when a better one exists, which is a configuration change rather than a rebuild.',
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Industries                                                                 */
/*                                                                             */
/*  One entry per dashboard we have actually built a layout for. Each renders   */
/*  a card in the homepage carousel, a row in the Industries nav panel, a tile  */
/*  on /industries, and its own page at /industries/{slug}.                     */
/*                                                                             */
/*  `panels` is the first screen of that industry's dashboard, written as the   */
/*  decision each panel serves rather than as a chart name. `pains` is what it  */
/*  replaces. Keeping the two lists the same shape across every industry is     */
/*  deliberate: the argument is that the layout changes and the method does     */
/*  not.                                                                        */
/*                                                                             */
/*  Every industry now carries its own hero clip, and `poster` is a frame cut   */
/*  from that same clip so the fade from still to footage does not jump. The    */
/*  field still accepts null: BackgroundVideo renders the poster alone then.    */
/*                                                                             */
/*  Photography. Every `image` below was checked against the actual file rather*/
/*  than its name, because several names lie: retail-counter.jpg is a         */
/*  distribution aisle, not a counter. The three trades the Pexels library never*/
/*  covered — restaurants, retail and robotics — now carry CC0 photographs added*/
/*  for them (restaurant-service, retail-rail, robotics-unit), which is why those*/
/*  three are 960x640 where the rest are larger: they are served at their native*/
/*  resolution rather than upscaled to match.                                 */
/* -------------------------------------------------------------------------- */

const industry = (entry) => ({ ...entry, href: `/industries/${entry.slug}` });

export const industries = [
  industry({
    slug: 'barbershops',
    name: 'Barbershops & salons',
    short: 'Barbershops',
    product: 'Salon dashboard',
    image: '/media/img/salon-consult.jpg',
    hero: '/media/img/salon-interior.jpg',
    video: '/media/video/salon-color.mp4',
    poster: '/media/img/salon-interior.jpg',
    headline: 'Chairs, hours and regulars, on one screen instead of three notebooks.',
    summary:
      'A barbershop runs on who is in the chair, who is due back and which stylist is actually earning their station. Most of that lives in a diary, a WhatsApp group and somebody’s memory. We put it in one database and lay the screen out the way a shop floor thinks.',
    pains: [
      'The appointment book, the till and the stock of colour are three separate records that never agree',
      'Nobody can say which stylist is under-booked on a Tuesday until the month has ended',
      'Regulars quietly stop coming and there is no list of who',
      'Product usage against retail sales is guessed at, so shrinkage never surfaces',
      'The commission calculation takes an evening and gets disputed anyway',
    ],
    panels: [
      {
        title: 'Chair utilisation by hour',
        body: 'Which chairs and which hours are actually paying for themselves, so opening hours get set from the curve instead of from habit.',
      },
      {
        title: 'Regulars who have lapsed',
        body: 'A list of names, not a churn percentage. Everyone who used to come every five weeks and has not been in for twelve.',
      },
      {
        title: 'Service mix and average ticket',
        body: 'By stylist and by week, so a training conversation starts from a number rather than an impression.',
      },
      {
        title: 'Colour and retail on hand',
        body: 'What is behind the counter, what got used against what got sold, and what to reorder before Saturday.',
      },
    ],
    faqs: [
      {
        q: 'Does this replace our booking app?',
        a: 'It can sit alongside one. We import from most booking tools, and if you would rather book inside BIYY we build that as part of the database. What we will not do is leave the diary in one system and the money in another.',
      },
      {
        q: 'We have two shops. Does the owner see both?',
        a: 'Yes. Roles are standard: each manager sees their shop, the owner sees the group with a drill-down into either.',
      },
      {
        q: 'How long does a salon rollout take?',
        a: 'Two weeks is typical, including importing the client list and the last two years of appointment history so the lapsed-regulars list is useful on day one.',
      },
    ],
  }),
  industry({
    slug: 'clinics',
    name: 'Dental & medical clinics',
    short: 'Clinics',
    product: 'Clinic dashboard',
    image: '/media/img/clinic-consult.jpg',
    hero: '/media/img/clinic-lobby.jpg',
    video: '/media/video/clinic-room.mp4',
    poster: '/media/img/clinic-room-still.jpg',
    headline: 'Utilisation, recalls and receivables, without the Friday spreadsheet.',
    summary:
      'A clinic already records almost everything it needs. It is spread across a practice system, an Excel file for claims, a printed recall list and the front desk’s own notes. We put those into one database and build the screen a practice manager can run the week from.',
    pains: [
      'Chair and room utilisation is only known after the month has closed',
      'The recall list lives in a printout and nobody chases the people who did not answer',
      'Outstanding claims and patient balances are tracked in a separate workbook',
      'Practitioner productivity is argued about rather than measured',
      'Consumable usage per procedure is never reconciled against what was ordered',
    ],
    panels: [
      {
        title: 'Chair and practitioner utilisation',
        body: 'By hour and by day, so the gaps that cost the most are visible while there is still time to fill them.',
      },
      {
        title: 'Recalls due and unanswered',
        body: 'Who is due, who was contacted, and who has been silent for two attempts. A worklist rather than a report.',
      },
      {
        title: 'Receivables and claims ageing',
        body: 'What is outstanding, from whom, and how old, in the same place as the appointments that generated it.',
      },
      {
        title: 'Consumables against procedures',
        body: 'What each procedure should have consumed versus what left the store, so variance surfaces in the week it starts.',
      },
    ],
    faqs: [
      {
        q: 'Does this touch clinical records?',
        a: 'No. We build the operational layer: scheduling, utilisation, recalls, receivables and consumables. Clinical notes stay in your practice system, and we integrate at the operational boundary rather than duplicating patient records.',
      },
      {
        q: 'What about patient data and PDPA?',
        a: 'The database is yours, roles are enforced per record, and every access is logged. We work to the data-processing terms attached to your service agreement, and we will scope what is genuinely needed rather than importing everything by default.',
      },
      {
        q: 'Can it read from our existing practice management software?',
        a: 'Usually. Most export on a schedule, and several have an API. We check on the walkthrough and tell you before quoting whether it is a feed or a nightly file.',
      },
    ],
  }),
  industry({
    slug: 'restaurants',
    name: 'Restaurants & cafés',
    short: 'Restaurants',
    product: 'Kitchen dashboard',
    image: '/media/img/restaurant-service.jpg',
    hero: '/media/img/restaurant-service.jpg',
    video: '/media/video/restaurant-kitchen.mp4',
    poster: '/media/img/restaurant-kitchen-still.jpg',
    headline: 'Food cost, waste and labour on the same screen as the covers that caused them.',
    summary:
      'Restaurants measure the sales and guess the rest. The POS knows what was sold, a supplier folder knows what was bought, and the gap between them is where the margin went. We model recipes, purchases and covers in one database so that gap is a number rather than a feeling.',
    pains: [
      'Theoretical food cost and actual food cost are never compared, because nobody has time to do it by hand',
      'Waste and staff meals are written on a clipboard and typed up when somebody remembers',
      'Labour as a share of sales is known monthly, which is too late to change a roster',
      'Supplier price rises pass through unnoticed until the accountant flags the month',
      'Recipe costings live in a workbook last updated two menus ago',
    ],
    panels: [
      {
        title: 'Theoretical vs actual food cost',
        body: 'What the recipes say you should have used against what actually left the store, by week and by section.',
      },
      {
        title: 'Labour against covers by daypart',
        body: 'The roster laid over real demand, so the overstaffed Tuesday lunch and the understaffed Friday service both show up.',
      },
      {
        title: 'Supplier price movement',
        body: 'Which lines moved, by how much, since when. The prompt to renegotiate or re-spec a dish before the month closes.',
      },
      {
        title: 'Waste and comps',
        body: 'Logged at the pass on a phone, totalled by reason and by section, rather than added up from a clipboard at month end.',
      },
    ],
    faqs: [
      {
        q: 'Do you replace the POS?',
        a: 'No. The POS stays. We read sales out of it and put them next to purchasing, recipes, waste and labour, which is where the margin question actually lives.',
      },
      {
        q: 'We have several outlets with different menus. Does that work?',
        a: 'Yes. Recipes and prices are per outlet where they need to be and shared where they do not, which is exactly the kind of thing a spreadsheet handles badly and a database handles as a matter of course.',
      },
      {
        q: 'How much entry does the kitchen have to do?',
        a: 'Deliveries and waste, on a phone, at the point they happen. Everything else is read from systems you already run. If the entry takes longer than the clipboard did, we have built it wrong.',
      },
    ],
  }),
  industry({
    slug: 'retail',
    name: 'Retail chains',
    short: 'Retail',
    product: 'Retail dashboard',
    image: '/media/img/retail-rail.jpg',
    hero: '/media/img/inventory-stock.jpg',
    video: '/media/video/warehouse-work.mp4',
    poster: '/media/img/inventory-shelves.jpg',
    headline: 'Every outlet on one screen, and one version of the price list.',
    summary:
      'Multi-outlet retail is where spreadsheets fail first: each branch quietly keeps its own copy, and by the second quarter no two agree. One database, per-outlet roles, and a dashboard that answers the questions a group actually asks on a Monday.',
    pains: [
      'Eleven versions of the same price list, one per branch, each slightly wrong',
      'Group performance is assembled by hand from branch exports every week',
      'Slow-moving lines are only spotted when somebody walks the floor',
      'Promotions are evaluated by feel, because before-and-after needs a rebuild each time',
      'Branch managers see either everything or nothing, because permissions were never modelled',
    ],
    panels: [
      {
        title: 'Group and branch on one axis',
        body: 'The whole chain, then any single branch, without opening another file. The drill-down is the point.',
      },
      {
        title: 'Lines that stopped moving',
        body: 'Ranked by capital sitting still, per branch, so the markdown conversation starts with the right list.',
      },
      {
        title: 'One price list, with a history',
        body: 'Where a price came from, who changed it and when. Branches read it; they do not maintain their own.',
      },
      {
        title: 'Promotion before and after',
        body: 'The same window last year and the weeks either side, built once instead of rebuilt per campaign.',
      },
    ],
    faqs: [
      {
        q: 'Do we have to move off our POS?',
        a: 'No. We read from it. The point is that the reporting layer stops being a stack of exports and becomes one database every branch writes to.',
      },
      {
        q: 'Can a branch manager see other branches?',
        a: 'Only if you say so. Roles are per outlet by default, and the owner sees the group. That is configuration, not a rebuild.',
      },
      {
        q: 'We are opening two more outlets this year. What changes?',
        a: 'A new outlet is a row, not a project. Pricing is flat monthly per outlet, so the bill moves and nothing else does.',
      },
    ],
  }),
  industry({
    slug: 'distribution',
    name: 'Wholesale & distribution',
    short: 'Distribution',
    product: 'Distribution dashboard',
    image: '/media/img/inventory-boxes.jpg',
    hero: '/media/img/inventory-pallets.jpg',
    video: '/media/video/warehouse-aisle.mp4',
    poster: '/media/img/inventory-aisle.jpg',
    headline: 'Ageing, lead times and margin after freight, in one place for once.',
    summary:
      'Distribution is the industry where the spreadsheet is largest and the consequences are quickest. Ageing stock, supplier lead times and true landed margin all exist in your records; they are simply in four files that were last reconciled in March.',
    pains: [
      'Landed cost is worked out per shipment in a one-off sheet and never fed back into margin',
      'Ageing stock is reviewed quarterly, which is one quarter too late',
      'Supplier lead times are remembered rather than measured, so reorder points are guesses',
      'Customer-level profitability after freight and returns is unknown',
      'The item master has duplicates nobody dares merge',
    ],
    panels: [
      {
        title: 'Stock ageing by value',
        body: 'What is old, what it cost, and how much cash is standing in it. Ranked so the first conversation is the expensive one.',
      },
      {
        title: 'Supplier lead time, measured',
        body: 'Promised against actual, per supplier and per line, so reorder points come off evidence rather than folklore.',
      },
      {
        title: 'Margin after landed cost',
        body: 'Freight, duty and handling apportioned properly, per line and per customer, instead of estimated once a year.',
      },
      {
        title: 'Customer profitability',
        body: 'Revenue less returns, freight and payment terms. Some of your biggest accounts are not your best ones.',
      },
    ],
    faqs: [
      {
        q: 'Our item master is a mess. Is that a problem?',
        a: 'It is the work, and we scope it honestly on day 0. Duplicates and inconsistent naming are the single most common reason we quote three to four weeks instead of two. We would rather say that before the invoice.',
      },
      {
        q: 'Can it handle consignment stock?',
        a: 'Yes, as its own location type with its own ageing. What software cannot do is make a partner report honestly and on time; it can only make the gap visible.',
      },
      {
        q: 'Does it do purchase ordering?',
        a: 'Purchasing lives in the database with the rest, so a reorder suggestion carries the lead-time evidence behind it. Whether you approve inside BIYY or in your accounting package is your call.',
      },
    ],
  }),
  industry({
    slug: 'ecommerce',
    name: 'E-commerce operators',
    short: 'E-commerce',
    product: 'Commerce dashboard',
    image: '/media/img/web-listing.jpg',
    hero: '/media/img/inventory-packing.jpg',
    video: '/media/video/inventory-packing.mp4',
    poster: '/media/img/inventory-packing-still.jpg',
    headline: 'Marketplace, storefront and warehouse reading from the same table.',
    summary:
      'Selling across a storefront and two marketplaces means three dashboards, three fee structures and one very tired person exporting CSVs on Sunday. We consolidate the channels into one database so contribution per order is a column rather than a project.',
    pains: [
      'Each channel has its own report, its own fee model and its own idea of what a sale is',
      'True contribution per order, after fees, shipping and returns, is never calculated',
      'Returns are handled operationally but never fed back into product-level margin',
      'Ad spend sits in another tab and is compared to revenue rather than contribution',
      'Stock is committed on two channels at once because the counts are copies',
    ],
    panels: [
      {
        title: 'Contribution per order',
        body: 'After channel fees, shipping, packaging and the return rate for that line. The number that decides whether to keep selling something.',
      },
      {
        title: 'Channels side by side',
        body: 'Normalised so a marketplace order and a storefront order are actually comparable, fees and all.',
      },
      {
        title: 'Returns by reason and by line',
        body: 'Which products come back, why, and what that does to their margin once handling is counted.',
      },
      {
        title: 'One available-to-sell figure',
        body: 'A single committed and available count that every channel reads, rather than three copies drifting apart.',
      },
    ],
    faqs: [
      {
        q: 'Which marketplaces can you read from?',
        a: 'The major regional ones export on a schedule and several have APIs. We confirm exactly which of yours is a feed and which is a file on the walkthrough, before quoting.',
      },
      {
        q: 'Do you replace our 3PL or shipping tool?',
        a: 'No. We read from them. The value is having fees, shipping and returns in the same table as the order, which is the only way contribution comes out right.',
      },
      {
        q: 'Can it push stock back to the channels?',
        a: 'For platforms with a write API, yes. Where a platform only allows an embed or a file, we say so before you buy rather than after.',
      },
    ],
  }),
  industry({
    slug: 'workshops',
    name: 'Workshops & garages',
    short: 'Workshops',
    product: 'Workshop dashboard',
    image: '/media/img/inventory-picking.jpg',
    hero: '/media/img/web-workshop.jpg',
    video: '/media/video/workshop-repair.mp4',
    poster: '/media/img/workshop-repair-still.jpg',
    headline: 'Jobs, bays and parts, tracked from the floor rather than from a clipboard.',
    summary:
      'A workshop knows what came in and what went out. What it rarely knows is how long each job actually took, which quotes turned into work, and whether the parts markup survived contact with reality. All three are recoverable from what the floor already writes down.',
    pains: [
      'Job cards are paper, so labour hours are estimated at invoicing rather than recorded',
      'Quotes that never converted are not tracked, so nobody knows the win rate',
      'Parts issued to a job and parts bought for a job are reconciled by memory',
      'Bay utilisation is invisible until a customer is turned away',
      'Warranty and rework costs get absorbed into general labour and vanish',
    ],
    panels: [
      {
        title: 'Jobs in progress by bay',
        body: 'What is on each bay, how long it has been there, and what it is waiting on. The morning stand-up, on a screen.',
      },
      {
        title: 'Quoted against actual',
        body: 'Estimated hours and parts versus what the job really consumed, so the next quote is priced off evidence.',
      },
      {
        title: 'Quote conversion',
        body: 'What was quoted, what was won, what went quiet, and who followed up. Usually the fastest money in the building.',
      },
      {
        title: 'Rework and warranty',
        body: 'Separated from general labour, by technician and by job type, because it is only fixable once it is visible.',
      },
    ],
    faqs: [
      {
        q: 'Will the technicians actually use it?',
        a: 'They enter a job start, a job stop and parts used, on a phone, one-handed. If it takes longer than the paper job card, we have built it wrong and we will say so in the pilot week.',
      },
      {
        q: 'Can it produce invoices?',
        a: 'It produces the priced job. Whether the invoice is raised in BIYY or handed to your accounting package depends on which one you run, and we confirm that on the walkthrough.',
      },
      {
        q: 'We do fleet contracts as well as retail work. Does that fit?',
        a: 'Yes, as separate customer types with their own rates and reporting. Mixed retail and contract work is one of the clearest cases for a database over a spreadsheet.',
      },
    ],
  }),
  industry({
    slug: 'robotics',
    name: 'Robotics & automation',
    short: 'Robotics',
    product: 'Fleet dashboard',
    image: '/media/img/robotics-unit.jpg',
    hero: '/media/img/robotics-unit.jpg',
    video: '/media/video/robotics-arm.mp4',
    poster: '/media/img/robotics-arm-still.jpg',
    headline: 'Uptime, service intervals and spares for a fleet you deployed, not a lab.',
    summary:
      'Robotics companies build excellent telemetry and then run the commercial side of the fleet on a spreadsheet: which unit is at which customer, what is under warranty, what spares are committed, and which model line is eating the service budget. That half deserves a database too.',
    pains: [
      'Unit-to-customer assignment lives in a sheet that only one engineer maintains',
      'Service intervals are tracked per customer rather than per unit, so units get missed',
      'Warranty exposure by model line is unknown until a claim cluster appears',
      'Spares are ordered reactively because consumption is never modelled',
      'Telemetry answers technical questions beautifully and commercial questions not at all',
    ],
    panels: [
      {
        title: 'Fleet by unit and site',
        body: 'Every serial, where it is, what firmware it is on, and who owns the contract. One record per unit, with history.',
      },
      {
        title: 'Service due and overdue',
        body: 'Per unit rather than per account, so a customer with nine machines does not hide the one that is late.',
      },
      {
        title: 'Failures by model line',
        body: 'Which revision fails, at what age, doing what. The input to both engineering and the warranty provision.',
      },
      {
        title: 'Spares consumption and cover',
        body: 'What the installed base will need next quarter against what is on the shelf, instead of an urgent order every time.',
      },
    ],
    faqs: [
      {
        q: 'Can it ingest our telemetry?',
        a: 'It can ingest the summarised signals that matter commercially: hours run, fault codes, firmware version. We are not replacing your time-series stack, and we will say so rather than pretend otherwise.',
      },
      {
        q: 'We are pre-revenue on some deployments. Is this too early?',
        a: 'Possibly, and we would tell you. The case gets strong at roughly the point where more than one person needs to know where a unit is and what it is owed.',
      },
      {
        q: 'Do you handle contracts and billing schedules?',
        a: 'The contract, its term and what it entitles the customer to are records like any other, which is what makes warranty exposure calculable. Invoicing itself stays in your accounting package.',
      },
    ],
  }),
  industry({
    slug: 'data-teams',
    name: 'Data & analytics teams',
    short: 'Data teams',
    product: 'Operations dashboard',
    image: '/media/img/data-closeup.jpg',
    hero: '/media/img/data-dashboard.jpg',
    video: '/media/video/data-analytics.mp4',
    poster: '/media/img/data-analytics-still.jpg',
    headline: 'For the analyst who is currently the database.',
    summary:
      'Some businesses already have someone doing this: one capable person holding a model together with formulas, exports and a weekly ritual. This is the version where that person stops being the single point of failure and starts doing the analysis they were hired for.',
    pains: [
      'One person owns the model, and the business stops if they take leave',
      'Half the working week goes on assembling inputs rather than answering questions',
      'Every new question means a new file, and the old files never get retired',
      'No lineage: when a number is queried, the answer is a reconstruction',
      'Nothing is testable, so an error is found by whoever notices it downstream',
    ],
    panels: [
      {
        title: 'Modelled tables, not exports',
        body: 'The relationships live in the schema, so a question is a query rather than a rebuild of last month’s workbook.',
      },
      {
        title: 'Lineage on every figure',
        body: 'Where a number came from, what fed it, who changed the input and when. Queries get answered in minutes.',
      },
      {
        title: 'Scheduled instead of ritual',
        body: 'The recurring pack builds itself. The analyst arrives to review it, not to assemble it.',
      },
      {
        title: 'Exports that stay exports',
        body: 'Excel and CSV out of every view, for the one-off work Excel is genuinely good at, without it becoming the source again.',
      },
    ],
    faqs: [
      {
        q: 'We already have Power BI. What does this add?',
        a: 'A trustworthy source. A BI tool draws charts over whatever it is given and inherits every duplicate and stale export. We build the database underneath it, and you are welcome to keep pointing your existing tool at it.',
      },
      {
        q: 'Can our analyst query it directly?',
        a: 'Yes. It is a real database with real tables, not a closed reporting product. Read access and a schema they can reason about are part of the handover.',
      },
      {
        q: 'Is this a data warehouse?',
        a: 'No, and we will say so plainly. This is an operational database and reporting layer for an SME. If you genuinely need a warehouse with streaming pipelines, we will tell you and name someone who does that work.',
      },
    ],
  }),
  industry({
    slug: 'tuition',
    name: 'Tuition centres',
    short: 'Tuition',
    product: 'Tuition dashboard',
    image: '/media/img/tuition-class.jpg',
    hero: '/media/img/tuition-desk.jpg',
    video: '/media/video/tuition-class.mp4',
    poster: '/media/img/tuition-class-still.jpg',
    headline: 'Enrolment, attendance and fees, class by class, term by term.',
    summary:
      'A centre’s whole economics sit in three numbers per class: how many enrolled, how many still turn up, and how many have paid. Those live in a register, a WhatsApp group and a fees workbook. One database makes the term visible while it is still running.',
    pains: [
      'Attendance drift is noticed at the end of term, when the enrolment has already gone',
      'Fee arrears are chased from a workbook that is one person’s responsibility',
      'Class-level profitability, after tutor cost and room, is never calculated',
      'Tutor and room clashes are resolved by memory across branches',
      'Retention between terms is a feeling rather than a list of names',
    ],
    panels: [
      {
        title: 'Attendance drift by class',
        body: 'Enrolled against actually attending, week over week, so a class that is quietly emptying is caught in week four.',
      },
      {
        title: 'Fees due and overdue',
        body: 'By student and by class, with what was chased and when, instead of a separate arrears workbook.',
      },
      {
        title: 'Class contribution',
        body: 'Fees less tutor cost and room, per class, so the timetable for next term is built on evidence.',
      },
      {
        title: 'Term-to-term retention',
        body: 'Who came back, who did not, and which class they were in. A list with names in it.',
      },
    ],
    faqs: [
      {
        q: 'Can it handle a tutor and a room being needed at once?',
        a: 'Yes. A class holds every resource it requires or it does not exist. Modelling that as a constraint in the database is what stops the second calendar on the whiteboard.',
      },
      {
        q: 'Do parents get access?',
        a: 'A parent view of attendance and fees for their own child only is a standard option, built on the same permissions as everything else.',
      },
      {
        q: 'We run three branches with shared tutors. Does that work?',
        a: 'That is one of the cases a spreadsheet handles worst and a database handles as a matter of course, because a tutor is one record shared across branches rather than a name typed into three files.',
      },
    ],
  }),
  industry({
    slug: 'property',
    name: 'Property agencies',
    short: 'Property',
    product: 'Agency dashboard',
    image: '/media/img/property-agent.jpg',
    hero: '/media/img/property-tour.jpg',
    video: '/media/video/property-viewing.mp4',
    poster: '/media/img/property-viewing-still.jpg',
    headline: 'Listing age, viewing conversion and commission, without a shared drive.',
    summary:
      'Agencies run on a pipeline that lives in each agent’s phone. The office sees the closings and very little of what led to them. One database turns listings, viewings and offers into a pipeline the principal can actually manage.',
    pains: [
      'Listing age is only noticed when a landlord calls to complain',
      'Viewing-to-offer conversion per agent is unknown, so coaching is guesswork',
      'Commission splits are calculated in a workbook and disputed at payout',
      'Leads from the website and from portals land in different inboxes and get lost',
      'When an agent leaves, their pipeline leaves with their phone',
    ],
    panels: [
      {
        title: 'Listings by age and price band',
        body: 'What has been on too long, at what price, with whom. The prompt for the price-reduction conversation.',
      },
      {
        title: 'Viewings to offers, by agent',
        body: 'Activity and conversion side by side, so a busy agent and an effective agent stop being the same number.',
      },
      {
        title: 'Pipeline that belongs to the agency',
        body: 'Leads, viewings and offers as records with owners and history, not as messages in somebody’s phone.',
      },
      {
        title: 'Commission, calculated',
        body: 'Splits and referral shares computed from the deal record, so payout is a report rather than a negotiation.',
      },
    ],
    faqs: [
      {
        q: 'Is this a CRM?',
        a: 'It covers the operational pipeline an agency actually manages: listings, viewings, offers and commission. If you want marketing automation on top, we integrate rather than rebuild it.',
      },
      {
        q: 'Can agents update from their phone at a viewing?',
        a: 'That is the design assumption. If updating a viewing outcome takes longer than a WhatsApp message, it will not get done and the data dies.',
      },
      {
        q: 'What happens when an agent leaves?',
        a: 'Their records stay with the agency and get reassigned. That is most of the reason principals buy this.',
      },
    ],
  }),
  industry({
    slug: 'multi-branch',
    name: 'Multi-branch groups',
    short: 'Multi-branch',
    product: 'Group dashboard',
    image: '/media/img/team-meeting.jpg',
    hero: '/media/img/team-meeting.jpg',
    video: '/media/video/team-meeting.mp4',
    poster: '/media/img/team-meeting-still.jpg',
    headline: 'One group view, real permissions, and no branch keeping its own copy.',
    summary:
      'Whatever the trade, the multi-branch problem is the same: every location keeps a private version of the truth, and head office assembles a group picture by hand each week. This is the layout for the person who has to answer for all of them.',
    pains: [
      'The weekly group pack is assembled manually from branch submissions',
      'Branches submit at different times and in different formats',
      'A branch that is drifting is spotted a month late, at the review meeting',
      'Permissions are all-or-nothing, so either everyone sees everything or head office is the bottleneck',
      'Comparing branches fairly is impossible because each records things slightly differently',
    ],
    panels: [
      {
        title: 'Branch league, like for like',
        body: 'The same definitions everywhere, so a comparison is a comparison rather than an argument about method.',
      },
      {
        title: 'Group down to one branch',
        body: 'A single drill path from the group figure to the record that produced it, without opening another file.',
      },
      {
        title: 'Exceptions, not submissions',
        body: 'What moved outside its normal range this week, by branch, so the review starts with the four that need attention.',
      },
      {
        title: 'Permissions that match the org chart',
        body: 'Branch, region and group roles, enforced per record and logged, so access stops being a spreadsheet password.',
      },
    ],
    faqs: [
      {
        q: 'Our branches are in different trades. Does one dashboard work?',
        a: 'The group layer is shared and each trade keeps its own operational screens. That split is a schema decision we make on day 0, and it is the main thing the walkthrough is for.',
      },
      {
        q: 'How is this priced across many branches?',
        a: 'Flat monthly per outlet, with no per-transaction charge. A new branch is a line on the bill, not a project.',
      },
      {
        q: 'Can head office stop branches editing shared data?',
        a: 'Yes. Shared references such as price lists are read-only to branches by default, which is usually the single change that ends the eleven-versions problem.',
      },
    ],
  }),
];

export const pillars = [
  {
    title: 'A database, not a bigger file',
    body: 'Tables, relationships and constraints underneath every screen. Two people can work at once, and a wrong entry is refused rather than quietly stored.',
  },
  {
    title: 'Shaped to your industry',
    body: 'A clinic and a distributor measure different things. We build the screens around the decisions your business makes weekly, not around a demo that had to suit everyone.',
  },
  {
    title: 'Runs on a phone',
    body: 'Entering a record at the counter, the bay or the front desk. If your team can use WhatsApp, they can use BIYY. No training week required.',
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
    body: 'Guided onboarding, migration out of the spreadsheets you have today, and a human on WhatsApp for the first month.',
  },
];

export const stats = [
  { value: 2, suffix: ' wks', label: 'Typical time to go live' },
  { value: 1, suffix: '', label: 'Version of the truth, instead of nine copies of a file' },
  { value: 12, suffix: 'h', label: 'Admin hours saved weekly' },
  { value: 0, suffix: '', label: 'Per-transaction fees, exit fees or annual lock-in' },
];

export const comparison = [
  {
    option: 'Spreadsheets & WhatsApp',
    cost: 'Free, until it is not',
    speed: 'Instant',
    verdict: 'Breaks at the second user. No audit trail, no live figures, and four copies of the same file.',
  },
  {
    option: 'A BI tool over your spreadsheets',
    cost: 'One subscription, plus your time',
    speed: '2–6 weeks',
    verdict: 'Prettier charts over the same broken source. It inherits every duplicate and every stale export.',
  },
  {
    option: 'Full ERP suite',
    cost: 'Six figures + consultants',
    speed: '9–18 months',
    verdict: 'Built for enterprise. You pay for 90% of modules you will never open.',
  },
  {
    option: 'BIYY Tech',
    cost: 'Flat monthly per outlet',
    speed: '2 weeks',
    verdict: 'A real database and a dashboard built for your industry, sized for an SME.',
    highlight: true,
  },
];

export const testimonials = [
  {
    quote:
      'Our Monday report used to take one person until lunchtime, stitching four exports together. It is now on the screen before she sits down.',
    name: 'Operations lead',
    role: 'Nine-outlet retail group',
    image: '/media/img/retail-counter.jpg',
  },
  {
    quote:
      'We had eleven versions of the same price list. Now there is one, and the branches cannot quietly keep their own.',
    name: 'Founder',
    role: 'Wholesale distributor',
    image: '/media/img/inventory-boxes.jpg',
  },
  {
    quote:
      'The dashboard is laid out the way a clinic actually thinks, not the way a generic template does. Nobody needed training on it.',
    name: 'Clinic manager',
    role: 'Dental practice, two branches',
    image: '/media/img/clinic-lobby.jpg',
  },
  {
    quote:
      'The spreadsheet had one author and no documentation. When she left we were stuck. That cannot happen again.',
    name: 'Centre director',
    role: 'Tuition centre',
    image: '/media/img/tuition-desk.jpg',
  },
];

export const rollout = [
  {
    step: '01',
    when: 'Day 0',
    title: 'Walkthrough',
    body: 'Thirty minutes on your actual floor or front desk, with your real spreadsheets open. We map what gets recorded, by whom, and where it goes afterwards.',
    owner: 'You + us, on site',
    image: '/media/img/team-meeting.jpg',
  },
  {
    step: '02',
    when: 'Days 1–4',
    title: 'Schema & migration',
    body: 'We design the tables around how you actually record work, then import what you have. Anything ambiguous comes back to you as a decision rather than a guess.',
    owner: 'Us, with your data',
    image: '/media/img/data-laptop.jpg',
  },
  {
    step: '03',
    when: 'Days 5–10',
    title: 'Pilot team',
    body: 'One branch or one team runs live for a week on the real dashboard. They break it, we fix it, and the layout hardens around what they actually open.',
    owner: 'One team, real records',
    image: '/media/img/data-office.jpg',
  },
  {
    step: '04',
    when: 'Days 11–14',
    title: 'Rollout & handover',
    body: 'Everyone else goes live, staff are trained on their own devices, and you keep a direct WhatsApp line for a month.',
    owner: 'Every branch, your team',
    image: '/media/img/team-office.jpg',
  },
];

export const faqs = [
  {
    q: 'How long does it actually take to go live?',
    a: 'Two weeks is typical when the source spreadsheets are reasonably consistent. Businesses with years of accumulated inconsistency in them run three to four. We tell you which one you are during the walkthrough, before you pay anything.',
  },
  {
    q: 'Is this just a dashboard, or does it replace the spreadsheet?',
    a: 'It replaces it. The dashboard is the visible half; the database underneath is the part that matters. A dashboard sitting on a file somebody still updates by hand goes stale within a fortnight, so we do not build those.',
  },
  {
    q: 'What happens to my existing data?',
    a: 'We migrate it. Every sheet, tab and column you actually use. Duplicates, inconsistent naming and columns that changed meaning halfway down get flagged for you to decide, rather than silently guessed at.',
  },
  {
    q: 'Can we still use Excel?',
    a: 'Yes, for one-off analysis, and every view exports to Excel or CSV in a click. Excel stops being where the data lives and becomes where somebody occasionally takes a copy.',
  },
  {
    q: 'Can it talk to my accounting system?',
    a: 'Yes. We export in formats standard SME accounting packages accept, and we have direct integrations on the roadmap for the common Malaysian and Singaporean systems. Tell us yours during the walkthrough.',
  },
  {
    q: 'What if we outgrow it?',
    a: 'Full data export, any time, no exit fee, schema included. We would rather you leave cleanly than stay unhappy, and it keeps us honest about earning the renewal.',
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
    role: 'Co-Founder of BIYY Tech',
    credential:
      'Co-founded BIYY Tech and still runs rollouts on site. Has sat with the owner’s own spreadsheets open at retail, wholesale and clinic groups across Malaysia and Singapore since 2021.',
  },
  yeWen: {
    name: 'Ye Wen',
    role: 'Co-Founder of BIYY Tech',
    credential:
      'Co-founded BIYY Tech after a decade building operations software, including the data platform behind a 40-outlet grocery chain.',
  },
  yongHan: {
    name: 'Yong Han',
    role: 'Co-Founder of BIYY Tech',
    credential:
      'Co-founded BIYY Tech and owns the schema design and migration work. Spends most weeks reconciling spreadsheets that stopped agreeing with each other.',
  },
};

export const editorialPolicy = {
  summary:
    'Every figure on this site comes from anonymised, aggregated data across BIYY Tech deployments, or it is labelled as an estimate. Posts name their author, carry a review date, and state the sample behind any claim.',
  contact: 'corrections@yiy.tech',
};

export const posts = [
  {
    slug: 'when-a-spreadsheet-stops-being-enough',
    title: 'When a spreadsheet stops being enough for a small business',
    excerpt:
      'Spreadsheets are excellent, right up until four specific things happen. Here is how to tell which side of the line you are on, and what it costs to cross it late.',
    category: 'Dashboards',
    date: '2026-08-04',
    updated: '2026-08-18',
    readingTime: '7 min',
    image: '/media/img/data-laptop.jpg',
    imageAlt: 'An operations spreadsheet open on a laptop in a back office',
    author: authors.yongHan,
    reviewer: authors.ianChin,
    answer:
      'A spreadsheet stops being enough when more than one person needs to write to it at the same time, when a wrong entry cannot be caught at the point of typing, when nobody can say who changed a figure, or when answering a new question means rebuilding the file. Any one of those is survivable. Two together is where SMEs start losing a day a week. In the migrations we have run, businesses crossed the line months before they admitted it, and the cost of waiting was the cleanup, not the software.',
    takeaways: [
      'Concurrency is the first wall. The moment two people edit, you are maintaining copies rather than data.',
      'A spreadsheet cannot refuse a bad entry. A database can, and that is most of the accuracy difference.',
      'If a new question needs a new file, your structure is wrong, not your effort.',
      'The real migration cost is cleaning years of inconsistency, so leaving early is cheaper than leaving late.',
    ],
    sections: [
      {
        heading: 'Spreadsheets are not the problem',
        paragraphs: [
          'We say this on every walkthrough, because owners expect a software company to open by insulting the thing they built.',
          'A spreadsheet a business has run on for six years is not a mistake. It is the clearest possible specification of what that business needs, written by the person who understands it best, and it usually took no budget and no meetings. We read it before we design anything.',
          'The question is not whether it was a good idea. It is whether it is still the right shape for the number of people now depending on it.',
        ],
      },
      {
        heading: 'Wall one: more than one person needs to write',
        paragraphs: [
          'One author is fine forever. Two is where it breaks, and it breaks quietly.',
          'Somebody takes a copy to work on at the branch. Somebody else edits the shared one. Both are correct, and now neither is. The business does not notice on the day; it notices three weeks later when two reports disagree and nobody can reconstruct which version diverged.',
          'Cloud spreadsheets soften this and do not solve it. Simultaneous editing is not the same as a record that only exists once.',
        ],
      },
      {
        heading: 'Wall two: nothing can be refused',
        paragraphs: [
          'A spreadsheet cell will accept a supplier name spelled three ways, a date in 2062, and a quantity with a stray zero. It has no opinion.',
          'A database has constraints. A duplicate customer can be rejected at entry, a date outside a sane range can be refused, a required field can actually be required. Most of the accuracy difference people attribute to software is this, and only this.',
          'The cost of the missing constraint is never paid at the moment of the typo. It is paid at month end by whoever has to explain the number.',
        ],
      },
      {
        heading: 'Wall three: nobody can say who changed it',
        paragraphs: [
          'Ask any SME owner whether they can tell who changed a figure in their operations spreadsheet last Tuesday and what it was before. Almost none can.',
          'This matters less for blame than for repair. Without history, a wrong figure has to be re-derived from scratch rather than reverted, and the person doing that is usually the person you least want spending an afternoon on it.',
        ],
      },
      {
        heading: 'Wall four: a new question needs a new file',
        paragraphs: [
          'This is the one owners recognise fastest. Somebody asks which customers stopped ordering, or which lines actually lose money after freight, and the honest answer is that it would take a week to work out.',
          'That is a structural signal, not an effort problem. The data exists; it is simply shaped for reading rather than for asking. Once the same records sit in properly related tables, that question is a filter, not a project.',
        ],
      },
      {
        heading: 'How we measured this',
        paragraphs: [
          'The observations above come from migration notes taken across 23 BIYY Tech deployments between January 2024 and June 2026, all SMEs with two to twelve sites in Malaysia and Singapore, every one of them arriving from spreadsheets.',
          'For each, we recorded the number of source files, how many people wrote to them, and how long the data cleanup took as a share of total project time. Cleanup averaged just under half the migration effort, and it correlated with how long the business had been past the concurrency wall, not with company size.',
          'This is descriptive data from our own customers, who are self-selected by having decided to leave spreadsheets. It is not a random sample of SMEs.',
        ],
      },
      {
        heading: 'Where this advice does not apply',
        paragraphs: [
          'A single-person business with one file and no branches should keep the file. There is nothing to fix, and we say so on the walkthrough rather than selling something.',
          'Businesses whose data genuinely is a document rather than records, quotations with heavy bespoke formatting, for instance, are often better served by keeping the document and structuring only what surrounds it.',
          'And a business in the middle of a busy season should wait. Migration takes attention from the people who can least spare it, which is a scheduling problem rather than a technical one.',
        ],
      },
    ],
    faq: [
      {
        q: 'When should a small business move off spreadsheets?',
        a: 'When more than one person needs to write to the same data, when bad entries cannot be caught at the point of typing, when nobody can say who changed a figure, or when answering a new question requires building a new file. One of those is survivable; two together usually costs a day a week.',
      },
      {
        q: 'Is a cloud spreadsheet enough to fix multi-user editing?',
        a: 'It helps but it does not solve it. Simultaneous editing removes the emailed copy; it does not add constraints, relationships or a per-record history, which is where the accuracy comes from.',
      },
      {
        q: 'Does moving to a database mean giving up Excel?',
        a: 'No. Excel remains useful for one-off analysis, and every view should export to it. What changes is that Excel is no longer where the data lives.',
      },
    ],
    sources: [
      {
        label: 'BIYY Tech migration notes, 2024 to 2026',
        note: '23 SME deployments in Malaysia and Singapore, all migrating from spreadsheets. Anonymised and aggregated.',
      },
      {
        label: 'On-site process audits conducted during rollout',
        note: 'Direct observation of who records what, on which file, at customer sites.',
      },
    ],
  },
  {
    slug: 'what-a-broken-spreadsheet-costs',
    title: 'What a broken spreadsheet actually costs a small business',
    excerpt:
      'Owners price it as a bit of wasted time. The full cost includes the rebuild, the decision made on a stale number, and the person who cannot be replaced. Here is how to work out your own figure.',
    category: 'Dashboards',
    date: '2026-07-21',
    updated: '2026-08-12',
    readingTime: '6 min',
    image: '/media/img/data-office.jpg',
    imageAlt: 'A manager rebuilding a weekly report from several exports',
    author: authors.yeWen,
    reviewer: authors.yongHan,
    answer:
      'The cost of an operations spreadsheet is not the licence, it is four things: the recurring hours spent rebuilding reports, the decisions made on numbers that were already old, the cleanup when two copies disagree, and the key-person risk of a file only one employee understands. For a typical SME running two to twelve sites, the recurring share alone lands between four and twelve hours a week of someone senior. Work it out with your own numbers before accepting anyone’s benchmark, including ours.',
    takeaways: [
      'Count the rebuild hours first: they are the easiest to measure and usually the largest recurring cost.',
      'A stale number is more expensive than a missing one, because people act on it with confidence.',
      'Reconciling two diverged copies costs more than the original work did, every time.',
      'Key-person risk on a spreadsheet is a real balance-sheet item, and owners consistently price it at zero.',
    ],
    sections: [
      {
        heading: 'The four components of the real cost',
        paragraphs: [
          'Start with the rebuild. Somebody assembles the weekly picture out of exports, tabs and copy-paste. That time recurs whether or not anything interesting happened.',
          'Then the staleness. A figure that was true on Tuesday gets used to make a decision on Friday. Nobody records that as a cost, but the reorder that was too big, or the shift that was overstaffed, was paid for.',
          'Third, reconciliation. When two copies diverge, working out which is right costs more than producing either did, and it usually falls to the person who understands the file best, which is the person you can least spare.',
          'Fourth, key-person risk. One employee understands the formulas. If they leave, the business inherits a file nobody dares change, and every subsequent decision routes around it.',
        ],
      },
      {
        heading: 'A worked example',
        paragraphs: [
          'Take an operations lead on roughly 6,000 ringgit a month, so about 35 ringgit an hour fully loaded.',
          'Six hours a week rebuilding reports is around 210 ringgit a week, or roughly 10,900 a year. Add one reconciliation incident a month at four hours, another 1,700 a year. That is 12,600 ringgit before a single wrong decision is counted.',
          'Now price one stale-number decision a quarter at whatever a bad reorder or an overstaffed weekend costs you. Most owners we have done this with put that between 1,000 and 5,000 ringgit each.',
          'Run the arithmetic with your own numbers. The ratio moves a lot with how senior the person doing the rebuild is.',
        ],
      },
      {
        heading: 'Why the rebuild hours are the ones to attack first',
        paragraphs: [
          'They are measurable without argument. Ask the person who produces the report how long it takes and you will get a number the same day.',
          'They are also recurring, which means the saving compounds, and they are usually concentrated in one or two people whose time has the highest opportunity cost in the business.',
          'If you fix nothing else, fixing the rebuild converts a weekly ritual into a screen that is already correct when somebody opens it.',
        ],
      },
      {
        heading: 'What we measured, and what we did not',
        paragraphs: [
          'Across 23 BIYY Tech deployments between January 2024 and June 2026, customers reported a median of six hours a week spent assembling recurring reports before migration, with a range of two to sixteen.',
          'The figure is self-reported at the walkthrough and again at the one-month debrief, so it carries the usual bias of people estimating their own time. We did not observe and time the work directly.',
          'We also did not attempt to measure the cost of decisions made on stale figures. Too many variables, and any number we produced would have been a guess wearing a decimal point.',
        ],
      },
      {
        heading: 'When the honest answer is to keep the spreadsheet',
        paragraphs: [
          'If one person maintains the file, nobody else writes to it, and the reports take under an hour a week, the arithmetic does not support replacing it. We have told customers this and walked away from the work.',
          'The case changes at the second writer, the second site, or the first time a new question takes a week to answer.',
        ],
      },
    ],
    faq: [
      {
        q: 'How much does a spreadsheet-based reporting process cost an SME?',
        a: 'The measurable recurring share is the rebuild time. Across our deployments the median was six hours a week of a senior person before migration, with a range of two to sixteen. On a fully loaded 35 ringgit an hour that is roughly 11,000 ringgit a year, before reconciliation and bad-decision costs.',
      },
      {
        q: 'What is the biggest hidden cost of running on spreadsheets?',
        a: 'Key-person risk. One employee understands the formulas, and if they leave the business inherits a file nobody dares change. Owners almost always price this at zero.',
      },
      {
        q: 'Is it cheaper to fix the spreadsheet than replace it?',
        a: 'Sometimes. If there is one writer and reports take under an hour a week, tidy the file. The arithmetic changes at the second writer or the second site.',
      },
    ],
    sources: [
      {
        label: 'BIYY Tech deployment data, 2024 to 2026',
        note: '23 SME deployments, Malaysia and Singapore. Self-reported report-assembly time at walkthrough and one-month debrief.',
      },
      {
        label: 'Post-rollout customer debriefs',
        note: 'Structured interviews conducted one month after handover.',
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
      'Per-transaction pricing charges customers more as they grow, for software that has not changed. Worse, it gives them a reason to route records around the system to manage the bill, which makes the database unreliable. BIYY Tech charges a flat monthly fee per outlet so that the price tracks how much of the business the system covers, not how busy the business happens to be.',
    takeaways: [
      'Usage pricing creates an incentive to keep records out of your system of record. That is fatal for a database.',
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
          'That is annoying but survivable. The real damage is behavioural. Once a business is watching a per-record meter, somebody eventually suggests keeping the small stuff in a spreadsheet, or batching entries to reduce the count.',
          'At that moment the database becomes fiction. A system that does not see every record is not a system of record. It is an expensive estimate, and you have just paid to recreate the problem you left.',
        ],
      },
      {
        heading: 'What flat per outlet gets right',
        paragraphs: [
          'It prices the thing we actually sell: coverage. One site on the system costs the same whether it has a quiet month or its best quarter ever.',
          'It is predictable, which matters more to a twelve-site business than a clever pricing curve does. Finance can forecast it. Nobody has to explain a spike.',
          'And it removes every incentive to hide records, which keeps the data trustworthy enough to build forecasting on later.',
        ],
      },
      {
        heading: 'What it costs us',
        paragraphs: [
          'We lose money on the customers who grow fastest, and those are exactly the customers we most want. A business going from four sites to six pays us for two more while their record volume might triple.',
          'We have chosen to take that hit rather than build a pricing model that fights the product. If that becomes unsustainable we will change it openly and explain why, rather than quietly introducing overage tiers.',
        ],
      },
      {
        heading: 'How to evaluate any vendor on this',
        paragraphs: [
          'Ask three questions before you sign. What happens to my bill if volume doubles. What happens if I add a site. What happens at renewal if I have grown.',
          'You are not looking for the cheapest answer. You are looking for an answer that does not create a reason to keep data out of the system.',
        ],
      },
    ],
    faq: [
      {
        q: 'How does BIYY Tech charge for its software?',
        a: 'A flat monthly fee per outlet, with no per-transaction charge, no implementation fee and no annual lock-in required to start. The exact figure depends on site count and which products you run, and is quoted during the walkthrough.',
      },
      {
        q: 'Why is per-transaction pricing bad for an operations database?',
        a: 'It gives the business a financial reason to keep records out of the system, which breaks the single source of truth the software exists to maintain.',
      },
    ],
    sources: [
      {
        label: 'BIYY Tech pricing policy',
        note: 'Published terms, flat monthly per outlet, effective 2024 to present.',
      },
    ],
  },
  {
    slug: 'industry-dashboards-versus-generic-ones',
    title: 'Why a generic dashboard gets ignored, and an industry one does not',
    excerpt:
      'Every vendor ships a dashboard. Most go unopened by week three. The difference is not chart quality, it is whether the screen matches a decision somebody actually makes.',
    category: 'Dashboards',
    date: '2026-06-16',
    updated: '2026-07-15',
    readingTime: '6 min',
    image: '/media/img/data-dashboard.jpg',
    imageAlt: 'An operations dashboard open on a screen behind a service counter',
    author: authors.ianChin,
    reviewer: authors.yeWen,
    answer:
      'A dashboard gets used when every panel on it is attached to a decision somebody makes on a known rhythm, and ignored when it shows aggregates the owner already knew. Because those decisions differ by industry, a generic layout is wrong for everybody in a slightly different way. A distributor opens ageing and lead times; a clinic opens utilisation and recalls; a tuition centre opens enrolment and attendance. The layout should start from that list, not from a chart library.',
    takeaways: [
      'A panel that changes no decision is decoration, and decoration trains people to stop looking.',
      'Start from the weekly decisions, then work backwards to the panels. Never the other way round.',
      'Industry differences are structural, not cosmetic: they change which tables you need, not just which charts.',
      'Adoption is measurable. If the screen is not open by 9am, the layout is wrong.',
    ],
    sections: [
      {
        heading: 'The dashboard that gets closed by week three',
        paragraphs: [
          'It usually opens with revenue. A big number, a line going up, a month-on-month comparison.',
          'The owner already knew that number. They watched it happen. Nothing on the screen tells them to do anything differently this week, so within a fortnight the tab stops being opened, and the business goes back to the spreadsheet it trusts.',
          'The failure is not the chart. It is that nobody asked what decision the panel was for.',
        ],
      },
      {
        heading: 'Start from the decisions, in order of rhythm',
        paragraphs: [
          'We ask the same question at every walkthrough: what do you decide every week, and what do you look at to decide it? The answers are short, specific and almost never revenue.',
          'Order those decisions by how often they recur and how much money moves when they go wrong. That ordering is the layout. The most frequent, highest-consequence decision gets the top-left of the screen, and everything else earns its place below.',
          'If a panel cannot be attached to a decision on that list, it does not ship. It can live in a report somebody opens quarterly.',
        ],
      },
      {
        heading: 'Why the difference between industries is structural',
        paragraphs: [
          'A distributor’s weekly decisions are about ageing stock, supplier lead times and margin after freight. A clinic’s are about chair utilisation, recall lists and which practitioner has gaps. A tuition centre’s are enrolment by class and attendance drift. A property agency’s are listing age and viewing-to-offer ratios.',
          'These are not the same numbers with different labels. They need different tables, different relationships and different history to be answerable at all, which is why a dashboard cannot be made industry-specific after the fact by rearranging tiles.',
          'This is also the honest argument against buying a general-purpose tool and configuring it yourself: the configuration you need is in the schema, and by the time you can see that, you have already loaded the data.',
        ],
      },
      {
        heading: 'How to tell whether yours is working',
        paragraphs: [
          'Two tests, both cheap. First, is it open before 9am without anyone being asked? Second, can each person name the decision their top panel is for?',
          'If the answer to either is no, the layout is wrong, and no amount of chart polish fixes it. Move the panels, or remove them.',
        ],
      },
      {
        heading: 'What we have seen in practice',
        paragraphs: [
          'Across the deployments we have run since 2024, the dashboards still in daily use at the three-month mark were consistently the ones where the first-screen panels had been chosen in the walkthrough by the person who would open them, rather than proposed by us afterwards.',
          'We report that as a pattern in our own project notes, not as a measured result. It is exactly the kind of observation that could be explained by those customers simply being more engaged from the start.',
        ],
      },
    ],
    faq: [
      {
        q: 'What makes a business dashboard actually get used?',
        a: 'Every panel on the first screen has to be attached to a decision somebody makes on a known rhythm. Aggregates the owner already knows, such as last month’s revenue, train people to stop looking.',
      },
      {
        q: 'Why do dashboards need to be industry-specific?',
        a: 'Because the weekly decisions differ by industry, and those decisions require different underlying tables and relationships. It is a schema difference, not a matter of rearranging charts.',
      },
      {
        q: 'How do I know if our dashboard is failing?',
        a: 'Check whether it is open before 9am without prompting, and whether each user can name the decision their top panel serves. If either answer is no, the layout is wrong.',
      },
    ],
    sources: [
      {
        label: 'BIYY Tech project notes, 2024 to 2026',
        note: 'First-screen panel selection and three-month usage across SME deployments in Malaysia and Singapore.',
      },
      {
        label: 'On-site walkthrough transcripts',
        note: 'Recorded answers to “what do you decide every week” at customer sites.',
      },
    ],
  },
  {
    slug: 'two-week-rollout-plan',
    title: 'A two-week rollout plan for moving an SME off spreadsheets',
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
      'A two-week rollout is realistic for an SME moving off spreadsheets when scope is fixed before the schema is designed. Day 0 is an on-site walkthrough with the real files open, days 1 to 4 are schema design and migration, days 5 to 10 are one team running live on the dashboard, and days 11 to 14 are everyone else plus handover. The main thing that extends this is source spreadsheets with years of accumulated inconsistency, which pushes the estimate to three or four weeks.',
    takeaways: [
      'Fix scope by reading the actual spreadsheets, not by running a requirements workshop.',
      'Design the schema from real data. A blank system hides the assumptions that real rows expose.',
      'Run one team live for a week. The purpose is to let them break the layout while you are still there.',
      'Train staff on the devices they will actually use, which for most SME teams means their own phones.',
    ],
    sections: [
      {
        heading: 'Day 0: the walkthrough',
        paragraphs: [
          'Thirty minutes on the actual floor, with the business’s own files open on the screen. Not a workshop and not a requirements document. We watch what gets recorded, by whom, and what happens to it afterwards.',
          'Most surprises surface here, and they are almost always human rather than technical. A tab everybody forgot existed. Two people maintaining overlapping versions without knowing. A field whose meaning changed in 2023 and was never renamed.',
          'The output is a fixed scope and an honest estimate. If the estimate is four weeks we say four weeks now, before any money changes hands.',
        ],
      },
      {
        heading: 'Days 1 to 4: schema and migration',
        paragraphs: [
          'We design the tables around how the business actually records work, then import what exists. That order matters: a schema drawn before seeing the data is a guess about a business you have met once.',
          'Anything that cannot be mapped cleanly is flagged and returned to the customer as a decision, never guessed at. A silently guessed mapping is a defect that surfaces six weeks later as a figure nobody can trace.',
          'Duplicates, three spellings of the same supplier and units that change by branch are all normal at this stage. Cleaning them is the work, and it is why this window is four days rather than one.',
        ],
      },
      {
        heading: 'Days 5 to 10: one team, live',
        paragraphs: [
          'One branch or one function goes live on the real dashboard with real records. Not a sandbox, not a parallel run.',
          'The point is to let the team break it while we are still watching. Every workaround they invent in that week is a design note. The layout hardens because it is being pushed on, not because it was reviewed carefully in advance.',
          'We resist the instinct to pick the best-run team for the pilot. The messiest one teaches you more.',
        ],
      },
      {
        heading: 'Days 11 to 14: rollout and handover',
        paragraphs: [
          'Everyone else goes live on the configuration the pilot produced. Staff are trained on their own devices, because that is what they will use at 6pm on a Saturday with one hand free.',
          'Handover includes a direct support line for the first month. Not a ticket queue. The first month is when the questions that matter get asked, and a slow answer at that point becomes a permanent workaround.',
        ],
      },
      {
        heading: 'The one thing that breaks the timeline',
        paragraphs: [
          'Source spreadsheets with years of accumulated inconsistency. Duplicate records, columns that changed meaning halfway down, three naming conventions, and merged cells hiding structure.',
          'When we see that on day 0 we quote three to four weeks, not two, and we say so before anyone has paid us. Cleaning data is real work and pretending otherwise just moves the delay to week three, when it costs more and trust is harder to recover.',
          'Everything else, including how many sites you run, tends to add days rather than weeks.',
        ],
      },
      {
        heading: 'Basis for these timings',
        paragraphs: [
          'These stages describe the standard BIYY Tech rollout as run across deployments from 2024 to 2026 for SMEs with two to twelve sites in Malaysia and Singapore.',
          'Two weeks is the typical case for reasonably consistent source data. It is not a guarantee, and it does not describe businesses arriving from several unrelated systems at once.',
        ],
      },
    ],
    faq: [
      {
        q: 'How long does it take to move an SME off spreadsheets?',
        a: 'Two weeks is typical when the source files are reasonably consistent, across two to twelve sites. Years of accumulated inconsistency in the spreadsheets extends it to three or four weeks.',
      },
      {
        q: 'Should we keep running the spreadsheets in parallel during rollout?',
        a: 'We advise against it. Parallel running splits attention and lets staff avoid the new process. One team running live produces better information in less time.',
      },
      {
        q: 'What is the most common cause of rollout delay?',
        a: 'Data cleanup. Duplicate records and inconsistent naming in the source spreadsheets. It is real work and it should be scoped honestly before the project starts.',
      },
    ],
    sources: [
      {
        label: 'BIYY Tech rollout records, 2024 to 2026',
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
      'You do not need a data warehouse. You need four answers on a Monday morning, and the records you already keep contain them, provided the keeping is trustworthy.',
    category: 'Data',
    date: '2026-05-09',
    updated: '2026-07-22',
    readingTime: '6 min',
    image: '/media/img/data-graph.jpg',
    imageAlt: 'An operations dashboard being reviewed on a laptop',
    author: authors.yongHan,
    reviewer: authors.yeWen,
    answer:
      'Four questions change an SME operating decision: what am I about to run short of, where am I paying for capacity nobody used, which customers stopped coming and when, and what changed this week that should not have. All four are answerable from records the business already keeps. None require a data warehouse. They do require a database that is trusted, which is why analytics should follow the operations layer rather than lead it.',
    takeaways: [
      'A revenue bar chart is not analytics. It tells the owner something they already knew.',
      'Useful questions are narrow, time-bound and attached to a decision somebody makes weekly.',
      'Forecasts built on an untrusted database are confident guesses with a chart attached.',
      'Show the confidence range. A single number invites a level of trust the data does not support.',
    ],
    sections: [
      {
        heading: 'What most analytics tabs deliver',
        paragraphs: [
          'Every SME software vendor eventually ships an analytics tab. Most of them show last month’s revenue as a bar chart.',
          'The owner already knew last month’s revenue. They watched it happen. The chart is a restatement, not an insight, and it changes no decision.',
        ],
      },
      {
        heading: 'Question one: what am I about to run short of',
        paragraphs: [
          'Not what is low now, which any list shows. What will be short given current consumption, supplier lead time and whatever seasonal pattern the last two years contain.',
          'This is the highest-value question because the decision it drives, committing money to a purchase, happens weekly and has a direct cash consequence in both directions.',
        ],
      },
      {
        heading: 'Question two: where am I paying for capacity nobody used',
        paragraphs: [
          'Utilisation by hour, by person and by resource. Most service businesses discover that their staffing pattern was set years ago against a demand curve that has since moved.',
          'The answer is usually uncomfortable and specific: Tuesday mornings are half empty and Saturday afternoons turn people away. Both cost money, in opposite directions.',
        ],
      },
      {
        heading: 'Question three: which customers stopped coming',
        paragraphs: [
          'Cohort retention sounds like a startup metric, but for most SMEs it is simply a list of people who used to buy every six weeks and have not been seen in four months.',
          'That list is actionable in a way an aggregate churn percentage is not. It has names in it.',
        ],
      },
      {
        heading: 'Question four: what changed this week that should not have',
        paragraphs: [
          'Anomaly detection with a plain-language framing. A spike in refunds at one branch. A cluster of cancellations against one person. A cost line that was stable for a year and is not now.',
          'Surfacing these the week they start, rather than at month end, is the difference between a conversation and a write-off.',
        ],
      },
      {
        heading: 'Why the database has to come first',
        paragraphs: [
          'All four answers depend on records being captured completely and honestly. A forecast built on a table that misses whatever people kept in a side spreadsheet is precise and wrong.',
          'This is why BIYY Tech Data & Intelligence sits on top of Dashboards & Databases rather than beside it, and why it is in limited beta with existing customers rather than sold as a standalone product. We would rather ship it late than ship it over data we do not trust.',
        ],
      },
    ],
    faq: [
      {
        q: 'Does an SME need a data warehouse for operations analytics?',
        a: 'Usually not. The four questions that drive weekly operating decisions can be answered from the transactional records an operations database already holds.',
      },
      {
        q: 'Why should analytics come after a proper database?',
        a: 'Because forecasts and alerts are only as good as the underlying records. If work is captured incompletely, or partly in a side spreadsheet, the analysis will be confidently wrong.',
      },
      {
        q: 'When is BIYY Tech Data & Intelligence available?',
        a: 'It is in limited beta with existing Dashboards & Databases customers. Customers running that product today will be invited before general release.',
      },
    ],
    sources: [
      {
        label: 'BIYY Tech customer interviews, 2025 to 2026',
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
    body: 'Every person here spends time in customer back offices and at front desks, reading the actual spreadsheets. Opinions formed in a meeting room do not count.',
  },
  {
    title: 'Say the hard number',
    body: 'If a rollout will take four weeks, we say four weeks before the invoice, not after. It costs us deals and keeps us employable.',
  },
  {
    title: 'Small surface, deep work',
    body: 'We would rather one product be genuinely good than six be demoable. Scope discipline is the job.',
  },
  {
    title: 'Leave cleanly',
    body: 'Customers can export everything, schema included, and walk. That constraint keeps the product honest, and it applies to how we treat each other too.',
  },
];

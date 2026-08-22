/**
 * Rule-based reply engine for the site assistant.
 *
 * No model, no network: each rule owns a list of keywords, and the rule with
 * the most matches wins. Deterministic, instant, and easy to extend. Add a
 * rule below and it is live.
 */

export const greeting = {
  text: "Hi, I'm YiY Bot. I answer questions about YiY Tech: what the products do, what rollout looks like, what it costs.",
  chips: ['What do you build?', 'How much does it cost?', 'How long to go live?', 'Book a walkthrough'],
};

const RULES = [
  {
    id: 'greet',
    keywords: ['hi', 'hello', 'hey', 'yo', 'good morning', 'good afternoon', 'howdy'],
    answer: () => ({
      text: 'Hello. Ask me about inventory, booking, pricing or rollout, or tap one of these.',
      chips: ['What do you build?', 'Inventory', 'Booking', 'How long to go live?'],
    }),
  },
  {
    id: 'overview',
    keywords: ['what do you build', 'what is yiy', 'about', 'products', 'overview', 'what do you do', 'who are you'],
    answer: () => ({
      text: 'Two systems, live today. Inventory & Stock Management for retail and wholesale, and Booking & Operations for clinics, salons, tuition centres and property teams. A third, Data & Intelligence, is in limited beta.',
      chips: ['Inventory', 'Booking', 'Data & Intelligence'],
      links: [
        { label: 'Inventory & Stock Management', href: '/products/inventory' },
        { label: 'Booking & Operations', href: '/products/booking' },
      ],
    }),
  },
  {
    id: 'inventory',
    keywords: ['inventory', 'stock', 'warehouse', 'sku', 'barcode', 'reorder', 'expiry', 'batch', 'wholesale', 'retail', 'stocktake', 'stock take', 'supplier', 'purchase order'],
    answer: () => ({
      text: 'Inventory & Stock Management gives you live stock across every outlet, warehouse and consignment partner: barcode receiving, batch/serial/expiry with FEFO picking, reorder points that watch lead time, and landed-cost reporting. Pilot customers hit 98% stock accuracy after the first full count.',
      chips: ['How long to go live?', 'How much does it cost?', 'Book a walkthrough'],
      links: [{ label: 'Explore Inventory', href: '/products/inventory' }],
    }),
  },
  {
    id: 'booking',
    keywords: ['booking', 'appointment', 'calendar', 'schedule', 'scheduling', 'no-show', 'no show', 'salon', 'clinic', 'dental', 'tuition', 'property', 'reminder', 'whatsapp', 'deposit', 'front desk'],
    answer: () => ({
      text: 'Booking & Operations is a booking engine plus an ops dashboard: online self-booking against real staff and room availability, automated WhatsApp/SMS reminders, deposits and packages, and utilisation by hour. Reminders cut no-shows about 42% in our pilots.',
      chips: ['Does it handle rooms and staff?', 'How much does it cost?', 'Book a walkthrough'],
      links: [{ label: 'Explore Booking', href: '/products/booking' }],
    }),
  },
  {
    id: 'multiresource',
    keywords: ['rooms and staff', 'room and staff', 'resource', 'double book', 'double-book', 'tutor', 'chair', 'equipment'],
    answer: () => ({
      text: 'Yes. A slot can require several resources at once: a tutor and a room, an agent and a unit, a stylist and a chair. If both are not free, the slot cannot be booked. That single rule is what kills double-booking.',
      chips: ['Booking', 'Book a walkthrough'],
    }),
  },
  {
    id: 'data',
    keywords: ['data', 'analytics', 'report', 'reporting', 'forecast', 'forecasting', 'dashboard', 'insight', 'intelligence', 'ai', 'signal'],
    answer: () => ({
      text: 'Data & Intelligence is in limited beta. It sits on top of Inventory and Booking: demand forecasting per SKU and outlet, staffing recommendations by hour, cohort retention, and anomaly alerts for shrinkage and refunds. If you run either product today, your data is already shaped for it.',
      chips: ['Join the beta list', 'What do you build?'],
      links: [{ label: 'Read the roadmap', href: '/products/data' }],
    }),
  },
  {
    id: 'pricing',
    keywords: ['price', 'pricing', 'cost', 'how much', 'fee', 'subscription', 'expensive', 'budget', 'quote', 'per month'],
    answer: () => ({
      text: 'Flat monthly per outlet. No per-transaction skim, no surprise implementation fee, and no annual lock-in to sign on day one. The exact number depends on outlets and which products you run. We quote it on the walkthrough, before you commit to anything.',
      chips: ['Book a walkthrough', 'What if we outgrow it?'],
      links: [{ label: 'Get a quote', href: '/contact' }],
    }),
  },
  {
    id: 'timeline',
    keywords: ['how long', 'timeline', 'go live', 'live', 'setup', 'set up', 'onboard', 'onboarding', 'implementation', 'rollout', 'roll out', 'two weeks', 'how fast'],
    answer: () => ({
      text: 'Two weeks is typical: walkthrough on day 0, migration days 1–4, one pilot outlet live days 5–10, remaining outlets and handover days 11–14. Multi-outlet groups with messy item masters run three to four weeks. We tell you which one you are before you pay.',
      chips: ['What about my existing data?', 'Book a walkthrough'],
      links: [{ label: 'See the rollout', href: '/#process' }],
    }),
  },
  {
    id: 'migration',
    keywords: ['existing data', 'migrate', 'migration', 'import', 'spreadsheet', 'excel', 'my data', 'transfer'],
    answer: () => ({
      text: 'We migrate it: item lists, suppliers, client histories, open bookings and current stock counts, from whatever you have, including that spreadsheet. Anything that cannot be mapped cleanly gets flagged for you to decide, never silently dropped.',
      chips: ['How long to go live?', 'Can I export my data?'],
    }),
  },
  {
    id: 'export',
    keywords: ['export', 'lock in', 'lock-in', 'leave', 'cancel', 'own my data', 'outgrow', 'contract'],
    answer: () => ({
      text: 'Full data export any time, in a format your accountant recognises, with no exit fee. We would rather you leave cleanly than stay unhappy, and it keeps us honest about earning the renewal.',
      chips: ['How much does it cost?', 'Book a walkthrough'],
    }),
  },
  {
    id: 'integrations',
    keywords: ['integrate', 'integration', 'accounting', 'sql accounting', 'autocount', 'xero', 'quickbooks', 'api', 'connect', 'sync'],
    answer: () => ({
      text: 'We export in the formats standard SME accounting packages accept, and direct integrations for the common Malaysian and Singaporean systems are on the roadmap. Tell us which one you run on the walkthrough and we will confirm where it stands.',
      chips: ['Book a walkthrough', 'Does it work offline?'],
    }),
  },
  {
    id: 'offline',
    keywords: ['offline', 'no internet', 'connection', 'wifi', 'signal drop'],
    answer: () => ({
      text: 'The mobile apps queue receiving, transfers and stock takes when the connection drops, then sync when it returns. The booking dashboard needs connectivity, because availability has to be live to be worth anything.',
      chips: ['Inventory', 'Booking'],
    }),
  },
  {
    id: 'both',
    keywords: ['both products', 'buy both', 'together', 'one login', 'same account', 'bundle'],
    answer: () => ({
      text: 'No need to buy both. Each works on its own. If you do run both, they share one account, one login and one reporting layer, which is how most multi-service businesses end up using them.',
      chips: ['How much does it cost?', 'What do you build?'],
    }),
  },
  {
    id: 'contact',
    keywords: ['walkthrough', 'demo', 'contact', 'talk', 'call', 'email', 'sales', 'human', 'meeting', 'beta list', 'sign up'],
    answer: () => ({
      text: 'Thirty minutes on your floor or front desk, your actual numbers, and a straight answer on whether YiY is worth it. No slide deck. Reach us at hello@yiy.tech or use the form.',
      chips: ['How much does it cost?', 'How long to go live?'],
      links: [{ label: 'Book a walkthrough', href: '/contact' }],
    }),
  },
  {
    id: 'support',
    keywords: ['support', 'help', 'training', 'train', 'stuck', 'problem', 'bug'],
    answer: () => ({
      text: 'Staff are trained on their own devices during rollout, and you keep a direct WhatsApp line to us for the first month after go-live. After that, support runs through hello@yiy.tech.',
      chips: ['How long to go live?', 'Book a walkthrough'],
    }),
  },
  {
    id: 'thanks',
    keywords: ['thanks', 'thank you', 'cheers', 'nice', 'cool', 'great', 'awesome'],
    answer: () => ({
      text: 'Any time. Anything else you want to poke at?',
      chips: ['How much does it cost?', 'Inventory', 'Booking'],
      mood: 'happy',
    }),
  },
  {
    id: 'bye',
    keywords: ['bye', 'goodbye', 'see you', 'later'],
    answer: () => ({
      text: 'See you. The walkthrough form is always there if you want a real conversation.',
      chips: ['Book a walkthrough'],
      mood: 'happy',
    }),
  },
];

const FALLBACK = {
  text: 'I did not catch that one. I know about the two products, pricing, rollout, migration, integrations and support. Try one of these.',
  chips: ['What do you build?', 'How much does it cost?', 'How long to go live?', 'Book a walkthrough'],
};

/**
 * Scores every rule by how many of its keywords appear in the input and
 * returns the best answer. Longer keyword phrases count for more so that
 * "how long" beats a stray "long".
 */
export function reply(input) {
  const text = ` ${String(input).toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').replace(/\s+/g, ' ')} `;

  let best = null;
  let bestScore = 0;

  RULES.forEach((rule) => {
    let score = 0;
    rule.keywords.forEach((k) => {
      if (text.includes(` ${k} `) || text.includes(` ${k}s `) || text.includes(`${k} `)) {
        score += k.includes(' ') ? 3 : 1;
      }
    });
    if (score > bestScore) {
      bestScore = score;
      best = rule;
    }
  });

  if (!best) return FALLBACK;
  return best.answer();
}

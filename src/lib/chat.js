/**
 * Rule-based reply engine for the site assistant.
 *
 * No model, no network: each rule owns a list of keywords, and the rule with
 * the most matches wins. Deterministic, instant, and easy to extend. Add a
 * rule below and it is live.
 *
 * Every rule exists once per locale. Chinese keywords are matched as plain
 * substrings because the language has no spaces to anchor on; English keeps
 * the word-boundary check so a stray "long" cannot beat "how long".
 */

const GREETINGS = {
  en: {
    text: "Hi, I'm YiY Bot. I answer questions about YiY Tech: what the products do, what rollout looks like, what it costs.",
    chips: [
      'What do you build?',
      'How much does it cost?',
      'How long to go live?',
      'Book a walkthrough',
    ],
  },
  zh: {
    text: '你好，我是 YiY 小助手。关于 YiY Tech 的问题都可以问我：产品能做什么、实施是怎么走的、要多少钱。',
    chips: ['你们做什么产品？', '要多少钱？', '多久能上线？', '预约实地走访'],
  },
};

const RULES = {
  en: [
    {
      id: 'greet',
      keywords: ['hi', 'hello', 'hey', 'yo', 'good morning', 'good afternoon', 'howdy'],
      answer: {
        text: 'Hello. Ask me about inventory, booking, pricing or rollout, or tap one of these.',
        chips: ['What do you build?', 'Inventory', 'Booking', 'How long to go live?'],
      },
    },
    {
      id: 'overview',
      keywords: [
        'what do you build',
        'what is yiy',
        'about',
        'products',
        'overview',
        'what do you do',
        'who are you',
      ],
      answer: {
        text: 'Two systems, live today. Inventory & Stock Management for retail and wholesale, and Booking & Operations for clinics, salons, tuition centres and property teams. A third, Data & Intelligence, is in limited beta.',
        chips: ['Inventory', 'Booking', 'Data & Intelligence'],
        links: [
          { label: 'Inventory & Stock Management', href: '/products/inventory' },
          { label: 'Booking & Operations', href: '/products/booking' },
        ],
      },
    },
    {
      id: 'inventory',
      keywords: [
        'inventory',
        'stock',
        'warehouse',
        'sku',
        'barcode',
        'reorder',
        'expiry',
        'batch',
        'wholesale',
        'retail',
        'stocktake',
        'stock take',
        'supplier',
        'purchase order',
      ],
      answer: {
        text: 'Inventory & Stock Management gives you live stock across every outlet, warehouse and consignment partner: barcode receiving, batch/serial/expiry with FEFO picking, reorder points that watch lead time, and landed-cost reporting. Pilot customers hit 98% stock accuracy after the first full count.',
        chips: ['How long to go live?', 'How much does it cost?', 'Book a walkthrough'],
        links: [{ label: 'Explore Inventory', href: '/products/inventory' }],
      },
    },
    {
      id: 'booking',
      keywords: [
        'booking',
        'appointment',
        'calendar',
        'schedule',
        'scheduling',
        'no-show',
        'no show',
        'salon',
        'clinic',
        'dental',
        'tuition',
        'property',
        'reminder',
        'whatsapp',
        'deposit',
        'front desk',
      ],
      answer: {
        text: 'Booking & Operations is a booking engine plus an ops dashboard: online self-booking against real staff and room availability, automated WhatsApp/SMS reminders, deposits and packages, and utilisation by hour. Reminders cut no-shows about 42% in our pilots.',
        chips: ['Does it handle rooms and staff?', 'How much does it cost?', 'Book a walkthrough'],
        links: [{ label: 'Explore Booking', href: '/products/booking' }],
      },
    },
    {
      id: 'multiresource',
      keywords: [
        'rooms and staff',
        'room and staff',
        'resource',
        'double book',
        'double-book',
        'tutor',
        'chair',
        'equipment',
      ],
      answer: {
        text: 'Yes. A slot can require several resources at once: a tutor and a room, an agent and a unit, a stylist and a chair. If both are not free, the slot cannot be booked. That single rule is what kills double-booking.',
        chips: ['Booking', 'Book a walkthrough'],
      },
    },
    {
      id: 'data',
      keywords: [
        'data',
        'analytics',
        'report',
        'reporting',
        'forecast',
        'forecasting',
        'dashboard',
        'insight',
        'intelligence',
        'ai',
        'signal',
      ],
      answer: {
        text: 'Data & Intelligence is in limited beta. It sits on top of Inventory and Booking: demand forecasting per SKU and outlet, staffing recommendations by hour, cohort retention, and anomaly alerts for shrinkage and refunds. If you run either product today, your data is already shaped for it.',
        chips: ['Join the beta list', 'What do you build?'],
        links: [{ label: 'Read the roadmap', href: '/products/data' }],
      },
    },
    {
      id: 'pricing',
      keywords: [
        'price',
        'pricing',
        'cost',
        'how much',
        'fee',
        'subscription',
        'expensive',
        'budget',
        'quote',
        'per month',
      ],
      answer: {
        text: 'Flat monthly per outlet. No per-transaction skim, no surprise implementation fee, and no annual lock-in to sign on day one. The exact number depends on outlets and which products you run. We quote it on the walkthrough, before you commit to anything.',
        chips: ['Book a walkthrough', 'What if we outgrow it?'],
        links: [{ label: 'Get a quote', href: '/contact' }],
      },
    },
    {
      id: 'timeline',
      keywords: [
        'how long',
        'timeline',
        'go live',
        'live',
        'setup',
        'set up',
        'onboard',
        'onboarding',
        'implementation',
        'rollout',
        'roll out',
        'two weeks',
        'how fast',
      ],
      answer: {
        text: 'Two weeks is typical: walkthrough on day 0, migration days 1–4, one pilot outlet live days 5–10, remaining outlets and handover days 11–14. Multi-outlet groups with messy item masters run three to four weeks. We tell you which one you are before you pay.',
        chips: ['What about my existing data?', 'Book a walkthrough'],
        links: [{ label: 'See the rollout', href: '/#process' }],
      },
    },
    {
      id: 'migration',
      keywords: [
        'existing data',
        'migrate',
        'migration',
        'import',
        'spreadsheet',
        'excel',
        'my data',
        'transfer',
      ],
      answer: {
        text: 'We migrate it: item lists, suppliers, client histories, open bookings and current stock counts, from whatever you have, including that spreadsheet. Anything that cannot be mapped cleanly gets flagged for you to decide, never silently dropped.',
        chips: ['How long to go live?', 'Can I export my data?'],
      },
    },
    {
      id: 'export',
      keywords: ['export', 'lock in', 'lock-in', 'leave', 'cancel', 'own my data', 'outgrow', 'contract'],
      answer: {
        text: 'Full data export any time, in a format your accountant recognises, with no exit fee. We would rather you leave cleanly than stay unhappy, and it keeps us honest about earning the renewal.',
        chips: ['How much does it cost?', 'Book a walkthrough'],
      },
    },
    {
      id: 'integrations',
      keywords: [
        'integrate',
        'integration',
        'accounting',
        'sql accounting',
        'autocount',
        'xero',
        'quickbooks',
        'api',
        'connect',
        'sync',
      ],
      answer: {
        text: 'We export in the formats standard SME accounting packages accept, and direct integrations for the common Malaysian and Singaporean systems are on the roadmap. Tell us which one you run on the walkthrough and we will confirm where it stands.',
        chips: ['Book a walkthrough', 'Does it work offline?'],
      },
    },
    {
      id: 'offline',
      keywords: ['offline', 'no internet', 'connection', 'wifi', 'signal drop'],
      answer: {
        text: 'The mobile apps queue receiving, transfers and stock takes when the connection drops, then sync when it returns. The booking dashboard needs connectivity, because availability has to be live to be worth anything.',
        chips: ['Inventory', 'Booking'],
      },
    },
    {
      id: 'both',
      keywords: ['both products', 'buy both', 'together', 'one login', 'same account', 'bundle'],
      answer: {
        text: 'No need to buy both. Each works on its own. If you do run both, they share one account, one login and one reporting layer, which is how most multi-service businesses end up using them.',
        chips: ['How much does it cost?', 'What do you build?'],
      },
    },
    {
      id: 'contact',
      keywords: [
        'walkthrough',
        'demo',
        'contact',
        'talk',
        'call',
        'email',
        'sales',
        'human',
        'meeting',
        'beta list',
        'sign up',
      ],
      answer: {
        text: 'Thirty minutes on your floor or front desk, your actual numbers, and a straight answer on whether YiY is worth it. No slide deck. Reach us at hello@yiy.tech or use the form.',
        chips: ['How much does it cost?', 'How long to go live?'],
        links: [{ label: 'Book a walkthrough', href: '/contact' }],
      },
    },
    {
      id: 'support',
      keywords: ['support', 'help', 'training', 'train', 'stuck', 'problem', 'bug'],
      answer: {
        text: 'Staff are trained on their own devices during rollout, and you keep a direct WhatsApp line to us for the first month after go-live. After that, support runs through hello@yiy.tech.',
        chips: ['How long to go live?', 'Book a walkthrough'],
      },
    },
    {
      id: 'thanks',
      keywords: ['thanks', 'thank you', 'cheers', 'nice', 'cool', 'great', 'awesome'],
      answer: {
        text: 'Any time. Anything else you want to poke at?',
        chips: ['How much does it cost?', 'Inventory', 'Booking'],
        mood: 'happy',
      },
    },
    {
      id: 'bye',
      keywords: ['bye', 'goodbye', 'see you', 'later'],
      answer: {
        text: 'See you. The walkthrough form is always there if you want a real conversation.',
        chips: ['Book a walkthrough'],
        mood: 'happy',
      },
    },
  ],

  zh: [
    {
      id: 'greet',
      keywords: ['你好', '您好', '嗨', '哈喽', '早上好', '下午好', 'hi', 'hello'],
      answer: {
        text: '你好。库存、预约、价格或实施，都可以问我，也可以直接点下面这些。',
        chips: ['你们做什么产品？', '库存', '预约', '多久能上线？'],
      },
    },
    {
      id: 'overview',
      keywords: ['做什么产品', '什么产品', '你们是做什么的', '介绍', '产品', '概览', '你是谁'],
      answer: {
        text: '两套系统，今天已经上线。给零售与批发用的库存管理，以及给诊所、美容院、补习中心和房产团队用的预约与运营。第三套「数据与智能」正在小范围内测。',
        chips: ['库存', '预约', '数据与智能'],
        links: [
          { label: '库存管理', href: '/products/inventory' },
          { label: '预约与运营', href: '/products/booking' },
        ],
      },
    },
    {
      id: 'inventory',
      keywords: ['库存', '存货', '仓库', '单品', 'sku', '条码', '扫码', '补货', '效期', '批次', '批发', '零售', '盘点', '供应商', '采购单'],
      answer: {
        text: '库存管理给你每一间门店、仓库和寄售伙伴的实时库存：条码收货，批次、序列号与效期加上先到期先出拣货，会盯着供应商前置期的补货点，以及到岸成本报表。试点客户在第一次全盘之后达到了 98% 的库存准确率。',
        chips: ['多久能上线？', '要多少钱？', '预约实地走访'],
        links: [{ label: '了解库存', href: '/products/inventory' }],
      },
    },
    {
      id: 'booking',
      keywords: ['预约', '约号', '排期', '日历', '排程', '爽约', '放鸽子', '美容院', '诊所', '牙科', '补习', '房产', '提醒', 'whatsapp', '订金', '前台'],
      answer: {
        text: '预约与运营是一个预约引擎加一块运营仪表板：按真实员工与房间可用性的线上自助预约、自动 WhatsApp 与短信提醒、订金与套票，以及按小时的使用率。在我们的试点里，提醒把爽约砍掉了大约 42%。',
        chips: ['能同时管房间和员工吗？', '要多少钱？', '预约实地走访'],
        links: [{ label: '了解预约', href: '/products/booking' }],
      },
    },
    {
      id: 'multiresource',
      keywords: ['房间和员工', '同时管房间', '资源', '重复预订', '撞车', '老师', '教室', '座位', '设备'],
      answer: {
        text: '可以。一个时段能同时要求多种资源：一位老师加一间教室、一位经纪加一个单位、一位发型师加一个座位。只要有一个不空，这个时段就订不下来。就是这一条规则杀死了重复预订。',
        chips: ['预约', '预约实地走访'],
      },
    },
    {
      id: 'data',
      keywords: ['数据', '分析', '报表', '报告', '预测', '仪表板', '洞察', '智能', 'ai', '人工智能'],
      answer: {
        text: '数据与智能正在小范围内测。它叠在库存与预约之上：按单品与门店的需求预测、按小时的排班建议、客户分群留存，以及针对损耗和退款的异常告警。如果你今天在用其中任一产品，你的数据已经为它准备好了。',
        chips: ['加入内测名单', '你们做什么产品？'],
        links: [{ label: '查看路线图', href: '/products/data' }],
      },
    },
    {
      id: 'pricing',
      keywords: ['价格', '收费', '多少钱', '费用', '订阅', '贵', '预算', '报价', '每月', '月费'],
      answer: {
        text: '按门店固定月费。没有按笔抽成，没有意外的实施费，第一天也不用签年约。具体数字取决于门店数量和你用哪些产品。我们在走访时报价，在你做任何承诺之前。',
        chips: ['预约实地走访', '如果我们做大了怎么办？'],
        links: [{ label: '获取报价', href: '/contact' }],
      },
    },
    {
      id: 'timeline',
      keywords: ['多久', '多长时间', '时间线', '上线', '部署', '导入', '实施', '两周', '多快'],
      answer: {
        text: '两周是典型值：第 0 天走访，第 1 到 4 天迁移，第 5 到 10 天一家试点门店真实上线，第 11 到 14 天其余门店加交接。多门店集团加上混乱的商品主档要三到四周。我们会在你付钱之前告诉你属于哪一种。',
        chips: ['我现有的数据怎么办？', '预约实地走访'],
        links: [{ label: '看看实施流程', href: '/#process' }],
      },
    },
    {
      id: 'migration',
      keywords: ['现有数据', '迁移', '导入数据', '表格', 'excel', '我的数据', '转移'],
      answer: {
        text: '我们会迁移：商品清单、供应商、客户历史、未完成的预约和当前库存数，不管你手上是什么，包括那张表格。任何无法干净映射的东西会被标出来交给你决定，绝不会被悄悄丢掉。',
        chips: ['多久能上线？', '我能导出数据吗？'],
      },
    },
    {
      id: 'export',
      keywords: ['导出', '锁定', '离开', '退出', '取消', '数据是我的', '做大了', '合同'],
      answer: {
        text: '随时全量导出，格式是你的会计认得的，不收退出费。我们宁愿你干净地离开，也不愿你不开心地留着，这也让我们对赢得续约保持诚实。',
        chips: ['要多少钱？', '预约实地走访'],
      },
    },
    {
      id: 'integrations',
      keywords: ['集成', '对接', '会计', '财务软件', 'autocount', 'xero', 'quickbooks', 'api', '同步'],
      answer: {
        text: '我们导出标准中小企业会计软件接受的格式，马来西亚和新加坡常见系统的直连集成已经在路线图上。走访时告诉我们你用的是哪一个，我们会确认进度。',
        chips: ['预约实地走访', '能离线使用吗？'],
      },
    },
    {
      id: 'offline',
      keywords: ['离线', '断网', '没网', '网络', 'wifi', '信号'],
      answer: {
        text: '手机端在断网时会把收货、调拨和盘点排队，恢复连接后同步。预约仪表板需要联网，因为可用性必须是实时的才有意义。',
        chips: ['库存', '预约'],
      },
    },
    {
      id: 'both',
      keywords: ['两个都', '都买', '一起', '一个登录', '同一个账户', '打包'],
      answer: {
        text: '不必两个都买，各自都能独立运作。如果你两个都用，它们共用一个账户、一次登录和一层报表，多数多业态企业最后都是这么用的。',
        chips: ['要多少钱？', '你们做什么产品？'],
      },
    },
    {
      id: 'contact',
      keywords: ['走访', '演示', '联系', '聊聊', '打电话', '邮件', '销售', '真人', '开会', '内测名单', '报名'],
      answer: {
        text: '在你的卖场或前台待三十分钟，用你真实的数字，直接告诉你 YiY 值不值。没有幻灯片。写信到 hello@yiy.tech，或者用表单联系我们。',
        chips: ['要多少钱？', '多久能上线？'],
        links: [{ label: '预约实地走访', href: '/contact' }],
      },
    },
    {
      id: 'support',
      keywords: ['支持', '帮助', '培训', '卡住', '问题', '故障', 'bug'],
      answer: {
        text: '实施期间员工在自己的设备上受训，上线后头一个月你还留着一条直通我们的 WhatsApp。之后支持走 hello@yiy.tech。',
        chips: ['多久能上线？', '预约实地走访'],
      },
    },
    {
      id: 'thanks',
      keywords: ['谢谢', '多谢', '感谢', '不错', '很好', '厉害'],
      answer: {
        text: '随时。还有什么想问的吗？',
        chips: ['要多少钱？', '库存', '预约'],
        mood: 'happy',
      },
    },
    {
      id: 'bye',
      keywords: ['再见', '拜拜', '回头见', '下次聊'],
      answer: {
        text: '回头见。想真正聊一次的时候，走访表单一直都在。',
        chips: ['预约实地走访'],
        mood: 'happy',
      },
    },
  ],
};

const FALLBACKS = {
  en: {
    text: 'I did not catch that one. I know about the two products, pricing, rollout, migration, integrations and support. Try one of these.',
    chips: [
      'What do you build?',
      'How much does it cost?',
      'How long to go live?',
      'Book a walkthrough',
    ],
  },
  zh: {
    text: '这句我没听懂。我知道的是两个产品、价格、实施、数据迁移、集成和支持。试试下面这些。',
    chips: ['你们做什么产品？', '要多少钱？', '多久能上线？', '预约实地走访'],
  },
};

const pick = (table, locale) => table[locale] ?? table.en;

export function greetingFor(locale) {
  return pick(GREETINGS, locale);
}

const CJK = /[㐀-鿿]/;

/** Latin keywords need word boundaries; CJK ones have none to find. */
function score(keyword, haystack) {
  if (CJK.test(keyword)) return haystack.includes(keyword) ? keyword.length : 0;
  const padded = ` ${keyword} `;
  if (haystack.includes(padded) || haystack.includes(` ${keyword}s `) || haystack.includes(`${keyword} `)) {
    return keyword.includes(' ') ? 3 : 1;
  }
  return 0;
}

/**
 * Scores every rule by how well its keywords match the input and returns the
 * best answer. Longer keyword phrases count for more so that "how long" beats
 * a stray "long".
 */
export function reply(input, locale = 'en') {
  const rules = pick(RULES, locale);
  const raw = String(input).toLowerCase();
  // The padding and space collapse are what make the boundary checks above
  // work at the start and end of the message.
  const text = ` ${raw.replace(/[^\p{Letter}\p{Number}\s-]/gu, ' ').replace(/\s+/g, ' ')} `;

  let best = null;
  let bestScore = 0;

  rules.forEach((rule) => {
    const total = rule.keywords.reduce((sum, k) => sum + score(k, text), 0);
    if (total > bestScore) {
      bestScore = total;
      best = rule;
    }
  });

  return best ? best.answer : pick(FALLBACKS, locale);
}

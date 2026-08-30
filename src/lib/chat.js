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
        text: 'Hello. Ask me about dashboards, databases, leaving spreadsheets, pricing or rollout, or tap one of these.',
        chips: ['What do you build?', 'Dashboards', 'What about our spreadsheets?', 'How long to go live?'],
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
        text: 'Two things, live today. Dashboards & Databases replaces the spreadsheets your business runs on with a real database and a dashboard built for your industry. Website & Integrations builds your website and wires it into the same data. A third, Data & Intelligence, is in limited beta.',
        chips: ['Dashboards', 'Website', 'Data & Intelligence'],
        links: [
          { label: 'Dashboards & Databases', href: '/products/dashboards' },
          { label: 'Website & Integrations', href: '/products/website' },
        ],
      },
    },
    {
      id: 'dashboards',
      keywords: [
        'dashboard',
        'dashboards',
        'database',
        'databases',
        'sql',
        'schema',
        'tables',
        'reporting',
        'report',
        'reports',
        'kpi',
        'single source of truth',
        'source of truth',
      ],
      answer: {
        text: 'Dashboards & Databases is the core product. We design a proper database around how your business actually records work, migrate what is in your spreadsheets today, and build the dashboard your team opens every morning. The screens are laid out for your industry rather than a generic template, and every figure is live.',
        chips: ['What about our spreadsheets?', 'How is this different from a BI tool?', 'How much does it cost?'],
        links: [{ label: 'Explore Dashboards', href: '/products/dashboards' }],
      },
    },
    {
      id: 'spreadsheets',
      keywords: [
        'spreadsheet',
        'spreadsheets',
        'excel',
        'google sheets',
        'sheets',
        'csv',
        'our files',
        'my files',
        'workbook',
        'macro',
        'formula',
        'formulas',
      ],
      answer: {
        text: 'We read your spreadsheets, work out the structure hiding inside them, and design tables to match. Then we migrate the contents. Duplicates, three spellings of the same supplier and columns that changed meaning halfway down get flagged for you to decide rather than guessed at. You keep Excel for one-off analysis; it just stops being where the data lives.',
        chips: ['How long to go live?', 'Can I export my data?', 'Book a walkthrough'],
        links: [{ label: 'When a spreadsheet stops being enough', href: '/blog/when-a-spreadsheet-stops-being-enough' }],
      },
    },
    {
      id: 'bi',
      keywords: [
        'bi tool',
        'power bi',
        'tableau',
        'looker',
        'metabase',
        'chart',
        'charts',
        'visualisation',
        'visualization',
        'different from',
      ],
      answer: {
        text: 'A BI tool draws charts over whatever you feed it, so it inherits every duplicate and every stale export. We replace the source: the data goes into a real database with constraints, and the dashboard reads from that. The charts are the easy half.',
        chips: ['Dashboards', 'What about our spreadsheets?'],
      },
    },
    {
      id: 'industry',
      keywords: [
        'industry',
        'tailored',
        'customise',
        'customize',
        'custom',
        'clinic',
        'salon',
        'tuition',
        'property',
        'retail',
        'wholesale',
        'distribution',
        'ecommerce',
        'e-commerce',
      ],
      answer: {
        text: 'The dashboard is laid out for your industry, because the weekly decisions differ. A distributor opens ageing, lead times and margin after freight. A clinic opens utilisation and recall lists. A tuition centre opens enrolment and attendance. That is a schema difference, not a matter of rearranging charts.',
        chips: ['Dashboards', 'Book a walkthrough'],
        links: [
          {
            label: 'Why generic dashboards get ignored',
            href: '/blog/industry-dashboards-versus-generic-ones',
          },
        ],
      },
    },
    {
      id: 'website',
      keywords: ['website', 'web site', 'site', 'wordpress', 'shopify', 'wix', 'squarespace', 'landing page'],
      answer: {
        text: 'Website & Integrations designs and builds your new site, then wires it into your YiY database. Prices and availability are read live, orders and enquiries land as records on your dashboard, and the domain, repository and hosting are in your name from day one. Three weeks, one flat project fee.',
        chips: ['How much does it cost?', 'We already have a site', 'Book a walkthrough'],
        links: [{ label: 'Explore Website', href: '/products/website' }],
      },
    },
    {
      id: 'data',
      keywords: [
        'analytics',
        'forecast',
        'forecasting',
        'insight',
        'intelligence',
        'ai',
        'machine learning',
        'prediction',
        'anomaly',
      ],
      answer: {
        text: 'Data & Intelligence is in limited beta. It sits on top of Dashboards & Databases: demand and capacity forecasting, cohort retention, anomaly alerts for refunds and cancellations, and plain-language questions over your own tables. It is not sold on its own, because it is only as good as the database underneath it.',
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
        text: 'Flat monthly per outlet. No per-transaction skim, no surprise implementation fee, and no annual lock-in to sign on day one. The exact number depends on sites and which products you run. We quote it on the walkthrough, before you commit to anything.',
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
        text: 'Two weeks is typical: walkthrough on day 0, schema and migration days 1–4, one team live days 5–10, everyone else and handover days 11–14. Source spreadsheets with years of accumulated inconsistency run three to four weeks. We tell you which one you are before you pay.',
        chips: ['What about our spreadsheets?', 'Book a walkthrough'],
        links: [{ label: 'See the rollout', href: '/#process' }],
      },
    },
    {
      id: 'migration',
      keywords: ['migrate', 'migration', 'import', 'existing data', 'my data', 'transfer', 'clean up', 'duplicates'],
      answer: {
        text: 'We migrate it. Every sheet, tab and column you actually use. Anything that cannot be mapped cleanly gets flagged for you to decide, never silently dropped. Cleaning is usually about half the migration effort, and we scope it honestly on day 0 rather than discovering it in week three.',
        chips: ['How long to go live?', 'Can I export my data?'],
      },
    },
    {
      id: 'export',
      keywords: ['export', 'lock in', 'lock-in', 'leave', 'cancel', 'own my data', 'outgrow', 'contract'],
      answer: {
        text: 'Full data export any time, schema included, in a format your accountant recognises, with no exit fee. We would rather you leave cleanly than stay unhappy, and it keeps us honest about earning the renewal.',
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
        text: 'The mobile forms queue entries when the connection drops, then sync when it returns. The dashboard itself needs connectivity, because a figure has to be live to be worth anything.',
        chips: ['Dashboards', 'Book a walkthrough'],
      },
    },
    {
      id: 'permissions',
      keywords: ['permission', 'permissions', 'roles', 'access', 'who can see', 'branch manager', 'audit', 'history'],
      answer: {
        text: 'Roles and permissions come as standard: a branch manager sees their branch, the owner sees all of it. Every record carries full history and an audit trail, so a figure that looks wrong can be traced to who changed it and when instead of compared across four copies of a file.',
        chips: ['Dashboards', 'Book a walkthrough'],
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
        text: 'Thirty minutes on your floor or front desk with your own spreadsheets open, and a straight answer on whether YiY is worth it. No slide deck. Reach us at hello@yiy.tech or use the form.',
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
        chips: ['How much does it cost?', 'Dashboards', 'Website'],
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
        text: '你好。仪表板、数据库、怎么离开表格、价格或实施，都可以问我，也可以直接点下面这些。',
        chips: ['你们做什么产品？', '仪表板', '我们的表格怎么办？', '多久能上线？'],
      },
    },
    {
      id: 'overview',
      keywords: ['做什么产品', '什么产品', '你们是做什么的', '介绍', '产品', '概览', '你是谁'],
      answer: {
        text: '两样东西，今天已经上线。仪表板与数据库，把你生意赖以运转的表格换成一个真正的数据库，加一块为你的行业做的仪表板。网站与集成，做你的网站并把它接进同一批数据。第三个「数据与智能」正在小范围内测。',
        chips: ['仪表板', '网站', '数据与智能'],
        links: [
          { label: '仪表板与数据库', href: '/products/dashboards' },
          { label: '网站与集成', href: '/products/website' },
        ],
      },
    },
    {
      id: 'dashboards',
      keywords: ['仪表板', '看板', '数据库', '表结构', '建表', '报表', '报告', '指标', '真数', '一份真数'],
      answer: {
        text: '仪表板与数据库是核心产品。我们按你的生意真正怎么记录工作来设计一个正经的数据库，把你今天表格里的东西迁进来，再做出团队每天早上会打开的那块仪表板。屏幕按你的行业排，不是通用模板，而且每个数字都是实时的。',
        chips: ['我们的表格怎么办？', '和 BI 工具有什么不同？', '要多少钱？'],
        links: [{ label: '了解仪表板', href: '/products/dashboards' }],
      },
    },
    {
      id: 'spreadsheets',
      keywords: ['表格', 'excel', '表哥', '工作表', '谷歌表格', 'csv', '文件', '公式', '宏'],
      answer: {
        text: '我们会把你的表格读一遍，找出藏在里面的结构，然后设计出对应的表，再把内容迁进来。重复数据、同一个供应商的三种写法、从中间开始变了含义的列，都会被标出来交给你决定，而不是猜。Excel 你还能继续用来做一次性分析，只是它不再是数据待的地方。',
        chips: ['多久能上线？', '我能导出数据吗？', '预约实地走访'],
        links: [
          { label: '一张表格什么时候就不够用了', href: '/blog/when-a-spreadsheet-stops-being-enough' },
        ],
      },
    },
    {
      id: 'bi',
      keywords: ['bi', 'power bi', 'tableau', 'looker', 'metabase', '图表', '可视化', '有什么不同'],
      answer: {
        text: 'BI 工具在你喂给它的东西上画图，所以它把每一条重复数据、每一次过期导出全都继承下来了。我们换掉的是源头：数据进入一个带约束的真数据库，仪表板从那里读。画图反而是简单的那一半。',
        chips: ['仪表板', '我们的表格怎么办？'],
      },
    },
    {
      id: 'industry',
      keywords: ['行业', '定制', '按我们的', '诊所', '牙科', '美容院', '补习', '房产', '零售', '批发', '分销', '电商'],
      answer: {
        text: '仪表板按你的行业来排，因为每周要做的决定不同。分销商打开的是库龄、前置期和扣掉运费之后的毛利；诊所打开的是使用率和复诊名单；补习中心打开的是报名和出勤。这是表结构上的差别，不是挪几张图的事。',
        chips: ['仪表板', '预约实地走访'],
        links: [
          {
            label: '为什么通用仪表板没人看',
            href: '/blog/industry-dashboards-versus-generic-ones',
          },
        ],
      },
    },
    {
      id: 'website',
      keywords: ['网站', '官网', '建站', 'wordpress', 'shopify', 'wix', 'squarespace', '落地页'],
      answer: {
        text: '网站与集成会设计并搭建你的新站，然后把它接进你的 YiY 数据库。价格与可用情况实时读取，订单和询问作为记录落到仪表板上，域名、代码仓库和主机从第一天起就在你名下。三周，一笔固定项目费。',
        chips: ['要多少钱？', '我们已经有网站了', '预约实地走访'],
        links: [{ label: '了解网站', href: '/products/website' }],
      },
    },
    {
      id: 'data',
      keywords: ['分析', '预测', '洞察', '智能', 'ai', '人工智能', '机器学习', '异常'],
      answer: {
        text: '数据与智能正在小范围内测。它叠在仪表板与数据库之上：需求与产能预测、客户分群留存、针对退款和取消的异常告警，以及用大白话对自己的表提问。它不单独售卖，因为它的上限就是底下那个数据库的质量。',
        chips: ['加入内测名单', '你们做什么产品？'],
        links: [{ label: '查看路线图', href: '/products/data' }],
      },
    },
    {
      id: 'pricing',
      keywords: ['价格', '收费', '多少钱', '费用', '订阅', '贵', '预算', '报价', '每月', '月费'],
      answer: {
        text: '按门店固定月费。没有按笔抽成，没有意外的实施费，第一天也不用签年约。具体数字取决于站点数量和你用哪些产品。我们在走访时报价，在你做任何承诺之前。',
        chips: ['预约实地走访', '如果我们做大了怎么办？'],
        links: [{ label: '获取报价', href: '/contact' }],
      },
    },
    {
      id: 'timeline',
      keywords: ['多久', '多长时间', '时间线', '上线', '部署', '导入', '实施', '两周', '多快'],
      answer: {
        text: '两周是典型值：第 0 天走访，第 1 到 4 天做表结构与迁移，第 5 到 10 天一个团队真实上线，第 11 到 14 天其余的人加交接。源表格里积了好几年不一致的，要三到四周。我们会在你付钱之前告诉你属于哪一种。',
        chips: ['我们的表格怎么办？', '预约实地走访'],
        links: [{ label: '看看实施流程', href: '/#process' }],
      },
    },
    {
      id: 'migration',
      keywords: ['迁移', '导入数据', '现有数据', '我的数据', '转移', '清理', '重复数据'],
      answer: {
        text: '我们会迁移。你真正在用的每一个工作簿、每一个标签页、每一列。任何无法干净映射的东西都会被标出来交给你决定，绝不会被悄悄丢掉。清理通常占迁移工作量的一半左右，我们在第 0 天就诚实地把它估进去，而不是等到第三周才发现。',
        chips: ['多久能上线？', '我能导出数据吗？'],
      },
    },
    {
      id: 'export',
      keywords: ['导出', '锁定', '离开', '退出', '取消', '数据是我的', '做大了', '合同'],
      answer: {
        text: '随时全量导出，连表结构一起，格式是你的会计认得的，不收退出费。我们宁愿你干净地离开，也不愿你不开心地留着，这也让我们对赢得续约保持诚实。',
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
        text: '手机端的表单在断网时会把录入排队，恢复连接后同步。仪表板本身需要联网，因为一个数字必须是实时的才有意义。',
        chips: ['仪表板', '预约实地走访'],
      },
    },
    {
      id: 'permissions',
      keywords: ['权限', '角色', '谁能看到', '分店经理', '审计', '历史', '记录改动'],
      answer: {
        text: '角色与权限是标配：分店经理看自己的分店，老板看全部。每条记录都带完整历史和审计轨迹，数字看着不对时可以追到是谁改的、什么时候改的，而不用去比对同一个文件的四个副本。',
        chips: ['仪表板', '预约实地走访'],
      },
    },
    {
      id: 'contact',
      keywords: ['走访', '演示', '联系', '聊聊', '打电话', '邮件', '销售', '真人', '开会', '内测名单', '报名'],
      answer: {
        text: '在你的卖场或前台待三十分钟，把你自己的表格打开，直接告诉你 YiY 值不值。没有幻灯片。写信到 hello@yiy.tech，或者用表单联系我们。',
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
        chips: ['要多少钱？', '仪表板', '网站'],
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
    text: 'I did not catch that one. I know about the products, spreadsheets and migration, pricing, rollout, integrations and support. Try one of these.',
    chips: [
      'What do you build?',
      'How much does it cost?',
      'How long to go live?',
      'Book a walkthrough',
    ],
  },
  zh: {
    text: '这句我没听懂。我知道的是产品、表格与数据迁移、价格、实施、集成和支持。试试下面这些。',
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

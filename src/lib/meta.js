/* -------------------------------------------------------------------------- */
/*  Page metadata, per locale                                                  */
/*                                                                             */
/*  Titles and descriptions are the part of a page a search result actually     */
/*  shows, so the Chinese tree needs its own rather than inheriting English     */
/*  ones. Body copy lives in site.js / site.zh.js; this file holds only what    */
/*  goes in <head>, for the pages whose copy is not derived from content.       */
/*                                                                             */
/*  Product and post metadata is not here: it is generated from the translated  */
/*  entries in site.zh.js so the two can never disagree.                        */
/* -------------------------------------------------------------------------- */

export const PAGE_META = {
  home: {
    en: {
      title: 'YiY Tech: inventory and booking software for SMEs',
      description:
        'YiY Tech builds live inventory and stock management for retail and wholesale SMEs, and a booking and operations dashboard for clinics, salons, tuition centres and property teams. Flat monthly pricing per outlet, live in two weeks.',
    },
    zh: {
      title: 'YiY Tech：为中小企业打造的库存与预约软件',
      description:
        'YiY Tech 为零售与批发中小企业做实时库存与进销存管理，也为诊所、美容院、补习中心和房产团队做预约与运营仪表板。按门店固定月费，两周上线。',
    },
  },
  contact: {
    en: {
      title: 'Book a walkthrough',
      description:
        'Thirty minutes on your floor or front desk. We map how stock and bookings move today and tell you straight whether YiY Tech is worth it.',
    },
    zh: {
      title: '预约实地走访',
      description:
        '三十分钟，在你的卖场或前台。我们把库存和预约今天怎么流动画出来，然后直接告诉你 YiY Tech 对你值不值。',
    },
  },
  careers: {
    en: {
      title: 'Careers',
      description:
        'How the YiY Tech team works, and how to reach us about future roles. No vacancies are open at the moment.',
    },
    zh: {
      title: '招聘',
      description: 'YiY Tech 团队怎么工作，以及将来有职位时怎么联系我们。目前没有空缺。',
    },
  },
  blog: {
    en: {
      title: 'Blog',
      description:
        'Field notes on inventory accuracy, booking operations and rolling software into small businesses that cannot afford downtime. Written by the people who run the rollouts.',
    },
    zh: {
      title: '博客',
      description:
        '关于库存准确率、预约运营，以及把软件推进那些经不起停摆的小企业时的现场笔记。由真正做实施的人来写。',
    },
  },
  privacy: {
    en: {
      title: 'Privacy',
      description:
        'What yiy.tech collects, which is almost nothing: no cookies, no analytics, no third-party scripts. How walkthrough enquiries are handled, and your rights under the Malaysian PDPA.',
    },
    zh: {
      title: '隐私',
      description:
        'yiy.tech 收集什么——几乎什么都不收：没有 cookie，没有分析工具，没有第三方脚本。走访询问怎么处理，以及你在马来西亚 PDPA 下的权利。',
    },
  },
  terms: {
    en: {
      title: 'Terms',
      description:
        'Terms of use for yiy.tech, how to read the figures quoted on this site, and the limits of what a marketing page promises. The software itself is governed by a separate service agreement.',
    },
    zh: {
      title: '条款',
      description:
        'yiy.tech 的使用条款、本站引用的数字该怎么读，以及一个营销页面所能承诺的边界。软件本身由另一份服务协议约束。',
    },
  },
  cookies: {
    en: {
      title: 'Cookies',
      description:
        'yiy.tech sets no cookies and loads no third-party scripts. What the consent banner stores, what the analytics and marketing categories would cover, and how to change your answer.',
    },
    zh: {
      title: 'Cookie',
      description:
        'yiy.tech 不设 cookie，也不加载第三方脚本。同意横幅存了什么、分析与营销这两类会涵盖什么，以及怎么改变你的选择。',
    },
  },
};

/** Breadcrumb labels, which are chrome rather than content. */
export const CRUMBS = {
  en: { home: 'Home', products: 'Products', blog: 'Blog' },
  zh: { home: '首页', products: '产品', blog: '博客' },
};

export const pageCopy = (key, locale) => PAGE_META[key][locale] ?? PAGE_META[key].en;
export const crumb = (key, locale) => (CRUMBS[locale] ?? CRUMBS.en)[key];

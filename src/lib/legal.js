/* -------------------------------------------------------------------------- */
/*  Legal pages                                                               */
/*                                                                            */
/*  These describe what this website actually does, which today is very       */
/*  little: no analytics, no cookies, no third-party scripts, no backend.      */
/*  The single thing written to your browser is the cookie-banner choice, in   */
/*  localStorage. Every claim below is verifiable in the source.               */
/*                                                                            */
/*  IMPORTANT: if you add an analytics tag, an embedded map, a hosted font,    */
/*  a chat widget, or a real form endpoint, the privacy policy below stops     */
/*  being true. Update it in the same commit.                                  */
/*                                                                            */
/*  Written to be accurate rather than to be exhaustive. Have a Malaysian      */
/*  practitioner review before relying on it commercially.                     */
/* -------------------------------------------------------------------------- */

export const LEGAL_UPDATED = '2026-08-23';

export const privacy = {
  slug: 'privacy',
  title: 'Privacy',
  headline: 'What this website collects, which is almost nothing.',
  intro:
    'This policy covers yiy.tech, the website. It does not cover the Dashboards & Databases, Website or Data products, which are governed by the service agreement you sign at onboarding and by the data processing terms attached to it.',
  sections: [
    {
      heading: 'What the website collects',
      paragraphs: [
        'Nothing, on our side. This site sets no cookies, loads no analytics and embeds no third-party scripts. Fonts and images are served from our own domain, so no request leaves for another company while you read.',
        'One thing is written to your browser: the choice you make on the cookie banner, kept in localStorage under yiy.consent. It stays on your device, is never sent to us, and exists so we do not ask you again. The cookie policy explains it in full.',
        'You can verify all of that. Open your browser developer tools, look at the network tab and the storage tab, and you will find no tracker and no cookie.',
      ],
    },
    {
      heading: 'Server logs',
      paragraphs: [
        'Our hosting provider records standard web server logs when a page is served: IP address, timestamp, the URL requested, and the browser user agent. This is how web servers work, and we cannot switch it off without switching off the site.',
        'We do not use those logs to build a profile of you, and we do not combine them with anything else.',
      ],
    },
    {
      heading: 'The walkthrough form',
      paragraphs: [
        'The form on the contact page does not submit to a server. It assembles what you typed into a draft email and opens your own mail client with it. Nothing is transmitted until you press send in your mail application, and if you close the draft instead, we never see it.',
        'When you do send it, we receive an ordinary email containing your name, business name, email address, optionally a phone number, which product you are interested in, your business size, and whatever you wrote in the message box. It lands in our inbox and is stored there and in our CRM for as long as we are in contact, and afterwards for as long as we need it for our own records.',
        'We reply once, from a person. We do not add you to a newsletter, a drip sequence, or an advertising audience, and we do not sell, rent or share the enquiry with anyone outside BIYY Tech.',
      ],
    },
    {
      heading: 'The assistant',
      paragraphs: [
        'The chat assistant on this site runs entirely in your browser. It is a keyword matcher, not a language model, and there is no network call behind it. What you type into it is never transmitted anywhere and is gone when you close the tab.',
      ],
    },
    {
      heading: 'Your rights',
      paragraphs: [
        'Under the Malaysian Personal Data Protection Act 2010 you can ask what personal data we hold about you, ask us to correct it, ask us to delete it, and withdraw consent for us to keep contacting you. Write to the address below and we will action it.',
        'If you sent us an enquiry and would rather we had not kept it, say so and we will delete it. You do not have to give a reason.',
      ],
    },
    {
      heading: 'Changes',
      paragraphs: [
        'If we add anything to this site that collects data, we will update this page in the same change that adds it, and move the date at the top.',
      ],
    },
  ],
};

export const terms = {
  slug: 'terms',
  title: 'Terms',
  headline: 'The terms that apply to this website.',
  intro:
    'These terms cover your use of yiy.tech. They are not the software contract. If you become a customer, the Dashboards & Databases, Website or Data products are governed by the separate service agreement you sign at onboarding, and that agreement takes precedence over anything here.',
  sections: [
    {
      heading: 'Using the site',
      paragraphs: [
        'Read it, quote it, send it to a colleague. You may not scrape it at a volume that degrades it for anyone else, attempt to break into it, or present its content as your own work.',
      ],
    },
    {
      heading: 'The numbers on this site',
      paragraphs: [
        'Figures quoted here, including admin hours returned, report-assembly time and rollout duration, come from anonymised and aggregated data across BIYY Tech deployments. Each blog post states its own sample size, measurement window and method, and names the limits of the comparison.',
        'They are directional results from small samples, not guarantees, and they are not a promise of what your business will achieve. Your starting point determines most of it. We will give you a specific estimate during the walkthrough, before you pay anything.',
        'If you think a figure here is wrong, write to corrections@yiy.tech. We will check it, correct it if you are right, and note the change.',
      ],
    },
    {
      heading: 'Pricing shown here',
      paragraphs: [
        'This site states the pricing model, a flat monthly fee per outlet with no per-transaction charge, no implementation fee and no annual lock-in required to start. It does not state a price, because the figure depends on outlet count and which products you run.',
        'A quote becomes binding when we put it in writing to you, not before.',
      ],
    },
    {
      heading: 'Availability',
      paragraphs: [
        'Features described for Dashboards & Databases and Website & Integrations reflect what those products do now. Where something is on the roadmap rather than shipped, we say so on the page.',
      ],
    },
    {
      heading: 'Content and marks',
      paragraphs: [
        'The writing, layout and code on this site belong to BIYY Technologies. The BIYY Tech name and mark are ours. Photography is licensed via Pexels under their licence, with a small number of images released into the public domain under CC0 via StockSnap.',
        'You are welcome to quote from the blog with attribution and a link.',
      ],
    },
    {
      heading: 'Liability',
      paragraphs: [
        'This site is provided as it is. We take reasonable care to keep it accurate and available, but we do not warrant that it is error-free or continuously reachable, and we are not liable for decisions made solely on the basis of a marketing page. Talk to us before you commit to anything.',
        'Nothing here limits liability that cannot lawfully be limited.',
      ],
    },
    {
      heading: 'Governing law',
      paragraphs: [
        'These terms are governed by the laws of Malaysia, and the courts of Malaysia have jurisdiction over any dispute arising from them.',
      ],
    },
  ],
};

export const cookies = {
  slug: 'cookies',
  title: 'Cookies',
  headline: 'A cookie policy for a site that sets no cookies.',
  intro:
    'Most cookie policies are written to cover a tracking stack the visitor cannot see. This one covers yiy.tech, which has no tracking stack. It states what the banner is for, what the single stored value is, and how to change your mind.',
  sections: [
    {
      heading: 'What we set today',
      paragraphs: [
        'No cookies. Not ours, and none belonging to anyone else. There is no analytics tag, no advertising pixel, no embedded video, no hosted font and no chat widget from a third party. Fonts and images come from our own domain.',
        'The chat assistant on this site is a keyword matcher running in your browser. It makes no network call and stores nothing between visits.',
      ],
    },
    {
      heading: 'The one thing stored in your browser',
      paragraphs: [
        'When you answer the banner, we save your answer in localStorage under the key yiy.consent. It records which categories you allowed and the date you decided, and nothing else. It is not a cookie, so it is never attached to a request and never reaches our server.',
        'If you decline everything, that decision is what gets stored. Storing a refusal is the only way to stop asking you.',
      ],
    },
    {
      heading: 'The categories',
      paragraphs: [
        'Strictly necessary covers serving the page and remembering your answer. It has no switch, because the site cannot function without it and it does not track you.',
        'Analytics would cover anonymous page and traffic statistics. Marketing would cover advertising and remarketing tags belonging to other companies. Both are off by default and neither is loaded today, so granting them right now switches nothing on. The record exists so that if we ever add one, it runs only for people who already said yes.',
      ],
    },
    {
      heading: 'Rejecting is a real option',
      paragraphs: [
        'Reject all sits next to Accept all, is the same size, and takes the same one click. Nothing on this site is withheld, degraded or delayed if you decline. There is no cookie wall and no second prompt.',
        'Closing the banner without choosing is not treated as agreement. Nothing is enabled until you pick.',
      ],
    },
    {
      heading: 'Changing your mind',
      paragraphs: [
        'Use the Cookie preferences link in the footer of any page. It reopens the banner with your current settings, and saving overwrites them immediately.',
        'Clearing site data in your browser removes the stored answer entirely, and the banner will ask again on your next visit.',
      ],
    },
    {
      heading: 'Server logs',
      paragraphs: [
        'Separately from any of this, our hosting provider writes standard web server logs when a page is served: IP address, timestamp, URL and user agent. That is how web servers work and it is not something consent can switch off. We do not profile you with it. The privacy policy covers it in more detail.',
      ],
    },
    {
      heading: 'Changes',
      paragraphs: [
        'If we add anything that sets a cookie or loads a third-party script, we will update this page in the same change that adds it, move the date at the top, and ask you again rather than assume an old answer still covers it.',
      ],
    },
  ],
};

export const legalPages = [privacy, terms, cookies];

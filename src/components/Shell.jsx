import BackToTop from '@/components/BackToTop';
import Chatbot from '@/components/Chatbot';
import CookieConsent from '@/components/CookieConsent';
import Footer from '@/components/Footer';
import HtmlLang from '@/components/HtmlLang';
import Nav from '@/components/Nav';
import { LocaleProvider } from '@/lib/i18n';
import { htmlLang } from '@/lib/routes';

/**
 * Everything that surrounds a page, in one locale.
 *
 * There is one <html> element for the whole site (the root layout owns it), so
 * the chrome cannot live there any more: it needs to know which language it is
 * rendering in, and that is decided per route tree. Both trees mount this.
 */
export default function Shell({ locale = 'en', children }) {
  const lang = htmlLang(locale);

  return (
    <LocaleProvider locale={locale}>
      {/* The root layout ships lang="en" in the markup because it is shared by
          both trees and static. LangBoot corrects it before first paint from
          the URL; this keeps it correct across client navigations, where no
          script re-runs. Search engines are told the same thing, more
          reliably, by the hreflang set in the head and by the content. */}
      <HtmlLang lang={lang} />

      <Nav />
      <main>{children}</main>
      <Footer />
      <BackToTop />
      <Chatbot />
      <CookieConsent />
    </LocaleProvider>
  );
}

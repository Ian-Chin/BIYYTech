import Shell from '@/components/Shell';

/**
 * The English tree. A route group, so these pages keep the URLs they were
 * indexed at: /contact stays /contact, not /en/contact.
 */
export default function EnglishLayout({ children }) {
  return <Shell locale="en">{children}</Shell>;
}

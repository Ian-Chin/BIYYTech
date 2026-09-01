import Shell from '@/components/Shell';

/** The Malay tree, served from /ms and generated in Malay on the server. */
export default function MalayLayout({ children }) {
  return <Shell locale="ms">{children}</Shell>;
}

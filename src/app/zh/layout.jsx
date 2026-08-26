import Shell from '@/components/Shell';

/** The Chinese tree, served from /zh and generated in Chinese on the server. */
export default function ChineseLayout({ children }) {
  return <Shell locale="zh">{children}</Shell>;
}

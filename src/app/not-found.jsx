import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70svh] items-center overflow-hidden bg-paper">
      <div className="shell relative py-32">
        <p className="font-mono text-xs tracking-[0.2em] text-ink-faint">404</p>
        <h1 className="display mt-5 max-w-[14ch] text-[clamp(2.2rem,6vw,4.5rem)]">
          That page is not on the shelf.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-ink-mute">
          The link is broken or the page moved. Head back to the products, or tell us what
          you were looking for.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Logo from '@/components/Logo';
import { nav, products } from '@/lib/site';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(0);
  // The panel is closed on every first paint, so its three preview images were
  // three downloads per page for a menu most visitors never open. They mount
  // the first time the menu is opened and stay mounted after that.
  const [primed, setPrimed] = useState(false);
  const closeTimer = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const openMenu = () => {
    clearTimeout(closeTimer.current);
    setPrimed(true);
    setMenu(true);
  };

  // Short grace period so the pointer can cross the gap into the panel.
  const closeMenu = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(false), 120);
  };

  // Heroes open as an inset card on a paper surround, so the bar is always
  // dark-on-light: transparent over white at rest, a white blur bar once
  // scrolled or when the product panel is open.
  const solid = scrolled || menu;
  const product = products[active];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-smooth ${
        solid
          ? 'border-b border-ink/10 bg-white/95 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
      onMouseLeave={closeMenu}
    >
      <div className="shell flex items-center justify-between gap-6" style={{ height: 'var(--nav-h)' }}>
        <Logo variant="light" size={28} priority />

        <nav className="hidden items-center gap-7 xl:gap-10 lg:flex">
          <Link
            href="/#products"
            onMouseEnter={openMenu}
            onFocus={openMenu}
            aria-expanded={menu}
            aria-controls="product-menu"
            className={`inline-flex items-center gap-1.5 py-2 text-sm transition-colors duration-300 hover:text-ink ${
              menu ? 'text-ink' : 'text-ink-mute'
            }`}
          >
            Products
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              className={`transition-transform duration-500 ease-smooth ${menu ? 'rotate-180' : ''}`}
              aria-hidden="true"
            >
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </Link>

          {nav
            .filter((item) => item.label !== 'Products')
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={closeMenu}
                className="link-underline py-2 text-sm text-ink-mute transition-colors duration-300 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/contact"
            className="btn bg-ink px-5 py-2.5 text-[13px] text-white transition-all duration-500 ease-smooth hover:-translate-y-0.5 active:scale-95"
          >
            Book a walkthrough
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="relative z-50 flex h-10 w-10 items-center justify-center border border-ink/[0.12] lg:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 block h-px w-full bg-ink transition-all duration-500 ease-smooth ${
                open ? 'top-1.5 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-full bg-ink transition-all duration-500 ease-smooth ${
                open ? 'top-1.5 -rotate-45' : 'top-3'
              }`}
            />
          </span>
        </button>
      </div>

      {/* Full-width product mega panel ----------------------------------- */}
      <div
        id="product-menu"
        aria-label="Products"
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        inert={!menu}
        className={`absolute inset-x-0 top-full hidden overflow-hidden border-ink/10 bg-white transition-all duration-500 ease-smooth lg:block ${
          menu
            ? 'pointer-events-auto max-h-[520px] border-b opacity-100'
            : 'pointer-events-none max-h-0 border-b-0 opacity-0'
        }`}
      >
        <div className="shell grid grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-14 py-10">
          {/* Product list */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint">Products</p>
            <ul className="mt-5">
              {products.map((p, i) => (
                <li key={p.slug}>
                  <Link
                    href={p.href}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className={`group flex items-start gap-5 border-t border-ink/[0.08] py-5 transition-colors duration-300 ${
                      active === i ? 'text-ink' : 'text-ink-mute'
                    }`}
                  >
                    <span
                      className={`mt-1 font-mono text-[10px] tracking-[0.2em] transition-colors duration-300 ${
                        active === i ? 'text-ink' : 'text-ink-faint'
                      }`}
                    >
                      {p.index}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-3">
                        <span className="text-lg font-semibold tracking-tighter">{p.name}</span>
                        {p.status === 'Coming soon' ? (
                          <span className="border border-ink/15 px-1.5 py-px text-[9px] uppercase tracking-[0.16em] text-ink-faint">
                            Soon
                          </span>
                        ) : null}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed">{p.tagline}</span>
                    </span>
                    <span
                      className={`mt-2 transition-all duration-500 ease-smooth ${
                        active === i ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                      }`}
                      aria-hidden="true"
                    >
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                        <path
                          d="M9 1l4 4-4 4M13 5H1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Preview of the hovered product */}
          <div className="grid grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] gap-8 border-l border-ink/[0.08] pl-14">
            <div className="relative aspect-[4/5] overflow-hidden bg-paper-warm">
              {primed && products.map((p, i) => (
                // The slot is ~294px wide but the box is 4:5 and the sources are
                // 3:2, so object-cover scales by height and throws away most of
                // the width. `sizes` has to describe the *cropped* source width
                // (box height x 1.5 = ~552px), not the CSS width, or the browser
                // picks a candidate it then has to upscale. At 240px it was
                // choosing the 256w file for a 552px job.
                <Image
                  key={p.slug}
                  src={p.menuImage}
                  alt=""
                  fill
                  sizes="580px"
                  quality={90}
                  className="object-cover transition-opacity duration-700 ease-smooth"
                  style={{ opacity: active === i ? 1 : 0 }}
                />
              ))}
            </div>

            <div className="flex flex-col justify-between py-1">
              <div>
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="border border-ink/15 px-2 py-0.5 text-[9px] uppercase tracking-[0.16em] text-ink-mute">
                    {product.status}
                  </span>
                  <span className="text-xs text-ink-faint">{product.audience}</span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{product.summary}</p>
                <ul className="mt-5 space-y-2">
                  {product.bullets.slice(0, 3).map((b) => (
                    <li key={b} className="flex gap-3 text-xs leading-relaxed text-ink-mute">
                      <span className="mt-[6px] h-1 w-1 shrink-0 bg-ink" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={product.href}
                className="mt-6 inline-flex items-center gap-2 self-start border-b border-ink pb-1 text-sm font-medium"
              >
                Explore {product.short}
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                  <path
                    d="M9 1l4 4-4 4M13 5H1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sheet ---------------------------------------------------- */}
      <div
        inert={!open}
        className={`fixed inset-0 z-40 bg-white transition-all ease-smooth lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        style={{ transitionDuration: '600ms' }}
      >
        <div className="shell flex h-full flex-col justify-between pb-10 pt-28">
          <nav className="flex flex-col">
            {products.map((p, i) => (
              <Link
                key={p.slug}
                href={p.href}
                className="group border-b border-ink/[0.08] py-5"
                style={{
                  transitionDelay: `${i * 60}ms`,
                  transform: open ? 'none' : 'translateY(14px)',
                  opacity: open ? 1 : 0,
                  transition: 'all 0.7s var(--ease-smooth)',
                }}
              >
                <span className="flex items-baseline justify-between gap-4">
                  <span className="display text-2xl">{p.name}</span>
                  <span className="shrink-0 text-[10px] uppercase tracking-widest text-ink-faint">
                    {p.status}
                  </span>
                </span>
                <span className="mt-1 block text-sm text-ink-mute">{p.tagline}</span>
              </Link>
            ))}
            {nav
              .filter((item) => item.label !== 'Products')
              .map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-ink/[0.08] py-4 text-lg text-ink-mute"
                  style={{
                    transitionDelay: `${(i + products.length) * 60}ms`,
                    transform: open ? 'none' : 'translateY(14px)',
                    opacity: open ? 1 : 0,
                    transition: 'all 0.7s var(--ease-smooth)',
                  }}
                >
                  {item.label}
                </Link>
              ))}
          </nav>

          <Link href="/contact" className="btn-primary w-full">
            Book a walkthrough
          </Link>
        </div>
      </div>
    </header>
  );
}

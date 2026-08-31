'use client';

import Image from 'next/image';
import Link from '@/components/Link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import LanguageToggle from '@/components/LanguageToggle';
import Logo from '@/components/Logo';
import { useLocale } from '@/lib/i18n';

const Chevron = ({ open }) => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    className={`transition-transform duration-500 ease-smooth ${open ? 'rotate-180' : ''}`}
    aria-hidden="true"
  >
    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const Arrow = () => (
  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
    <path
      d="M9 1l4 4-4 4M13 5H1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Nav() {
  const { t, content } = useLocale();
  const { nav, products, industries } = content;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
<<<<<<< HEAD
  // Which mega panel is open, if any: 'products', 'industries' or null.
  const [menu, setMenu] = useState(null);
  const [active, setActive] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  // The panel is closed on every first paint, so its three preview images were
  // three downloads per page for a menu most visitors never open. They mount
  // the first time the menu is opened and stay mounted after that.
=======
  // Which dropdown is showing, by the `panel` name on the nav entry. Null is
  // closed. A single value rather than one boolean per panel, so opening one
  // closes the other without any coordination.
  const [panel, setPanel] = useState(null);
  const [active, setActive] = useState(0);
  // The panels are closed on every first paint, so their preview images were
  // downloads per page for a menu most visitors never open. They mount the
  // first time a menu is opened and stay mounted after that.
>>>>>>> f71a7ce83933a975878c66dc7c3d31807cad5ebe
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
<<<<<<< HEAD
    setMenu(null);
=======
    setPanel(null);
>>>>>>> f71a7ce83933a975878c66dc7c3d31807cad5ebe
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

<<<<<<< HEAD
  const openMenu = (which) => () => {
    clearTimeout(closeTimer.current);
    setPrimed(true);
    setMenu(which);
=======
  const openPanel = (name) => {
    clearTimeout(closeTimer.current);
    setPrimed(true);
    if (name === 'products') setActive(0);
    setPanel(name);
>>>>>>> f71a7ce83933a975878c66dc7c3d31807cad5ebe
  };

  // Short grace period so the pointer can cross the gap into the panel.
  const closePanel = () => {
    clearTimeout(closeTimer.current);
<<<<<<< HEAD
    closeTimer.current = setTimeout(() => setMenu(null), 120);
=======
    closeTimer.current = setTimeout(() => setPanel(null), 120);
>>>>>>> f71a7ce83933a975878c66dc7c3d31807cad5ebe
  };

  // Heroes open as an inset card on a paper surround, so the bar is always
  // dark-on-light: transparent over white at rest, a white blur bar once
<<<<<<< HEAD
  // scrolled or when the product panel is open.
  const solid = scrolled || Boolean(menu);
=======
  // scrolled or when a panel is open.
  const solid = scrolled || Boolean(panel);
>>>>>>> f71a7ce83933a975878c66dc7c3d31807cad5ebe
  const product = products[active];
  const industry = industries[activeIndustry];

  const panelShell = (name) =>
    `absolute inset-x-0 top-full hidden overflow-hidden border-ink/10 bg-white transition-all duration-500 ease-smooth lg:block ${
      panel === name
        ? 'pointer-events-auto max-h-[620px] border-b opacity-100'
        : 'pointer-events-none max-h-0 border-b-0 opacity-0'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-smooth ${
        solid
          ? 'border-b border-ink/10 bg-white/95 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
      onMouseLeave={closePanel}
    >
      <div
        className="shell-edge flex items-center justify-between gap-6"
        style={{ height: 'var(--nav-h)' }}
      >
        {/* Logo and the links travel together on the left; the CTA holds the
            right edge. */}
        <div className="flex items-center gap-8 xl:gap-12">
          <Logo variant="light" size={28} priority label={t('common.logoHome')} />

<<<<<<< HEAD
        <nav className="hidden items-center gap-7 xl:gap-10 lg:flex">
          <Link
            href="/#products"
            onMouseEnter={openMenu('products')}
            onFocus={openMenu('products')}
            aria-expanded={menu === 'products'}
            aria-controls="product-menu"
            className={`inline-flex items-center gap-1.5 py-2 text-sm font-medium transition-colors duration-300 hover:text-ink ${
              menu === 'products' ? 'text-ink' : 'text-ink-soft'
            }`}
          >
            {t('common.products')}
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              className={`transition-transform duration-500 ease-smooth ${
                menu === 'products' ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            >
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </Link>

          {/* Industries opens the mirrored panel: image on the left, list on
              the right, so the two menus do not read as the same card twice. */}
          <Link
            href="/#industries"
            onMouseEnter={openMenu('industries')}
            onFocus={openMenu('industries')}
            aria-expanded={menu === 'industries'}
            aria-controls="industry-menu"
            className={`inline-flex items-center gap-1.5 py-2 text-sm font-medium transition-colors duration-300 hover:text-ink ${
              menu === 'industries' ? 'text-ink' : 'text-ink-soft'
            }`}
          >
            {t('common.industries')}
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              className={`transition-transform duration-500 ease-smooth ${
                menu === 'industries' ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            >
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </Link>

          {nav
            .slice(2)
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={closeMenu}
                className="link-underline py-2 text-sm font-medium text-ink-soft transition-colors duration-300 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
        </nav>
=======
          <nav className="hidden items-center gap-7 xl:gap-10 lg:flex">
            {nav.map((item) =>
              item.panel ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => openPanel(item.panel)}
                  onFocus={() => openPanel(item.panel)}
                  aria-expanded={panel === item.panel}
                  aria-controls={`${item.panel}-menu`}
                  className={`inline-flex items-center gap-1.5 py-2 text-sm font-medium transition-colors duration-300 hover:text-ink ${
                    panel === item.panel ? 'text-ink' : 'text-ink-soft'
                  }`}
                >
                  {item.label}
                  <Chevron open={panel === item.panel} />
                </Link>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={closePanel}
                  className="link-underline py-2 text-sm font-medium text-ink-soft transition-colors duration-300 hover:text-ink"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
>>>>>>> f71a7ce83933a975878c66dc7c3d31807cad5ebe
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/contact"
            className="btn bg-ink px-5 py-2.5 text-[13px] text-white transition-all duration-500 ease-smooth hover:-translate-y-0.5 active:scale-95"
          >
            {t('common.walkthrough')}
          </Link>
          <LanguageToggle className="ml-1" />
        </div>

        {/* Both controls sit above the mobile sheet so the language can still be
            changed while the menu is open. */}
        <div className="relative z-50 flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center border border-ink/[0.12]"
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
      </div>

      {/* Full-width product mega panel ----------------------------------- */}
      <div
        id="products-menu"
        aria-label={t('nav.panelLabel')}
<<<<<<< HEAD
        onMouseEnter={openMenu('products')}
        onMouseLeave={closeMenu}
        inert={menu !== 'products'}
        className={`absolute inset-x-0 top-full hidden overflow-hidden border-ink/10 bg-white transition-all duration-500 ease-smooth lg:block ${
          menu === 'products'
            ? 'pointer-events-auto max-h-[560px] border-b opacity-100'
            : 'pointer-events-none max-h-0 border-b-0 opacity-0'
        }`}
=======
        onMouseEnter={() => openPanel('products')}
        onMouseLeave={closePanel}
        inert={panel !== 'products'}
        className={panelShell('products')}
>>>>>>> f71a7ce83933a975878c66dc7c3d31807cad5ebe
      >
        {/* Deliberately inset further than the bar above it: the bar is a row of
            controls that wants the edge, the panel is a block of reading. */}
        <div className="grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-16 px-10 py-14 md:px-14 xl:px-20 xl:gap-20">
          {/* Product list */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint">
              {t('common.products')}
            </p>
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
                        {p.soon ? (
                          <span className="border border-ink/15 px-1.5 py-px text-[9px] uppercase tracking-[0.16em] text-ink-faint">
                            {t('common.soon')}
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
                      <Arrow />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Preview of the hovered product */}
          <div className="grid grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] gap-8 border-l border-ink/[0.08] pl-14">
            {/* Fixed height rather than an aspect ratio: the panel got wider
                when it moved out to the edges, and a 4:5 box grew with it until
                the collapse max-height clipped the bottom of the preview. */}
            <div className="relative h-[320px] overflow-hidden bg-paper-warm">
              {primed &&
                products.map((p, i) => (
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
                {t('common.exploreProduct', { name: product.short })}
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Full-width industries mega panel -------------------------------
          Mirrored from the product panel on purpose: there the preview sits on
          the right of the list, here it holds the left edge, so the two menus
          are told apart before either is read. */}
      <div
        id="industry-menu"
        aria-label={t('nav.industriesPanelLabel')}
        onMouseEnter={openMenu('industries')}
        onMouseLeave={closeMenu}
        inert={menu !== 'industries'}
        className={`absolute inset-x-0 top-full hidden overflow-hidden border-ink/10 bg-white transition-all duration-500 ease-smooth lg:block ${
          menu === 'industries'
            ? 'pointer-events-auto max-h-[560px] border-b opacity-100'
            : 'pointer-events-none max-h-0 border-b-0 opacity-0'
        }`}
      >
        <div className="grid w-full grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-16 px-10 py-14 md:px-14 xl:gap-20 xl:px-20">
          {/* Preview of the hovered industry, image first */}
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] gap-8 border-r border-ink/[0.08] pr-14">
            {/* Same fixed height as the product preview so the two panels open
                to the same depth and the bar does not jump between them. */}
            <div className="relative h-[320px] overflow-hidden bg-paper-warm">
              {primed &&
                industries.map((item, i) => (
                  <Image
                    key={item.name}
                    src={item.image}
                    alt=""
                    fill
                    sizes="580px"
                    quality={90}
                    className="object-cover transition-opacity duration-700 ease-smooth"
                    style={{ opacity: activeIndustry === i ? 1 : 0 }}
                  />
                ))}
            </div>

            <div className="flex flex-col justify-between py-1">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                  {t('industries.eyebrow')}
                </p>
                <p className="mt-4 text-2xl font-semibold leading-tight tracking-tighter">
                  {industry.name}
                </p>
                <p className="mt-3">
                  <span className="border border-ink/15 px-2 py-0.5 text-[9px] uppercase tracking-[0.16em] text-ink-mute">
                    {t('industries.runsOn', { name: industry.product })}
                  </span>
                </p>
                <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                  {t('industries.menuBlurb')}
                </p>
              </div>

              <Link
                href={industry.href}
                className="mt-6 inline-flex items-center gap-2 self-start border-b border-ink pb-1 text-sm font-medium"
              >
                {t('common.exploreProduct', { name: industry.product })}
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

          {/* Industry list. Eight rows would run past the panel in one column,
              so they sit two-up and lighter than the product rows. */}
=======
      {/* Industries panel -------------------------------------------------
          A directory rather than a second mega panel: twelve entries with
          previews would be twelve more image requests for a menu, and the
          thing a visitor is doing here is scanning for their own trade. Three
          columns, no images, one line of context on the left. */}
      <div
        id="industries-menu"
        aria-label={t('nav.industriesPanelLabel')}
        onMouseEnter={() => openPanel('industries')}
        onMouseLeave={closePanel}
        inert={panel !== 'industries'}
        className={panelShell('industries')}
      >
        <div className="grid w-full grid-cols-[minmax(0,0.5fr)_minmax(0,1.5fr)] gap-16 px-10 py-14 md:px-14 xl:px-20 xl:gap-20">
>>>>>>> f71a7ce83933a975878c66dc7c3d31807cad5ebe
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint">
              {t('common.industries')}
            </p>
<<<<<<< HEAD
            <ul className="mt-5 grid grid-cols-2 gap-x-10">
              {industries.map((item, i) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onMouseEnter={() => setActiveIndustry(i)}
                    onFocus={() => setActiveIndustry(i)}
                    className={`group flex items-center gap-3 border-t border-ink/[0.08] py-[13px] transition-colors duration-300 ${
                      activeIndustry === i ? 'text-ink' : 'text-ink-mute'
                    }`}
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium tracking-tight">
                        {item.name}
                      </span>
                      <span className="mt-0.5 block text-[11px] text-ink-faint">
                        {item.product}
                      </span>
                    </span>
                    <span
                      className={`transition-all duration-500 ease-smooth ${
                        activeIndustry === i ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
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
=======
            <p className="mt-5 max-w-[30ch] text-sm leading-relaxed text-ink-mute">
              {t('nav.industriesPanelNote')}
            </p>
            <Link
              href="/industries"
              className="mt-7 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-medium"
            >
              {t('common.allIndustries')}
              <Arrow />
            </Link>
          </div>

          <ul className="grid grid-cols-3 gap-x-10 border-l border-ink/[0.08] pl-14">
            {industries.map((item) => (
              <li key={item.slug}>
                <Link
                  href={item.href}
                  className="group flex items-baseline gap-3 border-b border-ink/[0.08] py-3.5 text-ink-mute transition-colors duration-300 hover:text-ink"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium tracking-tight">{item.name}</span>
                    <span className="mt-0.5 block text-[11px] uppercase tracking-[0.14em] text-ink-faint">
                      {item.product}
                    </span>
                  </span>
                  <span
                    className="shrink-0 -translate-x-2 opacity-0 transition-all duration-500 ease-smooth group-hover:translate-x-0 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <Arrow />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
>>>>>>> f71a7ce83933a975878c66dc7c3d31807cad5ebe
        </div>
      </div>

      {/* Mobile sheet ---------------------------------------------------- */}
      <div
        inert={!open}
        className={`fixed inset-0 z-40 overflow-y-auto bg-white transition-all ease-smooth lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        style={{ transitionDuration: '600ms' }}
      >
        <div className="shell-edge flex min-h-full flex-col justify-between pb-10 pt-28">
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

            {/* Industries stay a compact two-column list here: twelve entries
                at the size of a product row would push the contact link three
                screens down. */}
            <div
              className="border-b border-ink/[0.08] py-6"
              style={{
                transitionDelay: `${products.length * 60}ms`,
                transform: open ? 'none' : 'translateY(14px)',
                opacity: open ? 1 : 0,
                transition: 'all 0.7s var(--ease-smooth)',
              }}
            >
              <Link
                href="/industries"
                className="flex items-baseline justify-between gap-4 text-ink"
              >
                <span className="display text-2xl">{t('common.industries')}</span>
                <span className="shrink-0 text-[10px] uppercase tracking-widest text-ink-faint">
                  {industries.length}
                </span>
              </Link>
              <ul className="mt-4 grid grid-cols-2 gap-x-6">
                {industries.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={item.href}
                      className="block py-1.5 text-sm leading-snug text-ink-mute"
                    >
                      {item.short}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {nav
              .filter((item) => !item.panel)
              .map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-ink/[0.08] py-4 text-lg text-ink-mute"
                  style={{
                    transitionDelay: `${(i + products.length + 1) * 60}ms`,
                    transform: open ? 'none' : 'translateY(14px)',
                    opacity: open ? 1 : 0,
                    transition: 'all 0.7s var(--ease-smooth)',
                  }}
                >
                  {item.label}
                </Link>
              ))}
          </nav>

          <Link href="/contact" className="btn-primary mt-10 w-full">
            {t('common.walkthrough')}
          </Link>
        </div>
      </div>
    </header>
  );
}

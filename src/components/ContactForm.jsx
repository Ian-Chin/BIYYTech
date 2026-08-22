'use client';

import Image from 'next/image';
import { useState } from 'react';
import HeroFrame from '@/components/HeroFrame';
import { Parallax, Reveal, SplitWords } from '@/components/motion';
import { company, products } from '@/lib/site';

const INTERESTS = [
  'Inventory & Stock Management',
  'Booking & Operations',
  'Both',
  'Not sure yet',
];

const SIZES = ['1 outlet', '2–5 outlets', '6–20 outlets', '20+ outlets'];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: INTERESTS[0],
    size: SIZES[1],
    message: '',
  });

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // No backend is wired yet, so hand the enquiry to the user's mail client so
    // nothing is silently dropped. Swap this for a POST when the API exists.
    const body = [
      `Name: ${form.name}`,
      `Business: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Interested in: ${form.interest}`,
      `Size: ${form.size}`,
      '',
      form.message,
    ].join('\n');

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      `Walkthrough request: ${form.company || form.name}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    'w-full rounded-xl border border-ink/[0.12] bg-white px-4 py-3 text-sm outline-none transition-all duration-500 ease-smooth placeholder:text-ink-faint focus:border-ink/45 focus:ring-4 focus:ring-ink/5';

  return (
    <>
      <HeroFrame>
        <div className="absolute inset-0">
          <Image
            src="/media/img/team-office.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="scale-105 object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/80 to-ink" />

        <div className="shell relative py-20 md:py-28">
          <Reveal>
            <span className="eyebrow text-white/45">
              <span className="h-px w-6 bg-white/30" />
              Book a walkthrough
            </span>
          </Reveal>

          <SplitWords
            as="h1"
            text="Thirty minutes. Your numbers. A straight answer."
            stagger={38}
            className="display mt-6 block max-w-[17ch] text-[clamp(1.9rem,4vw,3.4rem)]"
          />

          <Reveal delay={220}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
              We will walk your floor or your front desk, map how stock and bookings move
              today, and tell you whether YiY is worth it for your business. If it is not,
              we will say so.
            </p>
          </Reveal>
        </div>
      </HeroFrame>

      <section className="relative overflow-hidden bg-paper py-20 md:py-28">
        <div className="shell relative grid gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Form ------------------------------------------------------- */}
          <Reveal>
            {sent ? (
              <div className="rounded-2xl border border-ink/[0.12] bg-white p-10">
                <h2 className="text-2xl font-semibold tracking-tighter">
                  Your mail client is open.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-mute">
                  Send the drafted message and we will reply within one working day. If
                  nothing opened, email us directly at{' '}
                  <a className="underline underline-offset-4" href={`mailto:${company.email}`}>
                    {company.email}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="btn-ghost mt-8"
                >
                  Edit the enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm">
                  <span className="text-xs uppercase tracking-[0.14em] text-ink-mute">Name</span>
                  <input
                    required
                    className={field}
                    value={form.name}
                    onChange={set('name')}
                    placeholder="Your name"
                  />
                </label>

                <label className="grid gap-2 text-sm">
                  <span className="text-xs uppercase tracking-[0.14em] text-ink-mute">
                    Business
                  </span>
                  <input
                    required
                    className={field}
                    value={form.company}
                    onChange={set('company')}
                    placeholder="Business name"
                  />
                </label>

                <label className="grid gap-2 text-sm">
                  <span className="text-xs uppercase tracking-[0.14em] text-ink-mute">Email</span>
                  <input
                    required
                    type="email"
                    className={field}
                    value={form.email}
                    onChange={set('email')}
                    placeholder="you@business.com"
                  />
                </label>

                <label className="grid gap-2 text-sm">
                  <span className="text-xs uppercase tracking-[0.14em] text-ink-mute">
                    Phone / WhatsApp
                  </span>
                  <input
                    className={field}
                    value={form.phone}
                    onChange={set('phone')}
                    placeholder="Optional"
                  />
                </label>

                <label className="grid gap-2 text-sm">
                  <span className="text-xs uppercase tracking-[0.14em] text-ink-mute">
                    Interested in
                  </span>
                  <select className={field} value={form.interest} onChange={set('interest')}>
                    {INTERESTS.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2 text-sm">
                  <span className="text-xs uppercase tracking-[0.14em] text-ink-mute">
                    Size
                  </span>
                  <select className={field} value={form.size} onChange={set('size')}>
                    {SIZES.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2 text-sm sm:col-span-2">
                  <span className="text-xs uppercase tracking-[0.14em] text-ink-mute">
                    What is costing you time right now?
                  </span>
                  <textarea
                    rows={5}
                    className={field}
                    value={form.message}
                    onChange={set('message')}
                    placeholder="Stock counts, double bookings, no-shows, month-end reporting…"
                  />
                </label>

                <div className="sm:col-span-2">
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Send enquiry
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                      <path
                        d="M9 1l4 4-4 4M13 5H1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <p className="mt-4 text-xs leading-relaxed text-ink-faint">
                    No newsletter, no drip sequence. We reply once, from a human.
                  </p>
                </div>
              </form>
            )}
          </Reveal>

          {/* Aside ------------------------------------------------------ */}
          <div className="space-y-8">
            <Reveal delay={120}>
              <Parallax speed={-26} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/media/img/founder-portrait.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 34vw, 92vw"
                  className="object-cover"
                />
              </Parallax>
            </Reveal>

            <Reveal delay={200} className="rounded-2xl border border-ink/[0.12] bg-white p-7">
              <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint">Direct</p>
              <div className="mt-4 space-y-2 text-sm">
                <a
                  href={`mailto:${company.email}`}
                  className="block transition-colors hover:text-accent"
                >
                  {company.email}
                </a>
                <p className="text-ink-mute">{company.phone}</p>
                <p className="text-ink-mute">{company.location}</p>
              </div>
            </Reveal>

            <Reveal delay={280} className="rounded-2xl border border-ink/[0.12] bg-white p-7">
              <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                What we will cover
              </p>
              <ul className="mt-4 space-y-3 text-sm text-ink-mute">
                {products.map((p) => (
                  <li key={p.slug} className="flex gap-3">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-ink" />
                    <span>
                      <span className="font-medium text-ink">{p.name}</span>: {p.audience}
                      {p.status === 'Coming soon' ? ' (roadmap)' : ''}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

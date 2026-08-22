'use client';

import Image from 'next/image';
import { useId, useRef, useState } from 'react';
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

const FIELD =
  'w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-all duration-500 ease-smooth placeholder:text-ink-faint focus:ring-4 focus:ring-ink/5';

/**
 * There is no error colour in the palette and the accent is reserved for focus
 * rings, so an invalid field is marked with a full ink border plus a written
 * message. Never colour alone.
 */
const fieldClass = (invalid) =>
  `${FIELD} ${invalid ? 'border-ink' : 'border-ink/[0.12] focus:border-ink/45'}`;

/** Deliberately permissive. The mail client and our reply are the real check. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Tell us who you are.';
  if (!form.company.trim()) errors.company = 'Which business is this for?';
  if (!form.email.trim()) errors.email = 'We need somewhere to reply.';
  else if (!EMAIL.test(form.email.trim())) errors.email = 'That does not look like an email address.';
  if (form.phone.trim() && !/[0-9]{6}/.test(form.phone.replace(/[^0-9]/g, '')))
    errors.phone = 'Leave this blank, or give a number we can actually dial.';
  return errors;
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [tried, setTried] = useState(false);
  const [draftBody, setDraftBody] = useState('');
  const [copied, setCopied] = useState(false);
  const formRef = useRef(null);
  const uid = useId();

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: INTERESTS[0],
    size: SIZES[1],
    message: '',
  });

  const set = (key) => (e) => {
    const { value } = e.target;
    setForm((f) => {
      const next = { ...f, [key]: value };
      // Only re-validate live once the visitor has already been shown errors.
      if (tried) setErrors(validate(next));
      return next;
    });
  };

  const compose = (f) =>
    [
      `Name: ${f.name}`,
      `Business: ${f.company}`,
      `Email: ${f.email}`,
      `Phone: ${f.phone || '—'}`,
      `Interested in: ${f.interest}`,
      `Size: ${f.size}`,
      '',
      f.message || '(no message)',
    ].join('\n');

  const subject = `Walkthrough request: ${form.company || form.name}`;

  const onSubmit = (e) => {
    e.preventDefault();
    setTried(true);

    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) {
      // Move the visitor to the first thing that needs fixing.
      const first = ['name', 'company', 'email', 'phone'].find((k) => found[k]);
      formRef.current?.querySelector(`#${CSS.escape(`${uid}-${first}`)}`)?.focus();
      return;
    }

    const body = compose(form);
    setDraftBody(body);
    // No backend is wired yet, so hand the enquiry to the visitor's mail client.
    // It can silently do nothing on a machine with no mail app configured, so
    // the confirmation state below shows the drafted text rather than claiming
    // the message was sent.
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`To: ${company.email}\nSubject: ${subject}\n\n${draftBody}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

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
                  We opened a draft in your mail client.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-mute">
                  Nothing has reached us yet. Press send on that draft and we will reply
                  within one working day.
                </p>

                <div className="mt-8 border-t border-ink/[0.12] pt-7">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                    If no draft appeared
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-mute">
                    Some machines have no mail app configured. Copy the enquiry and send it
                    from wherever you do read mail, to{' '}
                    <a className="link-underline text-ink" href={`mailto:${company.email}`}>
                      {company.email}
                    </a>
                    .
                  </p>

                  <pre className="mt-5 max-h-56 overflow-auto whitespace-pre-wrap border border-ink/[0.12] bg-paper-warm p-4 text-xs leading-relaxed text-ink-soft">
                    {draftBody}
                  </pre>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button type="button" onClick={copy} className="btn-primary">
                      {copied ? 'Copied' : 'Copy the enquiry'}
                    </button>
                    <button type="button" onClick={() => setSent(false)} className="btn-ghost">
                      Edit the enquiry
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                <p className="text-xs text-ink-faint sm:col-span-2">
                  Fields marked required are the ones we need to reply. Everything else
                  helps us come prepared.
                </p>

                <Field
                  uid={uid}
                  name="name"
                  label="Name"
                  required
                  error={errors.name}
                  value={form.name}
                  onChange={set('name')}
                  placeholder="Your name"
                  autoComplete="name"
                />

                <Field
                  uid={uid}
                  name="company"
                  label="Business"
                  required
                  error={errors.company}
                  value={form.company}
                  onChange={set('company')}
                  placeholder="Business name"
                  autoComplete="organization"
                />

                <Field
                  uid={uid}
                  name="email"
                  label="Email"
                  type="email"
                  required
                  error={errors.email}
                  value={form.email}
                  onChange={set('email')}
                  placeholder="you@business.com"
                  autoComplete="email"
                />

                <Field
                  uid={uid}
                  name="phone"
                  label="Phone / WhatsApp"
                  error={errors.phone}
                  value={form.phone}
                  onChange={set('phone')}
                  placeholder="Optional"
                  autoComplete="tel"
                  inputMode="tel"
                />

                <label className="grid gap-2 text-sm" htmlFor={`${uid}-interest`}>
                  <span className="text-xs uppercase tracking-[0.14em] text-ink-mute">
                    Interested in
                  </span>
                  <select
                    id={`${uid}-interest`}
                    name="interest"
                    className={fieldClass(false)}
                    value={form.interest}
                    onChange={set('interest')}
                  >
                    {INTERESTS.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2 text-sm" htmlFor={`${uid}-size`}>
                  <span className="text-xs uppercase tracking-[0.14em] text-ink-mute">Size</span>
                  <select
                    id={`${uid}-size`}
                    name="size"
                    className={fieldClass(false)}
                    value={form.size}
                    onChange={set('size')}
                  >
                    {SIZES.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2 text-sm sm:col-span-2" htmlFor={`${uid}-message`}>
                  <span className="text-xs uppercase tracking-[0.14em] text-ink-mute">
                    What is costing you time right now?
                  </span>
                  <textarea
                    id={`${uid}-message`}
                    name="message"
                    rows={5}
                    className={fieldClass(false)}
                    value={form.message}
                    onChange={set('message')}
                    placeholder="Stock counts, double bookings, no-shows, month-end reporting…"
                  />
                </label>

                <div className="sm:col-span-2">
                  {tried && Object.keys(errors).length ? (
                    <p
                      role="alert"
                      className="mb-5 flex items-start gap-3 border border-ink/[0.12] bg-paper-warm p-4 text-sm leading-relaxed text-ink-soft"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 bg-ink" />
                      {Object.keys(errors).length === 1
                        ? 'One field still needs fixing before we can draft the enquiry.'
                        : `${Object.keys(errors).length} fields still need fixing before we can draft the enquiry.`}
                    </p>
                  ) : null}

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
                    This opens a draft in your own mail client. Nothing is sent until you
                    press send there. No newsletter, no drip sequence. We reply once, from
                    a human.
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
                {company.phone ? <p className="text-ink-mute">{company.phone}</p> : null}
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

function Field({ uid, name, label, required = false, error, ...rest }) {
  const id = `${uid}-${name}`;
  const errorId = `${id}-error`;

  return (
    <label className="grid gap-2 text-sm" htmlFor={id}>
      <span className="flex items-baseline gap-2 text-xs uppercase tracking-[0.14em] text-ink-mute">
        {label}
        {required ? (
          <span className="text-[10px] normal-case tracking-normal text-ink-faint">required</span>
        ) : null}
      </span>
      <input
        id={id}
        name={name}
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={fieldClass(Boolean(error))}
        {...rest}
      />
      {error ? (
        <span id={errorId} className="flex items-start gap-2 text-xs leading-relaxed text-ink">
          <span className="mt-[6px] h-1 w-1 shrink-0 bg-ink" />
          {error}
        </span>
      ) : null}
    </label>
  );
}

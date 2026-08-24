'use client';

import Image from 'next/image';
import { useId, useRef, useState } from 'react';
import HeroFrame from '@/components/HeroFrame';
import { Parallax, Reveal, SplitWords } from '@/components/motion';
import { useLocale } from '@/lib/i18n';

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

function validate(form, t) {
  const errors = {};
  if (!form.name.trim()) errors.name = t('contact.errName');
  if (!form.company.trim()) errors.company = t('contact.errBusiness');
  if (!form.email.trim()) errors.email = t('contact.errEmail');
  else if (!EMAIL.test(form.email.trim())) errors.email = t('contact.errEmailFormat');
  if (form.phone.trim() && !/[0-9]{6}/.test(form.phone.replace(/[^0-9]/g, '')))
    errors.phone = t('contact.errPhone');
  return errors;
}

export default function ContactForm() {
  const { t, locale, content } = useLocale();
  const { company, products } = content;
  const interests = t('contact.interests');
  const sizes = t('contact.sizes');

  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [tried, setTried] = useState(false);
  const [draftBody, setDraftBody] = useState('');
  const [copied, setCopied] = useState(false);
  const formRef = useRef(null);
  const uid = useId();

  // The two dropdowns hold an index rather than a label, so switching language
  // moves the selection with it instead of stranding a Chinese answer in an
  // English enquiry.
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: 0,
    size: 1,
    message: '',
  });

  const set = (key) => (e) => {
    const { value } = e.target;
    setForm((f) => {
      const next = { ...f, [key]: value };
      // Only re-validate live once the visitor has already been shown errors.
      if (tried) setErrors(validate(next, t));
      return next;
    });
  };

  const setIndex = (key) => (e) => {
    const index = Number(e.target.value);
    setForm((f) => ({ ...f, [key]: index }));
  };

  const compose = (f) =>
    [
      `${t('contact.mailName')}: ${f.name}`,
      `${t('contact.mailBusiness')}: ${f.company}`,
      `${t('contact.mailEmail')}: ${f.email}`,
      `${t('contact.mailPhone')}: ${f.phone || '—'}`,
      `${t('contact.mailInterest')}: ${interests[f.interest]}`,
      `${t('contact.mailSize')}: ${sizes[f.size]}`,
      '',
      f.message || t('contact.mailNoMessage'),
    ].join('\n');

  const subject = t('contact.mailSubject', { who: form.company || form.name });

  const onSubmit = (e) => {
    e.preventDefault();
    setTried(true);

    const found = validate(form, t);
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
      await navigator.clipboard.writeText(
        `To: ${company.email}\nSubject: ${subject}\n\n${draftBody}`,
      );
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
              {t('contact.eyebrow')}
            </span>
          </Reveal>

          <SplitWords
            as="h1"
            text={t('contact.title')}
            stagger={38}
            className="display mt-6 block max-w-[17ch] text-[clamp(1.9rem,4vw,3.4rem)]"
          />

          <Reveal delay={220}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
              {t('contact.body')}
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
                  {t('contact.sentTitle')}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-mute">
                  {t('contact.sentBody')}
                </p>

                <div className="mt-8 border-t border-ink/[0.12] pt-7">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                    {t('contact.noDraftTitle')}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-mute">
                    {t('contact.noDraftBody')}{' '}
                    <a className="link-underline text-ink" href={`mailto:${company.email}`}>
                      {company.email}
                    </a>
                    {locale === 'zh' ? '。' : '.'}
                  </p>

                  <pre className="mt-5 max-h-56 overflow-auto whitespace-pre-wrap border border-ink/[0.12] bg-paper-warm p-4 text-xs leading-relaxed text-ink-soft">
                    {draftBody}
                  </pre>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button type="button" onClick={copy} className="btn-primary">
                      {copied ? t('contact.copied') : t('contact.copy')}
                    </button>
                    <button type="button" onClick={() => setSent(false)} className="btn-ghost">
                      {t('contact.edit')}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={onSubmit}
                noValidate
                className="grid gap-5 sm:grid-cols-2"
              >
                <p className="text-xs text-ink-faint sm:col-span-2">{t('contact.preamble')}</p>

                <Field
                  uid={uid}
                  name="name"
                  label={t('contact.name')}
                  requiredLabel={t('contact.required')}
                  required
                  error={errors.name}
                  value={form.name}
                  onChange={set('name')}
                  placeholder={t('contact.namePlaceholder')}
                  autoComplete="name"
                />

                <Field
                  uid={uid}
                  name="company"
                  label={t('contact.business')}
                  requiredLabel={t('contact.required')}
                  required
                  error={errors.company}
                  value={form.company}
                  onChange={set('company')}
                  placeholder={t('contact.businessPlaceholder')}
                  autoComplete="organization"
                />

                <Field
                  uid={uid}
                  name="email"
                  label={t('contact.email')}
                  requiredLabel={t('contact.required')}
                  type="email"
                  required
                  error={errors.email}
                  value={form.email}
                  onChange={set('email')}
                  placeholder={t('contact.emailPlaceholder')}
                  autoComplete="email"
                />

                <Field
                  uid={uid}
                  name="phone"
                  label={t('contact.phone')}
                  error={errors.phone}
                  value={form.phone}
                  onChange={set('phone')}
                  placeholder={t('contact.phonePlaceholder')}
                  autoComplete="tel"
                  inputMode="tel"
                />

                <label className="grid gap-2 text-sm" htmlFor={`${uid}-interest`}>
                  <span className="text-xs uppercase tracking-[0.14em] text-ink-mute">
                    {t('contact.interest')}
                  </span>
                  <select
                    id={`${uid}-interest`}
                    name="interest"
                    className={fieldClass(false)}
                    value={form.interest}
                    onChange={setIndex('interest')}
                  >
                    {interests.map((o, i) => (
                      <option key={o} value={i}>
                        {o}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2 text-sm" htmlFor={`${uid}-size`}>
                  <span className="text-xs uppercase tracking-[0.14em] text-ink-mute">
                    {t('contact.size')}
                  </span>
                  <select
                    id={`${uid}-size`}
                    name="size"
                    className={fieldClass(false)}
                    value={form.size}
                    onChange={setIndex('size')}
                  >
                    {sizes.map((o, i) => (
                      <option key={o} value={i}>
                        {o}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2 text-sm sm:col-span-2" htmlFor={`${uid}-message`}>
                  <span className="text-xs uppercase tracking-[0.14em] text-ink-mute">
                    {t('contact.message')}
                  </span>
                  <textarea
                    id={`${uid}-message`}
                    name="message"
                    rows={5}
                    className={fieldClass(false)}
                    value={form.message}
                    onChange={set('message')}
                    placeholder={t('contact.messagePlaceholder')}
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
                        ? t('contact.oneError')
                        : t('contact.manyErrors', { n: Object.keys(errors).length })}
                    </p>
                  ) : null}

                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    {t('contact.submit')}
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
                    {t('contact.disclaimer')}
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
              <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                {t('contact.direct')}
              </p>
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
                {t('contact.coverTitle')}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-ink-mute">
                {products.map((p) => (
                  <li key={p.slug} className="flex gap-3">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-ink" />
                    <span>
                      <span className="font-medium text-ink">{p.name}</span>: {p.audience}
                      {p.soon ? t('contact.roadmapSuffix') : ''}
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

function Field({ uid, name, label, required = false, requiredLabel, error, ...rest }) {
  const id = `${uid}-${name}`;
  const errorId = `${id}-error`;

  return (
    <label className="grid gap-2 text-sm" htmlFor={id}>
      <span className="flex items-baseline gap-2 text-xs uppercase tracking-[0.14em] text-ink-mute">
        {label}
        {required ? (
          <span className="text-[10px] normal-case tracking-normal text-ink-faint">
            {requiredLabel}
          </span>
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

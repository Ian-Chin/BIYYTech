'use client';

import Link from '@/components/Link';
import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import {
  ALLOW_ALL,
  CATEGORIES,
  CONSENT_OPEN_EVENT,
  DENY_ALL,
  openConsentPreferences,
  readConsent,
  writeConsent,
} from '@/lib/consent';
import { useLocale } from '@/lib/i18n';

/**
 * Full-width consent bar, first visit only.
 *
 * Reject is a peer of Accept, not a link buried in the panel: under the PDPA,
 * and under the GDPR for the European readers this site gets, declining has to
 * be as easy as agreeing.
 *
 * Nothing renders on the server. The choice lives in localStorage, which the
 * server cannot see, so a server-rendered banner would flash for people who
 * already answered.
 */
export default function CookieConsent() {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState(false);
  const [prefs, setPrefs] = useState(DENY_ALL);
  const barRef = useRef(null);
  const panelId = useId();

  useEffect(() => {
    const stored = readConsent();
    if (stored) {
      setPrefs({ analytics: stored.analytics, marketing: stored.marketing });
    } else {
      setOpen(true);
    }
  }, []);

  // "Cookie preferences" in the footer and on /cookies reopens the bar with the
  // panel already expanded.
  useEffect(() => {
    const reopen = () => {
      const stored = readConsent();
      if (stored) setPrefs({ analytics: stored.analytics, marketing: stored.marketing });
      setPanel(true);
      setOpen(true);
    };
    window.addEventListener(CONSENT_OPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, reopen);
  }, []);

  // Publishes the bar's height so the chat launcher and the back-to-top button
  // can sit above it instead of underneath. See .consent-offset in globals.css.
  useLayoutEffect(() => {
    const root = document.documentElement;

    if (!open) {
      root.style.setProperty('--consent-h', '0px');
      return undefined;
    }

    const el = barRef.current;
    if (!el) return undefined;

    const measure = () => root.style.setProperty('--consent-h', `${el.offsetHeight}px`);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      ro.disconnect();
      root.style.setProperty('--consent-h', '0px');
    };
  }, [open, panel]);

  const decide = useCallback((choice) => {
    writeConsent(choice);
    setPrefs(choice);
    setPanel(false);
    setOpen(false);
  }, []);

  if (!open) return null;

  return (
    <div
      ref={barRef}
      role="dialog"
      aria-modal="false"
      aria-label={t('consent.dialogLabel')}
      className="fixed inset-x-0 bottom-0 z-[80] border-t border-white/10 bg-ink text-white shadow-[0_-24px_60px_-32px_rgba(11,11,12,0.8)]"
    >
      <div className="shell py-6 md:py-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/35">
              {t('consent.eyebrow')}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {t('consent.body')}{' '}
              <Link href="/cookies" className="link-underline text-white">
                {t('consent.policyLink')}
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:shrink-0">
            <button
              type="button"
              onClick={() => setPanel((v) => !v)}
              aria-expanded={panel}
              aria-controls={panelId}
              className="link-underline self-start text-sm text-white/60 transition-colors hover:text-white sm:self-auto"
            >
              {t('consent.manage')}
            </button>
            <button type="button" onClick={() => decide(DENY_ALL)} className="btn-invert">
              {t('consent.rejectAll')}
            </button>
            <button
              type="button"
              onClick={() => decide(ALLOW_ALL)}
              className="btn bg-white text-ink hover:-translate-y-0.5"
            >
              {t('consent.acceptAll')}
            </button>
          </div>
        </div>

        <div
          id={panelId}
          hidden={!panel}
          className="mt-7 border-t border-white/10 pt-7 md:mt-8 md:pt-8"
        >
          <div className="grid gap-6 md:grid-cols-3">
            <Category
              label={t('consent.necessaryLabel')}
              description={t('consent.necessaryBody')}
              lockedLabel={t('consent.alwaysOn')}
              checked
              locked
            />
            {/* The category ids in consent.js are the storage contract; their
                wording lives in the dictionary so it can be translated. */}
            {CATEGORIES.map((cat) => (
              <Category
                key={cat.id}
                label={t(`consent.${cat.id}Label`)}
                description={t(`consent.${cat.id}Body`)}
                checked={prefs[cat.id]}
                onChange={(next) => setPrefs((p) => ({ ...p, [cat.id]: next }))}
              />
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <button type="button" onClick={() => decide(prefs)} className="btn-invert">
              {t('consent.save')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Category({ label, description, checked, onChange, locked = false, lockedLabel }) {
  return (
    <label
      className={`flex gap-3.5 border border-white/10 bg-white/[0.03] p-4 ${
        locked ? 'cursor-default' : 'cursor-pointer transition-colors hover:border-white/25'
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={locked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-0.5 h-4 w-4 shrink-0 accent-white disabled:opacity-45"
      />
      <span>
        <span className="block text-sm font-medium text-white">
          {label}
          {locked ? <span className="ml-2 text-[11px] text-white/40">{lockedLabel}</span> : null}
        </span>
        <span className="mt-1.5 block text-xs leading-relaxed text-white/50">{description}</span>
      </span>
    </label>
  );
}

/** Footer / policy-page trigger that brings the bar back with the panel open. */
export function CookiePreferencesButton({ className = '' }) {
  const { t } = useLocale();

  return (
    <button type="button" onClick={openConsentPreferences} className={className}>
      {t('consent.preferencesButton')}
    </button>
  );
}

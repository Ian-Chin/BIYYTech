/* -------------------------------------------------------------------------- */
/*  Cookie / storage consent                                                   */
/*                                                                             */
/*  This site currently loads no analytics and no marketing tag, so granting   */
/*  a category today switches nothing on. The record is kept anyway so that    */
/*  the day something is added, it only ever runs for visitors who said yes.   */
/*                                                                             */
/*  The choice itself is stored in localStorage, not in a cookie: it never     */
/*  leaves the browser and is never sent with a request. If you later add a    */
/*  script that reads consent server-side, move this to a first-party cookie   */
/*  and update /cookies and /privacy in the same commit.                       */
/* -------------------------------------------------------------------------- */

export const CONSENT_KEY = 'yiy.consent';
export const CONSENT_VERSION = 1;

/** Emitted on `window` whenever the visitor's choice changes. */
export const CONSENT_EVENT = 'yiy:consent';

/**
 * Necessary is not listed: it is not optional and cannot be declined. It
 * covers the consent record itself and anything required to serve the page.
 */
export const CATEGORIES = [
  {
    id: 'analytics',
    label: 'Analytics',
    description:
      'Anonymous page and traffic statistics, so we can see which pages are worth writing more of. None are loaded today.',
  },
  {
    id: 'marketing',
    label: 'Marketing',
    description:
      'Advertising and remarketing tags belonging to other companies. We do not run any, and we would rather keep it that way.',
  },
];

export const DENY_ALL = { analytics: false, marketing: false };
export const ALLOW_ALL = { analytics: true, marketing: true };

/** Reads the stored choice. Returns null when the visitor has not answered. */
export function readConsent() {
  if (typeof window === 'undefined') return null;

  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    // A bumped version means the categories changed, so the old answer no
    // longer covers what we are asking about. Ask again.
    if (!parsed || parsed.v !== CONSENT_VERSION) return null;

    return {
      analytics: parsed.analytics === true,
      marketing: parsed.marketing === true,
      at: parsed.at ?? null,
    };
  } catch {
    // Private mode, disabled storage, or corrupt JSON. Treat as unanswered.
    return null;
  }
}

/** Persists a choice and tells the rest of the page about it. */
export function writeConsent(prefs) {
  const record = {
    v: CONSENT_VERSION,
    analytics: prefs.analytics === true,
    marketing: prefs.marketing === true,
    at: new Date().toISOString(),
  };

  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
  } catch {
    // Storage refused. The banner still closes for this visit; it will simply
    // ask again next time, which is the safe direction to fail in.
  }

  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: record }));
  return record;
}

/** Clears the record so the banner reappears. */
export function clearConsent() {
  try {
    window.localStorage.removeItem(CONSENT_KEY);
  } catch {
    /* nothing to clear */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: null }));
}

/** Opens the preferences panel from anywhere (footer link, policy page). */
export const CONSENT_OPEN_EVENT = 'yiy:consent-open';

export function openConsentPreferences() {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

import { Mark } from '@/components/Logo';

/**
 * Opening curtain. Two ink halves meet on a hairline: the mark resolves above
 * it, the wordmark climbs out of it, and a lit segment draws along it. Then the
 * sheet is cut along that same line and the two halves part, carrying half the
 * lockup each.
 *
 * Deliberately not a client component and not driven by React state: the whole
 * sequence is CSS keyframes, so it starts on the very first paint rather than
 * after hydration, and it cannot get stuck if the bundle is slow or fails.
 *
 * `SplashBoot` is a blocking inline script in <head>. It decides — before any
 * pixel is drawn — whether this load is the first of the session. Only then is
 * `data-splash="run"` set, which is the only thing that makes the markup below
 * visible at all. No JS, no splash. Second page view, no splash.
 */
const BOOT = `(function(){var d=document.documentElement;var run=true;try{if(sessionStorage.getItem('yiy:splash')){run=false}else{sessionStorage.setItem('yiy:splash','1')}}catch(e){}
if(!run){d.setAttribute('data-splash','done');return}
d.setAttribute('data-splash','run');
setTimeout(function(){d.setAttribute('data-splash','done')},2200)})();`;

export function SplashBoot() {
  return <script dangerouslySetInnerHTML={{ __html: BOOT }} />;
}

/**
 * Sets <html lang> from the URL before the first paint.
 *
 * One <html> element serves both language trees, so the attribute cannot be
 * static, and it has to be right in the first painted frame rather than after
 * hydration: it is what a screen reader uses to pick a voice. Lives here beside
 * the splash boot because it is the same trick — a blocking inline script in
 * <head>, the one place a script is guaranteed to run before the body renders.
 */
const LANG_BOOT = `(function(){var p=location.pathname;if(p==='/zh'||p.indexOf('/zh/')===0)document.documentElement.lang='zh-Hans'})();`;

export function LangBoot() {
  return <script dangerouslySetInnerHTML={{ __html: LANG_BOOT }} />;
}

export default function Splash() {
  return (
    <div className="splash" aria-hidden="true">
      <div className="splash__half splash__half--top noise">
        <span className="splash__mark">
          <Mark variant="dark" size={54} priority />
        </span>
        <span className="splash__seam">
          <i />
        </span>
      </div>

      <div className="splash__half splash__half--bottom noise">
        <span className="splash__word">
          <span className="splash__word-in">
            YiY
            <span className="splash__word-sub">Tech</span>
          </span>
        </span>
      </div>
    </div>
  );
}

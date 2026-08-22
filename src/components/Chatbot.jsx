'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import Mascot from '@/components/Mascot';
import { greeting, reply } from '@/lib/chat';

const OPEN_EVENT = 'yiy:chat-open';

/** Anything on the page can pop the assistant open. */
export function openChat() {
  if (typeof window !== 'undefined') window.dispatchEvent(new Event(OPEN_EVENT));
}

let seq = 0;
const nextId = () => {
  seq += 1;
  return seq;
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [nudge, setNudge] = useState(false);
  const [draft, setDraft] = useState('');
  const [mood, setMood] = useState('idle');
  const [messages, setMessages] = useState([
    { id: nextId(), from: 'bot', text: greeting.text, chips: greeting.chips },
  ]);

  const scrollerRef = useRef(null);
  const inputRef = useRef(null);
  const timers = useRef([]);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  // A single, non-nagging nudge once the visitor has actually read something.
  // Shown briefly, then it gets out of the way for good.
  useEffect(() => {
    const show = setTimeout(() => setNudge(true), 9000);
    const hide = setTimeout(() => setNudge(false), 20000);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  useEffect(() => {
    if (open) setNudge(false);
  }, [open]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 420);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const ask = useCallback((raw) => {
    const text = raw.trim();
    if (!text) return;

    setMessages((m) => [...m, { id: nextId(), from: 'me', text }]);
    setDraft('');
    setTyping(true);
    setMood('thinking');

    // A beat of "thinking" so the answer does not teleport in.
    const delay = Math.min(1100, 380 + text.length * 12);
    const t1 = setTimeout(() => {
      const res = reply(text);
      setTyping(false);
      setMood(res.mood === 'happy' ? 'happy' : 'talking');
      setMessages((m) => [
        ...m,
        { id: nextId(), from: 'bot', text: res.text, chips: res.chips, links: res.links },
      ]);
      const t2 = setTimeout(() => setMood('idle'), 2200);
      timers.current.push(t2);
    }, delay);
    timers.current.push(t1);
  }, []);

  const lastChips = (() => {
    const last = [...messages].reverse().find((m) => m.from === 'bot' && m.chips?.length);
    return last?.chips ?? [];
  })();

  return (
    <>
      {/* Launcher ---------------------------------------------------- */}
      <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3 md:bottom-7 md:right-7">
        <div
          className={`origin-bottom-right transition-all duration-500 ease-smooth ${
            nudge && !open
              ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
              : 'pointer-events-none translate-y-2 scale-95 opacity-0'
          }`}
        >
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="max-w-[15rem] border border-ink/10 bg-white px-4 py-3 text-left text-xs leading-relaxed text-ink-soft shadow-[0_20px_50px_-30px_rgba(11,11,12,0.6)] transition-transform duration-500 ease-smooth hover:-translate-y-0.5"
          >
            Questions about stock or bookings? Ask me, no form required.
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close the assistant' : 'Open the assistant'}
          aria-expanded={open}
          className="group relative flex h-14 w-14 items-center justify-center border border-ink/10 bg-white shadow-[0_18px_44px_-22px_rgba(11,11,12,0.65)] transition-all duration-500 ease-smooth hover:-translate-y-1 active:scale-95"
        >
          <span
            className={`absolute inset-0 -z-10 border border-ink/20 transition-all duration-700 ease-smooth ${
              open ? 'scale-100 opacity-0' : 'group-hover:scale-125 group-hover:opacity-0'
            }`}
          />
          {open ? (
            <span className="relative block h-4 w-4">
              <span className="absolute left-0 top-1/2 h-px w-4 rotate-45 bg-ink" />
              <span className="absolute left-0 top-1/2 h-px w-4 -rotate-45 bg-ink" />
            </span>
          ) : (
            <Mascot state={nudge ? 'wave' : 'idle'} size={30} />
          )}
        </button>
      </div>

      {/* Panel ------------------------------------------------------- */}
      <div
        role="dialog"
        aria-label="YiY assistant"
        aria-hidden={!open}
        className={`fixed bottom-24 right-5 z-[70] flex w-[calc(100vw-2.5rem)] max-w-[380px] origin-bottom-right flex-col border border-ink/10 bg-white shadow-[0_40px_90px_-40px_rgba(11,11,12,0.6)] transition-all duration-500 ease-smooth md:bottom-28 md:right-7 ${
          open
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-4 scale-95 opacity-0'
        }`}
        style={{ maxHeight: 'min(560px, calc(100vh - 9rem))' }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-ink/10 px-5 py-4">
          <Mascot state={typing ? 'thinking' : mood} size={34} />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold tracking-tight">YiY Bot</p>
            <p className="flex items-center gap-1.5 text-[11px] text-ink-faint">
              <span className="inline-block h-1.5 w-1.5 bg-accent" />
              {typing ? 'typing…' : 'rule-based assistant'}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close the assistant"
            className="text-ink-faint transition-colors duration-300 hover:text-ink"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </div>

        {/* Transcript */}
        <div ref={scrollerRef} className="flex-1 space-y-3 overflow-y-auto px-5 py-5">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.from === 'me' ? 'justify-end' : 'justify-start'}`}
              style={{ animation: 'msgIn 0.5s var(--ease-smooth) both' }}
            >
              <div
                className={`max-w-[85%] px-3.5 py-2.5 text-[13px] leading-relaxed ${
                  m.from === 'me'
                    ? 'bg-ink text-white'
                    : 'border border-ink/10 bg-paper-warm text-ink-soft'
                }`}
              >
                {m.text}
                {m.links?.length ? (
                  <span className="mt-3 flex flex-col gap-1.5">
                    {m.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="group inline-flex items-center gap-1.5 self-start border-b border-ink pb-0.5 text-[12px] font-medium text-ink"
                      >
                        {l.label}
                        <svg
                          width="12"
                          height="8"
                          viewBox="0 0 14 10"
                          fill="none"
                          aria-hidden="true"
                          className="transition-transform duration-500 ease-smooth group-hover:translate-x-1"
                        >
                          <path
                            d="M9 1l4 4-4 4M13 5H1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    ))}
                  </span>
                ) : null}
              </div>
            </div>
          ))}

          {typing ? (
            <div className="flex justify-start" style={{ animation: 'msgIn 0.4s var(--ease-smooth) both' }}>
              <div className="flex items-center gap-1.5 border border-ink/10 bg-paper-warm px-3.5 py-3">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="block h-1.5 w-1.5 bg-ink/45"
                    style={{ animation: `dotPulse 1.1s ${i * 0.16}s ease-in-out infinite` }}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>

        {/* Quick replies */}
        {lastChips.length ? (
          <div className="flex flex-wrap gap-1.5 border-t border-ink/10 px-5 py-3">
            {lastChips.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => ask(c)}
                className="border border-ink/15 px-2.5 py-1.5 text-[11px] text-ink-mute transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-ink hover:text-ink active:scale-95"
              >
                {c}
              </button>
            ))}
          </div>
        ) : null}

        {/* Composer */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask(draft);
          }}
          className="flex items-center gap-2 border-t border-ink/10 px-3 py-3"
        >
          <input
            ref={inputRef}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Ask about stock, bookings, pricing…"
            aria-label="Message the assistant"
            className="min-w-0 flex-1 bg-transparent px-2 py-2 text-[13px] outline-none placeholder:text-ink-faint"
          />
          <button
            type="submit"
            aria-label="Send"
            disabled={!draft.trim()}
            className="flex h-9 w-9 items-center justify-center bg-ink text-white transition-all duration-300 ease-smooth hover:-translate-y-0.5 active:scale-90 disabled:pointer-events-none disabled:opacity-25"
          >
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
        </form>
      </div>
    </>
  );
}

"use client";

import { BrandLockup, SocialIcon } from "./Brand";
import { footerColumns, salesEmail } from "./siteData";

export default function Footer({ newsletterStatus, newsletterEmail, setNewsletterEmail, onNewsletterSubmit, onOpenLeadModal }) {
  return (
    <footer className="bg-ink text-white">
      <div className="section-shell grid gap-10 border-b border-white/10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandLockup dark />
          <p className="mt-5 leading-7 text-white/62">
            CreativCodes adds voltage across admin support, revenue operations, engineering, cloud, AI, and CTO-level technical leadership.
          </p>
          <a className="mt-5 inline-flex rounded px-1 font-bold text-fuchsia-300 transition hover:bg-white/10 hover:text-white" href={`mailto:${salesEmail}`}>
            {salesEmail}
          </a>
        </div>
        {footerColumns.map((column) => (
          <div key={column.heading}>
            <h3 className="font-display text-lg font-bold">{column.heading}</h3>
            <div className="mt-5 grid gap-3">
              {column.links.map((link) =>
                link.action === "modal" ? (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => onOpenLeadModal("Hourly")}
                    className="text-left text-sm font-medium text-white/58 transition hover:text-fuchsia-300"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a key={link.label} href={link.href} className="text-sm font-medium text-white/58 transition hover:text-fuchsia-300">
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="section-shell border-b border-white/10 py-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-fuchsia-300">Voltage brief</p>
            <h3 className="mt-3 font-display text-3xl font-extrabold">Get ideas for turning operational friction into growth.</h3>
          </div>
          <form onSubmit={onNewsletterSubmit} className="grid w-full gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              name="newsletterEmail"
              type="email"
              value={newsletterEmail}
              onChange={(event) => setNewsletterEmail(event.target.value)}
              required
              placeholder="Email address"
              className="h-12 w-full min-w-0 rounded border border-white/14 bg-white px-4 font-semibold text-ink outline-none transition focus:border-fuchsia-300 focus:ring-4 focus:ring-primary/30"
            />
            <button type="submit" className="inline-flex h-12 w-full items-center justify-center rounded bg-primary px-6 font-bold text-white transition hover:bg-violet sm:w-auto">
              Join list
            </button>
          </form>
        </div>
        {newsletterStatus && <p className="mt-4 text-sm font-semibold text-fuchsia-300">{newsletterStatus}</p>}
      </div>

      <div className="section-shell flex flex-col items-center justify-between gap-5 py-7 text-sm text-white/52 md:flex-row">
        <p>Copyright 2026 CreativCodes. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <SocialIcon label="CreativCodes on LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
              <path d="M6.94 8.98H3.56V20h3.38V8.98ZM5.25 4a1.96 1.96 0 1 0 0 3.92A1.96 1.96 0 0 0 5.25 4Zm15.19 9.68c0-3.02-1.61-4.43-3.76-4.43a3.25 3.25 0 0 0-2.94 1.61h-.05V8.98h-3.24V20h3.38v-5.45c0-1.44.27-2.84 2.06-2.84 1.76 0 1.78 1.65 1.78 2.93V20h3.38v-6.32h-.61Z" />
            </svg>
          </SocialIcon>{/*
          <SocialIcon label="CreativCodes on X">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
              <path d="M13.8 10.47 21.04 2h-1.72l-6.28 7.35L8.02 2H2.23l7.6 11.12L2.23 22h1.72l6.64-7.77L15.9 22h5.79l-7.89-11.53Zm-2.35 2.75-.77-1.1L4.56 3.3h2.64l4.94 7.12.77 1.1 6.41 9.23h-2.64l-5.23-7.53Z" />
            </svg>
          </SocialIcon>
          <SocialIcon label="CreativCodes on GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.2-3.37-1.2a2.65 2.65 0 0 0-1.11-1.47c-.91-.62.07-.61.07-.61a2.1 2.1 0 0 1 1.53 1.03 2.13 2.13 0 0 0 2.91.83c.05-.51.27-.99.62-1.36-2.22-.25-4.56-1.11-4.56-4.95a3.87 3.87 0 0 1 1.03-2.68 3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.03a9.48 9.48 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.37.84.4 1.8.1 2.64a3.86 3.86 0 0 1 1.03 2.68c0 3.85-2.34 4.7-4.57 4.95.43.37.67.94.67 1.89v2.8c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
            </svg>
          </SocialIcon>*/}
        </div>
      </div>
    </footer>
  );
}

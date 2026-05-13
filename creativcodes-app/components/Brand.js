export function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M12.7 4.3a1 1 0 0 0-1.4 1.4L14.58 9H3a1 1 0 1 0 0 2h11.59l-3.3 3.3a1 1 0 0 0 1.42 1.4l5-5a1 1 0 0 0 0-1.4l-5-5Z"
      />
    </svg>
  );
}

export function Bolt({ className = "" }) {
  return <img src="/CreativIcon.svg" alt="" aria-hidden="true" className={className} />;
}

export function BrandLockup({ compact = false, dark = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded bg-primary/10 ring-1 ring-primary/20">
        <Bolt className="h-8 w-6" />
      </div>
      <div>
        <div className={`font-display text-lg font-extrabold tracking-tight ${dark ? "text-white" : "text-ink"}`}>
          CreativCodes
        </div>
        {!compact && (
          <div className={`text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "text-white/48" : "text-graphite/60"}`}>
            Voltage for modern business
          </div>
        )}
      </div>
    </div>
  );
}

export function SocialIcon({ label, children }) {
  return (
    <a
      href="#top"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded border border-white/12 bg-white/[0.06] text-white transition hover:border-primary hover:bg-primary"
    >
      {children}
    </a>
  );
}

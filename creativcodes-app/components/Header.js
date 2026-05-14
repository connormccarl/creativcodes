"use client";

import { ArrowIcon, BrandLockup } from "./Brand";
import { navItems } from "./siteData";

export default function Header({ activeSection, isMobileMenuOpen, onToggleMobileMenu, onCloseMobileMenu, onOpenLeadModal }) {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/95 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <a href="#top" aria-label="CreativCodes home">
          <BrandLockup compact />
        </a>
        <nav className="hidden items-center gap-1 text-sm font-extrabold uppercase text-ink md:flex">
          {navItems.map((item) => (
            <NavLink key={item.id} item={item} isActive={activeSection === item.id} />
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenLeadModal("Hourly")}
            className="hidden h-11 items-center gap-2 rounded bg-ink px-5 text-sm font-extrabold text-white transition hover:bg-primary sm:inline-flex"
          >
            Get a quote <ArrowIcon />
          </button>
          <button
            type="button"
            onClick={onToggleMobileMenu}
            className="inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded border border-ink/15 bg-white text-ink transition hover:border-primary hover:text-primary md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className={`h-0.5 w-5 rounded bg-current transition ${isMobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 rounded bg-current transition ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 rounded bg-current transition ${isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="border-t border-ink/10 bg-white md:hidden">
          <div className="section-shell grid gap-2 py-4">
            {navItems.map((item) => (
              <NavLink key={item.id} item={item} isActive={activeSection === item.id} onClick={onCloseMobileMenu} mobile />
            ))}
            <button
              type="button"
              onClick={() => onOpenLeadModal("Hourly")}
              className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded bg-ink px-4 text-sm font-extrabold text-white transition hover:bg-primary"
            >
              Get a quote <ArrowIcon />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ item, isActive, mobile = false, onClick }) {
  const className = mobile
    ? `rounded px-4 py-3 text-sm font-extrabold uppercase transition ${isActive ? "bg-ink text-white" : "text-ink hover:bg-cloud hover:text-primary"}`
    : `rounded px-3 py-2 transition duration-200 ${isActive ? "bg-ink text-white" : "hover:bg-cloud hover:text-primary"}`;

  return (
    <a href={item.href} onClick={onClick} className={className}>
      {item.label}
    </a>
  );
}

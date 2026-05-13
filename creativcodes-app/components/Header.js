"use client";

import { ArrowIcon, BrandLockup } from "./Brand";
import { navItems } from "./siteData";

export default function Header({ activeSection, isMobileMenuOpen, onToggleMobileMenu, onCloseMobileMenu, onOpenLeadModal }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <a href="#top" aria-label="CreativCodes home">
          <BrandLockup compact />
        </a>
        <nav className="hidden items-center gap-2 text-sm font-semibold text-graphite md:flex">
          {navItems.map((item) => (
            <NavLink key={item.id} item={item} isActive={activeSection === item.id} />
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenLeadModal("Hourly")}
            className="hidden h-11 items-center gap-2 rounded bg-ink px-4 text-sm font-bold text-white transition hover:bg-primary sm:inline-flex sm:px-5"
          >
            Get a quote <ArrowIcon />
          </button>
          <button
            type="button"
            onClick={onToggleMobileMenu}
            className="inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded border border-line bg-white text-ink transition hover:border-primary hover:text-primary md:hidden"
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
        <div className="border-t border-line bg-white md:hidden">
          <div className="section-shell grid gap-2 py-4">
            {navItems.map((item) => (
              <NavLink key={item.id} item={item} isActive={activeSection === item.id} onClick={onCloseMobileMenu} mobile />
            ))}
            <button
              type="button"
              onClick={() => onOpenLeadModal("Hourly")}
              className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded bg-ink px-4 text-sm font-bold text-white transition hover:bg-primary"
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
    ? `rounded px-4 py-3 text-sm font-bold transition ${isActive ? "bg-primary/10 text-primary" : "text-graphite hover:bg-cloud hover:text-primary"}`
    : `rounded px-3 py-2 transition duration-200 ${isActive ? "bg-primary/10 text-primary" : "hover:bg-cloud hover:text-primary"}`;

  return (
    <a href={item.href} onClick={onClick} className={className}>
      {item.label}
    </a>
  );
}

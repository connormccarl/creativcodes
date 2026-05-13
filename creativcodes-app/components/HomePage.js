"use client";

import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import LeadModal from "./LeadModal";
import {
  HeroSection,
  OutcomesSection,
  PackagesSection,
  ProcessSection,
  ServicesSection,
  SparkSessionSection,
  TrustBar,
} from "./Sections";
import { navItems, salesEmail } from "./siteData";

export default function HomePage() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadModalEngagementType, setLeadModalEngagementType] = useState("Hourly");
  const [newsletterStatus, setNewsletterStatus] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function updateActiveSection() {
      const offset = 128;
      const currentSection = navItems.reduce((current, item) => {
        const element = document.getElementById(item.id);
        if (!element) return current;
        return element.getBoundingClientRect().top - offset <= 0 ? item.id : current;
      }, "");

      setActiveSection(currentSection);
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  function openLeadModal(engagementType = "Hourly") {
    setLeadModalEngagementType(engagementType);
    setIsLeadModalOpen(true);
    setIsMobileMenuOpen(false);
  }

  async function handleNewsletterSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("email", newsletterEmail);
    setNewsletterStatus("Submitting...");

    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: formData.get("email") }),
    });

    if (!response.ok) {
      setNewsletterStatus(`Something went wrong. Email ${salesEmail}.`);
      return;
    }

    setNewsletterStatus("Thanks. You are on the list.");
    setNewsletterEmail("");
  }

  return (
    <main className="min-h-screen">
      <Header
        activeSection={activeSection}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
        onOpenLeadModal={openLeadModal}
      />
      <HeroSection onOpenLeadModal={openLeadModal} />
      <TrustBar />
      <ServicesSection />
      <PackagesSection onOpenLeadModal={openLeadModal} />
      <OutcomesSection />
      <ProcessSection />
      <SparkSessionSection salesEmail={salesEmail} />
      <Footer
        newsletterStatus={newsletterStatus}
        newsletterEmail={newsletterEmail}
        setNewsletterEmail={setNewsletterEmail}
        onNewsletterSubmit={handleNewsletterSubmit}
        onOpenLeadModal={openLeadModal}
      />
      <LeadModal
        initialEngagementType={leadModalEngagementType}
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
      />
    </main>
  );
}

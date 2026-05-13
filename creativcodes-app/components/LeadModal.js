"use client";

import { useEffect, useState } from "react";
import { ArrowIcon, Bolt } from "./Brand";
import { serviceTiers } from "./siteData";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function formatPhoneNumber(value) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  const area = digits.slice(0, 3);
  const prefix = digits.slice(3, 6);
  const line = digits.slice(6, 10);

  if (digits.length > 6) return `(${area}) ${prefix}-${line}`;
  if (digits.length > 3) return `(${area}) ${prefix}`;
  if (digits.length > 0) return `(${area}`;
  return "";
}

export default function LeadModal({ initialEngagementType = "Hourly", isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [leadStatus, setLeadStatus] = useState("");
  const [leadForm, setLeadForm] = useState({ name: "", title: "", company: "", email: "" });
  const [phoneDigits, setPhoneDigits] = useState("");
  const [engagementType, setEngagementType] = useState(initialEngagementType);
  const [selectedServices, setSelectedServices] = useState([]);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const formattedPhone = formatPhoneNumber(phoneDigits);
  const isLeadFormComplete =
    leadForm.name.trim() &&
    leadForm.title.trim() &&
    leadForm.company.trim() &&
    emailPattern.test(leadForm.email.trim()) &&
    phoneDigits.length === 10 &&
    engagementType &&
    selectedServices.length > 0;

  useEffect(() => {
    if (!isOpen) return;
    setLeadForm({ name: "", title: "", company: "", email: "" });
    setPhoneDigits("");
    setEngagementType(initialEngagementType);
    setSelectedServices([]);
    setSubmitted(false);
    setLeadStatus("");
    setIsServiceMenuOpen(false);
  }, [initialEngagementType, isOpen]);

  if (!isOpen) return null;

  async function handleSubmit(event) {
    event.preventDefault();

    if (!isLeadFormComplete) {
      setLeadStatus("Complete every field with a valid email, phone number, and service selection.");
      return;
    }

    setLeadStatus("Sending...");
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: leadForm.name.trim(),
        title: leadForm.title.trim(),
        company: leadForm.company.trim(),
        phone: `USA +1 ${formattedPhone}`,
        email: leadForm.email.trim(),
        engagementType,
        services: selectedServices.map((service) => `${service.name} (${service.rate})`),
      }),
    });

    if (!response.ok) {
      setLeadStatus("Something went wrong. Email sales@creativcodes.com.");
      return;
    }

    setLeadForm({ name: "", title: "", company: "", email: "" });
    setPhoneDigits("");
    setSelectedServices([]);
    setIsServiceMenuOpen(false);
    setLeadStatus("Thanks. Your inquiry was captured.");
    setSubmitted(true);
  }

  function updateLeadField(field, value) {
    setSubmitted(false);
    setLeadStatus("");
    setLeadForm((currentForm) => ({ ...currentForm, [field]: value }));
  }

  function updatePhone(value) {
    setSubmitted(false);
    setLeadStatus("");
    setPhoneDigits(value.replace(/\D/g, "").slice(0, 10));
  }

  function toggleService(service) {
    setSubmitted(false);
    setLeadStatus("");
    setSelectedServices((currentServices) => {
      const isSelected = currentServices.some((item) => item.slug === service.slug);
      return isSelected ? currentServices.filter((item) => item.slug !== service.slug) : [...currentServices, service];
    });
  }

  function removeService(slug) {
    setSubmitted(false);
    setLeadStatus("");
    setSelectedServices((currentServices) => currentServices.filter((service) => service.slug !== slug));
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white shadow-panel">
        <div className="relative overflow-hidden border-b border-line bg-cloud p-6 sm:p-8">
          <Bolt className="absolute -right-10 -top-14 h-48 w-36 rotate-12 opacity-10" />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded border border-line bg-white text-2xl leading-none text-graphite transition hover:border-primary hover:text-primary"
            aria-label="Close modal"
          >
            x
          </button>
          <p className="eyebrow">Project inquiry</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Tell us where you need more voltage.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-graphite/72">
            Share your details and the service lanes you are considering. Sales will follow up with the right next step.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5 p-6 sm:grid-cols-2 sm:p-8">
          <p className="rounded border border-primary/20 bg-primary/5 px-4 py-3 text-sm font-bold text-primary sm:col-span-2">
            All fields are required.
          </p>
          <ModalInput label="Name" name="name" value={leadForm.name} onChange={(value) => updateLeadField("name", value)} />
          <ModalInput label="Title" name="title" value={leadForm.title} onChange={(value) => updateLeadField("title", value)} />
          <ModalInput label="Company" name="company" value={leadForm.company} onChange={(value) => updateLeadField("company", value)} />
          <div className="grid gap-2 text-sm font-bold text-graphite">
            <RequiredLabel>Phone</RequiredLabel>
            <div className="grid gap-2 sm:grid-cols-[112px_minmax(0,1fr)]">
              <div className="flex h-12 items-center justify-center rounded border border-line bg-cloud px-3 font-bold text-graphite">
                USA +1
              </div>
              <input
                name="phone"
                type="tel"
                required
                inputMode="numeric"
                autoComplete="tel-national"
                minLength={14}
                maxLength={14}
                pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}"
                placeholder="(305) 244-1691"
                value={formattedPhone}
                onChange={(event) => updatePhone(event.target.value)}
                className="h-12 rounded border border-line px-4 font-medium outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>
          </div>
          <ModalInput
            label="Email"
            name="email"
            type="text"
            inputMode="email"
            autoComplete="email"
            pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
            value={leadForm.email}
            onChange={(value) => updateLeadField("email", value)}
            className="sm:col-span-2"
          />
          <fieldset className="text-sm font-bold text-graphite sm:col-span-2">
            <legend className="mb-2">
              Engagement type <span className="text-primary">*</span>
            </legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Hourly", "Package"].map((type) => (
                <label
                  key={type}
                  className={`flex cursor-pointer items-center gap-3 rounded border px-4 py-3 transition ${
                    engagementType === type ? "border-primary bg-primary/10 text-primary" : "border-line bg-white text-graphite hover:border-primary"
                  }`}
                >
                  <input
                    type="radio"
                    name="engagementType"
                    value={type}
                    required
                    checked={engagementType === type}
                    onChange={() => setEngagementType(type)}
                    className="h-4 w-4 accent-primary"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <ServiceSelector
            selectedServices={selectedServices}
            isServiceMenuOpen={isServiceMenuOpen}
            onToggleMenu={() => setIsServiceMenuOpen((isOpen) => !isOpen)}
            onToggleService={toggleService}
            onRemoveService={removeService}
          />
          <div className="sticky bottom-0 z-30 -mx-6 -mb-6 flex flex-col gap-3 border-t border-line bg-white px-6 py-4 sm:col-span-2 sm:-mx-8 sm:-mb-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className={submitted ? "text-sm font-semibold text-primary" : "text-sm text-graphite/60"} aria-live="polite">
              {leadStatus || "We reply within one business day."}
            </p>
            <button
              type="submit"
              disabled={!isLeadFormComplete}
              className="inline-flex h-12 items-center justify-center gap-2 rounded bg-primary px-7 font-bold text-white transition hover:bg-violet disabled:cursor-not-allowed disabled:bg-graphite/25 disabled:text-graphite/55"
            >
              Send inquiry <ArrowIcon />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function RequiredLabel({ children }) {
  return (
    <span>
      {children} <span className="text-primary">*</span>
    </span>
  );
}

function ModalInput({ label, name, value, onChange, type = "text", className = "", ...props }) {
  return (
    <label className={`grid gap-2 text-sm font-bold text-graphite ${className}`}>
      <RequiredLabel>{label}</RequiredLabel>
      <input
        name={name}
        type={type}
        required
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 rounded border border-line px-4 font-medium outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
        {...props}
      />
    </label>
  );
}

function ServiceSelector({ selectedServices, isServiceMenuOpen, onToggleMenu, onToggleService, onRemoveService }) {
  return (
    <div className="grid gap-2 text-sm font-bold text-graphite sm:col-span-2" aria-required="true">
      <RequiredLabel>Services interested in</RequiredLabel>
      <div className="min-h-12 rounded border border-line bg-white px-3 py-2 outline-none transition focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
        <div className="flex flex-wrap items-center gap-2">
          {selectedServices.length > 0 ? (
            selectedServices.map((service) => (
              <span key={service.slug} className="inline-flex items-center gap-2 rounded bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary">
                {service.name}
                <button
                  type="button"
                  onClick={() => onRemoveService(service.slug)}
                  className="flex h-5 w-5 items-center justify-center rounded bg-white text-primary ring-1 ring-primary/20 transition hover:bg-primary hover:text-white"
                  aria-label={`Remove ${service.name}`}
                >
                  x
                </button>
              </span>
            ))
          ) : (
            <span className="px-1 py-1.5 text-sm font-semibold text-graphite/45">Choose one or more service lanes</span>
          )}
          <button
            type="button"
            onClick={onToggleMenu}
            className="ml-auto inline-flex h-8 items-center rounded bg-ink px-3 text-xs font-bold text-white transition hover:bg-primary"
            aria-expanded={isServiceMenuOpen}
          >
            {isServiceMenuOpen ? "Close" : "Add services"}
          </button>
        </div>
      </div>
      {isServiceMenuOpen && (
        <div className="max-h-48 overflow-y-auto rounded border border-line bg-white shadow-panel">
          {serviceTiers.map((service) => {
            const isSelected = selectedServices.some((item) => item.slug === service.slug);
            return (
              <button
                key={service.slug}
                type="button"
                onClick={() => onToggleService(service)}
                className="flex w-full items-center justify-between gap-4 border-b border-line px-4 py-3 text-left transition last:border-b-0 hover:bg-cloud"
              >
                <span>
                  <span className="block font-bold text-ink">{service.name}</span>
                  <span className="mt-1 block text-xs font-semibold text-graphite/55">{service.rate}</span>
                </span>
                <span className={`rounded px-2 py-1 text-xs font-bold ${isSelected ? "bg-primary text-white" : "bg-cloud text-graphite/60"}`}>
                  {isSelected ? "Selected" : "Add"}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

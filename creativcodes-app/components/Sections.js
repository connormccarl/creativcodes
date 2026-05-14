import { ArrowIcon, Bolt } from "./Brand";
import { engagementSteps, outcomes, packages, serviceTiers, stats } from "./siteData";

export function HeroSection({ onOpenLeadModal }) {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 mesh-grid opacity-70" aria-hidden="true" />
      <Bolt className="absolute -right-28 top-4 h-[540px] w-[400px] rotate-12 opacity-[0.035]" />
      <Bolt className="absolute -bottom-28 left-[-110px] h-[320px] w-[240px] -rotate-12 opacity-[0.05]" />
      <div className="section-shell relative grid min-h-[calc(100vh-80px)] items-center gap-12 py-16 lg:grid-cols-[1fr_0.86fr] lg:py-24">
        <div>
          <p className="eyebrow text-ink">Admin support to AI strategy</p>
          <h1 className="mt-6 max-w-5xl font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-ink sm:text-6xl xl:text-7xl">
            Add voltage to your business with the right technical partner on demand.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-graphite/78">
            CreativCodes helps teams convert more leads, automate operations, modernize systems, and scale infrastructure. From $59/hr administrative support to $350/hr AI and fractional CTO leadership, we bring the spark your next stage needs.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => onOpenLeadModal("Hourly")}
              className="inline-flex h-12 items-center justify-center gap-2 rounded bg-ink px-7 text-base font-extrabold text-white shadow-soft transition hover:bg-primary"
            >
              Start with a consultation <ArrowIcon />
            </button>
            <a href="#services" className="inline-flex h-12 items-center justify-center rounded border border-ink bg-white px-7 text-base font-extrabold text-ink transition hover:bg-ink hover:text-white">
              View hourly services
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {["Lead conversion", "Automation", "Cloud & AI"].map((label) => (
              <div key={label} className="border border-ink/10 bg-white p-4 shadow-soft">
                <Bolt className="h-8 w-6" />
                <div className="mt-4 text-sm font-bold uppercase tracking-wide text-graphite/70">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <ServiceCommandCenter />
      </div>
    </section>
  );
}

function ServiceCommandCenter() {
  return (
    <div className="enterprise-card relative rounded-lg p-4 lg:p-5">
      <div className="rounded-md border border-ink/10 bg-white p-4">
        <div className="flex items-center justify-between border-b border-ink/10 pb-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-graphite/55">Service command center</div>
            <div className="mt-1 font-display text-2xl font-bold">Find your voltage level</div>
          </div>
          <div className="rounded bg-ink px-3 py-2 text-sm font-bold text-white">Live</div>
        </div>
        <div className="mt-4 space-y-3">
          {serviceTiers.map((service) => (
            <div key={service.name} className="rounded border border-ink/10 bg-white p-4 transition hover:border-primary/40">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.16em] text-graphite/50">{service.name}</div>
                  <div className="mt-2 text-sm leading-6 text-graphite/72">{service.summary}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TrustBar() {
  return (
    <section className="border-y border-ink bg-ink text-white">
      <div className="section-shell grid gap-4 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white/72 sm:grid-cols-2 lg:grid-cols-5">
        <span>Admin</span>
        <span>Marketing ops</span>
        <span>Consulting</span>
        <span>Cloud engineering</span>
        <span>AI leadership</span>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="section-shell scroll-mt-28 py-24 lg:py-32">
      <div className="grid gap-8 lg:grid-cols-[0.62fr_1fr]">
        <div>
          <p className="eyebrow">Hourly service menu</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            One partner for the work before, during, and after the sale.
          </h2>
          <p className="mt-5 text-lg leading-8 text-graphite/72">
            Choose the lane you need now, then scale up or down as your priorities change. We create the spark for customers, teams, and systems to move faster together.
          </p>
        </div>
        <div className="grid gap-4">
          {serviceTiers.map((service, index) => (
            <article id={service.slug} key={service.name} className={`enterprise-card relative scroll-mt-28 overflow-hidden rounded-lg border-l-4 p-6 ${service.accent}`}>
              <Bolt className="absolute -right-8 -top-10 h-36 w-28 rotate-12 opacity-[0.06]" />
              <div className="relative flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="text-sm font-extrabold text-primary">0{index + 1}</div>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">{service.name}</h3>
                  <p className="mt-3 max-w-2xl leading-7 text-graphite/72">{service.summary}</p>
                </div>
                <div className="rounded bg-ink px-4 py-3 text-center font-display text-2xl font-extrabold text-white md:min-w-32">{service.rate}</div>
              </div>
              <div className="relative mt-6 flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <span key={item} className="rounded border border-ink/10 bg-white px-3 py-1 text-xs font-bold text-graphite/72">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PackagesSection({ onOpenLeadModal }) {
  return (
    <section id="packages" className="section-shell scroll-mt-28 pb-24 lg:pb-32">
      <div className="grid gap-8 lg:grid-cols-[0.64fr_1fr]">
        <div>
          <p className="eyebrow">Productized retainers</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Clear packages for high-voltage business outcomes.
          </h2>
          <p className="mt-5 text-lg leading-8 text-graphite/72">
            When the work needs more than hourly support, these packages create a defined engagement with senior ownership, predictable scope, and momentum your team can feel.
          </p>
          <button
            type="button"
            onClick={() => onOpenLeadModal("Package")}
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded bg-ink px-7 text-base font-extrabold text-white shadow-soft transition hover:bg-primary"
          >
            Discuss a package <ArrowIcon />
          </button>
        </div>
        <div className="grid gap-4">
          {packages.map((offer, index) => (
            <article key={offer.name} className="enterprise-card relative overflow-hidden rounded-lg p-6">
              <Bolt className="absolute -right-8 -top-12 h-40 w-28 rotate-12 opacity-[0.07]" />
              <div className="relative">
                <div className="text-sm font-extrabold text-primary">Package 0{index + 1}</div>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">{offer.name}</h3>
                <p className="mt-3 max-w-2xl leading-7 text-graphite/72">{offer.description}</p>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-graphite/50">Best for: {offer.bestFor}</p>
              </div>
              <div className="relative mt-6 flex flex-wrap gap-2">
                {offer.includes.map((item) => (
                  <span key={item} className="rounded border border-ink/10 bg-white px-3 py-1 text-xs font-bold text-graphite/72">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OutcomesSection() {
  return (
    <section id="outcomes" className="scroll-mt-28 bg-ink py-24 text-white lg:py-32">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow text-fuchsia-300">Why teams hire us</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Solutions that feel like lightning in a bottle because the strategy and execution are connected.
            </h2>
          </div>
          <p className="text-lg leading-8 text-white/68">
            We are not just extra hands. We are a partner adding voltage to your business: finding the highest-leverage constraint, shipping the fix, and helping your team adopt it.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {outcomes.map(([title, description]) => (
            <article key={title} className="rounded-lg border border-white/12 bg-white/[0.06] p-6">
              <Bolt className="h-12 w-9" />
              <h3 className="mt-10 font-display text-2xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-white/68">{description}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="rounded border border-white/12 bg-white/[0.04] p-5">
              <div className="font-display text-3xl font-extrabold text-fuchsia-300">{value}</div>
              <div className="mt-2 text-xs font-bold uppercase tracking-wide text-white/52">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="section-shell scroll-mt-28 py-24 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow">Engagement path</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Start with the pain point. Leave with an operating advantage.
          </h2>
          <p className="mt-6 text-lg leading-8 text-graphite/75">
            We can plug in for a few hours of support, own a focused implementation, or guide your technical roadmap as a fractional CTO. The model is practical by design.
          </p>
        </div>
        <div className="grid gap-3">
          {engagementSteps.map((step, index) => (
            <div key={step} className="enterprise-card flex items-center gap-5 rounded-lg p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-primary/10">
                <Bolt className="h-9 w-7" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Step 0{index + 1}</div>
                <div className="mt-1 font-display text-xl font-bold">{step}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SparkSessionSection({ salesEmail }) {
  return (
    <section id="spark-session" className="section-shell scroll-mt-28 pb-10">
      <div className="relative grid overflow-hidden rounded-lg bg-primary text-white shadow-panel lg:grid-cols-[0.92fr_1.08fr]">
        <Bolt className="absolute -right-16 -top-20 h-80 w-60 rotate-12 opacity-20 brightness-0 invert" />
        <div className="relative p-8 sm:p-10 lg:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/68">Book the spark session</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Tell us where the business needs more voltage.</h2>
          <p className="mt-5 leading-8 text-white/82">
            Bring the backlog, campaign goal, integration problem, infrastructure bottleneck, or AI idea. We will recommend the right service tier and a practical first move.
          </p>
          <a
            href={`mailto:${salesEmail}?subject=CreativCodes%20project%20inquiry`}
            className="mt-8 inline-flex h-12 items-center gap-2 rounded border border-white bg-white px-7 font-bold text-ink transition hover:border-white/70 hover:bg-ink hover:text-white"
          >
            {salesEmail} <ArrowIcon />
          </a>
        </div>
        <div className="relative bg-ink p-8 sm:p-10 lg:p-12">
          <div className="grid gap-4 sm:grid-cols-2">
            {["Which service lane fits?", "What should improve first?", "What systems are involved?", "What deadline matters?"].map((item) => (
              <div key={item} className="rounded border border-white/12 bg-white/[0.06] p-5">
                <div className="h-2 w-12 rounded bg-fuchsia-300" />
                <div className="mt-8 font-display text-xl font-bold">{item}</div>
                <div className="mt-2 text-sm leading-6 text-white/58">We scope around outcomes, not busywork.</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

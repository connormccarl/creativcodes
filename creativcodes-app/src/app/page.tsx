import {
  Code2,
  Rocket,
  Globe,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]"></div>
      </div>

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between border-b border-white/10 px-8 py-6 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
            <Code2 className="h-6 w-6 text-cyan-400" />
          </div>

          <h1 className="text-2xl font-black tracking-tight">
            Creativ<span className="text-cyan-400">Codes</span>
          </h1>
        </div>

      </header>

      {/* Hero */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 py-28 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-md">
          <Sparkles className="h-4 w-4 text-cyan-300" />

          <span className="text-sm tracking-wide text-cyan-200">
            Premium Software Development Agency
          </span>
        </div>

        <h2 className="max-w-6xl text-5xl font-black leading-tight md:text-7xl">
          Something Incredible
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Is Under Development
          </span>
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
          CreativCodes is building a next-generation digital experience focused
          on high-converting websites, custom software, and scalable solutions
          for modern businesses.
        </p>
      </main>

      {/* Services */}
      <section className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 px-8 pb-24 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10">
          <Rocket className="mb-5 h-10 w-10 text-cyan-400" />

          <h3 className="mb-3 text-2xl font-bold">
            Lightning Fast Development
          </h3>

          <p className="leading-relaxed text-gray-400">
            High-performance applications engineered with modern technologies,
            optimized for speed and scalability.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-purple-400/30 hover:bg-white/10">
          <Globe className="mb-5 h-10 w-10 text-purple-400" />

          <h3 className="mb-3 text-2xl font-bold">
            Modern Digital Experiences
          </h3>

          <p className="leading-relaxed text-gray-400">
            Beautiful, conversion-focused websites and SaaS platforms that help
            brands stand out online.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/30 hover:bg-white/10">
          <Code2 className="mb-5 h-10 w-10 text-blue-400" />

          <h3 className="mb-3 text-2xl font-bold">
            Custom Software Solutions
          </h3>

          <p className="leading-relaxed text-gray-400">
            Tailored systems, platforms, and automation tools designed to help
            businesses scale efficiently.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-sm text-gray-500">
        © 2026 CreativCodes — New website launching soon.
      </footer>
    </div>
  );
};
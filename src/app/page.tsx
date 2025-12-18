import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 glass-panel border-b-0 border-b-white/5 bg-[#0E0F12]/80">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#6B9B78] rounded-lg flex items-center justify-center text-[#0E0F12] font-bold text-xl">S</div>
            <span className="font-bold text-xl tracking-tight text-white">SwingRoot</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8A8A8E]">
            <Link href="#how-it-works" className="hover:text-white transition-colors">How It Works</Link>
            <Link href="/drills" className="hover:text-white transition-colors">Drill Library</Link>
            <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
          </nav>
          <Link
            href="/dashboard"
            className="px-5 py-2 bg-[#6B9B78] hover:bg-[#5a8264] text-[#0E0F12] font-bold rounded-full text-sm transition-colors"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#6B9B78] tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#6B9B78] animate-pulse"></span>
              Tour-Proven Biomechanics
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Find the <span className="text-[#6B9B78]">Root Cause</span> <br />
              Not Just the Symptom.
            </h1>

            <p className="text-xl md:text-2xl text-[#8A8A8E] max-w-2xl mx-auto leading-relaxed">
              Stop guessing. SwingRoot analyzes your swing from <span className="text-white font-medium">P1 Address</span> to <span className="text-white font-medium">P10 Finish</span>, identifying the one mechanical fix that unlocks your potential.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/dashboard"
                className="px-8 py-4 bg-[#6B9B78] hover:bg-[#5a8264] text-[#0E0F12] font-bold rounded-full text-lg transition-all transform hover:scale-105"
              >
                Analyze My Swing
              </Link>
              <Link
                href="/drills"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full text-lg border border-white/10 transition-all"
              >
                Browse Drills
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-32 max-w-6xl mx-auto">
            <FeatureCard
              icon="🎯"
              title="P1-P10 Analysis"
              desc="We track every key position in your swing, not just impact. See exactly where your mechanics break down."
            />
            <FeatureCard
              icon="📐"
              title="Pro Coaching Logic"
              desc="Our system thinks like a tour coach. It works backwards from impact to find the setup or backswing flaw causing your miss."
            />
            <FeatureCard
              icon="⚡"
              title="Instant Feedback"
              desc="Get a prioritized fix and a specific feel cue in seconds. No waiting for a pro to email you back."
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-[#0E0F12]">
        <div className="container mx-auto px-6 text-center text-[#8A8A8E] text-sm">
          <p>© {new Date().getFullYear()} SwingRoot Golf. Built for better swings.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, desc, icon }: { title: string, desc: string, icon: string }) {
  return (
    <div className="p-8 rounded-2xl bg-[#141519] border border-white/5 hover:border-[#6B9B78]/30 transition-colors group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 transform origin-left">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-[#8A8A8E] leading-relaxed">{desc}</p>
    </div>
  )
}

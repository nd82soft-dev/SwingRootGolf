import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#0E0F12] text-white">
      {/* Navbar - Preserved */}
      <header className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 bg-[#0E0F12]/90 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="relative w-40 h-10">
              <Image
                src="/logo.png"
                alt="SwingRoot Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8A8A8E]">
            <Link href="#how-it-works" className="hover:text-white transition-colors">How It Works</Link>
            <Link href="/drills" className="hover:text-white transition-colors">Drill Library</Link>
            <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="px-5 py-2 bg-[#6B9B78] hover:bg-[#5a8264] text-[#0E0F12] font-bold rounded-full text-sm transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">

        {/* 1. HERO SECTION (ABOVE THE FOLD) */}
        <section className="pt-40 pb-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8">
                Fix the cause of your golf swing issues — not the symptoms.
              </h1>
              <p className="text-xl md:text-2xl text-[#8A8A8E] leading-relaxed mb-10 max-w-2xl">
                Swing Root analyzes your swing, identifies the primary root cause, and gives you one clear drill to practice.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link
                  href="/dashboard"
                  className="px-8 py-4 bg-[#6B9B78] hover:bg-[#5a8264] text-[#0E0F12] font-bold rounded-full text-lg transition-transform hover:scale-105 w-full sm:w-auto text-center"
                >
                  Analyze your swing
                </Link>
                <Link
                  href="#problem-entry"
                  className="text-white font-medium hover:text-[#6B9B78] transition-colors decoration-1 underline-offset-4 hover:underline"
                >
                  Why am I slicing?
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. TRUST & POSITIONING STRIP */}
        <section className="border-y border-white/5 bg-white/[0.02] py-8">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left md:divide-x md:divide-white/10">
              <div className="px-4">
                <p className="text-[#8A8A8E] font-medium text-sm md:text-base">Built on the same principles used by elite coaches.</p>
              </div>
              <div className="px-4">
                <p className="text-[#8A8A8E] font-medium text-sm md:text-base">One root cause. One drill. No conflicting advice.</p>
              </div>
              <div className="px-4">
                <p className="text-[#8A8A8E] font-medium text-sm md:text-base">Designed for real practice — not endless tips.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. HOW IT WORKS (3-STEP FLOW) */}
        <section id="how-it-works" className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-px bg-white/10 -z-10"></div>

              {/* Step 1 */}
              <div className="relative">
                <div className="w-20 h-20 bg-[#1C1C1E] border border-white/10 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-8 z-10 mx-auto md:mx-0">
                  1
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center md:text-left">Analyze</h3>
                <p className="text-[#8A8A8E] leading-relaxed text-center md:text-left">
                  Record or upload your swing in the app.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="w-20 h-20 bg-[#1C1C1E] border border-white/10 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-8 z-10 mx-auto md:mx-0">
                  2
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center md:text-left">Identify</h3>
                <p className="text-[#8A8A8E] leading-relaxed text-center md:text-left">
                  We determine the primary root cause affecting your ball flight.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="w-20 h-20 bg-[#6B9B78] text-[#0E0F12] rounded-full flex items-center justify-center text-2xl font-bold mb-8 z-10 mx-auto md:mx-0">
                  3
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center md:text-left">Practice</h3>
                <p className="text-[#8A8A8E] leading-relaxed text-center md:text-left">
                  You get one focused drill and a guided practice session.
                </p>
              </div>
            </div>

            <div className="text-center mt-16 pt-8 border-t border-white/5">
              <p className="text-xl text-white font-medium">Then you re-test. No guessing. No stacking fixes.</p>
            </div>
          </div>
        </section>

        {/* 4. “WHY AM I…?” PROBLEM ENTRY POINT */}
        <section id="problem-entry" className="py-24 px-6 bg-[#141519]">
          <div className="container mx-auto max-w-6xl">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start with the problem you’re seeing.</h2>
              <p className="text-[#8A8A8E] text-lg">
                Most swing issues have one main cause. We explain what it is and how to fix it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProblemCard
                title="Why am I slicing the ball?"
                href="/start-here?miss=slice"
              />
              <ProblemCard
                title="Why do I hit my irons fat?"
                href="/start-here?miss=fat-thin"
              />
              <ProblemCard
                title="Why do I thin shots?"
                href="/start-here?miss=fat-thin"
              />
              <ProblemCard
                title="Why do my drives feel weak?"
                href="/start-here?miss=distance"
              />
              <ProblemCard
                title="Why is my contact inconsistent?"
                href="/start-here?miss=panic"
              />
            </div>
          </div>
        </section>

        {/* 5. FEATURE EXPLANATION (QUIETLY DIFFERENT) */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Most golfers fix symptoms. <br />That’s why the problems come back.
                </h2>
              </div>
              <div className="space-y-8">
                <p className="text-xl text-[#8A8A8E] leading-relaxed">
                  A slice, a hook, or fat contact are not problems by themselves. <br />
                  They’re results.
                </p>
                <p className="text-xl text-[#8A8A8E] leading-relaxed">
                  Swing Root focuses on the movement pattern causing those results — and addresses that first.
                </p>
                <div className="pl-6 border-l-2 border-[#6B9B78]">
                  <p className="text-xl text-white font-bold">
                    Fix the cause, and multiple problems often improve at once.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. DRILL PREVIEW (WHAT THEY’LL ACTUALLY DO) */}
        <section className="py-24 px-6 bg-[#141519]">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#8A8A8E] uppercase tracking-wider">What practice looks like.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <DrillPreviewCard
                outcome="Fix a Slice"
                name="Pump Drill"
                description="Improves downswing sequencing so the club approaches the ball from the correct direction."
                slug="fix-slice"
              />
              <DrillPreviewCard
                outcome="Fix Fat Iron Shots"
                name="Divot After Ball Drill"
                description="Trains your swing low point to occur in front of the ball."
                slug="fix-fat-shots"
              />
              <DrillPreviewCard
                outcome="Fix Inconsistent Contact"
                name="Tempo Count Drill"
                description="Stabilizes timing so the club returns to impact more consistently."
                slug="fix-inconsistent-contact"
              />
            </div>
          </div>
        </section>

        {/* 7. PRACTICE PHILOSOPHY SECTION */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">This isn’t about collecting drills.</h2>
            <div className="max-w-2xl mx-auto space-y-8">
              <p className="text-xl text-[#8A8A8E] leading-relaxed">
                Each drill is meant to be practiced for a short period, then re-tested.<br />
                If it works, you move on.<br />
                If it doesn’t, the diagnosis adjusts.
              </p>
              <p className="text-2xl text-[#6B9B78] font-bold">
                Progress comes from clarity — not volume.
              </p>
            </div>
          </div>
        </section>

        {/* 8. APP + WEBSITE RELATIONSHIP */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Built for the way golfers actually learn.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-[#1C1C1E] p-10 rounded-3xl border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-4">App</h3>
                <p className="text-[#8A8A8E] text-lg leading-relaxed">
                  The app analyzes your swing and tells you what to do next.
                </p>
              </div>

              <div className="glass-panel p-10 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Website</h3>
                <p className="text-[#8A8A8E] text-lg leading-relaxed">
                  The website explains why it works, common mistakes, and how to practice effectively.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-white font-medium">Action first. Understanding when you want it.</p>
            </div>
          </div>
        </section>

        {/* 9. SOFT PRICING & VALUE ANCHOR */}
        <section className="py-24 px-6 bg-[#141519]">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
              A single lesson can cost over $100.<br />
              <span className="text-[#8A8A8E]">Swing Root helps you practice with purpose, every time you go to the range.</span>
            </p>
          </div>
        </section>

        {/* 10. FINAL CTA */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 tracking-tight">Ready to stop guessing?</h2>
            <div className="flex flex-col items-center gap-8">
              <Link
                href="/dashboard"
                className="px-10 py-5 bg-[#6B9B78] hover:bg-[#5a8264] text-[#0E0F12] font-bold rounded-full text-xl transition-all hover:scale-105"
              >
                Analyze your swing
              </Link>
              <Link
                href="#problem-entry"
                className="text-[#8A8A8E] hover:text-white transition-colors flex items-center gap-2"
              >
                Explore common swing problems <span>→</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/5 bg-[#0E0F12]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#8A8A8E]">
          <div className="flex items-center gap-2 opacity-50">
            <div className="relative w-24 h-6">
              <Image
                src="/logo.png"
                alt="SwingRoot Logo"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>
          <nav className="flex flex-wrap justify-center gap-8">
            <Link href="#how-it-works" className="hover:text-white transition-colors">How it works</Link>
            <Link href="/drills" className="hover:text-white transition-colors">Practice plans</Link>
            <Link href="#problem-entry" className="hover:text-white transition-colors">Common problems</Link>
            <Link href="#" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms / Privacy</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function ProblemCard({ title, href }: { title: string; href: string }) {
  return (
    <Link
      href={href}
      className="group block p-8 bg-[#1C1C1E] border border-white/5 hover:border-[#6B9B78]/50 rounded-2xl transition-all hover:-translate-y-1"
    >
      <h3 className="text-xl font-bold text-white group-hover:text-[#6B9B78] transition-colors mb-2">
        {title}
      </h3>
      <span className="text-sm text-[#8A8A8E] group-hover:text-white transition-colors">Read diagnosis →</span>
    </Link>
  );
}

function DrillPreviewCard({ outcome, name, description, slug }: { outcome: string; name: string; description: string; slug: string }) {
  return (
    <div className="bg-[#0E0F12] border border-white/10 rounded-2xl p-6 group hover:border-[#6B9B78]/30 transition-colors">
      <div className="mb-4">
        <span className="text-xs font-bold text-[#6B9B78] uppercase tracking-wider block mb-1">{outcome}</span>
        <h3 className="text-xl font-bold text-white">{name}</h3>
      </div>
      <p className="text-[#8A8A8E] text-sm leading-relaxed mb-6 h-20">
        {description}
      </p>
      <Link href={`/drills/${slug}`} className="inline-flex items-center text-sm font-bold text-white group-hover:gap-2 transition-all">
        View drill <span className="ml-1 text-[#6B9B78] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
      </Link>
    </div>
  );
}

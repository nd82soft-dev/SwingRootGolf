import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#0E0F12] text-white">
      {/* Navbar */}
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

        {/* 1. HERO: MIRROR THE PROBLEM */}
        <section className="pt-40 pb-24 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8">
              You don’t need more tips. <br />
              <span className="text-[#6B9B78]">You need the right fix.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#8A8A8E] leading-relaxed mb-10 max-w-2xl mx-auto">
              Most swing problems come from one underlying cause.<br />
              Swing Root helps you find it — and fix it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/dashboard"
                className="px-10 py-5 bg-[#6B9B78] hover:bg-[#5a8264] text-[#0E0F12] font-bold rounded-full text-xl transition-all hover:scale-105 w-full sm:w-auto"
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
        </section>

        {/* 2. PAIN VALIDATION */}
        <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="container mx-auto max-w-3xl">
            <p className="text-xl text-white font-medium mb-8 text-center">If golf improvement feels confusing, you’re not alone.</p>

            <div className="space-y-4 mb-12">
              <PainPoint text="You watch videos, but nothing sticks" />
              <PainPoint text="One fix helps… then something else breaks" />
              <PainPoint text="You don’t know what actually matters" />
              <PainPoint text="Practice feels busy, not productive" />
            </div>

            <div className="text-center">
              <p className="text-2xl text-[#8A8A8E] font-medium">That’s not a motivation problem. It’s a <span className="text-white">clarity problem.</span></p>
            </div>
          </div>
        </section>

        {/* 3. THE CORE INSIGHT */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-sm font-bold text-[#8A8A8E] uppercase tracking-wider mb-6">The Approach</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Most golfers are fixing symptoms.</h3>

            <div className="max-w-3xl mx-auto space-y-8 mb-12">
              <p className="text-xl text-[#8A8A8E] leading-relaxed">
                A slice, a hook, or fat contact isn’t the real problem.<br />
                It’s the result of something happening earlier in the swing.
              </p>
            </div>

            <div className="inline-block px-8 py-4 border border-[#6B9B78] rounded-2xl bg-[#6B9B78]/5">
              <p className="text-xl md:text-2xl text-white font-bold">
                Fix the cause — and multiple problems often improve at once.
              </p>
            </div>
          </div>
        </section>

        {/* 4. WHAT MAKES SWING ROOT DIFFERENT */}
        <section className="py-24 px-6 bg-[#141519]">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">One root cause</h3>
                <p className="text-[#8A8A8E] leading-relaxed">We identify the primary movement pattern affecting your swing.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">One drill</h3>
                <p className="text-[#8A8A8E] leading-relaxed">You practice a single, focused drill — not five “just in case.”</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Re-test</h3>
                <p className="text-[#8A8A8E] leading-relaxed">You check progress and adjust. No guessing.</p>
              </div>
            </div>
            <div className="mt-16 text-center border-t border-white/5 pt-8">
              <p className="text-lg text-[#6B9B78] font-bold">This is how good coaches actually teach.</p>
            </div>
          </div>
        </section>

        {/* 5. SHOW THE PATH */}
        <section id="how-it-works" className="py-32 px-6">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-white mb-16 text-center">How it works</h2>

            <div className="space-y-12 relative">
              <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-white/10 hidden md:block"></div>

              <StepRow number="1" title="Analyze" desc="Upload or record your swing in the app." />
              <StepRow number="2" title="Get clarity" desc="We identify the main issue affecting your ball flight." />
              <StepRow number="3" title="Practice with purpose" desc="One drill. One focus. A guided session." />
              <StepRow number="4" title="Re-check" desc="Confirm progress or adjust the plan." last />
            </div>
          </div>
        </section>

        {/* 6. “WHY AM I…?” ENTRY */}
        <section id="problem-entry" className="py-24 px-6 bg-[#141519]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start with what you’re seeing on the course.</h2>
              <p className="text-[#8A8A8E] text-lg max-w-2xl mx-auto">
                We explain the most common swing problems — and what actually causes them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProblemCard title="Why am I slicing the ball?" href="/start-here?miss=slice" />
              <ProblemCard title="Why do I hit my irons fat?" href="/start-here?miss=fat-thin" />
              <ProblemCard title="Why do I thin shots?" href="/start-here?miss=fat-thin" />
              <ProblemCard title="Why do my drives feel weak?" href="/start-here?miss=distance" />
              <ProblemCard title="Why is my contact inconsistent?" href="/start-here?miss=panic" />
            </div>
          </div>
        </section>

        {/* 7. MAKE PRACTICE FEEL CALM */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Practice doesn’t need to feel overwhelming.</h2>
            <div className="max-w-2xl mx-auto space-y-8">
              <p className="text-xl text-[#8A8A8E] leading-relaxed">
                Swing Root gives you one clear focus at a time.<br />
                No swing thoughts overload. No conflicting advice.
              </p>
              <p className="text-2xl text-[#6B9B78] font-bold">
                You’ll know what to work on — and when to move on.
              </p>
            </div>
          </div>
        </section>

        {/* 8. APP + WEBSITE EXPLAINED */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-[#1C1C1E] p-10 rounded-3xl border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-4">App</h3>
                <p className="text-[#8A8A8E] text-lg leading-relaxed">
                  Tells you what to do next, right now.
                </p>
              </div>

              <div className="glass-panel p-10 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Website</h3>
                <p className="text-[#8A8A8E] text-lg leading-relaxed">
                  Explains why it works, common mistakes, and how to practice effectively.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-white font-medium">Action first. Understanding when you want it.</p>
            </div>
          </div>
        </section>

        {/* 9. VALUE ANCHOR */}
        <section className="py-24 px-6 bg-[#141519]">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
              Perfect for practice between lessons.<br />
              <span className="text-[#8A8A8E]">Swing Root helps you maintain the right feel and focus, so you get the most out of every coaching session.</span>
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

function PainPoint({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 bg-[#1C1C1E] p-4 rounded-xl border border-white/5">
      <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">×</div>
      <span className="text-[#8A8A8E]">{text}</span>
    </div>
  )
}

function StepRow({ number, title, desc, last }: { number: string, title: string, desc: string, last?: boolean }) {
  return (
    <div className="flex gap-8 relative z-10">
      <div className="w-14 h-14 bg-[#1C1C1E] border border-white/10 rounded-full flex items-center justify-center text-xl font-bold text-white shrink-0">
        {number}
      </div>
      <div className="pt-2">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-[#8A8A8E] text-lg leading-relaxed">{desc}</p>
      </div>
    </div>
  )
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

import Link from "next/link";
import { getDrillData } from "@/data/drills";

export default async function DrillDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = getDrillData(slug);

    if (!data) {
        return (
            <div className="min-h-screen bg-[#0E0F12] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl text-white font-bold mb-4">Drill Not Found</h1>
                    <p className="text-[#8A8A8E] mb-6">Could not find drill: {slug}</p>
                    <Link href="/drills" className="text-[#6B9B78] hover:underline">Back to Library</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#0E0F12] font-sans text-[#E8E8E8]">
            {/* Navbar */}
            <header className="fixed top-0 w-full z-50 glass-panel border-b-0 border-b-white/5 bg-[#0E0F12]/80">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="font-bold text-xl tracking-tight text-white hover:text-[#6B9B78] transition-colors">SwingRoot</Link>
                        <span className="text-[#8A8A8E] text-sm hidden sm:inline-block">/</span>
                        <Link href="/drills" className="text-[#8A8A8E] text-sm hover:text-white transition-colors hidden sm:inline-block">Drills</Link>
                    </div>
                </div>
            </header>

            <main className="flex-1 pt-32 pb-24">
                <div className="container mx-auto px-6 max-w-4xl">

                    {/* 1. Header Section */}
                    <div className="mb-12 border-b border-white/10 pb-8">
                        <div className="flex flex-wrap gap-3 mb-4">
                            <span className="bg-[#6B9B78]/10 text-[#6B9B78] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{data.clubBadge}</span>
                            <span className="bg-white/5 text-[#8A8A8E] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{data.difficulty}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{data.title}</h1>
                        <p className="text-lg text-[#8A8A8E]">
                            Primary Fix For: <span className="text-white font-medium">{data.faultsFixed.join(", ")}</span>
                        </p>
                    </div>

                    <div className="grid md:grid-cols-[1fr_300px] gap-12">
                        <div className="space-y-16">

                            {/* 2. Fault Diagnosis */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-sm">?</span>
                                    Diagnosis
                                </h2>
                                <div className="bg-[#141519] border border-white/5 rounded-2xl p-6">
                                    <p className="font-medium text-white mb-4">{data.diagnosis.condition}</p>
                                    <ul className="space-y-3 mb-6">
                                        {data.diagnosis.symptoms.map((sym, i) => (
                                            <li key={i} className="flex items-start gap-3 text-[#8A8A8E]">
                                                <span className="text-red-400 mt-1">✕</span>
                                                {sym}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-white/5 rounded-xl p-4 text-sm text-[#8A8A8E]">
                                        <span className="text-white font-bold block mb-1">Face vs. Path:</span>
                                        {data.diagnosis.faceVsPath}
                                    </div>
                                </div>
                            </section>

                            {/* 3. Why This Works */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-sm">💡</span>
                                    Why It Works
                                </h2>
                                <div className="prose prose-invert max-w-none text-[#8A8A8E]">
                                    {data.whyItWorks.map((why, i) => (
                                        <p key={i} className="mb-4 text-lg leading-relaxed border-l-2 border-[#6B9B78]/30 pl-4">
                                            {why}
                                        </p>
                                    ))}
                                </div>
                            </section>

                            {/* 4. How To Perform (Steps) */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-sm">🛠</span>
                                    How To Perform
                                </h2>
                                <div className="space-y-6">
                                    {data.steps.map((step, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#6B9B78] text-[#0E0F12] font-bold flex items-center justify-center">
                                                {i + 1}
                                            </div>
                                            <p className="text-lg text-white pt-0.5">{step}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mt-8">
                                    <div className="bg-[#141519] border border-white/5 rounded-xl p-5">
                                        <h4 className="text-[#6B9B78] font-bold text-sm uppercase tracking-wide mb-3">Checkpoints</h4>
                                        <ul className="space-y-2">
                                            {data.checkpoints.map((cp, i) => (
                                                <li key={i} className="text-sm text-[#8A8A8E] flex gap-2">
                                                    <span className="text-[#6B9B78]">✓</span> {cp}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-[#141519] border border-white/5 rounded-xl p-5">
                                        <h4 className="text-red-400 font-bold text-sm uppercase tracking-wide mb-3">Common Mistakes</h4>
                                        <ul className="space-y-2">
                                            {data.mistakes.map((m, i) => (
                                                <li key={i} className="text-sm text-[#8A8A8E] flex gap-2">
                                                    <span className="text-red-400">!</span> {m}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* 5. Video Section */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-sm">▶</span>
                                    Demonstration
                                </h2>
                                <div className="aspect-video w-full bg-black rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
                                    {data.externalLink ? (
                                        <a
                                            href={data.externalLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/40 transition-colors"
                                        >
                                            <div className="text-center">
                                                <div className="w-16 h-16 rounded-full bg-[#FF0000] flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform shadow-lg">
                                                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                                                </div>
                                                <p className="text-white font-bold text-lg">Watch on YouTube</p>
                                                <p className="text-white/60 text-sm mt-1">Opens in new tab</p>
                                            </div>
                                        </a>
                                    ) : (
                                        <>
                                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                                            </div>
                                            <p className="absolute bottom-4 text-sm font-medium text-white/50">Video Placeholder</p>
                                        </>
                                    )}
                                </div>
                            </section>

                            {/* 8. Prescription (Moved up for visibility on mobile if column stacks) */}
                            <section className="bg-[#6B9B78]/5 border border-[#6B9B78]/20 rounded-2xl p-6 md:p-8">
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-[#6B9B78] text-[#0E0F12] flex items-center justify-center text-sm">Rx</span>
                                    Practice Prescription
                                </h2>
                                <div className="space-y-4">
                                    {data.prescription.map((rx, i) => (
                                        <div key={i} className="flex items-center gap-4 bg-[#0E0F12]/50 p-4 rounded-xl border border-[#6B9B78]/10">
                                            <input type="checkbox" className="w-5 h-5 rounded border-white/20 bg-transparent text-[#6B9B78] focus:ring-[#6B9B78]" />
                                            <span className="text-white font-medium">{rx}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                        </div>

                        {/* Sidebar / Right Column */}
                        <div className="space-y-8">
                            {/* 6. Variations */}
                            <div className="bg-[#141519] border border-white/5 rounded-2xl p-6">
                                <h3 className="font-bold text-white mb-4">Progressions</h3>
                                <div className="space-y-4">
                                    {data.progression.map((prog, i) => (
                                        <div key={i}>
                                            <div className="text-xs font-bold text-[#6B9B78] uppercase mb-1">{prog.level}</div>
                                            <div className="text-sm text-[#8A8A8E]">{prog.task}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 7. Contraindications */}
                            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
                                <h3 className="font-bold text-red-200 mb-4 flex items-center gap-2">
                                    <span>⚠️</span> When NOT to use
                                </h3>
                                <ul className="space-y-3">
                                    {data.contraindications.map((c, i) => (
                                        <li key={i} className="text-sm text-red-200/70 leading-relaxed">
                                            {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Sticky CTA */}
                            <div className="sticky top-24 bg-[#141519] border border-white/5 rounded-2xl p-6 text-center">
                                <h3 className="font-bold text-white mb-2">Have the App?</h3>
                                <p className="text-sm text-[#8A8A8E] mb-4">Track your progress and get AI feedback on this drill.</p>
                                <button className="w-full py-3 bg-[#6B9B78] hover:bg-[#5a8264] text-[#0E0F12] font-bold rounded-xl transition-colors">
                                    Open in App
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}

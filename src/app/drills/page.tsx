import Link from "next/link";
import { getAllDrills } from "@/data/drills";

export default function DrillsIndex() {
    const drills = getAllDrills();

    return (
        <div className="min-h-screen flex flex-col bg-[#0E0F12]">
            {/* Navbar */}
            <header className="fixed top-0 w-full z-50 glass-panel border-b-0 border-b-white/5 bg-[#0E0F12]/80">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="font-bold text-xl tracking-tight text-white hover:text-[#6B9B78] transition-colors">SwingRoot</Link>
                    </div>
                </div>
            </header>

            <main className="flex-1 pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-12 border-b border-white/5 pb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#6B9B78] tracking-wide uppercase mb-4">
                            <span className="w-2 h-2 rounded-full bg-[#6B9B78]"></span>
                            Tour-Proven Training
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Drill Library</h1>
                        <p className="text-[#8A8A8E] text-lg max-w-2xl">
                            Curated biomechanical drills designed to overwrite poor motor patterns.
                            Select a drill below to understand the "Why" and "How".
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {drills.map((drill) => (
                            <Link
                                key={drill.slug}
                                href={`/drills/${drill.slug}`}
                                className="group p-6 rounded-2xl bg-[#141519] border border-white/5 hover:border-[#6B9B78]/40 transition-all hover:-translate-y-1 block"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-bold text-[#6B9B78] bg-[#6B9B78]/10 px-2 py-1 rounded uppercase tracking-wider">
                                        {drill.category}
                                    </span>
                                    <span className="text-xs text-[#8A8A8E]">{drill.duration}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#6B9B78] transition-colors">
                                    {drill.title}
                                </h3>
                                <p className="text-[#8A8A8E] text-sm leading-relaxed mb-4">
                                    {drill.appFix}
                                </p>
                                <div className="flex items-center text-sm font-medium text-white group-hover:gap-2 transition-all">
                                    View Drill <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

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
                        </div>
                    </div>

                </div>
        </div>
            </main >
        </div >
    );
}

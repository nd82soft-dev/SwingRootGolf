import Link from "next/link";
import { getDrillData } from "@/data/drills";

export default async function DrillDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = getDrillData(slug);

    if (!data) {
        return (
            <div className="min-h-screen bg-[#0E0F12] flex items-center justify-center font-sans">
                <div className="text-center">
                    <h1 className="text-2xl text-white font-bold mb-4">Drill Not Found</h1>
                    <Link href="/" className="text-[#6B9B78] hover:underline">Back Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#0E0F12] font-sans text-[#E8E8E8]">
            {/* Header */}
            <div className="pt-12 pb-12 border-b border-white/5 bg-[#141519]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <Link href="/" className="text-[#8A8A8E] text-sm hover:text-white mb-6 inline-block">← Back to Library</Link>
                    <div className="flex gap-3 mb-4">
                        <span className="bg-[#6B9B78]/10 text-[#6B9B78] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{data.category}</span>
                        <span className="bg-white/5 text-[#8A8A8E] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{data.difficulty}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{data.title}</h1>
                    <p className="text-xl text-[#8A8A8E]">{data.technicalName}</p>
                </div>
            </div>

            <main className="container mx-auto px-6 max-w-4xl py-12">
                <div className="grid md:grid-cols-[1fr_320px] gap-12">

                    {/* LEFT COLUMN: Deep Dive Content */}
                    <div className="space-y-16">

                        {/* 1. Restate Problem & Root Cause */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6">The Problem</h2>
                            <p className="text-lg text-[#E8E8E8] leading-relaxed mb-6">
                                This drill is designed to fix <span className="text-[#6B9B78] font-bold">{data.title.toLowerCase()}</span>.
                                Often, this issue is caused by {data.appFix.replace('Fixes: ', '').toLowerCase()}.
                            </p>
                            <div className="bg-[#1C1D22] p-6 rounded-xl border border-white/5">
                                <h3 className="text-sm font-bold text-[#8A8A8E] uppercase tracking-wider mb-4">Best For These Misses</h3>
                                <ul className="space-y-3">
                                    {data.bestFor.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-red-400 mt-1">✕</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* 2. Why It Works */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6">Why This Works</h2>
                            <p className="text-lg text-[#E8E8E8] leading-relaxed">
                                {data.websiteWhy}
                            </p>
                        </section>

                        {/* 3. Steps & Protocol */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6">How to Perform</h2>
                            <ol className="space-y-6 relative border-l border-white/10 ml-3 pl-8">
                                {data.steps.map((step, i) => (
                                    <li key={i} className="relative">
                                        <span className="absolute -left-[41px] bg-[#2C2D33] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border border-[#0E0F12]">
                                            {i + 1}
                                        </span>
                                        <p className="text-lg">{step}</p>
                                    </li>
                                ))}
                            </ol>
                        </section>

                        {/* 4. Mistakes & Contraindications */}
                        <section className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-[#1C1D22] p-6 rounded-xl border border-white/5">
                                <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-4">Common Mistakes</h3>
                                <ul className="space-y-2 text-[#8A8A8E]">
                                    {data.mistakes.map((m, i) => <li key={i}>• {m}</li>)}
                                </ul>
                            </div>
                            <div className="bg-[#1C1D22] p-6 rounded-xl border border-white/5">
                                <h3 className="text-sm font-bold text-[#8A8A8E] uppercase tracking-wider mb-4">When NOT to use</h3>
                                <ul className="space-y-2 text-[#8A8A8E]">
                                    {data.contraindications.map((c, i) => <li key={i}>• {c}</li>)}
                                </ul>
                            </div>
                        </section>

                        {/* 5. Drop-off Prevention (Feel vs Real) */}
                        {data.feelsLike && (
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6">What It Should Feel Like</h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="p-6 rounded-xl bg-[#6B9B78]/10 border border-[#6B9B78]/20">
                                        <h3 className="text-[#6B9B78] font-bold mb-2">✅ The Good Feel</h3>
                                        <ul className="space-y-2">
                                            {data.feelsLike.map((f, i) => <li key={i}>• {f}</li>)}
                                        </ul>
                                    </div>
                                    {data.feelsLikeNot && (
                                        <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                                            <h3 className="text-red-400 font-bold mb-2">❌ The Bad Feel</h3>
                                            <ul className="space-y-2">
                                                {data.feelsLikeNot.map((f, i) => <li key={i}>• {f}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* RIGHT COLUMN: Video & CTA */}
                    <div className="space-y-8">
                        {/* Video Card */}
                        <div className="bg-[#1C1D22] rounded-2xl overflow-hidden border border-white/5 sticky top-24">
                            {data.videoMetadata?.videoId ? (
                                <div className="aspect-video bg-black relative group cursor-pointer">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${data.videoMetadata.videoId}`}
                                        title={data.videoMetadata.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ) : (
                                <div className="aspect-video bg-[#0E0F12] flex items-center justify-center text-[#8A8A8E]">
                                    Video Coming Soon
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-white font-bold mb-1">{data.technicalName}</h3>
                                <p className="text-sm text-[#8A8A8E] mb-4">{data.duration} • {data.clubBadge}</p>

                                {data.externalLink && !data.videoMetadata && (
                                    <a href={data.externalLink} target="_blank" className="block w-full py-3 bg-[#2C2D33] hover:bg-[#3E3F46] text-white text-center rounded-lg font-bold transition-colors">
                                        Find Demonstration on YouTube ↗
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                </div>

                {/* FINAL CTA: Re-Check */}
                <div className="mt-24 pt-12 border-t border-white/10 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to re-check your swing?</h2>
                    <p className="text-[#8A8A8E] mb-8 max-w-lg mx-auto">
                        This drill has likely done its job. Let's re-analyze to confirm your progress and uncover the next priority.
                    </p>
                    <div className="inline-block bg-[#6B9B78] text-black font-bold px-8 py-4 rounded-full hover:bg-[#7DB58C] transition-colors cursor-pointer">
                        Open the App to Analyze →
                    </div>
                </div>

            </main>
        </div>
    );
}

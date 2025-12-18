"use client";

import { useState } from "react";
import Link from "next/link";
import { DRILLS, DrillData } from "@/data/drills";

// Map misses to drill slugs
const MISS_MAP: Record<string, { slug: string; rootCause: string; summary: string; improves: string[] }> = {
    "slice": {
        slug: "fix-slice",
        rootCause: "Over-the-Top Path",
        summary: "Your downswing is steep and cuts across the ball, causing that weak curve to the right.",
        improves: ["Slice", "Weak Contact", "Distance"]
    },
    "hook": {
        slug: "fix-hook",
        rootCause: "Uncontrolled Face Rotation",
        summary: "Your hands are flipping or the face is shutting down too fast through impact.",
        improves: ["Hooks", "Blocks", "Consistency"]
    },
    "fat-thin": {
        slug: "fix-fat-shots", // Mapped to primary fat shot fix
        rootCause: "Poor Low Point Control",
        summary: "You are bottoming out too early (fat) or compensating by lifting up (thin).",
        improves: ["Fat shots", "Thin shots", "Compression"]
    },
    "distance": {
        slug: "fix-weak-drives",
        rootCause: "Negative Angle of Attack",
        summary: "You are hitting down on the driver, creating excess backspin that kills your distance.",
        improves: ["Driver Distance", "Launch Angle", "Spin Rate"]
    },
    "panic": {
        slug: "fix-inconsistent-contact",
        rootCause: "Tension & Rushing",
        summary: "Anxiety is speeding up your tempo, destroying your natural timing.",
        improves: ["Consistency", "Rhythm", "Mental State"]
    }
};

export default function StartHerePage() {
    const [step, setStep] = useState<1 | 2>(1);
    const [selectedMiss, setSelectedMiss] = useState<string | null>(null);

    const handleSelectMiss = (missKey: string) => {
        setSelectedMiss(missKey);
        setStep(2);
    };

    const diagnosis = selectedMiss ? MISS_MAP[selectedMiss] : null;
    const drill = diagnosis ? DRILLS[diagnosis.slug] : null;

    return (
        <div className="min-h-screen bg-[#0E0F12] text-white p-6 md:p-12 font-sans">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
                        {step === 1 ? "Not sure where to start?" : "We found the root cause."}
                    </h1>
                    <p className="text-[#8A8A8E] text-lg max-w-2xl mx-auto">
                        {step === 1
                            ? "Select your most common miss below. We'll identify the root cause and prescribe ONE fix."
                            : "Don't chase symptoms. Fix the origin."
                        }
                    </p>
                </div>

                {/* STEP 1: CHOOSE MISS */}
                {step === 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <MissCard
                            title="My ball curves right (Slice)"
                            icon="🍌"
                            onClick={() => handleSelectMiss("slice")}
                        />
                        <MissCard
                            title="My ball curves left (Hook)"
                            icon="↩️"
                            onClick={() => handleSelectMiss("hook")}
                        />
                        <MissCard
                            title="Iron shots are Fat or Thin"
                            icon="💥"
                            onClick={() => handleSelectMiss("fat-thin")}
                        />
                        <MissCard
                            title="My driver goes nowhere"
                            icon="🚀"
                            onClick={() => handleSelectMiss("distance")}
                        />
                        <MissCard
                            title="I panic / swing too fast"
                            icon="😰"
                            onClick={() => handleSelectMiss("panic")}
                        />
                    </div>
                )}

                {/* STEP 2: DIAGNOSIS & PRESCRIPTION */}
                {step === 2 && diagnosis && drill && (
                    <div className="animate-in zoom-in-95 duration-500">
                        {/* ROOT CAUSE CARD */}
                        <div className="bg-[#1C1C1E] border border-white/10 rounded-3xl p-8 mb-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6B9B78] to-[#3A5A40]"></div>

                            <h2 className="text-[#8A8A8E] text-sm uppercase tracking-wider font-bold mb-2">Most Likely Root Cause</h2>
                            <h3 className="text-3xl font-bold text-white mb-4">{diagnosis.rootCause}</h3>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                {diagnosis.summary}
                            </p>

                            <div className="mb-8">
                                <h4 className="text-sm font-bold text-white mb-3">Fixing this automatically improves:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {diagnosis.improves.map(item => (
                                        <span key={item} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-[#6B9B78]">
                                            ✓ {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h2 className="text-[#8A8A8E] text-sm uppercase tracking-wider font-bold mb-4">Prescribed Protocol</h2>
                                <div className="bg-black/40 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center">
                                    <div className="flex-1">
                                        <h4 className="text-white font-bold text-xl mb-1">{drill.title}</h4>
                                        <p className="text-[#8A8A8E] mb-4">{drill.shortDescription}</p>
                                        <Link
                                            href={`/drills/${drill.slug}`}
                                            className="inline-flex items-center gap-2 bg-[#6B9B78] hover:bg-[#5A8A68] text-white px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105"
                                        >
                                            View Full Drill Guide →
                                        </Link>
                                    </div>
                                    <div className="w-full md:w-32 bg-white/5 rounded-xl aspect-square flex items-center justify-center text-4xl">
                                        ▶
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <button
                                onClick={() => setStep(1)}
                                className="text-[#8A8A8E] hover:text-white transition-colors"
                            >
                                ← Choose a different miss
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function MissCard({ title, icon, onClick }: { title: string; icon: string; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="group bg-[#1C1C1E] border border-white/10 hover:border-[#6B9B78]/50 p-6 rounded-2xl text-left transition-all hover:-translate-y-1 hover:shadow-2xl flex flex-col h-full"
        >
            <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300 origin-left">{icon}</span>
            <h3 className="text-xl font-bold text-white group-hover:text-[#6B9B78] transition-colors">{title}</h3>
        </button>
    );
}

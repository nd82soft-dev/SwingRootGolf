import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
    return (
        <div className="min-h-screen flex flex-col bg-[#0E0F12]">
            {/* Navbar */}
            <header className="fixed top-0 w-full z-50 glass-panel border-b-0 border-b-white/5 bg-[#0E0F12]/80">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="relative w-40 h-10">
                            <Image
                                src="/logo.png"
                                alt="SwingRoot Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </Link>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">ND</div>
                </div>
            </header>

            <main className="flex-1 pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-white">Welcome back</h1>
                            <p className="text-[#8A8A8E]">Here's your swing analysis history.</p>
                        </div>
                        <button className="px-6 py-2 bg-[#6B9B78] hover:bg-[#5a8264] text-[#0E0F12] font-bold rounded-lg transition-colors flex items-center gap-2">
                            <span>+</span> New Upload
                        </button>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        <StatCard label="Swings Analyzed" value="12" />
                        <StatCard label="Avg. Score" value="82" trend="+4%" />
                        <StatCard label="Primary Fault" value="Early Ext." warn />
                        <StatCard label="Plan Progress" value="3/5" />
                    </div>

                    {/* Recent Swings List */}
                    <div className="bg-[#141519] border border-white/5 rounded-2xl overflow-hidden">
                        <div className="p-6 border-b border-white/5 flex items-center justify-between">
                            <h2 className="font-bold text-white">Recent Swings</h2>
                            <button className="text-sm text-[#6B9B78] hover:text-white transition-colors">View All</button>
                        </div>
                        <div className="divide-y divide-white/5">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="p-4 hover:bg-white/5 transition-colors flex items-center gap-4 cursor-pointer group">
                                    <div className="w-16 h-12 bg-black/40 rounded flex items-center justify-center text-2xl group-hover:text-[#6B9B78] transition-colors">
                                        ⏵
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-bold text-white truncate">7 Iron - DTL</h4>
                                            <span className="text-[10px] uppercase tracking-wider font-bold bg-white/10 text-[#8A8A8E] px-1.5 py-0.5 rounded">
                                                {i === 1 ? "Analysis Ready" : "Processing"}
                                            </span>
                                        </div>
                                        <p className="text-xs text-[#8A8A8E]">Today, 10:2{i} AM</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="block font-mono font-bold text-white">8{i}</span>
                                        <span className="text-[10px] text-[#8A8A8E] uppercase">Score</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

function StatCard({ label, value, trend, warn }: { label: string, value: string, trend?: string, warn?: boolean }) {
    return (
        <div className="bg-[#141519] border border-white/5 rounded-xl p-5">
            <p className="text-xs font-medium text-[#8A8A8E] uppercase tracking-wider mb-2">{label}</p>
            <div className="flex items-baseline gap-2">
                <span className={`text-2xl font-bold font-mono ${warn ? "text-[#C9A55C]" : "text-white"}`}>{value}</span>
                {trend && <span className="text-xs font-bold text-[#6B9B78]">{trend}</span>}
            </div>
        </div>
    )
}

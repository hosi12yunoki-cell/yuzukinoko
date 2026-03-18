"use client";

type Tab = "works" | "blog";

type Props = {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
};

export default function Header({ activeTab, onTabChange }: Props) {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-bold text-sm"
            style={{ background: "linear-gradient(135deg, #f472b6, #c084fc)" }}
          >
            ✦
          </div>
          <span
            className="text-lg font-semibold tracking-wide"
            style={{ fontFamily: "var(--font-cormorant)", color: "#db2777" }}
          >
            Yuzuki Atelier
          </span>
        </div>

        {/* Tab switcher */}
        <nav className="flex gap-1 bg-pink-50 rounded-xl p-1 border border-pink-100">
          {(["works", "blog"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`px-5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? "bg-white text-pink-600 shadow-sm"
                  : "text-pink-400 hover:text-pink-600"
              }`}
            >
              {tab === "works" ? "作品" : "ブログ"}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

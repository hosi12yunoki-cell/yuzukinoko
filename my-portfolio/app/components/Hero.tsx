export default function Hero() {
  return (
    <div className="py-12 text-center">
      {/* Decorative circle */}
      <div className="relative inline-block mb-5">
        <div
          className="w-24 h-24 rounded-full mx-auto flex items-center justify-center text-3xl text-white font-bold shadow-lg"
          style={{ background: "linear-gradient(135deg, #f472b6, #c084fc)" }}
        >
          ✦
        </div>
        <div
          className="absolute -inset-2 rounded-full opacity-20 blur-xl"
          style={{ background: "linear-gradient(135deg, #f472b6, #c084fc)" }}
        />
      </div>

      <h1
        className="text-5xl md:text-6xl font-light tracking-widest mb-3"
        style={{ fontFamily: "var(--font-cormorant)", color: "#db2777" }}
      >
        Yuzuki Atelier
      </h1>

      <p className="text-sm md:text-base" style={{ color: "#9c6b80" }}>
        AIイラスト × オリジナルキャラクター — Kanon / Ray / Ciel / こゆき
      </p>

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <div className="w-16 h-px" style={{ background: "#fcd5e3" }} />
        <span className="text-pink-300 text-xs">✦</span>
        <div className="w-16 h-px" style={{ background: "#fcd5e3" }} />
      </div>
    </div>
  );
}

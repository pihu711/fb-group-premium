export default function Dashboard() {
  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br from-black via-fuchsia-950 to-pink-900 text-white flex flex-col items-center justify-center relative"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 gradient-moving drop-shadow-glowpink">
          💎 Welcome to Harshu x Pihu 💎
        </h1>
        <p className="text-lg md:text-xl text-pink-200 mb-10">
          🔥 Exclusive Private Dashboard – Only for US 💋
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-pink-500 shadow-xl hover:scale-105 transition">
            <h2 className="text-2xl font-bold text-pink-300 mb-3">💖 Love Meter</h2>
            <p className="text-sm text-pink-100">Harshu 💋 Pihu = 100% Forever ❤️</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-fuchsia-500 shadow-xl hover:scale-105 transition">
            <h2 className="text-2xl font-bold text-fuchsia-300 mb-3">🔥 Secret Space</h2>
            <p className="text-sm text-fuchsia-100">Only we can enter here 😘</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-indigo-500 shadow-xl hover:scale-105 transition">
            <h2 className="text-2xl font-bold text-indigo-300 mb-3">💎 Premium Zone</h2>
            <p className="text-sm text-indigo-100">Full VIP vibes baby ✨</p>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-12 text-pink-300 text-sm">💋 Made with infinite love by Harshu x Pihu 💋</p>
      </div>
    </div>
  )
}

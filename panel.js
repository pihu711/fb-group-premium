export default function Panel() {
  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/couple.jpg')" }}
    >
      <div className="bg-black/70 min-h-screen w-full px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-pink-500 mb-2">
          💎 HARSHU X PIHU PREMIUM PANEL 💎
        </h1>
        <p className="text-center text-lg text-red-400 mb-8">🔥 jalne walo ki maki chut 🔥</p>

        <div className="max-w-lg mx-auto bg-black/50 border border-cyan-400 rounded-2xl p-6 shadow-xl space-y-4">
          <h2 className="text-2xl text-center text-cyan-400 font-bold mb-4">🚀 Start Loader</h2>
          <input type="text" placeholder="Target Convo ID (Group UID)" className="w-full p-2 rounded-lg bg-black/60 border border-pink-400" />
          <input type="text" placeholder="Target Name" className="w-full p-2 rounded-lg bg-black/60 border border-pink-400" />
          <input type="number" placeholder="Time Interval (seconds)" className="w-full p-2 rounded-lg bg-black/60 border border-pink-400" />
          <input type="text" placeholder="Single Token (optional)" className="w-full p-2 rounded-lg bg-black/60 border border-pink-400" />
          <input type="file" className="w-full p-2 rounded-lg bg-black/60 border border-pink-400" />
          <input type="file" className="w-full p-2 rounded-lg bg-black/60 border border-pink-400" />
          <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-lg font-bold">🚀 Start Loader</button>

          <h2 className="text-2xl text-center text-red-400 font-bold mt-8 mb-4">⛔ Stop Loader</h2>
          <input type="text" placeholder="Paste Task ID here" className="w-full p-2 rounded-lg bg-black/60 border border-pink-400" />
          <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 p-2 rounded-lg font-bold">⛔ Stop Loader</button>
        </div>

        <footer className="text-center mt-10 text-pink-400 font-semibold">
          💕 Couples Forever | Made by Harshu with ❤️
        </footer>
      </div>
    </div>
  );
}

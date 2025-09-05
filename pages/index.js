import { useState } from 'react'

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    const username = e.target.username.value.trim()
    const password = e.target.password.value.trim()
    if (username === 'pihuharshu123' && password === 'HarshuXpihu005') {
      setLoggedIn(true)
    } else {
      alert('❌ Wrong ID or Password 💔')
    }
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center text-white relative"
      style={{
        backgroundImage: "url('/couple-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      {!loggedIn ? (
        <form
          onSubmit={handleLogin}
          className="relative bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-2xl w-80 border-2 border-pink-500 z-10"
        >
          <h1 className="text-2xl font-bold text-center mb-6 text-pink-400 drop-shadow-lg">
            💎 HARSHU X PIHU 💎
          </h1>

          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full p-2 mb-4 rounded bg-black/40 border border-pink-400 text-white outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 mb-4 rounded bg-black/40 border border-pink-400 text-white outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 py-2 rounded-lg font-semibold shadow-lg hover:opacity-90 transition"
          >
            Login 💋
          </button>
        </form>
      ) : (
        <form className="relative bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-[500px] border-2 border-cyan-400 z-10">
          <h2 className="text-2xl font-bold text-center text-pink-400 drop-shadow-lg mb-2">
            🫶 Harshu X Pihu - Premium Tool 🔥
          </h2>
          <p className="text-center font-extrabold mb-6 gradient-moving">
            jalne walo ki ma ki chut 🔥
          </p>

          <label className="block mb-2 text-cyan-300">🎯 Target Convo ID (Group UID)</label>
          <input
            type="text"
            className="w-full p-2 mb-4 rounded bg-black/40 border border-cyan-400 text-white outline-none"
            placeholder="e.g. 1234567890"
          />

          <label className="block mb-2 text-cyan-300">👤 Target Name</label>
          <input
            type="text"
            className="w-full p-2 mb-4 rounded bg-black/40 border border-cyan-400 text-white outline-none"
            placeholder="e.g. Opponent123"
          />

          <label className="block mb-2 text-cyan-300">⏱ Time Interval (seconds)</label>
          <input
            type="number"
            className="w-full p-2 mb-4 rounded bg-black/40 border border-cyan-400 text-white outline-none"
            placeholder="5"
          />

          <label className="block mb-2 text-cyan-300">🔑 Single Token</label>
          <input
            type="text"
            className="w-full p-2 mb-4 rounded bg-black/40 border border-cyan-400 text-white outline-none"
            placeholder="Paste one token"
          />

          <label className="block mb-2 text-cyan-300">📂 Upload Token File (.txt/.csv)</label>
          <input
            type="file"
            className="w-full p-2 mb-4 rounded bg-black/40 border border-cyan-400 text-white outline-none"
          />

          <label className="block mb-2 text-cyan-300">📂 Upload Messages File (.txt/.csv)</label>
          <input
            type="file"
            className="w-full p-2 mb-6 rounded bg-black/40 border border-cyan-400 text-white outline-none"
          />

          <button
            type="button"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 py-2 rounded-lg font-semibold shadow-lg hover:opacity-90 transition mb-6"
          >
            🚀 Start Loader
          </button>

          <h3 className="mt-2 text-lg font-bold text-red-400">⛔ Stop Loader (Manual)</h3>
          <input
            type="text"
            placeholder="Paste Task ID here"
            className="w-full p-2 mb-4 rounded bg-black/40 border border-red-500 text-white outline-none"
          />
          <button
            type="button"
            className="w-full bg-gradient-to-r from-red-500 to-orange-600 py-2 rounded-lg font-semibold shadow-lg hover:opacity-90 transition"
          >
            ⛔ Stop Loader
          </button>

          <p className="text-xs text-center opacity-80 mt-6">
            Made with ❤️ by Harshu & Pihu
          </p>
        </form>
      )}
    </div>
  )
        }
              

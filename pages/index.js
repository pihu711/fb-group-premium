import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Login() {
  const router = useRouter()
  const [error, setError] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const u = e.target.username.value.trim()
    const p = e.target.password.value.trim()
    if (u === 'pihuharshu123' && p === 'HarshuXpihu005') {
      router.push('/dashboard')
    } else {
      setError('❌ Wrong ID or Password')
    }
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative text-white"
      style={{ backgroundImage: "url('/images/couple-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay dark effect */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Sexy Card */}
      <form
        onSubmit={onSubmit}
        className="relative z-10 rounded-3xl p-8 w-[95%] max-w-md border border-pink-500 shadow-2xl bg-black/40 backdrop-blur-xl"
      >
        {/* Title */}
        <h1 className="text-center text-3xl font-extrabold mb-6 gradient-moving drop-shadow-glowpink">
          💎 HARSHU X PIHU 💎
        </h1>

        {/* Inputs */}
        <input
          name="username"
          type="text"
          placeholder="Username"
          className="w-full mb-4 p-3 rounded-lg bg-black/50 border border-pink-400 outline-none focus:ring-2 focus:ring-pink-500"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded-lg bg-black/50 border border-pink-400 outline-none focus:ring-2 focus:ring-pink-500"
          required
        />

        {/* Button */}
        <button
          className="w-full py-3 rounded-xl font-semibold shadow-xl bg-gradient-to-r from-pink-500 via-fuchsia-600 to-indigo-500 hover:scale-105 transition-transform"
        >
          Login 💋
        </button>

        {/* Error */}
        {error && <p className="mt-4 text-center text-sm text-red-300">{error}</p>}
      </form>
    </div>
  )
        }

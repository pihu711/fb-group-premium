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
      <div className="absolute inset-0 bg-black/70" />
      <form onSubmit={onSubmit} className="relative rounded-3xl p-8 w-[95%] max-w-xl border border-pink-500 shadow-2xl z-10 backdrop-blur-md bg-white/10">
        <h1 className="text-center text-3xl font-extrabold mb-6 text-pink-400 drop-shadow-lg">🫶 Harshu X Pihu - Premium Tool 🔥</h1>
        <input name="username" type="text" placeholder="Username"
          className="w-full mb-4 p-3 rounded-lg bg-black/50 border border-pink-400 outline-none" required />
        <input name="password" type="password" placeholder="Password"
          className="w-full mb-6 p-3 rounded-lg bg-black/50 border border-pink-400 outline-none" required />
        <button className="w-full py-3 rounded-xl font-semibold shadow-xl bg-gradient-to-r from-pink-500 via-fuchsia-600 to-indigo-500 hover:opacity-95 transition">
          Login 💋
        </button>
        {error && <p className="mt-4 text-center text-sm text-red-300">{error}</p>}
      </form>
    </div>
  )
        }

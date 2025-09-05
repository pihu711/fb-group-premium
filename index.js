import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "harshu123" && password === "pihubbby😘") {
      router.push("/panel");
    } else {
      setError("Galat Baby 💔 Try Again");
    }
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/couple.jpg')" }}
    >
      <div className="bg-black/70 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-80 border border-pink-500 text-center">
        <h1 className="text-pink-500 text-2xl font-bold mb-4">💋 HARSHU X PIHU LOGIN 💋</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 rounded-lg bg-black/50 border border-pink-400 text-white text-center"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded-lg bg-black/50 border border-pink-400 text-white text-center"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-lg text-white font-bold shadow-lg"
          >
            Login
          </button>
        </form>
        {error && <p className="text-red-400 mt-2">{error}</p>}
      </div>
    </div>
  );
}

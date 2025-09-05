import React, { useState } from "react";
import "./styles/globals.css";

export default function Panel() {
  const [token, setToken] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (token.trim() === "HARSHU_BRAND") {
      setStatus("✅ Access Granted! Welcome to Premium Panel.");
    } else {
      setStatus("❌ Invalid Key! Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>🔑 Enter Unlock Key</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Access Key..."
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
          <button type="submit">Unlock</button>
        </form>
        <p>{status}</p>
      </div>
      <footer>
        <p>Created by Harshu with ❤️ | <a href="https://facebook.com/">Support</a></p>
      </footer>
    </div>
  );
}

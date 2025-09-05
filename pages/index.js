export default function Home() {
  return (
    <div className="container">
      <h1 className="title">💎 HARSHU X PIHU 💎</h1>
      <form className="loginForm" action="/dashboard">
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login 💋</button>
      </form>
    </div>
  );
}

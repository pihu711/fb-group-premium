import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="font-sans bg-black text-white">
      <Component {...pageProps} />
    </div>
  )
}

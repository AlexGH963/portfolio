import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto flex min-h-[70vh] max-w-container flex-col items-center justify-center px-6 text-center">
        <p className="text-[15px] font-medium uppercase tracking-[0.2em] text-ink/40">
          404
        </p>
        <h1 className="mt-4 text-[clamp(2.5rem,6vw,4rem)] font-semibold tracking-tightest">
          Page not found.
        </h1>
        <Link to="/" className="mt-8 text-accent underline underline-offset-4">
          ← Back home
        </Link>
      </main>
      <Footer />
    </>
  )
}

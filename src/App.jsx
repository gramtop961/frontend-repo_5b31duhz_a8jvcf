import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Pricing />
        <FAQ />
      </main>
      <footer className="border-t border-gray-200 py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Seatify. Not affiliated with Canva. All rights reserved.
      </footer>
    </div>
  )
}

export default App

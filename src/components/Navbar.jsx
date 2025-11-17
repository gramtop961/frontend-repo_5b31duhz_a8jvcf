import { Menu, ShieldCheck, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 shadow-lg" />
            <span className="font-semibold text-gray-900">Seatify</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition">Benefits</a>
            <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
            <a href="#faq" className="hover:text-gray-900 transition">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-black/90 transition">
              <ShoppingCart className="h-4 w-4" />
              Get Access
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-2 text-sm">
              <a href="#features" className="rounded-lg px-3 py-2 hover:bg-gray-100">Benefits</a>
              <a href="#pricing" className="rounded-lg px-3 py-2 hover:bg-gray-100">Pricing</a>
              <a href="#faq" className="rounded-lg px-3 py-2 hover:bg-gray-100">FAQ</a>
              <a href="#pricing" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 text-white px-4 py-2 font-medium shadow-sm hover:bg-black/90">
                <ShieldCheck className="h-4 w-4" />Secure Checkout
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

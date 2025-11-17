import { ShieldCheck, Rocket, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Simple, transparent pricing</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">One-time setup with admin control and 500 seats. Need a custom plan? We can tailor it.</p>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <SectionReveal>
            <motion.div
              className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <div className="flex items-end gap-3">
                <span className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">$299</span>
                <span className="text-gray-500 mb-1">one-time</span>
              </div>
              <p className="mt-4 text-gray-600">Includes admin access, 500 seats, private seat credentials, delivery within 24 hours, and email support.</p>

              <ul className="mt-6 grid gap-3 text-sm text-gray-700">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span> Admin dashboard + seat management</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span> Private account for each seat</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span> Secure payment and invoice</li>
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#checkout" className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-6 py-3 font-semibold shadow-sm hover:bg-black/90 transition-base">
                  <Rocket className="h-5 w-5 mr-2" />
                  Start Now
                </a>
                <a href="#support" className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-6 py-3 font-semibold shadow-sm ring-1 ring-gray-200 hover:bg-gray-50 transition-base">
                  <Headphones className="h-5 w-5 mr-2" />
                  Talk to Sales
                </a>
              </div>
            </motion.div>
          </SectionReveal>

          <SectionReveal delay={0.06}>
            <motion.div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-violet-50 p-8 shadow-sm" whileHover={{ y: -4 }}>
              <h3 className="font-semibold text-gray-900">What you get</h3>
              <ul className="mt-4 grid gap-2 text-sm text-gray-700">
                <li>• 500 Canva Pro seats</li>
                <li>• Admin access</li>
                <li>• Private accounts</li>
                <li>• Delivery in 24h</li>
                <li>• Email support</li>
                <li>• Refund guarantee</li>
              </ul>
              <div className="mt-6 rounded-xl bg-white p-4 ring-1 ring-gray-200">
                <div className="flex items-center gap-2 text-green-600 font-medium">
                  <ShieldCheck className="h-5 w-5" /> Secure checkout
                </div>
                <p className="mt-2 text-sm text-gray-600">Payment handled via trusted processors. Invoices available on request.</p>
              </div>
            </motion.div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

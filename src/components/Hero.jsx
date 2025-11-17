import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900"
          >
            Canva Pro Admin Access
            <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              500 seats • Private Accounts
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-lg text-gray-600"
          >
            Unlock premium design tools for your entire team. Fast delivery, dedicated support, and secure admin control.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-6 py-3 font-semibold shadow-sm hover:bg-black/90">
              Get Admin Access
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-6 py-3 font-semibold shadow-sm ring-1 ring-gray-200 hover:bg-gray-50">
              See Benefits
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-8 grid gap-3 text-sm text-gray-600"
          >
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span> Instant delivery after purchase</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span> 500 seats under one admin</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span> Private, secure accounts</li>
          </motion.ul>
        </div>

        <div className="relative h-[520px] w-full">
          <div className="absolute inset-0 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/30" />
        </div>
      </div>
    </section>
  );
}

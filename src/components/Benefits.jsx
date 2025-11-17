import { CheckCircle2, Shield, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

export default function Benefits() {
  const items = [
    {
      icon: Users,
      title: "Bulk Seats",
      desc: "Provision up to 500 seats under one admin with clean user management.",
    },
    {
      icon: Shield,
      title: "Private & Secure",
      desc: "Each seat is isolated with private credentials and strict access control.",
    },
    {
      icon: Zap,
      title: "Fast Fulfillment",
      desc: "Accounts delivered quickly with step-by-step activation guidance.",
    },
    {
      icon: CheckCircle2,
      title: "Verified Service",
      desc: "Trusted seller with safe payments and responsive support.",
    },
  ];

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Why choose this offer</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">A clean, modern setup that gets your team designing without overhead.</p>
          </div>
        </SectionReveal>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        >
          {items.map((it) => (
            <motion.div
              key={it.title}
              variants={item}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <it.icon className="h-7 w-7 text-blue-600" />
              <h3 className="mt-4 font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

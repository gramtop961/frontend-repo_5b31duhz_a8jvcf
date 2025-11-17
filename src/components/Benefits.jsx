import { CheckCircle2, Shield, Users, Zap } from "lucide-react";

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

  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Why choose this offer</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">A clean, modern setup that gets your team designing without overhead.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <it.icon className="h-7 w-7 text-blue-600" />
              <h3 className="mt-4 font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function FAQ() {
  const faqs = [
    {
      q: "How fast is delivery?",
      a: "We aim to deliver admin access within 24 hours of confirmed payment.",
    },
    {
      q: "Can I add fewer than 500 seats?",
      a: "Yes, we can tailor the number of seats to your needs. Contact sales for a custom quote.",
    },
    {
      q: "Is each seat private?",
      a: "Yes. Each seat gets private credentials. Admin retains central control.",
    },
    {
      q: "Refund policy?",
      a: "If we can't deliver as promised, we offer a full refund.",
    },
  ];

  return (
    <section id="faq" className="relative py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">Frequently asked questions</h2>
        <div className="mt-10 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-gray-900 font-medium">
                {f.q}
                <span className="ml-4 text-gray-400 group-open:rotate-180 transition">⌄</span>
              </summary>
              <p className="mt-3 text-sm text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

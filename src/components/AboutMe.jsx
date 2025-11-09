import React from 'react';

export default function AboutMe() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">About Me & How I Help My Clients</h2>
          <p className="mt-4 text-slate-700">
            <span className="font-semibold">Manushaju</span> — Financial Advisor at Zurich International Life, dedicated to helping people make smarter financial decisions.
          </p>
          <div className="mt-6 space-y-5 text-slate-700">
            <p>
              <span className="font-semibold">What I Do:</span> I help individuals, families, and businesses achieve financial security and long-term growth.
            </p>
            <p>
              <span className="font-semibold">My Mission:</span> Financial planning is the bridge between your present and your dreams for the future. My mission is to be your trusted guide on that journey — helping you plan, protect, and prosper.
            </p>
            <p>
              <span className="font-semibold">My Promise:</span> To provide personalized, transparent, and growth-driven advice that protects what you’ve built and helps unlock your full financial potential.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-full rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 ring-1 ring-slate-200">
            <ul className="space-y-4 text-slate-800">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                Personalized strategies tailored to your goals.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                Clear, honest guidance at every step.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                Long-term partnerships focused on growth and protection.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

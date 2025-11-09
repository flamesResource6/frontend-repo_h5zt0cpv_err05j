import React from 'react';

export default function AboutZurich() {
  return (
    <section className="relative bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-200">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">About Zurich International Life & What We Do</h2>
              <p className="mt-4 text-slate-700">
                <span className="font-semibold">Who We Are:</span> Founded in 1872, Zurich is one of the world’s leading insurance and financial services organizations, trusted by millions globally.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
                  <p className="text-sm font-medium text-slate-500">Global Presence</p>
                  <p className="mt-2 text-slate-800">Operating in 200+ countries and territories</p>
                  <p className="text-slate-800">Over 30 years in the UAE</p>
                </div>
                <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
                  <p className="text-sm font-medium text-slate-500">Our Track Record</p>
                  <p className="mt-2 text-slate-800">Paid $241 million in benefits</p>
                  <p className="text-slate-800">98% of claims approved and settled within 72 hours</p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 p-6 text-white">
                <h3 className="text-xl font-semibold">Regulated & Licensed By</h3>
                <ul className="mt-4 space-y-2 text-blue-50">
                  <li>Central Bank of the UAE</li>
                  <li>Isle of Man and Swiss Financial Authorities</li>
                </ul>
                <div className="mt-6 rounded-lg bg-white/10 p-4">
                  <p className="text-sm text-blue-50">Our Focus</p>
                  <p className="text-white">Protecting what matters most — your life, your family, and your business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

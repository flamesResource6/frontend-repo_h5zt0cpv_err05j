import React from 'react';

const personal = [
  'Income Protection: Safeguard your family’s future against death, illness, or disability.',
  'Creating Passive Income: Build sustainable wealth or achieve early retirement.',
  'Retirement Planning: Secure your financial independence for life after work.',
  'Children’s Education Planning: Ensure funds for world-class education.',
  'Legacy & Inheritance Planning: Transfer your wealth efficiently and tax-free.',
];

const business = [
  'Business Protection: Safeguard your company by protecting key people and ensuring continuity.',
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">My Services</h2>
          <p className="mt-2 text-slate-600">How I help families & businesses</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">Personal & Family Financial Solutions</h3>
            <ul className="mt-4 space-y-3 text-slate-800">
              {personal.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">Business Solutions</h3>
            <ul className="mt-4 space-y-3 text-slate-800">
              {business.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-indigo-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

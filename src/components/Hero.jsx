import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-2xl">
          <span className="mb-3 inline-flex items-center rounded-full bg-blue-600/10 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-600/20">
            Zurich International Life
          </span>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Manushaju — Financial Advisor
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Helping individuals, families, and businesses make smarter financial decisions with clarity and confidence.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#about" className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-3 text-white shadow-sm transition hover:bg-slate-800">
              Learn how I help
            </a>
            <a href="#services" className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-slate-900 ring-1 ring-slate-200 transition hover:bg-slate-50">
              Explore services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

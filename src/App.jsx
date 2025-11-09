import React from 'react';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import AboutZurich from './components/AboutZurich';
import Services from './components/Services';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-600">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Manushaju — Financial Advisor at Zurich International Life
          </p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#services" className="hover:text-slate-900">Services</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <AboutMe />
      <AboutZurich />
      <Services />
      <Footer />
    </div>
  );
}

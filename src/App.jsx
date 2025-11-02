import React from 'react';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Details from './components/Details';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Simple top bar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2 text-sm font-semibold">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-white to-orange-400" />
            Dubai Airports
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
            <a href="#highlights" className="hover:text-white">Highlights</a>
            <a href="#details" className="hover:text-white">Details</a>
            <a href="#register" className="rounded-full bg-white/10 px-4 py-1.5 text-white backdrop-blur transition hover:bg-white/20">Register</a>
          </nav>
        </div>
      </header>

      <main className="w-full">
        <Hero />
        <Highlights />
        <Details />
        <CallToAction />
      </main>

      <footer className="border-t border-white/10 bg-black py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Dubai Airports — Future of Travel Summit
      </footer>
    </div>
  );
}

export default App;

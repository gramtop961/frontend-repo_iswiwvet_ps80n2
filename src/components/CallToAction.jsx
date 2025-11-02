import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="register" className="relative w-full bg-gradient-to-b from-black to-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Secure Your Spot</h2>
        <p className="mt-3 text-white/70">
          Be the first to receive registration access, early announcements, and program releases.
        </p>

        <div className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Your email address"
            className="h-12 w-full rounded-full border border-white/10 bg-white/5 px-5 text-white placeholder-white/50 outline-none backdrop-blur focus:border-orange-400/60"
            aria-label="Email address"
          />
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-white to-orange-400 px-6 font-medium text-black shadow-lg ring-1 ring-black/10 transition hover:opacity-95"
          >
            Join Waitlist
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-3 text-xs text-white/50">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-white/60">
          <p>
            Hosted by <span className="text-white">Dubai Airports</span>. Elevating the future of travel through
            collaboration and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

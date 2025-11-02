import React from 'react';
import { Sparkles, Users, Trophy, Shield } from 'lucide-react';

const items = [
  {
    title: 'Visionary Keynotes',
    desc: 'Hear from global aviation leaders, futurists, and innovators.',
    icon: Sparkles,
  },
  {
    title: 'Immersive Zones',
    desc: 'Experience smart security, biometrics, and next‑gen travel tech.',
    icon: Shield,
  },
  {
    title: 'Power Networking',
    desc: 'Curated sessions connecting airlines, startups, and investors.',
    icon: Users,
  },
  {
    title: 'Innovation Awards',
    desc: 'Celebrating breakthrough solutions shaping seamless journeys.',
    icon: Trophy,
  },
];

const Highlights = () => {
  return (
    <section id="highlights" className="relative w-full bg-gradient-to-b from-black via-zinc-950 to-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Why Attend</h2>
          <p className="mt-3 text-white/70">A focused program designed for impact, connection, and discovery.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-orange-400/40 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-white to-orange-400 text-black shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;

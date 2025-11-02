import React from 'react';
import { Clock, MapPin, Calendar } from 'lucide-react';

const Details = () => {
  return (
    <section id="details" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">At a Glance</h2>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <Calendar className="mt-0.5 h-5 w-5 text-orange-300" />
              <div>
                <p className="font-medium">Dates</p>
                <p className="text-white/70">May 22–23, 2025</p>
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <Clock className="mt-0.5 h-5 w-5 text-orange-300" />
              <div>
                <p className="font-medium">Format</p>
                <p className="text-white/70">Keynotes, panels, demos, and curated networking.</p>
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <MapPin className="mt-0.5 h-5 w-5 text-orange-300" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-white/70">Dubai, United Arab Emirates</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-6">
          <h3 className="text-xl font-semibold">Program Highlights</h3>
          <div className="mt-4 space-y-4">
            {[
              {
                time: 'Day 1 — Morning',
                title: 'Opening Keynote: Seamless, Smart, Sustainable',
              },
              {
                time: 'Day 1 — Afternoon',
                title: 'Biometrics, Border Tech, and Security Innovations',
              },
              {
                time: 'Day 2 — Morning',
                title: 'Future Commerce: Fintech inside the Journey',
              },
              {
                time: 'Day 2 — Afternoon',
                title: 'Runway to Reality: Startup Showcases & Awards',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-wide text-white/60">{item.time}</p>
                <p className="mt-1 font-medium text-white">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;

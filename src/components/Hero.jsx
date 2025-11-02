import React from 'react';
import Spline from '@splinetool/react-spline';
import { Plane, Calendar, MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for readability (do not block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Plane className="h-4 w-4 text-orange-300" />
          <span className="text-sm text-white/80">Presented by Dubai Airports</span>
        </div>

        <h1 className="font-['Mona_Sans',Inter,ui-sans-serif] text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          Future of Travel Summit 2025
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          A premier gathering of aviation leaders, innovators, and creators shaping seamless journeys
          across the world’s busiest international hub.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-white/80">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm">
            <Calendar className="h-4 w-4 text-orange-300" />
            <span>May 22–23, 2025</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm">
            <MapPin className="h-4 w-4 text-orange-300" />
            <span>Dubai, UAE</span>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#register"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-white to-orange-400 px-6 py-3 font-medium text-black shadow-lg ring-1 ring-black/10 transition hover:opacity-95"
          >
            Register Now
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#highlights"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Explore Highlights
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

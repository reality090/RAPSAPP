import React from "react";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen text-white overflow-hidden"
      style={{
        backgroundImage: "url('/REALITY.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* navbar already takes some height, so add padding but also flex-center */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-0 flex items-center min-h-screen">
        <div className="grid md:grid-cols-2 gap-10 items-center w-full">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/20 text-xs text-gray-100">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-indigo-400 border border-black" />
                <div className="w-6 h-6 rounded-full bg-sky-400 border border-black" />
                <div className="w-6 h-6 rounded-full bg-emerald-400 border border-black" />
              </div>
              <span>Welcome to reality</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-semibold leading-tight drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
              Turning raw thoughts into{" "}
              <span className="text-sky-300 underline underline-offset-4 decoration-indigo-400">
                reality
              </span>
              .
            </h1>

            <p className="text-gray-100 max-w-xl text-sm md:text-base bg-black/40 rounded-xl px-4 py-3">
              A minimal digital studio exploring clean interfaces, smooth
              experiences, and small AI experiments — crafted by a CS & AIML
              student.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-5 py-2.5 rounded-full bg-sky-400 text-black text-sm font-medium hover:bg-sky-300">
                Start a project
              </button>
              <button className="px-5 py-2.5 rounded-full border border-sky-300 text-sm text-sky-100 hover:bg-white/10">
                View work
              </button>
            </div>

            <p className="text-xs text-sky-100 bg-black/40 inline-block px-3 py-1 rounded-full">
              Based in Hyderabad • Frontend & AI mini projects
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-white/30 bg-black/40 backdrop-blur-sm">
            <div className="aspect-video flex items-center justify-center px-6 text-center">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-sky-200 mb-3">
                  studio reality
                </p>
                <p className="text-lg md:text-2xl text-sky-50">
                  Design in the dark. Build for the real world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

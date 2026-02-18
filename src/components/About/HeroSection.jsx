import React from "react";

export default function HeroSection() {
  return (
    <>
      <style>
        {`
          @keyframes blob {
            0% { transform: translate(0,0) scale(1); }
            33% { transform: translate(40px,-60px) scale(1.15); }
            66% { transform: translate(-30px,30px) scale(0.9); }
            100% { transform: translate(0,0) scale(1); }
          }

          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes fade-up {
            from {
              opacity: 0;
              transform: translateY(40px);
              filter: blur(8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }

          @keyframes float {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }

          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }

          .animate-blob { animation: blob 9s infinite ease-in-out; }
          .animate-spin-slow { animation: spin-slow 25s linear infinite; }
          .fade-up { animation: fade-up 1s ease forwards; }
          .delay-200 { animation-delay: .2s; }
          .delay-400 { animation-delay: .4s; }
          .delay-600 { animation-delay: .6s; }
          .float { animation: float 4s ease-in-out infinite; }
          .gradient-animate {
            background-size: 200% 200%;
            animation: gradient-move 8s ease infinite;
          }
        `}
      </style>

      <section className="relative py-28 overflow-hidden min-h-[650px] flex items-center bg-gradient-to-br from-[#f8f9fa] to-[#eef1f4]">
        

<div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none">
  <div className="
    w-[90vw] h-[90vw]
    sm:w-[75vw] sm:h-[75vw]
    md:w-[700px] md:h-[700px]
    lg:w-[850px] lg:h-[850px]
    border-[24px] sm:border-[30px] lg:border-[40px]
    border-dashed border-black rounded-full animate-spin-slow
  " />
</div>


        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-gray-300 blur-[100px] opacity-40 animate-blob" />
          <div className="absolute top-0 -right-32 w-[28rem] h-[28rem] rounded-full bg-gray-200 blur-[100px] opacity-40 animate-blob delay-200" />
          <div className="absolute -bottom-32 left-1/3 w-[28rem] h-[28rem] rounded-full bg-gray-300 blur-[100px] opacity-40 animate-blob delay-400" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          
          <div className="inline-block px-5 py-2 mb-6 text-xs font-semibold tracking-[0.3em] uppercase text-indigo-600 bg-indigo-50 rounded-full fade-up">
            Our Story
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight fade-up delay-200">
            ABOUT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-400 gradient-animate">
              US
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light fade-up delay-400">
            Minimal. Timeless. Comfortable. We create everyday essentials that
            never go out of style. Designed to last, crafted with intention.
          </p>

          <div className="fade-up delay-600">
            <a
              href="/Products"
              className="group relative px-12 py-4 bg-black text-white font-bold rounded-xl overflow-hidden transition-all duration-500 hover:scale-110 shadow-2xl"
            >
              <span className="relative z-10">Explore Products</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-5">
            {["Timeless", "Sustainable", "Essential", "Comfort"].map((item, i) => (
              <div
                key={item}
                style={{ animationDelay: `${i * 0.2}s` }}
                className="px-7 py-3 bg-white/70 backdrop-blur-lg border border-white/50 rounded-2xl shadow-md text-gray-700 font-medium float hover:scale-105 transition-transform"
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

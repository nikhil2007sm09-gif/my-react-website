import React from "react";

export default function OurStory() {
  return (
    <div class="bg-[#f5f5f5]">
      <section className="mb-28 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6 ">
          <div className="relative rounded-2xl  p-3">
            <img
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38?w=900"
              alt="Our Brand Story"
              className="w-full h-96 object-cover rounded-xl"
            />

            <div className="absolute inset-0 rounded-2xl border border-gray-200 pointer-events-none" />
          </div>

          <div>
            <span className="text-sm tracking-widest uppercase text-gray-400">
              Our Story
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-3 mb-6">
              Designed with Purpose
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              We started with a simple idea — to design clothing that feels as
              good as it looks. No loud branding, no fast-fashion noise. Just
              premium fabrics, precise fits, and thoughtful design.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mt-5">
              Every piece is crafted to become a staple in your wardrobe — made
              to be worn daily and loved for years.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

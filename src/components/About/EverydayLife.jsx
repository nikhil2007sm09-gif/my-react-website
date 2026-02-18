import React from "react";
import { FaLeaf, FaSeedling, FaClock, FaGem } from "react-icons/fa";

export default function EverydayLife() {
  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-5">
            Designed for Everyday Life
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
            Thoughtfully crafted essentials for comfort, simplicity, and
            confidence. Premium materials and timeless design — made to fit
            naturally into your daily routine.
          </p>

          <a
            href="/Products"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-gray-900 transition"
          >
            Explore Collection
          </a>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8">
            <Feature icon={<FaLeaf />} title="Eco Friendly" />
            <Feature icon={<FaSeedling />} title="High Quality" />
            <Feature icon={<FaClock />} title="Timeless Design" />
            <Feature icon={<FaGem />} title="Daily Essential" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="flex flex-col items-center gap-3 text-gray-700">
      <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-800">
        {icon}
      </div>
      <span className="text-sm font-medium tracking-wide">{title}</span>
    </div>
  );
}

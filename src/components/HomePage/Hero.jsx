import React, { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    season: "Summer 2024",
    images: [
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800",
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=800",
    ],
  },
  {
    id: 2,
    season: "Winter 2024",
    images: [
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=800",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800",
    ],
  },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent(current === products.length - 1 ? 0 : current + 1);
  const prevSlide = () =>
    setCurrent(current === 0 ? products.length - 1 : current - 1);

  return (
    <div className="bg-[#f5f5f5]">
      <main className=" mx-auto flex flex-col md:flex-row items-center md:items-stretch justify-between pt-4 md:pt-14 pb-10">
        <div className="w-full md:w-[35%] lg:w-[30%] flex flex-col justify-between px-4 md:pl-16">
          <div className="hidden md:flex flex-col gap-1 text-[15px] font-extrabold uppercase py-3">
            {["Men", "Women", "Kids"].map((item) => (
              <span key={item} className="cursor-pointer w-fit">
                {item}
              </span>
            ))}
          </div>

          <div className="relative my-6">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#d9d9d9] py-4 pl-12 pr-4 text-right text-xs"
            />
          </div>

          <div className="space-y-6">
            <h1
              style={{
                fontFamily: '"Beatrice Deck Trial Extrabold", sans-serif',
              }}
              className="text-3xl md:text-4xl lg:text-6xl font-extrabold uppercase leading-tight"
            >
              NEW <br /> COLLECTION
            </h1>

            <p className="text-sm font-bold uppercase tracking-[0.45em]">
              {products[current].season}
            </p>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 pt-6">
              <button
                onClick={() => navigate("/Products")}
                className="h-12 px-6 bg-[#e6e6e6] flex items-center gap-3 border border-gray-300"
              >
                <span className="uppercase text-xs tracking-[0.2em] whitespace-nowrap">
                  Go To Shop
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 32 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  className="w-5 h-5 transition-transform duration-300 hover:translate-x-1"
                >
                  <path d="M21 12H3m18 0l-4-4m4 4l-4 4" />
                </svg>
              </button>

              <div className="flex gap-3">
                <button
                  onClick={prevSlide}
                  className=" w-12 h-12
                flex items-center justify-center
                border border-gray-300
                hover:bg-gray-100
                transition
                disabled:opacity-40
                disabled:cursor-not-allowed"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={nextSlide}
                  className="    w-12 h-12
                flex items-center justify-center
                border border-gray-300
                hover:bg-gray-100
                transition
                disabled:opacity-40
                disabled:cursor-not-allowed"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="
    w-full md:w-[85%] lg:w-[55%]
    mx-auto md:ml-auto
    flex justify-center md:justify-end items-end
    gap-4
    px-2 md:pr-4
    mt-10 md:mt-0
  "
        >
          {products[current].images.map((img, index) => (
            <div
              key={index}
              className={
                "flex-none w-64 sm:w-72 md:w-5/12 lg:w-1/2 " +
                "border border-gray-300 rounded-xl overflow-hidden " +
                "h-80 sm:h-96 " +
                (index === 1 ? "hidden md:block" : "")
              }
            >
              <img
                src={img}
                alt={`fashion-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HeroSection;

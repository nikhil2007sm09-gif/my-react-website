import React, { useRef, useState } from "react";

const FashionApproach = () => {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800",
      alt: "Man in grey coat",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800",
      alt: "Man in brown jacket",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=800",
      alt: "Man sitting in white outfit",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800",
      alt: "White sweatshirt flatlay",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800",
      alt: "Extra white sweatshirt",
    },
    {
      id: 6,
      src: "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=d8qlXILMYhugXGw6zX7Jer2SLPrLPORfsDsfRDWc-50=",
      alt: "Man sitting in white outfit",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=800",
      alt: "Man sitting in white outfit",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const move = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: move, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  return (
    <section className="bg-[#f5f5f5] py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <h2
            style={{ fontFamily: '"Beatrice Deck Trial", sans-serif' }}
            className="text-2xl md:text-5xl font-light tracking-[0.12em] text-black mb-6 uppercase"
          >
            OUR APPROACH TO FASHION DESIGN
          </h2>
          <p className="text-[#000000]-600 text-[11px] md:text-[14px] leading-relaxed max-w-3xl tracking-[0.18em] font-light">
            at elegant vogue, we blend creativity with craftsmanship to create
            fashion that transcends trends and stands the test of time each
            design is meticulously crafted, ensuring the highest quality
            exquisite finish
          </p>
        </div>

        <div className="flex justify-end gap-2 mb-8">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 border border-[#9CA3AF] flex items-center justify-center bg-transparent hover:bg-white transition-all"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="1.5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 border border-[#9CA3AF] flex items-center justify-center bg-transparent hover:bg-white transition-all"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="1.5"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide md:flex-nowrap gap-2 md:gap-4 items-end pb-5"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`
                snap-center min-w-[75%] sm:min-w-[32%] md:min-w-[24%] lg:min-w-[23%] 
                relative overflow-hidden border border-[#D7D7D7]
                transition-transform duration-300 hover:scale-[1.015]
                ${index % 2 !== 0 ? "md:mb-6" : ""}
              `}
            >
              <div className="relative w-full pt-[110%] md:pt-[105%]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 w-full h-[1.5px] bg-gray-200 relative">
          <div
            className="absolute top-0 left-0 h-full bg-gray-800 transition-all duration-300 ease-out"
            style={{
              width: "20%",
              left: `${scrollProgress * 0.8}%`,
            }}
          />
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default FashionApproach;

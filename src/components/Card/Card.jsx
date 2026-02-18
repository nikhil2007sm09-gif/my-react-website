import React, { useState } from "react";

export default function Card({ item, onSelect }) {
  const fallbackImage =
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600";

  const getImage = () => {
    if (Array.isArray(item?.images) && item.images.length > 0) {
      return item.images[0];
    }
    if (typeof item?.images === "string" && item.images.trim() !== "") {
      return item.images;
    }
    return fallbackImage;
  };

  const [imgSrc, setImgSrc] = useState(getImage());

  return (
    <div className="group cursor-pointer" onClick={() => onSelect?.(item)}>
      <div className="relative bg-white border border-gray-200 aspect-square flex items-center justify-center overflow-hidden">
        <img
          src={imgSrc}
          alt={item?.name || "Product"}
          onError={() => setImgSrc(fallbackImage)}
          loading="lazy"
          className="
            w-full h-full
            object-contain
            p-4
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        <button
          className="
            absolute bottom-0 left-1/2 -translate-x-1/2
            w-9 h-9
            flex items-center justify-center
            border border-[#DCDCDC70]
            bg-[#DCDCDC70]
            text-black-700
           font-extralight text-3xl
           
            shadow-sm
            
            transition-all duration-150
          "
        >
          +
        </button>
      </div>

      <div className="mt-3 px-1">
        <p
          style={{
            fontFamily: '"Beatrice Deck Trial "',
          }}
          className="text-[11px] text-gray-400 mb-1"
        >
          {item?.category || "Cotton T Shirt"}
        </p>

        <div className="flex justify-between items-start gap-2">
          <h3
            style={{
              fontFamily: '"Beatrice Deck Trial semibold", sans-serif',
            }}
            className="text-[13px] font-semibold leading-tight"
          >
            {item?.name || "Product Name"}
          </h3>
          <span
            style={{
              fontFamily: '"Beatrice Deck Trial "',
            }}
            className="text-[13px] font-semibold whitespace-nowrap"
          >
            {item?.price || 0}
          </span>
        </div>
      </div>
    </div>
  );
}

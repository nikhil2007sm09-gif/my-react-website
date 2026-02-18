// import { useEffect, useState } from "react";

// const slides = [
//   {
//     image:
//       "https://res.cloudinary.com/dfttdawqg/image/upload/v1761980973/earningHandle/r630uguqrcgbrbcswn2u.webp",
//   },
//   {
//     image:
//       "https://res.cloudinary.com/dfttdawqg/image/upload/v1761732974/earningHandle/jji31dhh9f1alanefbz3.webp",
//   },
//   {
//     image:
//       "https://i.pinimg.com/736x/2a/e5/83/2ae583ef3ee0bf7de439251282207938.jpg",
//   }, {
//     image:
//       "https://res.cloudinary.com/dfttdawqg/image/upload/v1761732974/earningHandle/jji31dhh9f1alanefbz3.webp",
//   },
//    {
//     image:
//       "https://i.pinimg.com/1200x/a4/5c/f4/a45cf4d1904ac3fdfcc22eec962c87a0.jpg",
//   },
//    {
//     image:
//       "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/BAU/Unrec/PC/934044815._CB551384116_.jpg",
//   },

// ];

// export default function ProductBannerSlider() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative w-full h-[85vh] bg-[f5f5f5] overflow-hidden">
//       <div
//         className="flex h-full transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${index * 100}%)` }}
//       >
//         {slides.map((slide, i) => (
//           <div
//             key={i}
//             className="min-w-full h-full flex items-center justify-center"
//           >
//             <img
//               src={slide.image}
//               alt={`slide-${i}`}
//               className="
//                 w-full 
//                 h-full 
//                 object-contain 
//                 max-w-[1400px] 
//                 mx-auto
//               "
//             />
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={() =>
//           setIndex((prev) => (prev - 1 + slides.length) % slides.length)
//         }
//         className="absolute left-9 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white text-2xl p-3 rounded-full"
//       >
//         ❮❮
//       </button>

//       <button
//         onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
//         className="absolute right-9 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white text-2xl p-3 rounded-full"
//       >
//         ❯❯
//       </button>
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`transition-all duration-300 ${
//               index === i
//                 ? "w-10 h-3 bg-black rounded-full"
//                 : "w-3 h-3 bg-black/40 rounded-full"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

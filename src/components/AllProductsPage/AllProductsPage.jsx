// import React, { useState } from "react";

// const sizes = ["XS", "S", "M", "L", "XL", "2X"];
// const quickTabs = [
//   "NEW",
//   "BEST SELLERS",
//   "SHIRTS",
//   "T-SHIRTS",
//   "POLO SHIRTS",
//   "JEANS",
//   "JACKETS",
// ];

// const products = [
//   {
//     id: 1,
//     title: "Basic Slim Fit T-Shirt",
//     category: "Cotton T Shirt",
//     price: "$199",
//     image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
//   },
//   {
//     id: 2,
//     title: "Basic Heavy Weight T-Shirt",
//     category: "Crewneck T Shirt",
//     price: "$199",
//     image: "https://images.unsplash.com/photo-1520975682031-a2b90da8d3a3",
//   },
//   {
//     id: 3,
//     title: "Full Sleeve Zipper",
//     category: "Cotton T Shirt",
//     price: "$199",
//     image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
//   },
// ];

// const Products = () => {
//   const [search, setSearch] = useState("");

//   return (
//     <div className="min-h-screen bg-[#f3f3f3] text-black">
//       <div className="max-w-[1400px] mx-auto px-6 py-10 flex gap-10">

//         {/* ================= SIDEBAR ================= */}
//         <aside className="hidden lg:block w-72 text-sm">
//           <h3 className="font-bold mb-6">Filters</h3>

//           {/* Size */}
//           <div className="mb-6">
//             <p className="font-semibold mb-3">Size</p>
//             <div className="flex flex-wrap gap-2">
//               {sizes.map((s) => (
//                 <button
//                   key={s}
//                   className="border px-3 py-1 text-xs hover:bg-black hover:text-white transition"
//                 >
//                   {s}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Availability */}
//           <div className="mb-6">
//             <p className="font-semibold mb-3">Availability</p>
//             <label className="flex items-center gap-2 mb-2">
//               <input type="checkbox" />
//               <span>Availability (450)</span>
//             </label>
//             <label className="flex items-center gap-2">
//               <input type="checkbox" />
//               <span>Out of Stock (18)</span>
//             </label>
//           </div>

//           {/* Other Filters */}
//           {["Category", "Colors", "Price Range", "Collections", "Tags", "Ratings"].map(
//             (item) => (
//               <div
//                 key={item}
//                 className="flex justify-between items-center py-3 border-b cursor-pointer"
//               >
//                 <span className="font-semibold">{item}</span>
//                 <span className="text-xl">›</span>
//               </div>
//             )
//           )}
//         </aside>

//         {/* ================= MAIN CONTENT ================= */}
//         <div className="flex-1">

//           {/* Header */}
//           <div className="mb-6">
//             <p className="text-xs text-gray-500 mb-2">Home / Products</p>
//             <h1 className="text-2xl font-bold">PRODUCTS</h1>
//           </div>

//           {/* Search */}
//           <div className="flex items-center bg-[#e1e1e1] px-4 py-3 mb-6">
//             <input
//               type="text"
//               placeholder="Search"
//               className="bg-transparent outline-none flex-1 text-sm"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>

//           {/* Quick Tabs */}
//           <div className="flex flex-wrap gap-2 mb-8">
//             {quickTabs.map((tab) => (
//               <button
//                 key={tab}
//                 className="border px-4 py-1 text-xs uppercase tracking-wide hover:bg-black hover:text-white transition"
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>

//           {/* Products Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {products.map((p) => (
//               <div key={p.id}>
//                 <div className="bg-white p-6">
//                   <img
//                     src={p.image}
//                     alt={p.title}
//                     className="w-full h-[380px] object-cover"
//                   />
//                 </div>

//                 <div className="mt-3">
//                   <p className="text-xs text-gray-500">{p.category}</p>
//                   <div className="flex justify-between items-center">
//                     <h3 className="text-sm font-semibold">{p.title}</h3>
//                     <span className="text-sm">{p.price}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;

// import React, { useState, useMemo } from "react";
// import { Search, ChevronDown, Menu } from "lucide-react";
// import ProductDetail from "./ProductDetail";

// const PRODUCTS = [
//   {
//     id: 1,
//     name: "Abstract Print Shirt",
//     category: "Cotton Shirt",
//     filterCategory: "SHIRTS",
//     price: "2999",
//     images: [
//       "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
//       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800",
//       "https://images.unsplash.com/photo-1529139513055-07f9127e61c1?w=800",
//     ],
//     description:
//       "Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.",
//     colors: ["#D1D5DB", "#9CA3AF", "#111827", "#A7F3D0", "#FFFFFF", "#C7D2FE"],
//     sizes: ["XS", "S", "M", "L", "XL", "2X"],
//     colorCount: "+5",
//     inStock: true,
//   },
//   {
//     id: 2,
//     name: "Basic Slim Fit T-Shirt",
//     category: "Cotton T-Shirt",
//     filterCategory: "T-SHIRTS",
//     price: "1199",
//     images: [
//       "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800",
//     ],
//     description: "Cotton t-shirt with a slim fit and round neck.",
//     colors: ["#FFFFFF", "#000000"],
//     sizes: ["S", "M", "L"],
//     colorCount: "+3",
//     inStock: true,
//   },
//   {
//     id: 3,
//     name: "H&M Men's Regular Fit T-shirt",
//     category: "Cotton T-Shirt",
//     filterCategory: "T-SHIRTS",
//     price: "1199",
//     images: [
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQnNIXxFdQASj3PzeEpllAZ_qmTbdJTi5xwLpFgRXmPESQYF7bKRYYd2dwe709wi3nmsufAQ5XueB5SDlKWwnKnApy0ysngVkMDKDU7V7uTh056hcIXyoBJyQ",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSK6c96ihcom0Q0RarN7__Ez3E-HZ_N3V7JksQ7XztyJwWiXzm5pPxOAEi8OF-b17OkWVf1Q6Tuf0FonAZ3SzGBkAO1urhRY7CSUrR-MoZs7CbGlMiZVcVQCg",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTDqGJl0sVZ0SoodcClcH__5_mdit7Fv9DvJcm8Mfmkt2-wNMs3jrEc2TWXlS-8qA3wZn0DqHAroN770KGQEEHP-_mTWRfd0BR4XWSy6xJUHCaDQjxPgpNpEpQ",
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT3GwFT-9qAZsqY-egNab1PeoKuYoC6zGpi1c-Uv-1t_MVAcyZTVQbg0eQqCE1KkrsCfkGq3KkcHdMfCl29jlagXcyVx9U_p49_c4pzoCmcwIL-rOl8VYs5",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRjowgDzmj4uxdPgl2wVx1sU69idMG1pq6cnHLfdnspuAKhpnY2p8U4uGaVv8OIXTBs7pmkJ38EK4Ll5pNjwt2KlbyvOjJj",
//     ],
//     description: "Cotton t-shirt with a slim fit and round neck.",
//     colors: ["#FFFFFF", "#000000"],
//     sizes: ["S", "M", "L", "XS", "XL"],
//     colorCount: "+3",
//     inStock: true,
//   },
//   {
//     id: 4,
//     name: "Basic Slim Fit T-Shirt",
//     category: "Cotton T-Shirt",
//     filterCategory: "T-SHIRTS",
//     price: "3499",
//     images: [
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT4l3uSoNtAKYuCKBFWoCaHeXdFlAmNi7QBJSOVZa9TjoAhxKMo-PXMCe8X_jR-dcA4m9CLUMjWKImlp7OJyEWLFzSIia40",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQb5eZAtAAl0BWzdqr20oCRIL6SF8jSJ9aI6HEErkA_UczoayokcyumYiVZbO_67YEBUE0697E9E3Z6a25kvrd-N67h9aBd",
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQoMwxRW1gL7c9qZngxpxZBDE6N-LULgDHLJjZUXE4zeB-aU_7EDTKBTJPU_3nS8OAWzaGvmd8pJmEWWAovG23nF2DNKZfm",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRE0mlnNBn1n3T7PtMeL2NGo9BbM-LlRlXXL1WcspH7PMUQ9XhU-P3n9uypQ49xC87Kdn5Oz2YLknlb7-L-b1Ctr6RL81Fn",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTXfeGyxP_qupp6TwT_H0uP_C4JwechRsdFFDhef3KFAPkgPC4_XA7B41CztLgqKErQcruj_3rCyC0AEPcgDEjZxfTCbB7Kg",
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSKNYJPm0SGGwjR77SEX3qe74bhtNceRbrSvdDUECvPQxKhtikOHM8BKtbLhqGUERMgWLlhK3frj-4X6OImdrqkRoTtJm1Z",
//     ],
//     description: "Cotton t-shirt with a slim fit and round neck.",
//     colors: ["#FFFFFF", "#000000"],
//     sizes: ["S", "M", "L"],
//     colorCount: "+3",
//     inStock: true,
//   },

//   {
//     id: 5,
//     name: "Nermosa Women's Printed Anarkali Kurta and Pant Set",
//     category: "Cotton T-Shirt",
//     filterCategory: "T-SHIRTS",
//     price: "4999",
//     images: [
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcToD80FDcSfecJLFQy-BHzpHaaIgrhgr5C9z_wE1H-IMBelAjqUqNh4i7kMHV2pyomaBQAkIIxkzttpA2_0RZSjn8dniFBPPjNne_hTdDOCKbNdOcHLn7ceXI4",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ0Z8RXqWimgCfWie8elUO2XRSC0ck-UUO2yQjG1HbpTv7StMi7gUBO8cHfv0FAXcjN_-8Ya2pvK7DYHaRrZdLOmRhzRNAVR0hQrbCuiE420GG8mtANTJKU",
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTt09Myc8v60dzcXvmkxrWLJ8vPHYEzsJplytwlzbt5UB6O-heu-0WJDQsUg4RQycStMAUCybsmDKYV7g_g9p2hLisLIi0kfp0PPAmEBsh2",
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTDDNIT0jOkjGnAc127M6iX1QqWa9SsONyT5B3J8ozWoZu15CQ0fXJg1RzqyKAdZDxMWzTYOcLKMM0an5HHWjZFuflSMaMRbk6l1zDp52F7",
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSc9yr-mmP2Z8b0_ppZx1L63RVt2uoVHyj9_3GCFn8znJ0FMVk8PGXPSLsG0c_hqFaOobMGXtMWCc0laSjuNorjWA9IMVCuu9XkqtGXmO1rWBNnxTwoGr5Z",
//     ],
//     description: "Cotton t-shirt with a slim fit and round neck.",
//     colors: ["#FFFFFF", "#000000"],
//     sizes: ["S", "M", "L"],
//     colorCount: "+3",
//     inStock: true,
//   },
//    {
//     id: 6,
//     name: "Women Solid Cotton T-Shirt",
//     category: "Women T-Shirt",
//     filterCategory: "WOMEN",
//     price: "1199",
//     images: ["https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=80"],
//     description: "Soft cotton t-shirt for everyday comfort.",
//     colors: ["#FFFFFF", "#F472B6"],
//     sizes: ["XS", "S", "M", "L"],
//     colorCount: "+2",
//     inStock: true,
//   },
//   {
//     id: 7,
//     name: "Women Graphic T-Shirt",
//     category: "Women T-Shirt",
//     filterCategory: "WOMEN",
//     price: "1699",
//     images: ["https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"],
//     description: "Trendy graphic printed t-shirt.",
//     colors: ["#111827", "#A78BFA"],
//     sizes: ["S", "M", "L"],
//     colorCount: "+2",
//     inStock: true,
//   },
//   {
//     id: 8,
//     name: "Women Oversized T-Shirt",
//     category: "Women T-Shirt",
//     filterCategory: "WOMEN",
//     price: "1799",
//     images: ["https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=800&q=80"],
//     description: "Oversized t-shirt with relaxed fit.",
//     colors: ["#34D399", "#FFFFFF"],
//     sizes: ["XS", "S", "M"],
//     colorCount: "+2",
//     inStock: true,
//   },
//   {
//     id: 9,
//     name: "Women Crop T-Shirt",
//     category: "Women T-Shirt",
//     filterCategory: "WOMEN",
//     price: "1399",
//     images: ["https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=800&q=80"],
//     description: "Stylish crop t-shirt.",
//     colors: ["#F97316", "#000000"],
//     sizes: ["XS", "S", "M"],
//     colorCount: "+2",
//     inStock: true,
//   },
//   {
//     id: 10,
//     name: "Women Longline T-Shirt",
//     category: "Women T-Shirt",
//     filterCategory: "WOMEN",
//     price: "1899",
//     images: ["https://images.unsplash.com/photo-1542060748-10c28b62716f?auto=format&fit=crop&w=800&q=80"],
//     description: "Modern longline t-shirt.",
//     colors: ["#9CA3AF", "#1F2937"],
//     sizes: ["S", "M", "L"],
//     colorCount: "+2",
//     inStock: true,
//   },

// ];

// export default function AllProducts() {
//   const [currentPage, setCurrentPage] = useState("list");
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [activeCategory, setActiveCategory] = useState("ALL");
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [priceRange, setPriceRange] = useState([0, 5000]);
//   const [selectedCollection, setSelectedCollection] = useState(null);
//   const [selectedTag, setSelectedTag] = useState(null);
//   const [selectedRating, setSelectedRating] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [openFilter, setOpenFilter] = useState(null);
//   const [selectedAvailability, setSelectedAvailability] = useState(null);
//   const categories = [
//     "ALL",
//     "SHIRTS",
//     "POLO SHIRTS",
//     "SHORTS",
//     "BEST SELLERS",
//     "T-SHIRTS",
//     "JEANS",
//     "JACKETS",
//   ];
//   const sizes = ["XS", "S", "M", "L", "XL", "2X"];

//   const allColors = [...new Set(PRODUCTS.flatMap((p) => p.colors))];
//   const allCollections = [...new Set(PRODUCTS.map((p) => p.category))];
//   const allTags = ["New", "Popular", "Trending"];
//   const allRatings = [5, 4, 3, 2, 1];
//   const filteredProducts = useMemo(() => {
//     return PRODUCTS.filter((p) => {
//       const price = Number(p.price);
//       const availabilityMatch =
//         !selectedAvailability ||
//         (selectedAvailability === "in" && p.inStock) ||
//         (selectedAvailability === "out" && !p.inStock);

//       return (
//         p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
//         (activeCategory === "ALL" || p.filterCategory === activeCategory) &&
//         (!selectedSize || p.sizes.includes(selectedSize)) &&
//         (!selectedColor || p.colors.includes(selectedColor)) &&
//         price >= priceRange[0] &&
//         price <= priceRange[1] &&
//         (!selectedCollection || p.category === selectedCollection) &&
//         (!selectedTag || p.tags?.includes(selectedTag)) &&
//         (!selectedRating || p.rating === selectedRating) &&
//         availabilityMatch
//       );
//     });
//   }, [
//     searchQuery,
//     activeCategory,
//     selectedSize,
//     selectedColor,
//     priceRange,
//     selectedCollection,
//     selectedTag,
//     selectedRating,
//     selectedAvailability,
//   ]);

//   if (currentPage === "detail" && selectedProduct) {
//     return (
//       <ProductDetail
//         product={selectedProduct}
//         onBack={() => setCurrentPage("list")}
//       />
//     );
//   }

//   return (
//     <div className="container mx-auto flex justify-center">
//       <div className="bg-[White] max-w-7xl text-gray-900 items-center justify-center">
//         <div className="px-4 md:px-10 py-6 md:py-8">
//           <div className="mb-6">
//             <p
//               className="font-bold"
//               style={{
//                 fontFamily: '"Beatrice Deck Trial Extrabold", sans-serif',
//               }}
//             >
//               Home / Products
//             </p>
//             <div className="flex justify-between items-center">
//               <h1
//                 className="text-sm md:text-base font-bold uppercase tracking-[1px] leading-none"
//                 style={{
//                   fontFamily: '"Beatrice Deck Trial Extrabold", sans-serif',
//                 }}
//               >
//                 Products
//               </h1>

//               <button
//                 style={{
//                   fontFamily: '"Beatrice Deck Trial Extrabold", sans-serif',
//                 }}
//                 onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//                 className="lg:hidden flex items-center gap-2 text-xs font-bold border border-gray-300 px-3 py-1 bg-white"
//               >
//                 FILTERS <Menu size={14} />
//               </button>
//             </div>
//           </div>

//           <div className="flex flex-col lg:flex-row gap-6 md:gap-10 relative">
//             <aside
//               className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:static top-0 left-0 h-full lg:h-auto w-72 lg:w-64 bg-white lg:bg-transparent z-50 p-6 lg:p-0 transition-transform duration-300 ease-in-out shadow-xl lg:shadow-none`}
//             >
//               <div className="flex justify-between items-center lg:hidden mb-6">
//                 <h2 className="text-lg font-bold">Filters</h2>
//                 <button
//                   onClick={() => setIsSidebarOpen(false)}
//                   className="text-xl font-bold"
//                 >
//                   ×
//                 </button>
//               </div>

//               <h2 className="hidden lg:block text-lg font-bold mb-8 italic">
//                 Filters
//               </h2>

//               <div className="space-y-6">
//                 <div>
//                   <p className="text-sm font-bold mb-4 uppercase">Size</p>
//                   <div className="grid grid-cols-4 gap-2">
//                     {sizes.map((s) => (
//                       <button
//                         key={s}
//                         onClick={() =>
//                           setSelectedSize(selectedSize === s ? null : s)
//                         }
//                         className={`h-9 border text-[11px] font-bold transition-all ${selectedSize === s ? "bg-black text-white border-black" : "bg-white border-gray-200"}`}
//                       >
//                         {s}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="border-t border-dotted border-gray-300 pt-6">
//                   <p className="text-sm font-bold mb-2 uppercase">Colors</p>
//                   <div className="flex flex-wrap gap-2">
//                     {allColors.map((c) => (
//                       <span
//                         key={c}
//                         onClick={() =>
//                           setSelectedColor(selectedColor === c ? null : c)
//                         }
//                         style={{ backgroundColor: c }}
//                         className={`w-6 h-6 rounded-full border-2 border-gray-200 cursor-pointer ${selectedColor === c ? "border-black" : ""}`}
//                       />
//                     ))}
//                   </div>
//                 </div>

//                 <div className="border-t border-dotted border-gray-300 pt-6">
//                   <p className="text-sm font-bold mb-2 uppercase">
//                     Price Range
//                   </p>
//                   <div className="flex items-center gap-2 mb-2 text-[12px]">
//                     <span>₹{priceRange[0]}</span>
//                     <span className="flex-1 border-t border-gray-300"></span>
//                     <span>₹{priceRange[1]}</span>
//                   </div>
//                   <input
//                     type="range"
//                     min={0}
//                     max={5000}
//                     step={100}
//                     value={priceRange[0]}
//                     onChange={(e) =>
//                       setPriceRange([Number(e.target.value), priceRange[1]])
//                     }
//                     className="w-full mb-2"
//                   />
//                   <input
//                     type="range"
//                     min={0}
//                     max={5000}
//                     step={100}
//                     value={priceRange[1]}
//                     onChange={(e) =>
//                       setPriceRange([priceRange[0], Number(e.target.value)])
//                     }
//                     className="w-full"
//                   />
//                 </div>

//                 <div className="border-t border-dotted border-gray-300 pt-6">
//                   <div
//                     onClick={() =>
//                       setOpenFilter(
//                         openFilter === "Availability" ? null : "Availability",
//                       )
//                     }
//                     className="py-4 flex justify-between items-center cursor-pointer group"
//                   >
//                     <p className="text-sm font-bold uppercase group-hover:text-gray-500">
//                       Availability
//                     </p>
//                     <ChevronDown
//                       size={16}
//                       className={`transition-transform duration-300 ${openFilter === "Availability" ? "rotate-180" : ""}`}
//                     />
//                   </div>

//                   {openFilter === "Availability" && (
//                     <div className="pb-4 pl-2 space-y-2 text-[13px] text-gray-600">
//                       <p
//                         className={`cursor-pointer hover:text-black ${selectedAvailability === "in" ? "font-bold" : ""}`}
//                         onClick={() =>
//                           setSelectedAvailability(
//                             selectedAvailability === "in" ? null : "in",
//                           )
//                         }
//                       >
//                         Availability ({PRODUCTS.filter((p) => p.inStock).length}
//                         )
//                       </p>
//                       <p
//                         className={`cursor-pointer hover:text-black ${selectedAvailability === "out" ? "font-bold" : ""}`}
//                         onClick={() =>
//                           setSelectedAvailability(
//                             selectedAvailability === "out" ? null : "out",
//                           )
//                         }
//                       >
//                         Out of Stock (
//                         {PRODUCTS.filter((p) => !p.inStock).length})
//                       </p>
//                     </div>
//                   )}
//                 </div>

//                 {[
//                   {
//                     name: "Collections",
//                     values: allCollections,
//                     state: selectedCollection,
//                     setter: setSelectedCollection,
//                   },
//                   {
//                     name: "Tags",
//                     values: allTags,
//                     state: selectedTag,
//                     setter: setSelectedTag,
//                   },
//                   {
//                     name: "Ratings",
//                     values: allRatings,
//                     state: selectedRating,
//                     setter: setSelectedRating,
//                   },
//                 ].map((filter) => {
//                   const isOpen = openFilter === filter.name;
//                   return (
//                     <div
//                       key={filter.name}
//                       className="border-t border-dotted border-gray-300"
//                     >
//                       <div
//                         onClick={() =>
//                           setOpenFilter(isOpen ? null : filter.name)
//                         }
//                         className="py-4 flex justify-between items-center cursor-pointer group"
//                       >
//                         <p className="text-sm font-bold uppercase group-hover:text-gray-500">
//                           {filter.name}
//                         </p>
//                         <ChevronDown
//                           size={16}
//                           className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
//                         />
//                       </div>

//                       {isOpen && (
//                         <div className="pb-4 pl-2 space-y-2 text-[13px] text-gray-600">
//                           {filter.values.map((val) => (
//                             <p
//                               key={val}
//                               className={`cursor-pointer hover:text-black ${filter.state === val ? "font-bold" : ""}`}
//                               onClick={() =>
//                                 filter.setter(filter.state === val ? null : val)
//                               }
//                             >
//                               {val}
//                             </p>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             </aside>

//             <div className="flex-1 w-full">
//               <div className="flex flex-col md:flex-row gap-4 mb-8 md:mb-10 items-start">
//                 <div className="relative w-full md:w-80">
//                   <Search
//                     className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
//                     size={16}
//                   />
//                   <input
//                     type="text"
//                     placeholder="SEARCH"
//                     className="w-full bg-[#E5E5E5] py-2.5 pl-10 pr-4 outline-none text-[11px] text-right font-bold tracking-widest"
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                   />
//                 </div>

//                 <div className="grid grid-cols-4 gap-1 w-full max-w-4xl mx-auto px-2">
//                   {categories.map((cat) => (
//                     <button
//                       key={cat}
//                       onClick={() => setActiveCategory(cat)}
//                       className={`py-3 border text-[10px] md:text-[11px] font-medium tracking-widest uppercase transition-all flex items-center justify-center ${
//                         activeCategory === cat
//                           ? "bg-white border-black text-black font-bold shadow-sm"
//                           : "bg-[#F8F8F8] border-gray-200 text-gray-500 hover:bg-gray-100"
//                       }`}
//                     >
//                       {cat}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-10 md:gap-x-6 md:gap-y-14">
//                 {filteredProducts.map((item) => (
//                   <div
//                     key={item.id}
//                     className="group cursor-pointer"
//                     onClick={() => {
//                       setSelectedProduct(item);
//                       setCurrentPage("detail");
//                     }}
//                   >
//                     <div className="relative w-48 h-64 bg-white border border-gray-100 overflow-hidden mb-3">
//                       <img
//                         src={item.images[0]}
//                         className="w-full h-full object-contain p-2 md:p-4 transition-transform duration-500 group-hover:scale-105"
//                         alt={item.name}
//                       />
//                     </div>
//                     <div className="px-1">
//                       <div className="flex items-center gap-1.5 mb-1">
//                         <p className="text-[9px] md:text-[10px] text-gray-400 font-bold uppercase">
//                           {item.category}
//                         </p>
//                         <span className="w-2.5 h-2.5 border border-gray-200 bg-gray-50 inline-block"></span>
//                         <span className="text-[9px] md:text-[10px] text-gray-400 font-bold">
//                           {item.colorCount}
//                         </span>
//                       </div>
//                       <div className="flex justify-between items-start">
//                         <h3 className="text-[11px] md:text-[13px] font-bold uppercase tracking-tight leading-tight flex-1 pr-2">
//                           {item.name}
//                         </h3>
//                         <p className="text-[11px] md:text-[13px] font-bold whitespace-nowrap">
//                           {item.price}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {isSidebarOpen && (
//           <div
//             className="fixed inset-0 bg-black/20 z-40 l5g:hidden"
//             onClick={() => setIsSidebarOpen(false)}
//           ></div>
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useState, useMemo } from "react";
import { Search, ChevronDown, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Card from "../Card/Card";
import ProductDetail from "./ProductDetail";

export default function AllProducts() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(null);
  const [selectedAvailability, setSelectedAvailability] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState("list");

  const PRODUCTS = [
    {
      id: 1,
      name: "Premium Cotton Tee",
      category: "Cotton Shirt",
      filterCategory: "SHIRTS",
      price: "1299",
      images: [
        "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=d8qlXILMYhugXGw6zX7Jer2SLPrLPORfsDsfRDWc-50=",
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDQ0NDQ0ODQ0NDQ0NDQ8NDQ0NFREWFhURFRMYHSggGBolGxUVITEhJSsrLi4uFx8zODMsNyo5Li4BCgoKDQ0NDw0NDisZFRkrNy0tKysrKysrKysrNystLSsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAQMAwgMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAQIDBAUH/8QALhABAQABAgQGAAUEAwAAAAAAAAECAxESITGBBBNBUWFxBSJCscEGMpHhI1Kh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AP3EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHDPxMnKfm/YHceLPXyvS8P1Hnyxyy65W/dXB9HLXwnK5Tf233rx62eVy4t9pOkcsMZPTZ1xvIHTDUl+K1u5cLUmwjfElzkZu7PADGdyysstlnTb0evT8TjZtlZjl678o8/Ryyk9RX05d+ivk46dnOWz6tjvhrZz9W/3NzB7x5sfFf9p3j0Y5Szec5UFAAAAAAAABw8VqbSYzrly+oDGvqcU2nTf/AC5THmaM23x7z6rWUUSxNmiglx3SYtQUYnK7LNS+sMvQ3gHmfCW1oBNiYtGyDNiyLsAznOTenlcbb6esSTmmrvMbt1vKfdB7ccpZLOcvOK8nhcuGzD0s5ffq9aAAAAAAA8OfPO16tbLlt7vPtzUZ9ZZ6Xaz4v+9m82c8d5fq7X2WXfGX3m4iKkUVAANk4VUGeFQl36UCKLQRFKBimf8AdPbHn3vKfz/lrBjDnvl727fXSfsIxq/pvS793vwy3krx5x30Mv8A0V3AQAAAc9bLabe4OWeW9ZRYoptyUBzFsRUFBFfP/FfwjS8X5d1bqTy/NmPl58N2zw4cvT2eLX/pXQ1MPLy1PEXHy/Kn/LJljjxYZbzLbffi08bv16vvAPiZ/wBM+Gy34vNu+eWe3Hw/mympLzxkt5auc578sue72fhn4Vo+F4vJmUuc05nc88s7lwYTDG8+U/LJOXtHvJABdiIM7FbZyioYpMdo1jCgysqEFerDLebtOOjlz2dkAAB5tTLeu2rltPtw2BFiLFFEqgmTFdGMoIyqKK0JFAABd0I0AlUAStRL17CMLEJRW5Xoxu8eaOull6A6gIOOpzrnk9Nm7jq4XsI4btxmxYo1fRU35zuoDOTSbAwLkgqwpFBFgsAUIAACpeqs3rO4iVztdKxw8+YN4Npp42u+OGwNAIoADnlpS9OTFx26u5YDyZTnO/8ADUXVw2uN+/4RUKADOUZdKxYKRYmywFIigoAAAKzl1ndTh3sEWRvHS93THGRUUkAAAAAAABy1vTu5umt6d3NYAIqFRakRUWLYgCxKu4KJuoAADWHWd/2Za0+sB3AQAAAAAAAActb07ubprendzWBuhUqotQQFAQIu7KgtpKgosqpFAa0/7oyuHWIPQAigAAAAAAAOWv6d3NvX/T3YWIlTdayoqKgIogCyooCgCiAK1h1jMaw6xB6AEUAAAAAAABx8R+nu5buniOuPdysWIsqUhVCCoCCoAooAAALICN4XnGVw6z7QekBFAAAAAAAAcPE9ce/8OcdPETezuxwrERK1wlxUZg3MTgQYR04E4AZVeBeAGRrgOEE2U4V4QZph1n21wsyc59wHqARQAAAAAAAGcsN9vhPLbAY8s8v5bAY8ue9PLny2Ax5c96eXPlsBjy58nA2AxwQ8ufLYDHBF4I0AzwQ4J7NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==",
      ],
      description: "Premium cotton abstract print shirt.",
      colors: ["#000000", "#6B7280"],
      sizes: ["S", "M", "L", "XL"],
      inStock: true,
    },

    {
      id: 2,
      name: "Oversized Street Tee",
      category: "Formal Wear",
      filterCategory: "SHIRTS",
      price: "1,199",
      images: [
        "data:image/jpeg;base64,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",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKyxoqRQRQKfYIp2qAF0n7707L3T-KmTXqxg&s",
      ],
      description: "Classic white formal shirt for daily office wear.",
      colors: ["#FFFFFF"],
      sizes: ["M", "L", "XL"],
      inStock: true,
    },

    {
      id: 3,
      name: "Linen Summer Shirt",
      category: "Denim",
      filterCategory: "SHIRTS",
      price: "1,899",
      images: [
        "data:image/jpeg;base64,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",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaCWlAlOT38nNBvHyLlbhiKjAQPX9NQabPkA&s",
      ],
      description: "Stylish denim shirt with modern fit.",
      colors: ["#1E3A8A"],
      sizes: ["S", "M", "L"],
      inStock: true,
    },

    {
      id: 4,
      name: "Classic Polo Shirt",
      category: "Party Wear",
      filterCategory: "SHIRTS",
      price: "1,499",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEBR3iv0R_CxBnWVqt1NjxlHVooAG9-bhbw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEBR3iv0R_CxBnWVqt1NjxlHVooAG9-bhbw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEBR3iv0R_CxBnWVqt1NjxlHVooAG9-bhbw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEBR3iv0R_CxBnWVqt1NjxlHVooAG9-bhbw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEBR3iv0R_CxBnWVqt1NjxlHVooAG9-bhbw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEBR3iv0R_CxBnWVqt1NjxlHVooAG9-bhbw&s",
      ],
      description: "Slim fit black shirt for parties and events.",
      colors: ["#000000"],
      sizes: ["M", "L", "XL"],
      inStock: true,
    },

    {
      id: 5,
      name: "Vintage Denim Jacket",
      category: "Casual",
      filterCategory: "SHIRTS",
      price: "2,999",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS29_N_ZB8STDmkacRby8PGLG0bZvTZsmG0w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS29_N_ZB8STDmkacRby8PGLG0bZvTZsmG0w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS29_N_ZB8STDmkacRby8PGLG0bZvTZsmG0w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS29_N_ZB8STDmkacRby8PGLG0bZvTZsmG0w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS29_N_ZB8STDmkacRby8PGLG0bZvTZsmG0w&s",
      ],
      description: "Everyday casual checked cotton shirt.",
      colors: ["#374151", "#9CA3AF"],
      sizes: ["S", "M", "L", "XL"],
      inStock: true,
    },

    {
      id: 6,
      name: "Leather Biker Jacket",
      category: "Winter Wear",
      filterCategory: "HOODIES",
      price: "4,599",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpH8kTBxOF9-HYmfpv4WrUVDbMZpBt4YpQKg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpH8kTBxOF9-HYmfpv4WrUVDbMZpBt4YpQKg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpH8kTBxOF9-HYmfpv4WrUVDbMZpBt4YpQKg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpH8kTBxOF9-HYmfpv4WrUVDbMZpBt4YpQKg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpH8kTBxOF9-HYmfpv4WrUVDbMZpBt4YpQKg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpH8kTBxOF9-HYmfpv4WrUVDbMZpBt4YpQKg&s",
      ],
      description: "Warm oversized hoodie for winters.",
      colors: ["#111827", "#6B7280"],
      sizes: ["M", "L", "XL", "2XL"],
      inStock: true,
    },

    {
      id: 7,
      name: "Urban Windbreaker",
      category: "Winter Wear",
      filterCategory: "HOODIES",
      price: "2,299",
      images: [
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600",
      ],
      description: "Minimal grey hoodie with premium fabric.",
      colors: ["#9CA3AF"],
      sizes: ["S", "M", "L"],
      inStock: true,
    },

    {
      id: 8,
      name: "Premium Wool Bombe",
      category: "Street Style",
      filterCategory: "HOODIES",
      price: "3,499",
      images: [
        "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=600",
      ],
      description: "Street style hoodie with relaxed fit.",
      colors: ["#000000", "#DC2626"],
      sizes: ["M", "L", "XL"],
      inStock: true,
    },

    {
      id: 9,
      name: "Essential Grey Hoodie",
      category: "Men T-Shirt",
      filterCategory: "TSHIRTS",
      price: "1,999",
      images: [
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600",
      ],
      description: "Everyday basic black t-shirt.",
      colors: ["#000000"],
      sizes: ["S", "M", "L", "XL"],
      inStock: true,
    },

    {
      id: 10,
      name: "Knitted Winter Sweater",
      category: "Men T-Shirt",
      filterCategory: "TSHIRTS",
      price: "2,199",
      images: [
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600",
      ],
      description: "Oversized white t-shirt street style.",
      colors: ["#FFFFFF"],
      sizes: ["M", "L", "XL"],
      inStock: true,
    },

    {
      id: 11,
      name: "Premium Cotton Tee",
      category: "Women T-Shirt",
      filterCategory: "WOMEN",
      price: "1299",
      images: [
        "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600",
      ],
      description: "Modern longline premium cotton t-shirt.",
      colors: ["#9CA3AF", "#1F2937"],
      sizes: ["S", "M", "L"],
      inStock: true,
    },

    

    {
      id: 12,
      name: "Oversized Street Tee",
      category: "Women T-Shirt",
      filterCategory: "WOMEN",
      price: "1199",
      images: [
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
      ],

      description: "Relaxed oversized street wear t-shirt.",
      colors: ["#000000", "#FFFFFF"],
      sizes: ["M", "L", "XL"],
      inStock: true,
    },

    {
      id: 13,
      name: "Linen Summer Shirt",
      category: "Women Shirt",
      filterCategory: "WOMEN",
      price: "1899",
      images: [
        "https://images.unsplash.com/photo-1593032465171-bc36ed4f6e5c",
        "https://images.unsplash.com/photo-1593032465171-bc36ed4f6e5c",
        "https://images.unsplash.com/photo-1593032465171-bc36ed4f6e5c",
        "https://images.unsplash.com/photo-1593032465171-bc36ed4f6e5c",
        "https://images.unsplash.com/photo-1593032465171-bc36ed4f6e5c",
      ],
      description: "Breathable linen shirt perfect for summers.",
      colors: ["#F5F5DC", "#1F2937"],
      sizes: ["S", "M", "L", "XL"],
      inStock: true,
    },

    {
      id: 14,
      title: "Men Wear",
      name: "Premium Cotton Tee",
      price: 1299,
      images: [
        "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=d8qlXILMYhugXGw6zX7Jer2SLPrLPORfsDsfRDWc-50=",
        "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=d8qlXILMYhugXGw6zX7Jer2SLPrLPORfsDsfRDWc-50=",
        "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=d8qlXILMYhugXGw6zX7Jer2SLPrLPORfsDsfRDWc-50=",
        "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=d8qlXILMYhugXGw6zX7Jer2SLPrLPORfsDsfRDWc-50=",
        "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=d8qlXILMYhugXGw6zX7Jer2SLPrLPORfsDsfRDWc-50=",
        "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=d8qlXILMYhugXGw6zX7Jer2SLPrLPORfsDsfRDWc-50=",
      ],
      category: "T-Shirt",
      description: "Premium quality cotton t-shirt for everyday comfort.",
      colors: ["#000000", "#FFFFFF"],
      sizes: ["S", "M", "L", "XL"],
      inStock: true,
    },

    {
      id: 15,
      title: "Men Wear",
      name: "Oversized Street Tee",
      price: 1199,
      images: ["data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."],
      category: "T-Shirt",
      description: "Street style oversized t-shirt with relaxed fit.",
      colors: ["#111827", "#6B7280"],
      sizes: ["M", "L", "XL"],
      inStock: true,
    },

    {
      id: 16,
      title: "Men Wear",
      name: "Linen Summer Shirt",
      price: 1899,
      images: ["data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."],
      category: "Shirt",
      description: "Breathable linen shirt perfect for summer days.",
      colors: ["#E5E7EB", "#F9FAFB"],
      sizes: ["S", "M", "L", "XL"],
      inStock: true,
    },

    {
      id: 17,
      title: "Men Wear",
      name: "Classic Polo Shirt",
      price: 1499,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEBR3iv0R_CxBnWVqt1NjxlHVooAG9-bhbw",
      ],
      category: "Polo",
      description: "Classic polo shirt with soft fabric.",
      colors: ["#1F2937", "#FFFFFF"],
      sizes: ["S", "M", "L"],
      inStock: true,
    },

    {
      id: 18,
      title: "Outerwear",
      name: "Vintage Denim Jacket",
      price: 2999,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS29_N_ZB8STDmkacRby8PGLG0bZvTZsmG0w",
      ],
      category: "Jacket",
      description: "Vintage style denim jacket with rugged look.",
      colors: ["#1E3A8A"],
      sizes: ["M", "L", "XL"],
      inStock: true,
    },

    {
      id: 19,
      title: "Outerwear",
      name: "Leather Biker Jacket",
      price: 4599,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpH8kTBxOF9-HYmfpv4WrUVDbMZpBt4YpQKg",
      ],
      category: "Jacket",
      description: "Premium leather biker jacket for bold style.",
      colors: ["#000000"],
      sizes: ["M", "L", "XL"],
      inStock: true,
    },

    {
      id: 20,
      title: "Outerwear",
      name: "Urban Windbreaker",
      price: 2299,
      images: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea"],
      category: "Jacket",
      description: "Lightweight windbreaker for urban lifestyle.",
      colors: ["#111827", "#9CA3AF"],
      sizes: ["S", "M", "L"],
      inStock: true,
    },

    {
      id: 21,
      title: "Outerwear",
      name: "Premium Wool Bomber",
      price: 3499,
      images: ["https://images.unsplash.com/photo-1544022613-e87ca75a784a"],
      category: "Bomber Jacket",
      description: "Stay warm in style with this Premium Wool Bomber Jacket.",

      colors: ["#374151"],
      sizes: ["M", "L", "XL"],
      inStock: true,
    },

    {
      id: 22,
      title: "Men Wear",
      name: "Essential Grey Hoodie",
      price: 1999,
      images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7"],
      category: "Hoodie",
      description: "Everyday essential hoodie with soft fabric.",
      colors: ["#9CA3AF"],
      sizes: ["M", "L", "XL"],
      inStock: true,
    },

    {
      id: 23,
      title: "Men Wear",
      name: "Knitted Winter Sweater",
      price: 2199,
      images: ["https://images.unsplash.com/photo-1620799140408-edc6dcb6d633"],
      category: "Sweater",
      description: "Warm knitted sweater for winter season.",
      colors: ["#4B5563"],
      sizes: ["M", "L", "XL"],
      inStock: true,
    },
     {
    id: 24,
    name: "Minimal Black Tee",
    category: "Men T-Shirt",
    filterCategory: "TSHIRTS",
    price: "999",
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600"],
    colors: ["#000000"],
    sizes: ["S","M","L","XL"],
    inStock: true,
  },
  {
    id: 25,
    name: "Classic White Tee",
    category: "Men T-Shirt",
    filterCategory: "TSHIRTS",
    price: "899",
    images: ["https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=600"],
    colors: ["#FFFFFF"],
    sizes: ["M","L","XL"],
    inStock: true,
  },
  {
    id: 26,
    name: "Oversized Street Tee",
    category: "Men T-Shirt",
    filterCategory: "TSHIRTS",
    price: "1199",
    images: ["https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600"],
    colors: ["#111827","#6B7280"],
    sizes: ["M","L","XL"],
    inStock: true,
  },
  {
    id: 27,
    name: "Grey Essential Tee",
    category: "Men T-Shirt",
    filterCategory: "TSHIRTS",
    price: "1099",
    images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600"],
    colors: ["#9CA3AF"],
    sizes: ["S","M","L"],
    inStock: true,
  },
  {
    id: 28,
    name: "Linen Summer Shirt",
    category: "Casual Shirt",
    filterCategory: "SHIRTS",
    price: "1799",
    images: ["https://images.unsplash.com/photo-1593032465171-bc36ed4f6e5c?auto=format&fit=crop&w=600"],
    colors: ["#F5F5DC","#1F2937"],
    sizes: ["S","M","L","XL"],
    inStock: true,
  },
  {
    id: 29,
    name: "Checked Casual Shirt",
    category: "Casual",
    filterCategory: "SHIRTS",
    price: "1499",
    images: ["https://images.unsplash.com/photo-1620799139507-2d0f0b9c6a0f?auto=format&fit=crop&w=600"],
    colors: ["#374151","#9CA3AF"],
    sizes: ["M","L","XL"],
    inStock: true,
  },
  {
    id: 30,
    name: "Denim Blue Shirt",
    category: "Denim",
    filterCategory: "SHIRTS",
    price: "1899",
    images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600"],
    colors: ["#1E40AF"],
    sizes: ["M","L","XL"],
    inStock: true,
  },
  {
    id: 31,
    name: "Formal Office Shirt",
    category: "Formal Wear",
    filterCategory: "SHIRTS",
    price: "1999",
    images: ["https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600"],
    colors: ["#FFFFFF"],
    sizes: ["M","L","XL"],
    inStock: true,
  },
  {
    id: 32,
    name: "Classic Polo Shirt",
    category: "Polo",
    filterCategory: "SHIRTS",
    price: "1399",
    images: ["https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600"],
    colors: ["#1F2937","#FFFFFF"],
    sizes: ["S","M","L"],
    inStock: true,
  },
  {
    id: 33,
    name: "Black Party Shirt",
    category: "Party Wear",
    filterCategory: "SHIRTS",
    price: "1599",
    images: ["https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=600"],
    colors: ["#000000"],
    sizes: ["M","L","XL"],
    inStock: true,
  },

  /* ===== HOODIES & JACKETS ===== */

  {
    id: 34,
    name: "Essential Grey Hoodie",
    category: "Winter Wear",
    filterCategory: "HOODIES",
    price: "2199",
    images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600"],
    colors: ["#6B7280"],
    sizes: ["M","L","XL"],
    inStock: true,
  },
  {
    id: 35,
    name: "Black Zip Hoodie",
    category: "Winter Wear",
    filterCategory: "HOODIES",
    price: "2499",
    images: ["https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600"],
    colors: ["#000000"],
    sizes: ["M","L","XL","2XL"],
    inStock: true,
  },
  {
    id: 36,
    name: "Urban Windbreaker",
    category: "Winter Wear",
    filterCategory: "HOODIES",
    price: "2299",
    images: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600"],
    colors: ["#9CA3AF"],
    sizes: ["S","M","L"],
    inStock: true,
  },
  {
    id: 37,
    name: "Bomber Jacket",
    category: "Street Style",
    filterCategory: "HOODIES",
    price: "3499",
    images: ["https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=600"],
    colors: ["#111827"],
    sizes: ["M","L","XL"],
    inStock: true,
  },
  {
    id: 38,
    name: "Leather Biker Jacket",
    category: "Winter Wear",
    filterCategory: "HOODIES",
    price: "4599",
    images: ["https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600"],
    colors: ["#000000"],
    sizes: ["M","L","XL"],
    inStock: true,
  },

  /* ===== WOMEN ===== */

  {
    id: 39,
    name: "Women Oversized Tee",
    category: "Women T-Shirt",
    filterCategory: "WOMEN",
    price: "1199",
    images: ["https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600"],
    colors: ["#000000","#FFFFFF"],
    sizes: ["M","L","XL"],
    inStock: true,
  },
  {
    id: 40,
    name: "Women Cotton Tee",
    category: "Women T-Shirt",
    filterCategory: "WOMEN",
    price: "999",
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600"],
    colors: ["#9CA3AF","#1F2937"],
    sizes: ["S","M","L"],
    inStock: true,
  },
  {
    id: 41,
    name: "Women Linen Shirt",
    category: "Women Shirt",
    filterCategory: "WOMEN",
    price: "1899",
    images: ["https://images.unsplash.com/photo-1593032465171-bc36ed4f6e5c?auto=format&fit=crop&w=600"],
    colors: ["#F5F5DC"],
    sizes: ["S","M","L","XL"],
    inStock: true,
  },



  ...Array.from({ length: 32 }, (_, i) => ({
    id: 19 + i,
    name: `Fashion Product ${19 + i}`,
    category: "Men Wear",
    filterCategory: i % 2 === 0 ? "TSHIRTS" : "SHIRTS",
    price: `${999 + i * 50}`,
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600"],
    colors: ["#000000","#FFFFFF"],
    sizes: ["S","M","L","XL"],
    inStock: true,
  })),
  ];

  const navigate = useNavigate();

  const categories = [
    "ALL",
    "SHIRTS",
    "POLO SHIRTS",
    "SHORTS",
    "BEST SELLERS",
    "T-SHIRTS",
    "JEANS",
    "JACKETS",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "2X"];
  const allColors = [...new Set(PRODUCTS.flatMap((p) => p.colors))];
  const allCollections = [...new Set(PRODUCTS.map((p) => p.category))];
  const allTags = ["New", "Popular", "Trending"];
  const allRatings = [5, 4, 3, 2, 1];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const price = Number(p.price);
      const availabilityMatch =
        !selectedAvailability ||
        (selectedAvailability === "in" && p.inStock) ||
        (selectedAvailability === "out" && !p.inStock);

      return (
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (activeCategory === "ALL" || p.filterCategory === activeCategory) &&
        (!selectedSize || p.sizes.includes(selectedSize)) &&
        (!selectedColor || p.colors.includes(selectedColor)) &&
        price >= priceRange[0] &&
        price <= priceRange[1] &&
        (!selectedCollection || p.category === selectedCollection) &&
        (!selectedTag || p.tags?.includes(selectedTag)) &&
        (!selectedRating || p.rating === selectedRating) &&
        availabilityMatch
      );
    });
  }, [
    searchQuery,
    activeCategory,
    selectedSize,
    selectedColor,
    priceRange,
    selectedCollection,
    selectedTag,
    selectedRating,
    selectedAvailability,
  ]);

  return (
    <div className="bg-[#f5f5f5]">
      <div className="container mx-auto flex justify-center ">
        <div className=" max-w-7xl text-gray-900 items-center justify-center">
          <div className="px-4 md:px-4 py-7 md:py-8">
            <div className="mb-6 ">
              <p
                className="font-light"
                style={{
                  fontFamily: '"Beatrice Deck Trial "',
                }}
              >
                Home / Products
              </p>
              <div className="flex justify-between items-center">
                <h1
                  className="text-sm md:text-base font-bold uppercase tracking-[1px] leading-none"
                  style={{
                    fontFamily: '"Beatrice Deck Trial Extrabold", sans-serif',
                  }}
                >
                  Products
                </h1>

                <button
                  style={{
                    fontFamily: '"Beatrice Deck Trial"',
                  }}
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="lg:hidden flex items-center gap-2 text-xs font-bold border border-gray-300 px-3 py-1 bg-white"
                >
                  FILTERS <Menu size={14} />
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 md:gap-10 relative">
              <aside
                style={{
                  fontFamily: '"Beatrice Deck Trial "',
                }}
                className={`${
                  isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0 fixed lg:static top-0 left-0 h-full lg:h-auto w-72 lg:w-64 bg-white lg:bg-transparent z-50 p-6 lg:p-0 transition-transform duration-300 ease-in-out shadow-xl lg:shadow-none`}
              >
                <div className="flex justify-between items-center lg:hidden mb-6">
                  <h2 className="text-lg font-bold">Filters</h2>
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="text-xl font-bold"
                  >
                    ×
                  </button>
                </div>

                <h2
                  style={{
                    fontFamily: '"Beatrice Deck Trial "',
                  }}
                  className="hidden lg:block text-lg font-bold mb-8 italic"
                >
                  Filters
                </h2>

                <div className="space-y-6">
                  <div>
                    <p className="capitalize text-lg font-bold mb-4 ">Size</p>
                    <div className="grid grid-cols-4 gap-2">
                      {sizes.map((s) => (
                        <button
                          key={s}
                          onClick={() =>
                            setSelectedSize(selectedSize === s ? null : s)
                          }
                          className={`h-9 border text-[11px] font-bold transition-all ${
                            selectedSize === s
                              ? "bg-black text-white border-black"
                              : "bg-white border-gray-200"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-dotted border-gray-300 pt-6">
                    <p
                      style={{
                        fontFamily: '"Beatrice Deck Trial "',
                      }}
                      className="text-lg font-bold mb-2 capitalize"
                    >
                      Colors
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {allColors.map((c) => (
                        <span
                          key={c}
                          onClick={() =>
                            setSelectedColor(selectedColor === c ? null : c)
                          }
                          style={{ backgroundColor: c }}
                          className={`w-6 h-6 rounded-full border-2 border-gray-200 cursor-pointer ${
                            selectedColor === c ? "border-black" : ""
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-dotted border-gray-300 pt-6">
                    <p
                      style={{
                        fontFamily: '"Beatrice Deck Trial "',
                      }}
                      className="capitalize text-lg font-bold mb-2"
                    >
                      Price Range
                    </p>
                    <div className="flex items-center gap-2 mb-2 text-[12px]">
                      <span>₹{priceRange[0]}</span>
                      <span className="flex-1 border-t border-gray-300"></span>
                      <span>₹{priceRange[1]}</span>
                    </div>

                    <input
                      style={{
                        fontFamily: '"Beatrice Deck Trial"',
                      }}
                      type="range"
                      min={0}
                      max={5000}
                      step={100}
                      value={priceRange[0]}
                      onChange={(e) =>
                        setPriceRange([Number(e.target.value), priceRange[1]])
                      }
                      className="w-full mb-2 colour"
                    />
                    <input
                      type="range"
                      min={0}
                      max={5000}
                      step={100}
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], Number(e.target.value)])
                      }
                      className="w-full"
                    />
                  </div>

                  {[
                    {
                      name: "Availability",
                      options: ["in", "out"],
                    },
                    {
                      name: "Collections",
                      values: allCollections,
                      state: selectedCollection,
                      setter: setSelectedCollection,
                    },
                    {
                      name: "Tags",
                      values: allTags,
                      state: selectedTag,
                      setter: setSelectedTag,
                    },
                    {
                      name: "Ratings",
                      values: allRatings,
                      state: selectedRating,
                      setter: setSelectedRating,
                    },
                  ].map((filter) => (
                    <div
                      key={filter.name}
                      className="border-t border-dotted border-gray-300"
                    >
                      <div
                        onClick={() =>
                          setOpenFilter(
                            openFilter === filter.name ? null : filter.name,
                          )
                        }
                        className="py-4 flex justify-between items-center cursor-pointer group"
                      >
                        <p className="capitalize text-lg font-bold  group-hover:text-gray-500">
                          {filter.name}
                        </p>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            openFilter === filter.name ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      {openFilter === filter.name && (
                        <div className="pb-4 pl-2 space-y-2 text-[13px] text-gray-600">
                          {filter.options
                            ? filter.options.map((opt) => (
                                <p key={opt}>{opt}</p>
                              ))
                            : filter.values.map((val) => (
                                <p
                                  key={val}
                                  className={`cursor-pointer hover:text-black ${filter.state === val ? "font-bold" : ""}`}
                                  onClick={() =>
                                    filter.setter(
                                      filter.state === val ? null : val,
                                    )
                                  }
                                >
                                  {val}
                                </p>
                              ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </aside>

              <div className="flex-1 w-full">
                <div className="flex flex-col md:flex-row gap-4 mb-8 md:mb-10 items-start">
                  <div className="relative w-full md:w-80">
                    <Search
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                      size={16}
                    />
                    <input
                      type="text"
                      placeholder="SEARCH"
                      className="w-full bg-[#E5E5E5] py-2.5 pl-10 pr-4 outline-none text-[11px] text-right font-bold tracking-widest"
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-4 gap-1 w-full max-w-4xl mx-auto px-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`py-3 border text-[10px] md:text-[11px] font-medium tracking-widest capitalize  transition-all flex items-center justify-center ${
                          activeCategory === cat
                            ? "bg-white border-black text-black font-bold shadow-sm"
                            : "bg-[#F8F8F8] border-gray-200 text-gray-500 hover:bg-gray-100"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12">
                  {filteredProducts.map((item) => (
                    <Card
                      key={item.id}
                      item={item}
                      onSelect={(product) => {
                        navigate(`/product/${product.id}`);
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black/20 z-40 l5g:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

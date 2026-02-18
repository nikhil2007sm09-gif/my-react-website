// import { useState, useEffect } from "react";

// const products = [
//   {
//     id: 1,
//     title: "Men Wear",
//     name: "Graphic T-Shirt",
//     price: "₹1,299",
//     img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
//   },
//   {
//     id: 2,
//     title: "Men Wear",
//     name: "Black Oversized T-Shirt",
//     price: "₹1,199",
//     img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
//   },
//   {
//     id: 3,
//     title: "Men Wear",
//     name: "White Cotton T-Shirt",
//     price: "₹999",
//     img: "https://images.unsplash.com/photo-1562157873-818bc0726f68",
//   },
//   {
//     id: 4,
//     title: "Men Wear",
//     name: "Printed T-Shirt",
//     price: "₹1,499",
//     img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a",
//   },
//   {
//     id: 5,
//     title: "Men Wear",
//     name: "Street Style T-Shirt",
//     price: "₹1,399",
//     img: "https://images.unsplash.com/photo-1502301103665-0b95cc738def", // Placeholder URL fixed
//   },
//   {
//     id: 6,
//     title: "Men Wear",
//     name: "Blue Casual T-Shirt",
//     price: "₹1,099",
//     img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633",
//   },
//   {
//     id: 7,
//     title: "Men Wear",
//     name: "Minimal T-Shirt",
//     price: "₹899",
//     img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
//   },
//   {
//     id: 8,
//     title: "Men Wear",
//     name: "Half Sleeve T-Shirt",
//     price: "₹1,099",
//     img: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f",
//   },
// ];

// export default function NewThisWeek() {
//   const [start, setStart] = useState(0);
//   const [visibleCount, setVisibleCount] = useState(4);

//   useEffect(() => {
//     const updateVisibleCount = () => {
//       if (window.innerWidth < 640) {
//         setVisibleCount(2);
//       } else if (window.innerWidth < 1024) {
//         setVisibleCount(4);
//       } else {
//         setVisibleCount(6);
//       }
//     };

//     updateVisibleCount();
//     window.addEventListener("resize", updateVisibleCount);
//     return () => window.removeEventListener("resize", updateVisibleCount);
//   }, []);

//   const prevSlide = () => {
//     setStart((prev) => Math.max(prev - visibleCount, 0));
//   };

//   const nextSlide = () => {
//     setStart((prev) =>
//       prev + visibleCount < products.length ? prev + visibleCount : prev
//     );
//   };

//   return (
//     <section className="bg-[#f3f3f3] py-14">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-start justify-between mb-12">
//           <h2 className="text-[42px] font-extrabold leading-[1] tracking-tight">
//             NEW <br /> THIS WEEK
//             <span className="text-sm text-blue-600 align-top ml-2">
//               (50)
//             </span>
//           </h2>
//           <button className="text-sm text-gray-500 hover:text-black">
//             See All
//           </button>
//         </div>

//         <div className="overflow-hidden">
//           <div className="grid gap-7 grid-cols-2 sm:grid-cols-4 lg:grid-cols-6">
//             {products.slice(start, start + visibleCount).map((item) => (
//               <div key={item.id} className="group">

//                 <div className="relative bg-[#f7f7f7] border border-gray-200 overflow-hidden aspect-[3/4] flex items-center justify-center">
//                   <img
//                     src={item.img}
//                     alt={item.name}

//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />

//                   <button
//                     className="absolute bottom-4 left-1/2 -translate-x-1/2
//                     w-8 h-8 border border-gray-300 rounded-full
//                     flex items-center justify-center text-lg
//                     bg-white opacity-0 group-hover:opacity-100 transition shadow-sm"
//                   >
//                     +
//                   </button>
//                 </div>

//                 <div className="mt-4 text-sm">
//                   <p className="text-gray-500">{item.title}</p>
//                   <h3 className="font-medium">{item.name}</h3>
//                   <p className="mt-1 font-semibold">{item.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-center gap-3 mt-12">
//           <button
//             onClick={prevSlide}
//             disabled={start === 0}
//             className="w-10 h-10 border border-gray-300 flex items-center justify-center text-lg disabled:opacity-40 hover:bg-white transition"
//           >
//             ‹
//           </button>

//           <button
//             onClick={nextSlide}
//             disabled={start + visibleCount >= products.length}
//             className="w-10 h-10 border border-gray-300 flex items-center justify-center text-lg disabled:opacity-40 hover:bg-white transition"
//           >
//             ›
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "../Card/Card";

const products = [
  {
    id: 1,
    title: "Men Wear",
    name: "Premium Cotton Tee",
    price: "1,299",
    images:
      "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=d8qlXILMYhugXGw6zX7Jer2SLPrLPORfsDsfRDWc-50=",
  },
  {
    id: 2,
    title: "Men Wear",
    name: "Oversized Street Tee",
    price: "1,199",
    images:
      "data:image/jpeg;base64,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",
  },
  {
    id: 3,
    title: "Men Wear",
    name: "Linen Summer Shirt",
    price: "1,899",
    images:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0QEA4QDxAQDw8ODw8QDw4ODQ8ODxANFREWFhURFxUYHSghGBonHBUVITEhJSkuLi4uFx8zOzMuNygtLisBCgoKDg0OGxAQGy0mICUtNy41NS0wLTUtLysrLS0rNi0vLys1Ky0vLSs3Ky01LS0tNy0tLSsvLy0tLS0rLS0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAwECBAUGBwj/xAA+EAACAQIDBAYHBQYHAAAAAAAAAQIDEQQSIQUGMVETIkFhcZEHMlKBobHBQmJyktFTY4KiwuEUFSMkQ5PS/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAQFAgMGAf/EADERAQACAQIFAgQEBgMAAAAAAAABAgMEEQUSIUFRMWETFJGxFSJxgTKh0eHw8TNCwf/aAAwDAQACEQMRAD8A9xAAAAAAAAAAAAAAAAQ4vEwpQlUm7Rirt/TxMq1m07QwyZK46za3pDhdo+kqnCc4QprNBpPPJt6pPgvHmTq6KO8qfJxW/wD0p9WixPpQxV+pGml+C/zZtjSYvdoniOqnxH7Md+lDH8qX/X/cfK4vcjX6rzH0ZWH9K+IXr0aUuds0fqYzo8faZbK8R1EesRP1drulvhSx6SceiqO9o5sylbjZ8+4jZtNOOOaOsJ2l18Zrclo2t93TEVYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4nfjayc6eHi/Vlmqcs1tI+69/IsdHi2jnlQ8V1MTaMVe3q8wrbAdXE15utkU6jeXonLutxXIxvquW0xskYdFF8VZ37NrS3NpNa15+6nFfUx+dnwzjhle9lXuXS/bVPyQ/U8+ct4e/htPMsevuWvs4hr8VFP5SPfnPMH4dHa38mVsTC1MHNRVTM754yUXGzT5ErDkjNSeiq1mGdNlrMT19fo9e2PtOGJpqcdJKynH2ZfoVuXFOO20r/TamuenNHr3Z5qSAAAAAAAAAAAAAAAAAAAAAAAAAAAAACjYGDjMS0tGB5JtnGOVecr/APJJ/wAzL3HG1Ij2cZqLc2W0+8/dZXlaUZr1ZpP+JcUVurx8t+by6DheeL4uTvH2bbB4tNIiLNmdMuYEcpgaqtO9Z/dSj7+L+aLbR02x7+XM8Uyc+o2jtG37+rq9ysTlruHZUg/zR1XwuYayu9N/DZwrJtmmvmPs7i5WOiVAAAAAAAAAAAAAAAAAAAAAAAAAFG0tXolxb5A32c5s7emnXxNWjC2SELwfbK0rOXxRJy6ecdImfVX6bXRnzWpX0iOnu2VetftIywQqq12vzAxMZUbTA8lx0rzn3Tl82X9f4YcVkj89v1n7pcJjIZXCq0o827NPmjXmrS1drNulvlpki2OJmV1DHUlPJGopX1jdOLku5Pj7iptimOtesOox6iLbReOWfEtvSrN8jUkNjDB1XQq17WhTSs2n1pNqKS56vU24ac94qj6rNOHDa8dv9NHQi09eLd232vmXW0RG0OQmZmd59W93fq5cTh3+8jH83V+ppzxvjsl6K3LnpPv9+j0WbKZ1iNSt2gTU619AJgAAAAAAAAAAAAAAAAAAAAAAHL7/AO1+gw/Rxdp1rrjqqa4+fDzJmjxc1+aeyq4rqPh4uSPW32eYbvbQdLF0Zt6Sl0cvwz0v52fuJuprz45hU6DJ8LNWfPT6vU41mUzq13SARVndMDiK26lSdWpKVRRhKpOUVBXllcm1q+BMnWW5YrXwqq8LpOS18k77zM7M7CbvYejqoZpe1PrS82RLWm07zKzpStI2rG0Od37wOVUqkFlUrwlZLRrrRa5faJujt61VvEqxHLf9mVu1TrOEZ1qLqS+xTzZIzXZOb7F3cX3EfPFYv+VL0tr2xxzulx0toYqk6NSVOlReXqUYOLSjJSSzXvxSNUTMTvDfatbRtaN4Ya3ZrfYqSv8AftNfHU311WSO+6Fk4bp79tv0ZWA2DjY1aTcYSjGpCTlGeWyUk+D8Df8AORasxaOyH+FWpeLUtvtMT19pd3JkBdoZsDn97NoTo0FKEnGbq01GSeqaeZ/BW95J0lItk2n02V/E8s48G9Z2neP6tvuvtpYuipOyqR6tSK9q3FdzMc+H4VtuzZotVGox83ePVuTQmAAAAAAAAAAAAAAAAAAAAAPH/SJtHpcVUSfVpf6a/hvf43LnTU5cce/Vymvy/F1Fvbp9HIJtariuD7zcjR0etbOxXS0qVT26cJPxa1Xncor15bTDsMV+ekW8wy0zFsXAUVMBKj3AafePDQq0lSlFPPWw8btapOtBO3ub8zZitNbbx7/Zp1GOL05Z8x94bLCbKqQq1ZuacJepBL1Vp/fgLXiaxG3Xy8pitXJa026T28NhHDvka29kUaaAy4xApICOYHCekLFdehS9mM6jXe2kvlLzLHQ16TZQcZyfmpT92u3L2s6GJhd2p1Wqc+Wr6r9z+bJGpx8+OfMdULh+o+Dmjf0npL11FM6wAAAAAAAAAAAAAAAAAAAC2pKyk+Sb8kexG8vJnaN3z/tSu6lSc3xlJyfi3cvtto2cVFuaeae7Akwyd3uLj1OjKi31qLuu+nJ3Xxv8Cr1lNr83l0PC8vNi5J7fZ1EWRFmliBNBATRiBrdr4W/RSX2a+Hb8Omge19WNvT/PK/Z+1aVaVWFOTboyyzvFpXu1dc1ozK+O1YiZ7tePPTJa1a9mzjIwbmRTa5rzAmUlzWvegKyQEM2B5LvbjVVxdVp9WGWnF90Vr8Wy40teXFDleJX59Rb26NZRnd6ElXzD2zd/G9PhqFTi5QWb8S0l8UyizU5LzV2Wly/Fw1v5j+bYmtIAAAAAAAAAAAAAAAAAABhbaq5MNiJcqNTzyuxsxRveI92jU25cN59peA13qy8lx9Y6MWU+KZi2xDP3b2g6ONwrT6lWboz8Jq0f5spG1URONZcNmYyvV0iqdAkiwJIyAyKcgI8arqK51KXwmn9D2Hkq0qNOCeSMY5neTiknJ83zG8kREeiRSPHrlN5Nh06ld1ZV+jqVpw6OCpzlmpxpxg49WDlnz5bP7Oa6WZngwtmYHDx/w8JYqOMlGtRnGjKnOUKcJ46Cc4OcdPVcXHx5u4emp3PRz2++1Fg8HVrX6zy06a/eTeVfO/uMqV5rRDDJfkrNvDxt13J6u+t2+ci9jpGzj7bzM2n1llYeXx+Rk02es+jivmwmX9nUnHwu839RU62Nsu7puEW30+3iZ/r/AOurIizAAAAAAAAAAAAAAAAAABpt8JSWCxOVNtxSsld2ckm/I36bb4sboXEd/lrbR/m7wyvxZcy5avow8RC600kuD+hjLdSdvVhYHGONelFpqcatNpWu7qa4c+4j5Z3rNZWWnptet6vdqTvFPmipXyoF0WBNCQF1R3y9zTApKUu7zARmBods7bp51TjKHVzRn0tO8YtVMuZ3Wsbwkk4/aijwYeGxilWpR/2alKrhpONClKnWSVem1xXq2114OSA7tVj0ee+mPGWw+Gi+DxCl/EoSy/1EjTf8m6LrN5xTEd3n2CvJJ9nZ395bV6uZy7VnZs6Zmiy9I9F1bTEwfOE1700/kiu19etZXvBL9L1/SXeFevQAAAAAAAAAAAAAAAAAAQ4xScGoq75AcPtjd7C1m3Olkm/tQvCV+9cGbqajJT0lEy6LDl6zHX2czjdylr0dbTsU4a+af0JMa3zCFPCtp/Lb6w1Wyt1XHaWznUlCahioSslK7td280jXl1MXjaIStNpJwz1l6ZGOVyj7MpLybIicMAgJIgXoAwKJAWf4Gg3d0qTbbld0oN5nxle3HvAno4OjH1adOOt+rTiute99FxvqBmQiByvpJ2MsVgqqtFzpVsJOm5NpRl0koy4c4ya95sxX5Lby15azakxHq5HBbnYt21o/nl/5LCNbj91FbhWae8fX+zd4Pceo7Z60I/hhKb+aMZ10doe14Naf4rR9P9O03a2FSwrlKEpzlNKMm7Wtx4IiZtRbL6rPSaGmn3mszMy6A0JoAAAAAAAAAAAAAAAAAAAFlSnGWkkpLvSYGLV2Vh5cYW8G0BBh9gYSFSNVU71IXcZSlKWVtWuk+3Vga7HQy1aq5yv5pMCBgUQEkQL0AAqkBJECaAE0QJaWFp1YVYVIqUJzV0+5Rt8UBWnsihHgn+ZgZNPC048Ir36/MCYAAAAAAAAAAAAAAAAAAAAAAAAAaTbFPrt80gNe+AFEBfEC9AVAqgJIgTUwJgM/CrqL3/MCUAAAAAAAAAAAAAAAAAAAAAAAAAAAGs2xHRMDUzjogLEBcgJIgVAviBfECaAE0gM+h6sfBASAAAAAAAAAAAAAAAAAAAAAAAAAAAA1+1/VXiBq8SrKPgBjoC5ASQAqBJFAXoCWIE8lwA2FPgvBAXAAAAAAAAAAAAAAAAAAAAAAAAAAAAwdqrqx8QNXj9JJcor5AYyAqBJACoEsQL0BIgMm2iAz4cF4AVAAAAAAAAAAAAAAAAAAAAAAAAAAABi42F8i7wNNjZXqS8QIEAAlgBUCaIFQJktAMqkrx8AMyPBAVAAAAAAAAAAAAAAAAAAAAAAAAAAABFW019lNgc7LVtgWIABLACoE0AKsDIoq8QMrB9qAyYcF4AXAAAAAAAAAAAAAAAAAAAAAAAAAAAAxdoytBrtloBpslgIQCAkiBcBLECrAyMDLVrmBl0I2kBlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYmPVlmb0SslzkwNXWjZa8Z8F93mBjMAgJIgXICSIFzAtpVMskwNune0lqpATgAAAAAAAAAAAAAAAAAAAAAAAAAAAAarG7Qheyi5OPBtWjf6gaypXlJty4sC24EiQFyAvQF6AviBZVpsC/C4mtT0yZ48k9QNnhcXCpe11JcYyVmgMgAAAAAAAAAAAAAAAAAAAAAAAAAAAGt2nFAaeUdQLoxAvAuQF6AuQFydgJ4VI9oGXQUex3AyIwS1SV322AuAAAAAAAAAAAAAAAAAAAAAAAAAAABqtpS1A1lgLkgLkBcgL0BcgLkBfFIDOw9uQGUAAAAAAAAAAAAAAAAAAAAAAAAAAAABBWwsJ8V707AYz2VHsk14pMCx7LfZP+UCn+WS9qPxAp/ltTnHzf6AVWz6n3fN/oBcsBPnHzf6AXLAS5r4gXLAP2vgBkUqGXtuBMkAAAAAAAAAAAAAAB//Z",
  },
  {
    id: 4,
    title: "Men Wear",
    name: "Classic Polo Shirt",
    price: "1,499",
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEBR3iv0R_CxBnWVqt1NjxlHVooAG9-bhbw&s",
  },
  {
    id: 5,
    title: "Outerwear",
    name: "Vintage Denim Jacket",
    price: "2,999",
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS29_N_ZB8STDmkacRby8PGLG0bZvTZsmG0w&s",
  },
  {
    id: 6,
    title: "Outerwear",
    name: "Leather Biker Jacket",
    price: "4,599",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpH8kTBxOF9-HYmfpv4WrUVDbMZpBt4YpQKg&s",
  },
  {
    id: 7,
    title: "Outerwear",
    name: "Urban Windbreaker",
    price: "2,299",
    images:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600",
  },
  {
    id: 8,
    title: "Outerwear",
    name: "Premium Wool Bomber",
    price: "3,499",
    images:
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=600",
  },
  {
    id: 9,
    title: "Men Wear",
    name: "Essential Grey Hoodie",
    colors: ["#9CA3AF"],

    price: "1,999",
    images:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600",
  },
  {
    id: 10,
    title: "Men Wear",
    name: "Knitted Winter Sweater",
    price: "2,199",
    images:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600",
  },
];

export default function NewThisWeek() {
  const navigate = useNavigate();
  const [start, setStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) setVisibleCount(2);
      else setVisibleCount(4);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const prevSlide = () => setStart((prev) => Math.max(prev - 1, 0));
  const nextSlide = () =>
    setStart((prev) => Math.min(prev + 1, products.length - visibleCount));

  return (
    <div className="py-4 bg-[#f5f5f5]">
      <section className=" py-16 font-sans">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-end justify-between mb-10">
            <h2
              style={{
                fontFamily: '"Beatrice Deck Trial Extrabold", sans-serif',
              }}
              className="text-4xl md:text-5xl font-black leading-tight"
            >
              NEW <br /> THIS WEEK
              <span className="text-sm ml-2">({products.length})</span>
            </h2>

            <button
              onClick={() => navigate("/Products")}
              className="text-xs md:text-sm color-[#5E5E5E] uppercase tracking-wider"
            >
              See All Collection →
            </button>
          </div>

          <div className="grid gap-2 md:gap-3 grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 px-2 md:px-4">
            {products.slice(start, start + visibleCount).map((item) => (
              <Card
                key={item.id}
                item={item}
                onSelect={(product) => navigate(`/product/${product.id}`)}
              />
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-12">
            <button
              onClick={prevSlide}
              disabled={start === 0}
              className="
                w-12 h-12
                flex items-center justify-center
                border border-gray-300
                hover:bg-gray-100
                transition
                disabled:opacity-40
                disabled:cursor-not-allowed
              "
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={nextSlide}
              disabled={start + visibleCount >= products.length}
              className="
                w-12 h-12
                flex items-center justify-center
                border border-gray-300
                hover:bg-gray-100
                transition
                disabled:opacity-40
                disabled:cursor-not-allowed
              "
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

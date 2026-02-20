import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const initialProducts = [
  {
    id: 1,
    name: "Full Sleeve Zipper",
    category: "Cotton T-Shirt",
    color: "Black",
    size: "L",
    price: 99,
    image:
      "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=d8qlXILMYhugXGw6zX7Jer2SLPrLPORfsDsfRDWc-50=",
    quantity: 1,
  },
  {
    id: 2,
    name: "Basic Slim Fit T-Shirt",
    category: "Cotton T-Shirt",
    color: "Black",
    size: "L",
    price: 99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS29_N_ZB8STDmkacRby8PGLG0bZvTZsmG0w&s",
    quantity: 1,
  },
];

export default function CheckoutPage() {
  const [products] = useState(initialProducts);
  const subtotal = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-black">
      <main className="max-w-7xl mx-auto px-5 sm:px-10 py-10 sm:py-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">
          <section className="flex-1">
            <h1
              style={{
                fontFamily: '"Beatrice Deck Trial Extrabold", sans-serif',
              }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-extrabold uppercase italic leading-tight sm:leading-[0.85]"
            >
              Checkout
            </h1>

            <div className="flex gap-4 sm:gap-10 mt-6 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-400">
              <span className="text-black">Information</span>
              <span>Shipping</span>
              <span>Payment</span>
            </div>

            <div className="mt-8 sm:mt-16 space-y-3">
              <p className="label">Contact Info</p>
              <input placeholder="Email" className="input w-full" />
              <input placeholder="Phone" className="input w-full" />
            </div>

            <div className="mt-8 sm:mt-12 space-y-3">
              <p className="label">Shipping Address</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input placeholder="First Name" className="input" />
                <input placeholder="Last Name" className="input" />
              </div>
              <input placeholder="Country" className="input w-full" />
              <input placeholder="State / Region" className="input w-full" />
              <input placeholder="Address" className="input w-full" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input placeholder="City" className="input" />
                <input placeholder="Postal Code" className="input" />
              </div>
            </div>

            <button
              className="mt-8 sm:mt-16 w-full bg-[#d6d6d6] py-4 sm:py-5 flex items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] font-black uppercase tracking-widest"
              onClick={() => navigate("/Order")}
            >
              Shipping <ArrowRight size={18} />
            </button>
          </section>

          <aside className="flex-1 bg-white px-5 sm:px-10 py-6 sm:py-12 border border-black/10 w-full">
            <p className="label mb-6 sm:mb-10">Your Order</p>

            <div className="space-y-6 sm:space-y-10">
              {products.map((product) => (
                <div key={product.id} className="flex gap-3 sm:gap-5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className=" w-20 h-28 sm:w-24 sm:h-32 object-cover"
                  />



                  <div className="flex flex-col justify-between">
                    <p className="text-[12px] sm:text-[13px] font-black uppercase">
                      {product.name}
                    </p>
                    <p className="text-[9px] sm:text-[10px] uppercase text-zinc-400 mt-1">
                      {product.color} / {product.size}
                    </p>
                    <p className="mt-4 sm:mt-6 font-black text-[11px] sm:text-[13px]">
                      ${product.price} × {product.quantity} = $
                      {product.price * product.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-black/10 mt-6 sm:mt-14 pt-4 sm:pt-6 space-y-2 sm:space-y-3 text-[10px] sm:text-[11px] font-bold uppercase">
              <div className="flex justify-between text-zinc-500">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-zinc-500">
                <span>Shipping</span>
                <span>Calculated at next step</span>
              </div>
              <div className="flex justify-between text-[16px] sm:text-[20px] font-black pt-2 sm:pt-4">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <style jsx>{`
        .input {
          border: 1px solid rgba(0, 0, 0, 0.12);
          padding: 12px 14px;
          font-size: 11px;
          font-weight: 700;
          background: white;
          outline: none;
          width: 100%;
        }
        .label {
          font-size: 10px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          margin-bottom: 8px;
        }
      `}</style>
    </div>
  );
}

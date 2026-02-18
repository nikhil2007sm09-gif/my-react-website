import React, { useState } from "react";

const productsData = [
  {
    id: 1,
    name: "Full Sleeve Zipper",
    category: "Cotton T Shirt",
    price: 99,
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600",
    color: "black",
    quantity: 1,
  },
  {
    id: 2,
    name: "Basic Slim Fit T‑Shirt",
    category: "Cotton T Shirt",
    price: 99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    color: "black",
    quantity: 1,
  },
];

export default function Order() {
  const [products, setProducts] = useState(productsData);
  const shipping = 10;

  const handleQuantity = (id, delta) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(1, p.quantity + delta) } : p,
      ),
    );
  };

  const handleRemove = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const subtotal = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-sm sm:text-base tracking-widest font-semibold mb-6 sm:mb-8">
          SHOPPING BAG
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          <div className="flex-1 space-y-6 sm:space-y-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white p-4 sm:p-6 rounded-xl shadow-sm"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full sm:w-40 h-40 sm:h-40 object-cover rounded-lg "
                />

                <div className="flex-1 flex flex-col justify-between mt-3 sm:mt-0">
                  <div>
                    <p className="text-xs sm:text-sm uppercase text-gray-400">
                      {product.category}
                    </p>
                    <h2 className="text-base sm:text-lg font-medium mt-1">
                      {product.name}
                    </h2>
                    <p className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold">
                      ${product.price}
                    </p>
                  </div>

                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-6 mt-3 sm:mt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm">Color</span>
                      <span
                        className="w-4 h-4 rounded-full border"
                        style={{ backgroundColor: product.color }}
                      />
                    </div>

                    <div className="flex items-center border rounded-md overflow-hidden">
                      <button
                        onClick={() => handleQuantity(product.id, -1)}
                        className="px-3 py-1 text-lg sm:text-xl"
                      >
                        −
                      </button>
                      <span className="px-4 text-sm sm:text-base">
                        {product.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantity(product.id, 1)}
                        className="px-3 py-1 text-lg sm:text-xl"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => handleRemove(product.id)}
                      className="ml-auto sm:ml-0 text-gray-400 hover:text-black text-xl"
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-96  bg-white p-6 sm:p-8 rounded-xl shadow-sm mt-6 lg:mt-0">
            <h2 className="text-sm sm:text-base tracking-widest font-semibold mb-4 sm:mb-6">
              ORDER SUMMARY
            </h2>

            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>
                <span>${shipping}</span>
              </div>
            </div>

            <div className="flex justify-between font-semibold border-t mt-3 sm:mt-4 pt-3 sm:pt-4 text-base sm:text-lg">
              <span>Total (Tax incl.)</span>
              <span>${total}</span>
            </div>

            <label className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">
              <input type="checkbox" className="accent-black" />I agree to the
              Terms and Conditions
            </label>

            <button className="w-full mt-4 sm:mt-6 bg-gray-200 text-gray-400 py-3 sm:py-4 rounded-md cursor-not-allowed text-sm sm:text-base">
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prev) => {
//       const exists = prev.find((p) => p.id === product.id);
//       if (exists) {
//         return prev.map((p) =>
//           p.id === product.id ? { ...p, qty: p.qty + 1 } : p,
//         );
//       }
//       return [...prev, { ...product, qty: 1 }];
//     });
//   };

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + Number(item.price.replace("$", "")) * item.qty,
//     0,
//   );

//   return (
//     <CartContext.Provider value={{ cart, addToCart, totalPrice }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

import { useState } from "react";

const QA_DATA = [
  { q: "hello", a: "Hello 👋 How can I help you?" },
  { q: "hi", a: "Hi there 😊 How can I assist you today?" },
  { q: "hey", a: "Hey 👋 What can I do for you?" },
  { q: "good morning", a: "Good morning ☀️ Hope you have a great day!" },
  { q: "good evening", a: "Good evening 🌆 How may I help?" },

  { q: "price", a: "Prices start from ₹999 💰" },
  { q: "cost", a: "Our products are affordable, starting at ₹999 💸" },
  { q: "cheap", a: "We offer best prices with great quality 👍" },
  { q: "expensive", a: "Our pricing is competitive and value for money 💯" },

  { q: "delivery", a: "Delivery takes 3–5 business days 🚚" },
  { q: "shipping", a: "We offer fast shipping within 3–5 days 📦" },
  { q: "fast delivery", a: "Yes, we try to deliver as fast as possible ⚡" },
  {
    q: "late delivery",
    a: "Sorry for the delay 🙏 Please share your order ID.",
  },

  { q: "return", a: "7-day easy return available 🔁" },
  { q: "refund", a: "Refunds are processed within 5–7 working days 💳" },
  { q: "exchange", a: "Easy exchange available within 7 days 🔄" },
  { q: "cancel order", a: "You can cancel before the order is shipped ❌" },

  { q: "payment", a: "We accept UPI, Cards, Net Banking & COD 💳" },
  { q: "cod", a: "Yes, Cash on Delivery is available 🚚💵" },
  { q: "upi", a: "UPI payments are supported 📲" },
  { q: "card", a: "Debit & Credit cards are accepted 💳" },

  { q: "contact", a: "Email: support@example.com 📧" },
  { q: "support", a: "Our support team is happy to help 🤝" },
  { q: "customer care", a: "Please contact support@example.com ☎️" },
  { q: "help", a: "Sure 😊 Tell me how can I help?" },

  { q: "order status", a: "Please share your order ID to check status 📄" },
  { q: "track order", a: "Tracking details will be shared once shipped 📍" },
  { q: "order not received", a: "Sorry 😔 Please share your order ID." },
  { q: "wrong order", a: "We apologize 🙏 Please contact support." },

  { q: "discount", a: "Discounts are available during sales 🎉" },
  { q: "offers", a: "Check our website for latest offers 🔥" },
  { q: "coupon", a: "Coupons are available during promotions 🎟️" },
  { q: "sale", a: "Big sales are coming soon 🛍️" },

  { q: "working hours", a: "We operate Monday to Saturday, 10 AM – 6 PM ⏰" },
  { q: "office time", a: "Our working hours are 10 AM – 6 PM 🕙" },
  { q: "holiday", a: "We are closed on Sundays ❌" },

  { q: "privacy policy", a: "Your privacy is important to us 🔒" },
  { q: "terms", a: "Please check our Terms & Conditions 📜" },
  { q: "data safety", a: "Your data is completely safe with us 🛡️" },

  { q: "about", a: "We provide quality products at best prices ⭐" },
  { q: "company", a: "We are a customer-first brand 🤍" },
  { q: "brand", a: "Our brand focuses on quality & trust 💎" },

  { q: "product quality", a: "We ensure premium quality products 👍" },
  { q: "original", a: "Yes, all products are 100% original ✅" },
  { q: "warranty", a: "Warranty depends on the product 📦" },

  { q: "size", a: "Size details are mentioned on product page 📏" },
  { q: "color", a: "Multiple colors are available 🎨" },
  { q: "stock", a: "Stock availability is shown on website 📊" },
  { q: "out of stock", a: "Item will be restocked soon 🔄" },

  { q: "bulk order", a: "Please contact support for bulk orders 📦📦" },
  { q: "wholesale", a: "Wholesale inquiries are welcome 🤝" },

  { q: "feedback", a: "We love your feedback ❤️" },
  {
    q: "complaint",
    a: "Sorry for the inconvenience 🙏 Please contact support.",
  },
  { q: "review", a: "Thank you for sharing your review ⭐" },

  { q: "thank you", a: "You're welcome 😊 Happy to help!" },
  { q: "thanks", a: "Glad I could help 😄" },
  { q: "bye", a: "Goodbye 👋 Have a great day!" },
  { q: "exit", a: "See you soon 😊" },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 Ask me anything!" },
  ]);

  const reply = (text) => {
    const found = QA_DATA.find((i) => text.toLowerCase().includes(i.q));
    return found ? found.a : "Sorry 😕 I didn’t understand.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: input },
      { sender: "bot", text: reply(input) },
    ]);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full
  bg-black
  // border-0 outline-none
  // shadow-[0_0_25px_rgba(0,0,0,0.6)]
  flex items-center justify-center
  transition-all duration-300
  hover:scale-110 hover:rotate-6
  before:absolute before:inset-0 before:rounded-full
  before:bg-white/10 before:blur-xl before:opacity-0
  hover:before:opacity-100"
      >
        <svg
          className="w-8 h-8 text-white relative z-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        </svg>
      </button>

      {open && (
        <div
          className="
            fixed inset-0 z-50 bg-white flex flex-col
            h-[100dvh]
            sm:inset-auto sm:bottom-6 sm:right-6
            sm:w-96 sm:h-[540px] sm:rounded-3xl sm:shadow-2xl
            animate-slideUp
          "
        >
          <div className="bg-gradient-to-r from-black to-gray-800 text-white px-4 py-3 flex justify-between items-center sm:rounded-t-3xl">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center font-bold text-white shadow-md ring-2 ring-white-400">
                S
              </div>

              <div>
                <h3 className="font-semibold leading-none">Support</h3>
                <p className="text-xs text-green-400">● Online</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white"
            >
              ✖
            </button>
          </div>

          <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-50 to-gray-100 p-4 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`relative max-w-[80%] px-4 py-2 text-sm rounded-2xl ${
                  m.sender === "user"
                    ? "ml-auto bg-black text-white rounded-br-sm"
                    : "mr-auto bg-white text-black shadow rounded-bl-sm"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="border-t bg-white p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 border rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-black-400"
            />
            <button
              onClick={sendMessage}
              className="bg-black hover:bg-gray-900 transition
  w-10 h-10 rounded-full flex items-center justify-center text-white"
            >
              ➤
            </button>
          </div>
        </div>
      )}

      <style>{`
        .animate-slideUp {
          animation: slideUp 0.25s ease-out;
        }
        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}

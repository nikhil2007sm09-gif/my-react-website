import { ShieldCheck, RefreshCcw, Lock, Truck } from "lucide-react";

const CustomerPromise = () => {
  const promises = [
    {
      icon: ShieldCheck,
      title: "100% Satisfaction",
      desc: "Quality products with guaranteed satisfaction",
      gradient: "from-green-400 to-emerald-600",
    },
    {
      icon: RefreshCcw,
      title: "Easy Returns",
      desc: "Simple & quick return process",
      gradient: "from-blue-400 to-indigo-600",
    },
    {
      icon: Lock,
      title: "Secure Payments",
      desc: "Safe & encrypted payment methods",
      gradient: "from-purple-400 to-fuchsia-600",
    },
    {
      icon: Truck,
      title: "On-time Delivery",
      desc: "Fast & reliable doorstep delivery",
      gradient: "from-orange-400 to-red-500",
    },
  ];

  return (
    <div class="bg-[#f5f5f5]">
      <section className="relative py-24 my-25  overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96  rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white rounded-full blur-3xl opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-4">
            Our Customer Promise
          </h2>
          <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
            We don’t just sell clothes — we deliver trust, comfort, and style.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {promises.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-black ${item.gradient} text-white shadow-lg group-hover:scale-110 transition`}
                  >
                    <Icon size={32} />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerPromise;

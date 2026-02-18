export default function Beliefs() {
  const beliefs = [
    {
      title: "Quality First",
      desc: "Premium fabrics, durable stitching, and careful attention to every detail.",
    },
    {
      title: "Minimal Design",
      desc: "Clean silhouettes and neutral tones that stay relevant beyond trends.",
    },
    {
      title: "Responsible Fashion",
      desc: "Ethical sourcing, small batches, and mindful production practices.",
    },
  ];

  return (
    <div class="bg-[#f5f5f5]">
      <section className="py-24 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              What We Stand For
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              The values that guide every decision we make — from design to
              delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {beliefs.map((belief, index) => (
              <div
                key={belief.title}
                className="group bg-white rounded-2xl p-10 border border-gray-400
                         hover:border-gray-900 transition-all duration-300"
              >
                <div className="text-sm text-gray-400 font-medium mb-6">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {belief.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-base">
                  {belief.desc}
                </p>

                <div className="mt-8 h-px w-0 bg-gray-400 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

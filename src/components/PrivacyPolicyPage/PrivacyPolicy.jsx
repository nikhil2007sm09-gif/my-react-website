import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] from-gray-100 to-gray-200 py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-white p-12 md:p-16 rounded-2xl border border-gray-200">
        <h1 className="text-5xl md:text-6xl font-black uppercase mb-12 text-center text-gray-900 tracking-wide">
          Privacy Policy
        </h1>

        <p className="mb-8 text-base md:text-lg leading-relaxed text-gray-700">
          Your privacy is important to us. This Privacy Policy explains how XIV
          QR collects, uses, and protects your information when you visit our
          website or use our services.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-l-4 border-indigo-500 pl-4">
            Information We Collect
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            We may collect personal information such as your name, email
            address, and payment information when you interact with our site. We
            also collect non-personal information like browser type, pages
            visited, and IP address.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-l-4 border-indigo-500 pl-4">
            How We Use Your Information
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            Your information is used to provide and improve our services,
            process transactions, communicate updates, and ensure security. We
            never sell your personal data to third parties.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-l-4 border-indigo-500 pl-4">
            Cookies
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            We use cookies to enhance your browsing experience, analyze site
            traffic, and understand user preferences. You can choose to disable
            cookies through your browser settings.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-l-4 border-indigo-500 pl-4">
            Your Rights
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            You have the right to access, correct, or delete your personal
            information. For any requests regarding your data, please contact us
            at{" "}
            <span className="underline text-indigo-600 cursor-pointer">
              support@example.com
            </span>
            .
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 border-l-4 border-indigo-500 pl-4">
            Changes to this Policy
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            We may update this Privacy Policy from time to time. All changes
            will be posted on this page with the effective date.
          </p>
        </div>

        <p className="text-sm md:text-base mt-12 text-center text-gray-500">
          © 2024 — XIV QR. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

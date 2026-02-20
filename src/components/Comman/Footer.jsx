import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const infoLinks = [
    { name: "Pricing", path: "/Products" },
    { name: "About", path: "/About" },
    { name: "Contacts", path: "/Contact" },
  ];

  return (
    <footer className="bg-gray-200 text-gray-900 font-sans relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-black opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3 space-y-14">
            <div>
              <h2 className="text-[10px] tracking-widest text-gray-500 mb-6 uppercase">
                Info
              </h2>
              <ul className="space-y-2 text-sm font-medium">
                {infoLinks.map((item) => (
                  <li key={item.name} className="group flex items-center gap-3">
                    <Link
                      to={item.path}
                      className="group-hover:opacity-60 transition uppercase"
                    >
                      {item.name}
                    </Link>
                    <span className="opacity-30 group-hover:opacity-60 transition">
                      /
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[10px] tracking-widest text-gray-500 mb-6 uppercase">
                Language
              </h2>
              <ul className="space-y-2 text-[11px] font-bold tracking-widest">
                <li className="cursor-pointer">ENG /</li>
                <li className="opacity-40 hover:opacity-100 transition">
                  ESP /
                </li>
                <li className="opacity-40 hover:opacity-100 transition">
                  SVE /
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-6 flex flex-col items-center md:items-start">
            <span className="text-[10px] tracking-widest text-gray-500 uppercase mb-8">
              Technologies
            </span>

            <div className="relative">
              <div className="relative">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGlSURBVHgB1dprCoJAFIbhscS9uMpslSLuREXzC76w8jKXc3TmhSD89yClM2eMUa5t20dRFA+TckA0TTPleT4liyECn/v9PmVZpoq5GYWAGMexWl6bpsn0fV9pYcQhawimiRGF7CGYFkYMYoNgGhgRiAuCSWOCIT4IJokJgoQgmBTGGyKBYBIYL4gkgoVinCEaCBaCcYJoIpgvxhpyBoL5YKwgZyKYK+YQcgWCuWB2IVcimC1mExIDgtlgViExIdgR5g8SI4LtYb4gMSPYFuYDSQHB1jBvSEoI9ovJU0SwBcbchmHITMIBM5fdyrKs5jvyNIk2341n13XV+zeSKoYIfP/8a6WGWSLQ13MkFcwvAv092WPHrCHQ6rtWrJgtBNp8+40Ns4dAu+uRWDBHCHS4QrwaY4NAVmv2qzC2CGS9i3I2xgWBnPa1zsK4IpDzTqM2xgeBvPZ+tTC+COS9Gy+NCUGgoPmIFCYUgYInVqEYCQQSmSH6YqQQSGyq64qRRCDRObstRhqBxE8+HGE0EKrVdV0tD9XMl3CopjIpRgwgySIYMGcgXlcdEn7O9wcIAAAAAElFTkSuQmCC"
                  alt="Logo"
                  className="absolute top-0 left-0 w-18 h-18 z-10 justify-center items-center"
                />

                <div className="absolute -top-4 left-0 text-8xl font-black text-black opacity-5 select-none">
                  VR
                </div>
              </div>

              <br />
              <br />
              <br />
              <br />
              <h1 className="text-6xl md:text-7xl font-black leading-tight tracking-tight">
                XIV
                <br />
                QR
              </h1>

              <div className="mt-6 h-px w-24 bg-black opacity-20"></div>
            </div>
          </div>

          <div className="md:col-span-3 flex items-center md:items-end justify-center md:justify-end">
            <div className="flex items-center gap-4">
              <div className="h-14 w-px bg-black opacity-20"></div>
              <p className="text-xs text-gray-500 font-medium leading-relaxed  max-w-xs">
                Near-field communication technology
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-black/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] tracking-widest text-gray-500 uppercase">
          <p>© 2024 — XIV QR</p>
          <Link
            to="/PrivacyPolicyPage"
            className="cursor-pointer hover:text-black transition"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

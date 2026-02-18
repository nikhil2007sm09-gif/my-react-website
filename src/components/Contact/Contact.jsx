import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactPage() {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = formRef.current.name.value.trim();
    const email = formRef.current.email.value.trim();
    const message = formRef.current.message.value.trim();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        formRef.current.reset();
      } else {
        toast.error(data.msg || "Something went wrong");
      }
    } catch (error) {
      toast.error("Backend not responding!");
    }
  };

  return (
    <div className="bg-[#f5f5f5] text-neutral-900 min-h-screen py-16">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2 flex flex-col justify-center gap-6">
          <h1 className="text-4xl md:text-6xl font-bold">CONTACT</h1>
          <h2 className="text-4xl md:text-6xl font-bold">US</h2>

          <p className="text-lg text-neutral-600">
            Have a question or want to work with us? Fill out the form and we'll
            get back to you as soon as possible.
          </p>

          <div className="mt-6 space-y-3 text-neutral-600">
            <p><strong>Email:</strong> support@example.com</p>
            <p><strong>Phone:</strong> +91 1234 567 890</p>
            <p><strong>Address:</strong> 123 Main Street, City, Country</p>
          </div>
        </div>

        <div className="lg:w-1/2 bg-gray-50 p-8 rounded-lg">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <div>
              <label className="text-sm font-semibold mb-2">Name</label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="border p-3 rounded-md w-full"
              />
            </div>

            <div>
              <label className="text-sm font-semibold mb-2">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="border p-3 rounded-md w-full"
              />
            </div>

            <div>
              <label className="text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className="border p-3 rounded-md w-full"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white py-3 rounded-md hover:bg-neutral-800"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

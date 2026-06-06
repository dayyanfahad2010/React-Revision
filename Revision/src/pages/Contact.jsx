import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.message
    ) {
      setError("Please fill all fields.");
      return;
    }

    setError("");

    console.log(formData);

    alert("Form Submitted Successfully!");

    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen">

      <section className="max-w-3xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h1 className="text-4xl font-bold text-center mb-2">
            Contact Us
          </h1>

          <p className="text-center text-slate-500 mb-8">
            We'd love to hear from you. Send us a message.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-slate-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-slate-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Message
              </label>

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full border border-slate-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </section>

    </div>
  );
}

export default Contact;
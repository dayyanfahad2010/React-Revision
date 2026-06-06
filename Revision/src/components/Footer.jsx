import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-2xl font-bold">
              ReactApp
            </h2>

            <p className="text-slate-400 mt-3">
              Building modern, responsive and user-friendly
              web applications with React and Tailwind CSS.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-slate-400 hover:text-white transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-slate-400 hover:text-white transition"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-slate-400 hover:text-white transition"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">
              Contact
            </h3>

            <p className="text-slate-400">
              Email: info@example.com
            </p>

            <p className="text-slate-400">
              Phone: +92 300 1234567
            </p>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-400">
          © 2026 ReactApp. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
import { FaCopyright, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">About Evento EMS</h2>
          <p className="text-sm leading-relaxed">
            Evento EMS is a complete college event management system designed to simplify
            the process of organizing, registering, and managing campus events — all in one platform.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/events" className="hover:text-white transition">Events</a></li>
            <li><a href="/register" className="hover:text-white transition">Register</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Connect With Us</h2>
          <div className="flex space-x-5 text-xl">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 flex items-center justify-center text-sm text-gray-400">
        <FaCopyright className="mr-2" /> {new Date().getFullYear()} Evento EMS — All Rights Reserved
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* Brand */}
        <h3 className="text-white text-lg font-semibold mb-2">
          KhopCha Café
        </h3>

        <p className="text-sm mb-4">
          Serving great food & cozy vibes in Rohru 🍽️
        </p>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/917018796714"
          target="_blank"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 
                     text-white text-sm px-4 py-2 rounded-full transition shadow-md"
        >
          💬 Chat with Hi-Tech Solutions
        </a>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Bottom Line */}
        <p className="text-xs text-gray-500">
          © 2026 KhopCha Café. All rights reserved.
        </p>

        <p className="text-xs text-gray-600 mt-1">
          Crafted with ❤️ by{" "}
          <span className="text-yellow-400 font-medium">
            Hi-Tech Solutions
          </span>
        </p>

      </div>
    </footer>
  );
}
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-primary text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-2 mb-6">
          <img
            src="/assets/logo.png"
            className="w-10 h-10 rounded-full"
            alt="Logo"
          />
          <span className="font-bold text-xl">
            United Muslim Ummah
          </span>
        </div>

        <div className="flex justify-center gap-6 mb-8 text-sm opacity-80">
          <Link to="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-gold transition-colors">
            About
          </Link>
          <Link to="/events" className="hover:text-gold transition-colors">
            Events
          </Link>
          <Link to="/news" className="hover:text-gold transition-colors">
            News
          </Link>
          <Link to="/gallery" className="hover:text-gold transition-colors">
            Gallery
          </Link>
        </div>

        <p className="text-sm opacity-50">
          © 2026 United Muslim Ummah. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

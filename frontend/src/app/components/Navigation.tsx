import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  isScrolled: boolean;
}

export function Navigation({ isScrolled }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#legacy', label: 'Historia' },
    { href: '#catalog', label: 'Catálogo' },
    { href: '#why', label: 'Por Qué Julmo' },
    { href: '#testimonials', label: 'Testimonios' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#ffcc00]/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center"
            >
              <a href="#home" className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#ffcc00] blur-xl opacity-30"></div>
                  <div className="relative bg-gradient-to-br from-[#ffcc00] to-[#d4a50a] p-3 rounded-sm">
                    <span className="text-[#0A0A0A] text-xl tracking-tighter uppercase font-black">
                      JS
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-white text-xl uppercase tracking-wider font-black">
                    Julmo Sport
                  </div>
                  <div className="text-[#ffcc00] text-[10px] uppercase tracking-widest -mt-1">
                    Since 1984
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-gray-300 hover:text-[#ffcc00] transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/584241234567"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-[#ffcc00] text-[#0A0A0A] px-6 py-2.5 rounded-sm hover:bg-[#e6b800] transition-all duration-300 text-sm uppercase tracking-wider font-bold shadow-lg shadow-[#ffcc00]/20"
              >
                Contactar
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A] border-t border-[#ffcc00]/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-[#ffcc00] transition-colors duration-300 text-sm uppercase tracking-wider font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/584241234567"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#ffcc00] text-[#0A0A0A] px-6 py-3 rounded-sm hover:bg-[#e6b800] transition-all duration-300 text-sm uppercase tracking-wider font-bold text-center"
              >
                Contactar
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}

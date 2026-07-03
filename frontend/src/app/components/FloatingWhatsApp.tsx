import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X } from "lucide-react";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show after scroll down
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/584142703026", "_blank");
  };

  const handleCloseTooltip = () => {
    setShowTooltip(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-20 right-0 mb-2 w-64"
              >
                <div className="bg-white rounded-lg shadow-2xl p-4 relative border-2 border-[#ffcc00]">
                  {/* Close button */}
                  <button
                    onClick={handleCloseTooltip}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={16} />
                  </button>

                  <div className="pr-4">
                    <h4 className="text-[#0A0A0A] font-bold text-sm mb-1">
                      ¿Necesitas ayuda?
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Contáctanos por WhatsApp para información sobre nuestros productos
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r-2 border-b-2 border-[#ffcc00] transform rotate-45" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={handleWhatsAppClick}
            className="relative group"
          >
            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-[#ffcc00] animate-ping opacity-75" />
            
            {/* Main button */}
            <div className="relative w-16 h-16 bg-[#ffcc00] rounded-full flex items-center justify-center shadow-2xl shadow-[#ffcc00]/50 hover:bg-[#d4a500] transition-all duration-300 group-hover:scale-110 border-2 border-[#ffcc00]">
              <MessageCircle className="w-8 h-8 text-[#0A0A0A]" strokeWidth={2.5} />
            </div>

            {/* Badge notification */}
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-[#0A0A0A]">
              <span className="text-white text-[10px] font-bold">1</span>
            </div>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}

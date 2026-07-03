import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.a
      href="https://wa.me/584241234567"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isVisible ? 1 : 0,
        opacity: isVisible ? 1 : 0,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 group"
      aria-label="Contact via WhatsApp"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
      <MessageCircle className="text-white relative z-10" size={28} strokeWidth={2.5} />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-[#0A0A0A] text-white px-4 py-2 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="text-xs uppercase tracking-wider font-bold">
          Contáctanos
        </span>
        <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-[#0A0A0A] rotate-45"></div>
      </div>
    </motion.a>
  );
}

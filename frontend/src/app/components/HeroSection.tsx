import { motion } from "motion/react";
import { MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/584142703026", "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background Simulation with Image Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1561532325-7d5231a2dede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB0cmFpbmluZyUyMHB1bmNoaW5nJTIwYmFnJTIwZ3ltJTIwZGFya3xlbnwxfHx8fDE3ODIwMzcwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Boxing training background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/50 to-[#0A0A0A]" />
        
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A0A0A_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center space-y-8"
        >
          {/* Since 1984 label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="inline-flex items-center gap-3"
          >
            <div className="w-6 h-[2px] bg-[#ffcc00]" />
            <span className="text-[#ffcc00] text-xs sm:text-sm uppercase tracking-[0.3em] font-bold select-none">
              Desde 1984
            </span>
            <div className="w-6 h-[2px] bg-[#ffcc00]" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white uppercase tracking-tight max-w-5xl mx-auto leading-[0.95]"
          >
            Calidad Julmo<br />
            <span className="text-[#ffcc00]">dura más contigo</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Fabricando equipamiento profesional de combate desde 1984.
            <br className="hidden sm:block" />
            <span className="text-[#ffcc00] font-semibold">Venezuela</span> para el mundo.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button
              onClick={handleWhatsAppClick}
              className="bg-[#ffcc00] text-[#0A0A0A] hover:bg-[#ffcc00]/90 px-8 py-6 text-base sm:text-lg font-bold uppercase tracking-wider shadow-2xl shadow-[#ffcc00]/20 transition-all duration-300 hover:scale-105 border-2 border-[#ffcc00]"
            >
              <MessageCircle className="mr-2" size={20} />
              Contactar por WhatsApp
            </Button>
            
            <button
              onClick={() => scrollToSection("catalog")}
              className="border-2 border-[#ffcc00] text-[#ffcc00] bg-transparent hover:bg-[#ffcc00] hover:text-[#0A0A0A] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#ffcc00] px-8 py-[14px] text-base sm:text-lg font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
            >
              VER CATÁLOGO
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("legacy")}
          >
            <span className="text-xs text-gray-400 uppercase tracking-widest">Descubre más</span>
            <ChevronDown className="text-[#ffcc00]" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

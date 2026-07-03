import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background Effect - Using Image with Dark Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBnbG92ZXMlMjBjbG9zZSUyMHVwJTIwbGVhdGhlcnxlbnwxfHx8fDE3ODIwMzcwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Boxing gloves cinematic"
          className="w-full h-full object-cover"
        />
        {/* Multiple Overlay Layers for Cinematic Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/60 to-[#0A0A0A]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A]/80"></div>
        
        {/* Yellow Glow Effect */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#ffcc00] rounded-full blur-[150px] opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            {/* Small Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 mb-6"
            >
              <div className="h-px w-12 bg-[#ffcc00]"></div>
              <span className="text-[#ffcc00] text-xs uppercase tracking-[0.3em] font-bold">
                Venezuela 1984
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <span className="block text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tighter mb-4">
                Calidad Julmo
              </span>
              <span className="block text-[#ffcc00] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tighter">
                Dura Más Contigo
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed"
            >
              Fabricando equipamiento profesional de combate desde 1984.
              <span className="block mt-2 text-gray-500 text-base">
                Más de 40 años de excelencia venezolana.
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/584241234567"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#ffcc00] text-[#0A0A0A] text-sm uppercase tracking-wider font-black overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#ffcc00] to-[#e6b800]"></div>
                <div className="absolute inset-0 bg-[#0A0A0A] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10 group-hover:text-[#ffcc00] transition-colors duration-300">
                  Contactar por WhatsApp
                </span>
              </a>

              <a
                href="#catalog"
                className="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-[#ffcc00] text-[#ffcc00] text-sm uppercase tracking-wider font-black overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-[#ffcc00] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10 group-hover:text-[#0A0A0A] transition-colors duration-300">
                  Ver Catálogo
                </span>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-16 grid grid-cols-3 gap-8 max-w-2xl"
            >
              <div className="border-l-2 border-[#ffcc00] pl-4">
                <div className="text-3xl font-black text-white">40+</div>
                <div className="text-xs uppercase tracking-wider text-gray-500">Años</div>
              </div>
              <div className="border-l-2 border-[#ffcc00] pl-4">
                <div className="text-3xl font-black text-white">100%</div>
                <div className="text-xs uppercase tracking-wider text-gray-500">Venezolano</div>
              </div>
              <div className="border-l-2 border-[#ffcc00] pl-4">
                <div className="text-3xl font-black text-white">Pro</div>
                <div className="text-xs uppercase tracking-wider text-gray-500">Calidad</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, repeat: Infinity, duration: 2, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="text-[#ffcc00]" size={32} />
      </motion.div>
    </section>
  );
}

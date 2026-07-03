import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FinalCTA() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="relative py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1636391134068-083dd5e3209b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjByaW5nJTIwYXJlbmElMjBkYXJrfGVufDF8fHx8MTc4MjAzNzA4MHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Boxing ring background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Tag */}
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="h-px w-12 bg-[#ffcc00]"></div>
            <span className="text-[#ffcc00] text-xs uppercase tracking-[0.3em] font-bold">
              Contacto
            </span>
            <div className="h-px w-12 bg-[#ffcc00]"></div>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase text-white mb-6 leading-[0.95] tracking-tighter">
            Únete a La
            <span className="block text-[#ffcc00]">Familia Julmo</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
            Solicita nuestro catálogo completo o visítanos para conocer toda nuestra 
            línea de productos. Asesoría profesional y calidad garantizada desde 1984.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.a
              href="https://wa.me/584241234567"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center space-x-3 px-10 py-5 bg-[#ffcc00] text-[#0A0A0A] overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#0A0A0A] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <MessageCircle className="relative z-10 group-hover:text-[#ffcc00] transition-colors duration-300" size={24} />
              <span className="relative z-10 text-sm uppercase tracking-wider font-black group-hover:text-[#ffcc00] transition-colors duration-300">
                WhatsApp
              </span>
            </motion.a>

            <motion.a
              href="tel:+584241234567"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center space-x-3 px-10 py-5 border-2 border-[#ffcc00] text-[#ffcc00] overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#ffcc00] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <Phone className="relative z-10 group-hover:text-[#0A0A0A] transition-colors duration-300" size={24} />
              <span className="relative z-10 text-sm uppercase tracking-wider font-black group-hover:text-[#0A0A0A] transition-colors duration-300">
                Llamar
              </span>
            </motion.a>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-16 border-t border-[#ffcc00]/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-[#ffcc00]/10 border border-[#ffcc00]/30 flex items-center justify-center">
                  <MessageCircle className="text-[#ffcc00]" size={24} />
                </div>
              </div>
              <div className="text-white font-bold text-sm uppercase tracking-wider mb-1">
                WhatsApp
              </div>
              <div className="text-gray-500 text-sm">
                +58 424 123 4567
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-[#ffcc00]/10 border border-[#ffcc00]/30 flex items-center justify-center">
                  <Phone className="text-[#ffcc00]" size={24} />
                </div>
              </div>
              <div className="text-white font-bold text-sm uppercase tracking-wider mb-1">
                Teléfono
              </div>
              <div className="text-gray-500 text-sm">
                +58 212 555 1984
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-[#ffcc00]/10 border border-[#ffcc00]/30 flex items-center justify-center">
                  <Mail className="text-[#ffcc00]" size={24} />
                </div>
              </div>
              <div className="text-white font-bold text-sm uppercase tracking-wider mb-1">
                Email
              </div>
              <div className="text-gray-500 text-sm">
                info@julmosport.com
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-32 pt-12 border-t border-[#ffcc00]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="relative bg-gradient-to-br from-[#ffcc00] to-[#d4a50a] p-3 rounded-sm">
                <span className="text-[#0A0A0A] text-xl tracking-tighter uppercase font-black">
                  JS
                </span>
              </div>
              <div>
                <div className="text-white text-lg uppercase tracking-wider font-black">
                  Julmo Sport
                </div>
                <div className="text-[#ffcc00] text-[10px] uppercase tracking-widest">
                  Calidad que dura más contigo
                </div>
              </div>
            </div>

            <div className="text-gray-500 text-sm text-center md:text-right">
              <div className="mb-1">© 2026 Julmo Sport. Todos los derechos reservados.</div>
              <div className="text-xs">Hecho en Venezuela desde 1984</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

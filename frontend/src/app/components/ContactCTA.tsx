import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/584142703026", "_blank");
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0A0A0A] to-[#1a1a1a] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #ffcc00 0px, transparent 2px, transparent 40px),
                           repeating-linear-gradient(-45deg, #ffcc00 0px, transparent 2px, transparent 40px)`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Main CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-block border-l-4 border-[#ffcc00] pl-4">
                <span className="text-[#ffcc00] uppercase tracking-[0.3em] text-sm font-bold">
                  Contáctanos
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[0.95]">
                Equipa a tus
                <br />
                <span className="text-[#ffcc00]">campeones hoy</span>
              </h2>
              
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
                Ya sea que necesites equipamiento para tu gimnasio, academia o uso personal,
                estamos aquí para ayudarte. Contáctanos directamente por WhatsApp y recibe
                asesoría personalizada.
              </p>
            </div>

            {/* WhatsApp Button */}
            <div>
              <Button
                onClick={handleWhatsAppClick}
                className="bg-[#ffcc00] text-[#0A0A0A] hover:bg-[#ffcc00]/90 px-10 py-7 text-lg font-black uppercase tracking-wider shadow-2xl shadow-[#ffcc00]/20 transition-all duration-300 hover:scale-105 border-2 border-[#ffcc00]"
              >
                <MessageCircle className="mr-3" size={24} />
                Escríbenos por WhatsApp
              </Button>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#ffcc00]/10 border border-[#ffcc00]/30 flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#ffcc00]" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-sm mb-1">Teléfono</h4>
                  <p className="text-gray-400 text-sm">+58 412 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#ffcc00]/10 border border-[#ffcc00]/30 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#ffcc00]" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-sm mb-1">Ubicación</h4>
                  <p className="text-gray-400 text-sm">Venezuela</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Statement Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0A0A0A] border-2 border-[#ffcc00] p-8 sm:p-12 relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffcc00]/5 rounded-full blur-3xl" />
              
              <div className="relative space-y-8">
                {/* Main statement */}
                <div className="space-y-4">
                  <h3 className="text-3xl sm:text-4xl font-black text-[#ffcc00] uppercase tracking-tight">
                    40 años
                    <br />
                    de excelencia
                  </h3>
                  <p className="text-white text-lg sm:text-xl leading-relaxed">
                    No vendemos productos, construimos legados.
                  </p>
                </div>

                {/* Features list */}
                <div className="space-y-4">
                  {[
                    "Fabricación 100% venezolana",
                    "Garantía de calidad incomparable",
                    "Asesoría personalizada",
                    "Equipamiento profesional certificado"
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-[#ffcc00]" />
                      <span className="text-gray-300 text-sm sm:text-base uppercase tracking-wide">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <div className="border-l-4 border-[#ffcc00] pl-6 italic">
                  <p className="text-white text-lg sm:text-xl">
                    "Calidad Julmo dura más contigo"
                  </p>
                  <p className="text-gray-500 text-sm mt-2 uppercase tracking-wider">
                    Desde 1984
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Hammer, Shield, TrendingUp, Heart } from "lucide-react";

export function WhyJulmoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Hammer,
      title: "Artesanía Venezolana",
      description: "Cada producto es fabricado con orgullo en Venezuela, manteniendo los más altos estándares de calidad y durabilidad."
    },
    {
      icon: Shield,
      title: "Calidad Garantizada",
      description: "40+ años respaldan nuestra promesa: 'Calidad Julmo dura más contigo'. No es un slogan, es nuestra garantía."
    },
    {
      icon: TrendingUp,
      title: "Innovación Constante",
      description: "Combinamos técnicas tradicionales con innovación moderna para crear equipamiento que supera las expectativas."
    },
    {
      icon: Heart,
      title: "Pasión por el Combate",
      description: "Somos más que fabricantes, somos amantes del deporte. Entendemos las necesidades de los verdaderos atletas."
    }
  ];

  return (
    <section
      id="why"
      ref={ref}
      className="relative py-24 sm:py-32 bg-gradient-to-b from-[#1a1a1a] via-[#0A0A0A] to-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-block border-l-4 border-[#ffcc00] pl-4 mb-4">
            <span className="text-[#ffcc00] uppercase tracking-[0.3em] text-sm font-bold">
              Por Qué Elegirnos
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            La Diferencia
            <br />
            <span className="text-[#ffcc00]">Julmo Sport</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-16 md:grid-rows-2 items-stretch">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group h-full"
            >
              <div className="flex gap-6 p-6 sm:p-8 h-full bg-gradient-to-br from-[#1a1a1a] to-[#0A0A0A] border border-[#ffcc00]/20 hover:border-[#ffcc00] transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffcc00]/5">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#ffcc00]/10 border border-[#ffcc00]/30 group-hover:bg-[#ffcc00] group-hover:border-[#ffcc00] transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-[#ffcc00] group-hover:text-[#0A0A0A] transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative overflow-hidden"
        >
          <div className="bg-gradient-to-r from-[#ffcc00] to-[#d4a500] p-8 sm:p-12 lg:p-16">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0A0A] uppercase tracking-tight">
                Más que Equipamiento,
                <br />
                una Tradición de Campeones
              </h3>
              <p className="text-base sm:text-lg text-[#0A0A0A]/80 max-w-2xl mx-auto leading-relaxed">
                Cuando eliges Julmo Sport, no solo estás comprando equipamiento de combate.
                Estás invirtiendo en 40 años de experiencia, pasión venezolana y calidad
                inquebrantable. Estás uniéndote a una comunidad de guerreros que confían en
                lo mejor.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

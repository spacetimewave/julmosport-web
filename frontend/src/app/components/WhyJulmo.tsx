import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Shield, Award, Users, Zap } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Durabilidad Extrema',
    description:
      'Nuestros productos están diseñados para soportar el entrenamiento más intenso. Costuras reforzadas, materiales premium y construcción artesanal garantizan años de uso.',
  },
  {
    icon: Award,
    title: 'Calidad Certificada',
    description:
      '42 años perfeccionando nuestro proceso de fabricación. Cada pieza pasa por rigurosos controles de calidad antes de llegar a tus manos.',
  },
  {
    icon: Users,
    title: 'Confianza Profesional',
    description:
      'Equipamos a atletas profesionales, gimnasios de élite y academias de combate en toda Venezuela. La elección de los campeones.',
  },
  {
    icon: Zap,
    title: 'Innovación Constante',
    description:
      'Combinamos técnicas artesanales tradicionales con innovación moderna para crear equipamiento que supera las expectativas.',
  },
];

export function WhyJulmo() {
  const { ref, isInView } = useInView();

  return (
    <section id="why" ref={ref} className="relative py-32 bg-gradient-to-b from-[#0A0A0A] to-[#0D0D0D]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, #ffcc00 35px, #ffcc00 36px)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="h-px w-12 bg-[#ffcc00]"></div>
            <span className="text-[#ffcc00] text-xs uppercase tracking-[0.3em] font-bold">
              La Diferencia Julmo
            </span>
            <div className="h-px w-12 bg-[#ffcc00]"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white mb-6 leading-[0.95] tracking-tighter">
            Por Qué Elegir
            <span className="block text-[#ffcc00]">Julmo Sport</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Más que equipamiento, es una inversión en tu rendimiento
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-[#0D0D0D] border border-[#1A1A1A] p-8 hover:border-[#ffcc00]/50 transition-all duration-500"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#ffcc00] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-[#ffcc00] to-[#d4a50a] flex items-center justify-center">
                  <reason.icon className="text-[#0A0A0A]" size={32} strokeWidth={2.5} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-white text-2xl uppercase font-black tracking-tight mb-4 group-hover:text-[#ffcc00] transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {reason.description}
              </p>

              {/* Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#ffcc00] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative bg-gradient-to-r from-[#ffcc00]/10 to-transparent border-l-4 border-[#ffcc00] p-8 md:p-12"
        >
          <div className="max-w-3xl">
            <div className="text-6xl text-[#ffcc00] font-black mb-4 opacity-30">"</div>
            <p className="text-white text-2xl md:text-3xl font-bold italic leading-relaxed mb-6">
              Calidad Julmo dura más contigo
            </p>
            <p className="text-gray-400 text-lg">
              No solo fabricamos equipamiento deportivo, creamos herramientas que acompañan 
              tu camino hacia la excelencia. Desde 1984, cada puntada representa nuestro 
              compromiso con los atletas venezolanos.
            </p>
            <div className="mt-6 flex items-center space-x-3">
              <div className="h-px w-12 bg-[#ffcc00]"></div>
              <span className="text-[#ffcc00] text-xs uppercase tracking-widest font-bold">
                Julmo Sport Venezuela
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

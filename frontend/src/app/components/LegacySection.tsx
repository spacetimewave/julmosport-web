import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Trophy, Target, Users, Award } from "lucide-react";

export function LegacySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Trophy, value: "40+", label: "Años de Excelencia" },
    { icon: Target, value: "100%", label: "Hecho en Venezuela" },
    { icon: Users, value: "10K+", label: "Atletas Equipados" },
    { icon: Award, value: "1984", label: "Año de Fundación" },
  ];

  return (
    <section
      id="legacy"
      ref={ref}
      className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#1a1a1a]"
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
              Nuestro Legado
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            Cuatro Décadas
            <br />
            <span className="text-[#ffcc00]">De Excelencia</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0A0A0A] border border-[#ffcc00]/20 p-6 sm:p-8 text-center hover:border-[#ffcc00] transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffcc00]/10">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <stat.icon className="text-[#ffcc00] w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />
                </div>
                
                {/* Value */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2">
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Story Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-[#ffcc00] uppercase">
                Una Historia de Pasión
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Desde 1984, <span className="text-[#ffcc00] font-bold">Julmo Sport</span> ha sido sinónimo
                de calidad y durabilidad en el mundo del combate. Nacidos en Venezuela, hemos
                equipado a generaciones de atletas con productos que resisten el tiempo.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Cada pieza que fabricamos lleva consigo cuatro décadas de experiencia, innovación
                y compromiso con la excelencia. No solo vendemos equipamiento,{" "}
                <span className="text-white font-bold">forjamos leyendas</span>.
              </p>
            </div>

            {/* Quote */}
            <div className="border-l-4 border-[#ffcc00] pl-6 py-4 bg-[#1a1a1a]/50">
              <p className="text-xl sm:text-2xl text-white italic font-light mb-2">
                "Calidad Julmo dura más contigo"
              </p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                No es solo un slogan, es nuestra promesa
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="col-span-2"
            >
              <div className="relative overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBnbG92ZXMlMjBjbG9zZSUyMHVwJTIwbGVhdGhlcnxlbnwxfHx8fDE3ODIwMzcwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Boxing gloves detail"
                  className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-[#ffcc00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="relative overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1546711076-85a7923432ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB3b3Jrb3V0JTIwaW50ZW5zZSUyMGF0aGxldGV8ZW58MXx8fHwxNzgyMDM3MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Boxing training"
                className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-[#ffcc00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="relative overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1514050566906-8d077bae7046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMHRyYWluaW5nJTIwZXF1aXBtZW50fGVufDF8fHx8MTc4MjAzNzA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Martial arts equipment"
                className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-[#ffcc00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

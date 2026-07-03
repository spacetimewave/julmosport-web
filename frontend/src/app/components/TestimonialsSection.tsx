import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Carlos Mendoza",
      role: "Entrenador Profesional de Boxeo",
      location: "Caracas, Venezuela",
      quote: "Llevo más de 15 años usando equipamiento Julmo Sport en mi gimnasio. La calidad es incomparable. Mis atletas confían en cada producto, y yo también.",
      image: "https://images.unsplash.com/photo-1546711076-85a7923432ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB3b3Jrb3V0JTIwaW50ZW5zZSUyMGF0aGxldGV8ZW58MXx8fHwxNzgyMDM3MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "María González",
      role: "Atleta de Artes Marciales Mixtas",
      location: "Valencia, Venezuela",
      quote: "Calidad Julmo dura más contigo no es solo un slogan. Mis guantes tienen 5 años y siguen como nuevos. Son mi arma secreta en cada combate.",
      image: "https://images.unsplash.com/photo-1514050566906-8d077bae7046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMHRyYWluaW5nJTIwZXF1aXBtZW50fGVufDF8fHx8MTc4MjAzNzA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Roberto Silva",
      role: "Propietario de Gimnasio",
      location: "Maracaibo, Venezuela",
      quote: "Cuando abrí mi gimnasio, solo había una opción: Julmo Sport. Es la marca que todos los atletas serios respetan. La inversión vale cada centavo.",
      image: "https://images.unsplash.com/photo-1561532325-7d5231a2dede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB0cmFpbmluZyUyMHB1bmNoaW5nJTIwYmFnJTIwZ3ltJTIwZGFya3xlbnwxfHx8fDE3ODIwMzcwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-24 sm:py-32 bg-[#0A0A0A]"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ffcc00] to-transparent" />

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
              Testimonios
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            Voces de
            <br />
            <span className="text-[#ffcc00]">Campeones</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group relative"
            >
              <div className="h-full bg-gradient-to-br from-[#1a1a1a] to-[#0A0A0A] border border-[#ffcc00]/20 hover:border-[#ffcc00] transition-all duration-300 p-8 flex flex-col hover:shadow-2xl hover:shadow-[#ffcc00]/5">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#ffcc00]/10 border border-[#ffcc00]/30 group-hover:bg-[#ffcc00] group-hover:border-[#ffcc00] transition-all duration-300">
                    <Quote className="w-6 h-6 text-[#ffcc00] group-hover:text-[#0A0A0A] transition-colors duration-300" strokeWidth={2} />
                  </div>
                </div>

                {/* Quote Text */}
                <blockquote className="flex-1 mb-8">
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {/* Author Image */}
                  <div className="w-16 h-16 relative overflow-hidden flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 border-2 border-[#ffcc00]/20 group-hover:border-[#ffcc00] transition-colors duration-300" />
                  </div>

                  {/* Author Details */}
                  <div className="flex-1">
                    <h4 className="text-white font-bold uppercase text-sm sm:text-base tracking-wide">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#ffcc00] text-xs sm:text-sm uppercase tracking-wider">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ffcc00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <div className="max-w-3xl mx-auto border-l-4 border-r-4 border-[#ffcc00] py-8 px-6">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-white font-black uppercase tracking-tight italic">
              "La confianza de los campeones se construye con calidad"
            </p>
            <p className="text-[#ffcc00] text-sm sm:text-base uppercase tracking-widest mt-4">
              — Julmo Sport, Venezuela
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

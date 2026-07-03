import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Mendoza',
    role: 'Campeón Nacional de Boxeo',
    location: 'Caracas, Venezuela',
    quote:
      'Llevo 15 años usando Julmo Sport. La calidad de sus guantes es incomparable. Cada golpe se siente preciso y la protección es superior. Es la marca que confían los profesionales.',
    rating: 5,
  },
  {
    name: 'María Rodríguez',
    role: 'Entrenadora de MMA',
    location: 'Maracaibo, Venezuela',
    quote:
      'Mi gimnasio está equipado completamente con productos Julmo desde hace 8 años. Los sacos resisten el uso diario intenso y la inversión vale cada centavo. Calidad venezolana de verdad.',
    rating: 5,
  },
  {
    name: 'José Ramírez',
    role: 'Practicante de Muay Thai',
    location: 'Valencia, Venezuela',
    quote:
      'La durabilidad es real. Mis espinilleras Julmo han sobrevivido años de entrenamientos brutales sin perder forma. El orgullo de usar una marca venezolana con este nivel de excelencia.',
    rating: 5,
  },
  {
    name: 'Antonio Fuentes',
    role: 'Dueño de Gimnasio Profesional',
    location: 'Barquisimeto, Venezuela',
    quote:
      'Desde 1984 saben lo que hacen. Equipé mi gimnasio completo con Julmo y la diferencia con otras marcas es abismal. Soporte excepcional y productos que realmente duran más.',
    rating: 5,
  },
];

export function Testimonials() {
  const { ref, isInView } = useInView();

  return (
    <section id="testimonials" ref={ref} className="relative py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ffcc00] rounded-full blur-[200px] opacity-5"></div>

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
              Testimonios
            </span>
            <div className="h-px w-12 bg-[#ffcc00]"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white mb-6 leading-[0.95] tracking-tighter">
            Lo Que Dicen
            <span className="block text-[#ffcc00]">Los Atletas</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            La confianza de generaciones de campeones venezolanos
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-[#0D0D0D] border border-[#1A1A1A] p-8 hover:border-[#ffcc00]/30 transition-all duration-500 group"
            >
              {/* Quote Mark */}
              <div className="absolute top-6 right-6 text-[#ffcc00] text-6xl font-black opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                "
              </div>

              {/* Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#ffcc00] text-[#ffcc00]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ffcc00] to-[#d4a50a] flex items-center justify-center">
                  <span className="text-[#0A0A0A] text-xl font-black">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-bold uppercase text-sm tracking-wider">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {testimonial.role}
                  </div>
                  <div className="text-[#ffcc00] text-xs">
                    {testimonial.location}
                  </div>
                </div>
              </div>

              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-[#ffcc00] transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-[#ffcc00]/10"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-[#ffcc00] mb-2">98%</div>
            <div className="text-xs uppercase tracking-wider text-gray-500">
              Satisfacción
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-[#ffcc00] mb-2">5000+</div>
            <div className="text-xs uppercase tracking-wider text-gray-500">
              Atletas
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-[#ffcc00] mb-2">200+</div>
            <div className="text-xs uppercase tracking-wider text-gray-500">
              Gimnasios
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-[#ffcc00] mb-2">42</div>
            <div className="text-xs uppercase tracking-wider text-gray-500">
              Años
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

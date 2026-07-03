import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Legacy() {
  const { ref, isInView } = useInView();

  return (
    <section id="legacy" ref={ref} className="relative py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ffcc00] to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ffcc00] to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="h-px w-12 bg-[#ffcc00]"></div>
              <span className="text-[#ffcc00] text-xs uppercase tracking-[0.3em] font-bold">
                Nuestro Legado
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white mb-6 leading-[0.95] tracking-tighter">
              42 Años de
              <span className="block text-[#ffcc00]">Excelencia</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Desde 1984, Julmo Sport ha sido sinónimo de calidad, durabilidad y 
              rendimiento en el mundo de los deportes de combate. Nacidos en Venezuela, 
              hemos equipado a generaciones de atletas profesionales y aficionados que 
              confían en nuestra manufactura artesanal.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#ffcc00] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-bold uppercase text-sm tracking-wider mb-1">
                    Manufactura Artesanal
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Cada producto es fabricado con atención al detalle y materiales premium.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#ffcc00] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-bold uppercase text-sm tracking-wider mb-1">
                    Calidad Probada
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Más de cuatro décadas perfeccionando nuestros procesos de fabricación.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#ffcc00] mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-bold uppercase text-sm tracking-wider mb-1">
                    Orgullo Venezolano
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Hecho en Venezuela con pasión por el deporte de combate.
                  </p>
                </div>
              </div>
            </div>

            <div className="inline-block bg-[#ffcc00]/10 border border-[#ffcc00]/30 px-8 py-6">
              <div className="text-5xl font-black text-[#ffcc00] mb-2">1984</div>
              <div className="text-xs uppercase tracking-wider text-gray-400">
                Fundada en Venezuela
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1575747515871-2e323827539e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBneW0lMjBpbmR1c3RyaWFsJTIwZGFya3xlbnwxfHx8fDE3ODIwMzcwODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Boxing gym industrial atmosphere"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-[#ffcc00]"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-[#ffcc00]"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-[#ffcc00] p-8 shadow-2xl">
              <div className="text-[#0A0A0A] text-6xl font-black leading-none">42</div>
              <div className="text-[#0A0A0A] text-xs uppercase tracking-wider font-bold">Años</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

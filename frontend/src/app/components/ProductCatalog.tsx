import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const categories = [
  {
    title: 'Guantes de Boxeo',
    description: 'Construcción premium con cuero genuino',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBnbG92ZXMlMjBjbG9zZSUyMHVwJTIwbGVhdGhlcnxlbnwxfHx8fDE3ODIwMzcwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Equipos para el Combate',
    description: 'Protección profesional certificada',
    image: 'https://images.unsplash.com/photo-1558366972-9db89881cbdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21iYXQlMjBzcG9ydHMlMjBtbWF8ZW58MXx8fHwxNzgyMDM3MDgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Equipos para Entrenamiento',
    description: 'Durabilidad probada en gimnasios',
    image: 'https://images.unsplash.com/photo-1716307043003-dbe6a5cc496e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBwdW5jaGluZyUyMGJhZyUyMGd5bXxlbnwxfHx8fDE3ODIwMzcwODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Material para Gimnasio',
    description: 'Equipamiento industrial resistente',
    image: 'https://images.unsplash.com/photo-1575747515871-2e323827539e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBneW0lMjBpbmR1c3RyaWFsJTIwZGFya3xlbnwxfHx8fDE3ODIwMzcwODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Artes Marciales / Deportes de Combate',
    description: 'Especializados en disciplinas de combate',
    image: 'https://images.unsplash.com/photo-1656653121475-e33829581294?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMHRyYWluaW5nfGVufDF8fHx8MTc4MjAzNzA4MHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Colchonetas para Áreas Especiales',
    description: 'Amortiguación y seguridad garantizada',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBtYXQlMjBmbG9vciUyMGV4ZXJjaXNlfGVufDF8fHx8MTc4MjAzNzA4MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Ring y Accesorios',
    description: 'Configuraciones profesionales completas',
    image: 'https://images.unsplash.com/photo-1636391134068-083dd5e3209b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjByaW5nJTIwYXJlbmElMjBkYXJrfGVufDF8fHx8MTc4MjAzNzA4MHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function ProductCatalog() {
  const { ref, isInView } = useInView();

  return (
    <section id="catalog" ref={ref} className="relative py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Nuestro Catálogo
            </span>
            <div className="h-px w-12 bg-[#ffcc00]"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white mb-6 leading-[0.95] tracking-tighter">
            Equipamiento
            <span className="block text-[#ffcc00]">Profesional</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explora nuestra línea completa de productos diseñados para atletas de élite
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden bg-[#0D0D0D] border border-[#1A1A1A] hover:border-[#ffcc00]/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
                
                {/* Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#ffcc00] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </div>

              {/* Content */}
              <div className="relative p-6">
                <h3 className="text-white text-xl uppercase font-black tracking-tight mb-2 group-hover:text-[#ffcc00] transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {category.description}
                </p>

                {/* CTA */}
                <div className="flex items-center text-[#ffcc00] text-xs uppercase tracking-wider font-bold group-hover:gap-2 transition-all duration-300">
                  <span>Ver Productos</span>
                  <ArrowRight
                    size={16}
                    className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>

                {/* Corner Decoration */}
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#ffcc00] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/584241234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-transparent border-2 border-[#ffcc00] text-[#ffcc00] px-8 py-4 hover:bg-[#ffcc00] hover:text-[#0A0A0A] transition-all duration-300 uppercase text-sm tracking-wider font-black"
          >
            <span>Solicitar Catálogo Completo</span>
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

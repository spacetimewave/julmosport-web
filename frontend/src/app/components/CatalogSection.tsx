import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";
import {
  Hand,
  Shield,
  Dumbbell,
  Building2,
  Swords,
  PanelBottom,
  Box
} from "lucide-react";

export function CatalogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    {
      icon: Hand,
      title: "Guantes de Boxeo",
      description: "Calidad profesional, cuero premium, máxima protección",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBnbG92ZXMlMjBjbG9zZSUyMHVwJTIwbGVhdGhlcnxlbnwxfHx8fDE3ODIwMzcwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      href: "/catalogo/guantes-de-boxeo",
    },
    {
      icon: Shield,
      title: "Equipos para el Combate",
      description: "Protectores, cascos, y equipamiento de protección",
      image: "https://images.unsplash.com/photo-1516150486159-4f71b8189d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      href: "/catalogo/equipos-para-el-combate",
    },
    {
      icon: Dumbbell,
      title: "Equipos para Entrenamiento",
      description: "Pesas, barras, y accesorios de entrenamiento",
      image: "https://images.unsplash.com/photo-1670467429065-e06e3e1ab835?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      href: "/catalogo/equipos-para-entrenamiento",
    },
    {
      icon: Building2,
      title: "Material para Gimnasio",
      description: "Sacos, bolsas de boxeo, estructuras profesionales",
      image: "https://images.unsplash.com/photo-1748484531687-5faebc4a1965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      href: "/catalogo/material-para-gimnasio",
    },
    {
      icon: Swords,
      title: "Artes Marciales / Deportes de Combate",
      description: "Equipamiento especializado para disciplinas de contacto",
      image: "https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      href: "/catalogo/artes-marciales-deportes-combate",
    },
    {
      icon: PanelBottom,
      title: "Colchonetas Áreas Especiales",
      description: "Colchonetas de alta densidad para áreas de entrenamiento",
      image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      href: "/catalogo/colchonetas-areas-especiales",
    },
    {
      icon: Box,
      title: "Ring y Accesorios",
      description: "Rings profesionales y accesorios complementarios",
      image: "https://images.unsplash.com/photo-1517438322307-e67111335449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      href: "/catalogo/ring-y-accesorios",
    }
  ];

  return (
    <section
      id="catalog"
      ref={ref}
      className="relative py-24 sm:py-32 bg-[#0A0A0A]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, #ffcc00 0px, transparent 1px, transparent 50px),
                           repeating-linear-gradient(0deg, #ffcc00 0px, transparent 1px, transparent 50px)`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-block border-l-4 border-[#ffcc00] pl-4 mb-4">
            <span className="text-[#ffcc00] uppercase tracking-[0.3em] text-sm font-bold">
              Nuestro Catálogo
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
            Equipamiento
            <br />
            <span className="text-[#ffcc00]">Profesional</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Descubre nuestra línea completa de productos diseñados para atletas exigentes
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category, index) => {
            const card = (
              <div className="relative h-[400px] bg-gradient-to-br from-[#1a1a1a] to-[#0A0A0A] border border-[#ffcc00]/20 hover:border-[#ffcc00] transition-all duration-500 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                  {/* Icon */}
                  <div className="flex justify-end">
                    <div className="bg-[#ffcc00]/10 backdrop-blur-sm border border-[#ffcc00]/30 p-3 group-hover:bg-[#ffcc00] group-hover:border-[#ffcc00] transition-all duration-300">
                      <category.icon className="w-6 h-6 text-[#ffcc00] group-hover:text-[#0A0A0A] transition-colors duration-300" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight leading-tight">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="flex items-center gap-2 text-[#ffcc00] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm uppercase tracking-wider font-bold">
                        Ver productos
                      </span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Yellow accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ffcc00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            );

            return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group relative overflow-hidden cursor-pointer"
            >
              {"href" in category && category.href ? (
                <Link to={category.href} className="block">
                  {card}
                </Link>
              ) : (
                card
              )}
            </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 sm:mt-20"
        >
          <p className="text-gray-400 text-base sm:text-lg mb-6">
            ¿Necesitas información sobre algún producto específico?
          </p>
          <a
            href="https://wa.me/584142703026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ffcc00] text-[#0A0A0A] px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#ffcc00]/90 transition-all duration-300 hover:scale-105 border-2 border-[#ffcc00]"
          >
            Solicitar Catálogo Completo
          </a>
        </motion.div>
      </div>
    </section>
  );
}

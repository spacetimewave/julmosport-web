import { Layers, Shield, Move, Building2, Swords, Box } from "lucide-react";
import { CatalogCategoryPage } from "./CatalogCategoryPage";

const HERO = "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080";

const GALLERY = [
  { src: HERO, label: "Superficie de entrenamiento" },
  { src: "https://images.unsplash.com/photo-1683758507025-6e74ad3ca1e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", label: "Área acolchada" },
  { src: "https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", label: "Zona de combate" },
  { src: "https://images.unsplash.com/photo-1748484531687-5faebc4a1965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", label: "Área de entrenamiento" },
  { src: "https://images.unsplash.com/photo-1670467429065-e06e3e1ab835?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", label: "Instalación profesional" },
];

export function ColchonetasPage() {
  return (
    <CatalogCategoryPage
      heroImage={HERO}
      heroTitle="Colchonetas"
      heroTitleHighlight="Áreas Especiales"
      heroSubtitle="Superficies de protección para entrenamiento, combate y preparación física."
      features={[
        { Icon: Shield, title: "Protección para el impacto", desc: "Diseñadas para absorber impactos, proteger articulaciones y reducir el riesgo de lesiones durante el entrenamiento." },
        { Icon: Layers, title: "Diseñadas para uso constante", desc: "Alta densidad y materiales duraderos que mantienen sus propiedades tras miles de sesiones de uso." },
        { Icon: Move, title: "Adaptables al espacio", desc: "Formatos y medidas flexibles para adaptarse a cualquier sala, dojo o área de entrenamiento." },
        { Icon: Building2, title: "Para entrenamiento y seguridad", desc: "Utilizadas en gimnasios, escuelas deportivas y centros de entrenamiento de alto rendimiento." },
      ]}
      galleryImages={GALLERY}
      useCasesTitle="Elige según"
      useCasesTitleHighlight="tu espacio"
      useCasesSubtitle="Soluciones de protección para cada tipo de área y actividad deportiva."
      useCases={[
        { title: "Áreas de combate", desc: "Colchonetas específicas para zonas de combate, sparring y entrenamiento de contacto." },
        { title: "Gimnasios", desc: "Recubrimiento de suelos para gimnasios de boxeo, MMA y deportes de contacto." },
        { title: "Escuelas deportivas", desc: "Superficies de protección para dojos, escuelas de artes marciales y academias." },
        { title: "Entrenamiento funcional", desc: "Colchonetas para circuitos funcionales, caídas y movimientos de suelo." },
        { title: "Zonas de seguridad", desc: "Áreas acolchadas para minimizar riesgos en espacios de entrenamiento de alto impacto." },
      ]}
      specs={[
        { label: "Medidas disponibles", value: "Confirmar" },
        { label: "Grosor", value: "Confirmar" },
        { label: "Material exterior", value: "Confirmar" },
        { label: "Colores disponibles", value: "Confirmar" },
        { label: "Personalización", value: "Consultar disponibilidad" },
        { label: "Uso recomendado", value: "Protección, entrenamiento y áreas especiales" },
      ]}
      adviceTitle="¿Qué área necesitas"
      adviceTitleHighlight="proteger?"
      adviceText="Cuéntanos las medidas del espacio, tipo de actividad, nivel de impacto y uso esperado. Te orientamos por WhatsApp para elegir la colchoneta adecuada."
      adviceQuestions={[
        { label: "Medidas del espacio", q: "¿Cuántos metros cuadrados tiene el área a cubrir?" },
        { label: "Tipo de actividad", q: "¿Combate, artes marciales, funcional u otra?" },
        { label: "Nivel de impacto", q: "¿Impacto leve, moderado o de alta intensidad?" },
        { label: "Uso esperado", q: "¿Personal, escuela, gimnasio o evento profesional?" },
      ]}
      related={[
        { title: "Artes Marciales / Deportes de Combate", desc: "Soluciones especializadas para disciplinas de contacto y entrenamiento técnico.", Icon: Swords, href: "/catalogo/artes-marciales-deportes-combate" },
        { title: "Material para Gimnasio", desc: "Material resistente para equipar salas, clubes y espacios de entrenamiento.", Icon: Building2, href: "/catalogo/material-para-gimnasio" },
        { title: "Ring y Accesorios", desc: "Estructuras y complementos para espacios de combate profesional.", Icon: Box, href: "/catalogo/ring-y-accesorios" },
      ]}
    />
  );
}

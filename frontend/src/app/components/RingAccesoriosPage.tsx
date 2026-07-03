import { Box, Star, Wrench, Users, Building2, Layers, Hand } from "lucide-react";
import { CatalogCategoryPage } from "./CatalogCategoryPage";

const HERO = "https://images.unsplash.com/photo-1517438322307-e67111335449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080";

const GALLERY = [
  { src: HERO, label: "Ring de boxeo" },
  { src: "https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", label: "Combate en ring" },
  { src: "https://images.unsplash.com/photo-1606335543042-57c525922933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", label: "Entrenamiento sobre lona" },
  { src: "https://images.unsplash.com/photo-1636581563884-39569e81cbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", label: "Accesorios de combate" },
  { src: "https://images.unsplash.com/photo-1476525223214-c31ff100e1ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", label: "Espacio de combate" },
];

export function RingAccesoriosPage() {
  return (
    <CatalogCategoryPage
      heroImage={HERO}
      heroTitle="Ring"
      heroTitleHighlight="y Accesorios"
      heroSubtitle="Estructuras y complementos para espacios de combate profesional."
      features={[
        { Icon: Box, title: "Espacios listos para combatir", desc: "Rings y estructuras diseñadas para crear espacios de combate funcionales, seguros y de aspecto profesional." },
        { Icon: Star, title: "Estructura y presencia", desc: "Cada ring Julmo transmite la seriedad y el peso de un espacio de combate real." },
        { Icon: Wrench, title: "Accesorios funcionales", desc: "Complementos de calidad para completar el espacio: cuerdas, esquinas, lonas y accesorios de instalación." },
        { Icon: Users, title: "Para gimnasios, clubes y eventos", desc: "Desde instalaciones permanentes hasta estructuras para eventos y exhibiciones temporales." },
      ]}
      galleryImages={GALLERY}
      useCasesTitle="Elige según"
      useCasesTitleHighlight="tu proyecto"
      useCasesSubtitle="Soluciones de ring para cada escala y tipo de espacio de combate."
      useCases={[
        { title: "Gimnasios de boxeo", desc: "Ring permanente para gimnasios especializados en boxeo y disciplinas de contacto." },
        { title: "Clubes deportivos", desc: "Estructuras adaptadas a las necesidades de clubes con múltiples disciplinas de combate." },
        { title: "Eventos", desc: "Rings desmontables y transportables para veladas, exhibiciones y competencias." },
        { title: "Escuelas de combate", desc: "Rings de formación para academias y escuelas de artes marciales y boxeo." },
        { title: "Espacios profesionales", desc: "Soluciones completas para centros de alto rendimiento y espacios de nivel profesional." },
      ]}
      specs={[
        { label: "Medidas disponibles", value: "Confirmar" },
        { label: "Tipo de estructura", value: "Confirmar" },
        { label: "Accesorios incluidos", value: "Confirmar" },
        { label: "Instalación", value: "Consultar disponibilidad" },
        { label: "Personalización", value: "Consultar disponibilidad" },
        { label: "Uso recomendado", value: "Entrenamiento, exhibición y espacios de combate" },
      ]}
      adviceTitle="¿Qué ring"
      adviceTitleHighlight="necesitas?"
      adviceText="Cuéntanos el espacio disponible, tipo de uso, medidas aproximadas y necesidades del proyecto. Te orientamos por WhatsApp para elegir la mejor solución."
      adviceQuestions={[
        { label: "Espacio disponible", q: "¿Cuántos metros cuadrados tiene el área de instalación?" },
        { label: "Tipo de uso", q: "¿Entrenamiento permanente, competencia o evento?" },
        { label: "Medidas del ring", q: "¿Tienes una medida preferida o referencia específica?" },
        { label: "Necesidades del proyecto", q: "¿Incluye accesorios, instalación, personalización?" },
      ]}
      related={[
        { title: "Material para Gimnasio", desc: "Material resistente para equipar salas, clubes y espacios de entrenamiento.", Icon: Building2, href: "/catalogo/material-para-gimnasio" },
        { title: "Colchonetas Áreas Especiales", desc: "Superficies de protección para entrenamiento, combate y preparación física.", Icon: Layers, href: "/catalogo/colchonetas-areas-especiales" },
        { title: "Guantes de Boxeo", desc: "Calidad profesional, cuero premium y máxima protección para cada sesión.", Icon: Hand, href: "/catalogo/guantes-de-boxeo" },
      ]}
    />
  );
}

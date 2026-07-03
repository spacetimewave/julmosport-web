import { Building2, Shield, Layers, Users, Dumbbell, Hand, Box } from "lucide-react";
import { CatalogCategoryPage } from "./CatalogCategoryPage";

const HERO = "https://images.unsplash.com/photo-1748484531687-5faebc4a1965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080";

const GALLERY = [
  { src: HERO, label: "Saco de boxeo" },
  { src: "https://images.unsplash.com/photo-1731572005637-ce0bd30a02b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", label: "Estructura de entrenamiento" },
  { src: "https://images.unsplash.com/photo-1633394782368-6e7260566004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", label: "Accesorios de sala" },
  { src: "https://images.unsplash.com/photo-1670467429065-e06e3e1ab835?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", label: "Gimnasio industrial" },
  { src: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", label: "Área de entrenamiento" },
];

export function MaterialGimnasioPage() {
  return (
    <CatalogCategoryPage
      heroImage={HERO}
      heroTitle="Material para"
      heroTitleHighlight="Gimnasio"
      heroSubtitle="Equipamiento duradero para escuelas, clubes y espacios de entrenamiento."
      features={[
        { Icon: Building2, title: "Hecho para alto tráfico", desc: "Diseñado para resistir el uso intensivo de múltiples atletas día a día sin perder funcionalidad." },
        { Icon: Shield, title: "Resistencia de sala", desc: "Materiales y estructuras seleccionadas para durar en ambientes de alto rendimiento." },
        { Icon: Layers, title: "Equipamiento funcional", desc: "Cada pieza cumple una función específica dentro del sistema de entrenamiento de combate." },
        { Icon: Users, title: "Para clubes, gimnasios y academias", desc: "Opciones escalables para equipar desde una sala pequeña hasta un centro deportivo completo." },
      ]}
      galleryImages={GALLERY}
      useCasesTitle="Equipa"
      useCasesTitleHighlight="tu espacio"
      useCasesSubtitle="Soluciones de equipamiento para cada tipo de espacio deportivo."
      useCases={[
        { title: "Gimnasios de boxeo", desc: "Sacos, estructuras y accesorios para gimnasios especializados en boxeo y combate." },
        { title: "Clubes deportivos", desc: "Equipamiento versátil para clubes que atienden múltiples disciplinas de contacto." },
        { title: "Academias", desc: "Material pedagógico y funcional para academias de artes marciales y boxeo." },
        { title: "Centros de entrenamiento", desc: "Equipamiento de alto rendimiento para centros especializados en preparación de atletas." },
        { title: "Espacios profesionales", desc: "Soluciones completas para espacios de nivel profesional, eventos y exhibiciones." },
      ]}
      specs={[
        { label: "Materiales", value: "Confirmar" },
        { label: "Medidas disponibles", value: "Confirmar" },
        { label: "Instalación", value: "Consultar disponibilidad" },
        { label: "Colores disponibles", value: "Confirmar" },
        { label: "Personalización", value: "Consultar disponibilidad" },
        { label: "Uso recomendado", value: "Gimnasios, salas y centros deportivos" },
      ]}
      adviceTitle="¿Qué necesita"
      adviceTitleHighlight="tu gimnasio?"
      adviceText="Cuéntanos el tamaño de tu espacio, tipo de entrenamiento, cantidad de usuarios y necesidades del gimnasio. Te orientamos por WhatsApp para equiparlo correctamente."
      adviceQuestions={[
        { label: "Tamaño del espacio", q: "¿Cuántos metros cuadrados tiene tu sala?" },
        { label: "Tipo de entrenamiento", q: "¿Boxeo, artes marciales, funcional o mixto?" },
        { label: "Cantidad de usuarios", q: "¿Cuántos atletas usarán el espacio a la vez?" },
        { label: "Necesidades específicas", q: "¿Sacos, estructuras, colchonetas, ring u otros?" },
      ]}
      related={[
        { title: "Equipos para Entrenamiento", desc: "Herramientas para preparar campeones cada día con resistencia profesional.", Icon: Dumbbell, href: "/catalogo/equipos-para-entrenamiento" },
        { title: "Ring y Accesorios", desc: "Estructuras y complementos para espacios de combate profesional.", Icon: Box, href: "/catalogo/ring-y-accesorios" },
        { title: "Guantes de Boxeo", desc: "Calidad profesional, cuero premium y máxima protección para cada sesión.", Icon: Hand, href: "/catalogo/guantes-de-boxeo" },
      ]}
    />
  );
}

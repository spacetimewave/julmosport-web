import { Swords, Shield, Zap, Star, Layers, Hand } from "lucide-react";
import { CatalogCategoryPage } from "./CatalogCategoryPage";

const HERO = "https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080";

const GALLERY = [
  { src: HERO, label: "Atletas de combate" },
  { src: "https://images.unsplash.com/photo-1517438322307-e67111335449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", label: "Entrenamiento técnico" },
  { src: "https://images.unsplash.com/photo-1476525223214-c31ff100e1ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", label: "Disciplina de combate" },
  { src: "https://images.unsplash.com/photo-1606335543042-57c525922933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", label: "Potencia y técnica" },
  { src: "https://images.unsplash.com/photo-1636581563884-39569e81cbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", label: "Equipamiento técnico" },
];

export function ArtesMarcialesPage() {
  return (
    <CatalogCategoryPage
      heroImage={HERO}
      heroTitle="Artes Marciales"
      heroTitleHighlight="Deportes de Combate"
      heroSubtitle="Soluciones para disciplinas de contacto y entrenamiento técnico."
      features={[
        { Icon: Swords, title: "Para múltiples disciplinas", desc: "Equipamiento adaptado para boxeo, kickboxing, MMA, defensa personal y otras disciplinas de contacto." },
        { Icon: Shield, title: "Protección y rendimiento", desc: "Cada producto equilibra la protección necesaria con la libertad de movimiento que exige el entrenamiento técnico." },
        { Icon: Zap, title: "Hecho para entrenar duro", desc: "Materiales y construcción pensados para soportar sesiones intensas sin comprometer la seguridad." },
        { Icon: Star, title: "Tradición Julmo desde 1984", desc: "Más de 40 años fabricando equipamiento de combate para atletas venezolanos exigentes." },
      ]}
      galleryImages={GALLERY}
      useCasesTitle="Elige según"
      useCasesTitleHighlight="tu disciplina"
      useCasesSubtitle="Equipamiento especializado para cada arte marcial y deporte de combate."
      useCases={[
        { title: "Artes marciales", desc: "Equipamiento técnico para judo, karate, taekwondo, BJJ y otras disciplinas de contacto." },
        { title: "Kickboxing", desc: "Protección y material especializado para kickboxing y muay thai de entrenamiento y competencia." },
        { title: "Defensa personal", desc: "Equipamiento funcional para programas de defensa personal y autoprotección." },
        { title: "Entrenamiento técnico", desc: "Material para el desarrollo de técnica, coordinación y repertorio de movimiento de combate." },
        { title: "Escuelas y academias", desc: "Opciones por lote para dojos, escuelas de artes marciales y academias de combate." },
      ]}
      specs={[
        { label: "Disciplina recomendada", value: "Confirmar" },
        { label: "Materiales", value: "Confirmar" },
        { label: "Tallas disponibles", value: "Confirmar" },
        { label: "Colores disponibles", value: "Confirmar" },
        { label: "Personalización", value: "Consultar disponibilidad" },
        { label: "Uso recomendado", value: "Entrenamiento técnico y deportes de contacto" },
      ]}
      adviceTitle="¿Qué disciplina"
      adviceTitleHighlight="practicas?"
      adviceText="Cuéntanos tu disciplina, nivel, edad del atleta y tipo de entrenamiento. Te orientamos por WhatsApp para elegir el equipamiento adecuado."
      adviceQuestions={[
        { label: "Disciplina", q: "¿Qué arte marcial o deporte de combate practicas?" },
        { label: "Nivel", q: "¿Principiante, intermedio, avanzado o competidor?" },
        { label: "Edad del atleta", q: "¿Infantil, juvenil o adulto?" },
        { label: "Tipo de entrenamiento", q: "¿Técnica, contacto, competencia o defensa personal?" },
      ]}
      related={[
        { title: "Equipos para el Combate", desc: "Cascos, protectores y equipamiento de protección integral para el contacto.", Icon: Shield, href: "/catalogo/equipos-para-el-combate" },
        { title: "Colchonetas Áreas Especiales", desc: "Superficies de protección para entrenamiento, combate y preparación física.", Icon: Layers, href: "/catalogo/colchonetas-areas-especiales" },
        { title: "Guantes de Boxeo", desc: "Calidad profesional, cuero premium y máxima protección para cada sesión.", Icon: Hand, href: "/catalogo/guantes-de-boxeo" },
      ]}
    />
  );
}

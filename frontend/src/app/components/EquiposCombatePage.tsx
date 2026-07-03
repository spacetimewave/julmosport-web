import { Shield, Zap, Layers, Users, Hand, Dumbbell, Swords } from "lucide-react";
import { CatalogCategoryPage, WA } from "./CatalogCategoryPage";

const HERO = "https://images.unsplash.com/photo-1516150486159-4f71b8189d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080";

const GALLERY = [
  { src: HERO, label: "Casco de combate" },
  { src: "https://images.unsplash.com/photo-1636581563884-39569e81cbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", label: "Protección y combate" },
  { src: "https://images.unsplash.com/photo-1517438322307-e67111335449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", label: "Entrenamiento de contacto" },
  { src: "https://images.unsplash.com/photo-1606335543042-57c525922933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", label: "Atleta en entrenamiento" },
  { src: "https://images.unsplash.com/photo-1476525223214-c31ff100e1ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", label: "Equipamiento de combate" },
];

export function EquiposCombatePage() {
  return (
    <CatalogCategoryPage
      heroImage={HERO}
      heroTitle="Equipos para el"
      heroTitleHighlight="Combate"
      heroSubtitle="Protección y equipamiento para deportes de contacto."
      features={[
        { Icon: Shield, title: "Protección integral", desc: "Cascos, protectores y equipamiento diseñado para absorber el impacto y proteger al atleta en cada sesión." },
        { Icon: Zap, title: "Hechos para contacto real", desc: "Materiales y construcción pensados para resistir el contacto real, sesión tras sesión." },
        { Icon: Layers, title: "Durabilidad Julmo", desc: "Más de 40 años fabricando equipamiento de combate de calidad para atletas venezolanos y del mundo." },
        { Icon: Users, title: "Para atletas, escuelas y gimnasios", desc: "Líneas especializadas para cada nivel y disciplina, desde escuelas hasta deportistas de alto rendimiento." },
      ]}
      galleryImages={GALLERY}
      useCasesTitle="Elige según"
      useCasesTitleHighlight="tu disciplina"
      useCasesSubtitle="Equipamiento de protección para cada modalidad de contacto."
      useCases={[
        { title: "Boxeo", desc: "Cascos, protectores corporales y equipamiento para boxeo profesional y de entrenamiento." },
        { title: "Kickboxing", desc: "Protección adaptada para las exigencias del kickboxing y el muay thai." },
        { title: "Artes marciales", desc: "Equipamiento técnico para disciplinas de artes marciales mixtas y de combate." },
        { title: "Entrenamiento de contacto", desc: "Protección para sesiones de contacto controlado y trabajo técnico con pareja." },
        { title: "Gimnasios y escuelas", desc: "Opciones de compra por lote para equipar escuelas y gimnasios completos." },
      ]}
      specs={[
        { label: "Material exterior", value: "Confirmar" },
        { label: "Tallas disponibles", value: "Confirmar" },
        { label: "Colores disponibles", value: "Confirmar" },
        { label: "Personalización", value: "Consultar disponibilidad" },
        { label: "Uso recomendado", value: "Protección, contacto y entrenamiento técnico" },
        { label: "Disponibilidad", value: "Consultar por WhatsApp" },
      ]}
      adviceTitle="¿Qué protección"
      adviceTitleHighlight="necesitas?"
      adviceText="Cuéntanos tu disciplina, nivel de contacto, frecuencia de entrenamiento y tipo de uso. Te orientamos por WhatsApp para elegir el equipo adecuado."
      adviceQuestions={[
        { label: "Disciplina", q: "¿Qué deporte practicas? (boxeo, kickboxing, MMA...)" },
        { label: "Nivel de contacto", q: "¿Entrenamiento ligero, contacto real o competencia?" },
        { label: "Frecuencia de uso", q: "¿Cuántos días por semana entrenas?" },
        { label: "Tipo de uso", q: "¿Uso personal, escuela o gimnasio?" },
      ]}
      related={[
        { title: "Guantes de Boxeo", desc: "Calidad profesional, cuero premium y máxima protección para cada sesión.", Icon: Hand, href: "/catalogo/guantes-de-boxeo" },
        { title: "Equipos para Entrenamiento", desc: "Herramientas para preparar campeones cada día con resistencia profesional.", Icon: Dumbbell, href: "/catalogo/equipos-para-entrenamiento" },
        { title: "Artes Marciales / Deportes de Combate", desc: "Soluciones especializadas para disciplinas de contacto y entrenamiento técnico.", Icon: Swords, href: "/catalogo/artes-marciales-deportes-combate" },
      ]}
    />
  );
}

import { Dumbbell, Zap, Layers, Users, Hand, Shield, Building2 } from "lucide-react";
import { CatalogCategoryPage } from "./CatalogCategoryPage";

const HERO = "https://images.unsplash.com/photo-1670467429065-e06e3e1ab835?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080";

const GALLERY = [
  { src: HERO, label: "Equipamiento industrial" },
  { src: "https://images.unsplash.com/photo-1683758507025-6e74ad3ca1e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", label: "Accesorios de entrenamiento" },
  { src: "https://images.unsplash.com/photo-1606335543042-57c525922933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", label: "Atleta en entrenamiento" },
  { src: "https://images.unsplash.com/photo-1748483879355-204bf8fb3397?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", label: "Trabajo de potencia" },
  { src: "https://images.unsplash.com/photo-1773289336832-cbc7d8711da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", label: "Resistencia y técnica" },
];

export function EquiposEntrenamientoPage() {
  return (
    <CatalogCategoryPage
      heroImage={HERO}
      heroTitle="Equipos para"
      heroTitleHighlight="Entrenamiento"
      heroSubtitle="Herramientas resistentes para preparar campeones."
      features={[
        { Icon: Zap, title: "Preparación física real", desc: "Material diseñado para entrenamientos exigentes que desarrollan fuerza, resistencia y técnica de combate." },
        { Icon: Dumbbell, title: "Uso intenso diario", desc: "Construidos para soportar el uso diario en gimnasios de alto rendimiento sin perder calidad." },
        { Icon: Layers, title: "Resistencia profesional", desc: "Fabricación Julmo con más de 40 años de experiencia en equipamiento deportivo venezolano." },
        { Icon: Users, title: "Para entrenadores y atletas", desc: "Líneas para uso individual y para equipar equipos completos en escuelas y clubes deportivos." },
      ]}
      galleryImages={GALLERY}
      useCasesTitle="Elige según"
      useCasesTitleHighlight="tu entrenamiento"
      useCasesSubtitle="Equipamiento para cada etapa y objetivo de tu preparación."
      useCases={[
        { title: "Preparación física", desc: "Material para acondicionamiento físico general y preparación base del atleta de combate." },
        { title: "Fuerza y resistencia", desc: "Implementos para desarrollar potencia, resistencia muscular y capacidad aeróbica." },
        { title: "Técnica de combate", desc: "Equipamiento para el trabajo técnico específico de cada disciplina de combate." },
        { title: "Entrenamiento funcional", desc: "Herramientas para circuitos funcionales de alta intensidad adaptados al deporte de contacto." },
        { title: "Gimnasios y clubes", desc: "Opciones por lote para equipar salas de entrenamiento completas con material duradero." },
      ]}
      specs={[
        { label: "Materiales", value: "Confirmar" },
        { label: "Medidas / formatos", value: "Confirmar" },
        { label: "Colores disponibles", value: "Confirmar" },
        { label: "Personalización", value: "Consultar disponibilidad" },
        { label: "Uso recomendado", value: "Preparación física y entrenamiento deportivo" },
        { label: "Disponibilidad", value: "Consultar por WhatsApp" },
      ]}
      adviceTitle="¿Qué equipo"
      adviceTitleHighlight="necesitas?"
      adviceText="Cuéntanos el tipo de entrenamiento, espacio disponible, nivel de uso y cantidad de atletas. Te orientamos por WhatsApp para elegir el material adecuado."
      adviceQuestions={[
        { label: "Tipo de entrenamiento", q: "¿Fuerza, técnica, funcional o preparación física general?" },
        { label: "Espacio disponible", q: "¿Qué tamaño tiene tu sala o área de entrenamiento?" },
        { label: "Nivel de uso", q: "¿Uso personal, semi-profesional o comercial?" },
        { label: "Cantidad de atletas", q: "¿Cuántos atletas usarán el equipo diariamente?" },
      ]}
      related={[
        { title: "Guantes de Boxeo", desc: "Calidad profesional, cuero premium y máxima protección para cada sesión.", Icon: Hand, href: "/catalogo/guantes-de-boxeo" },
        { title: "Material para Gimnasio", desc: "Material resistente para equipar salas, clubes y espacios de entrenamiento.", Icon: Building2, href: "/catalogo/material-para-gimnasio" },
        { title: "Equipos para el Combate", desc: "Cascos, protectores y equipamiento de protección integral para el contacto.", Icon: Shield, href: "/catalogo/equipos-para-el-combate" },
      ]}
    />
  );
}

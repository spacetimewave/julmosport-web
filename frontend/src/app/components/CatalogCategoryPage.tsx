import { useRef, type ReactNode, type ComponentType } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, MessageCircle, ChevronRight } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";

export const WA = "https://wa.me/584142703026";

export interface FeatureCard {
  Icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  desc: string;
}

export interface GalleryImage {
  src: string;
  label: string;
}

export interface UseCase {
  title: string;
  desc: string;
}

export interface SpecRow {
  label: string;
  value: string;
}

export interface RelatedCategory {
  title: string;
  desc: string;
  Icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  href: string;
}

export interface AdviceQuestion {
  label: string;
  q: string;
}

export interface CatalogCategoryPageProps {
  heroImage: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  heroSupportingLine?: string;
  features: FeatureCard[];
  galleryImages: GalleryImage[];
  useCasesTitle: string;
  useCasesTitleHighlight: string;
  useCasesSubtitle?: string;
  useCases: UseCase[];
  specs: SpecRow[];
  specsDisclaimer?: string;
  adviceTitle: string;
  adviceTitleHighlight: string;
  adviceText: string;
  adviceQuestions: AdviceQuestion[];
  related: RelatedCategory[];
}

function SectionReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-block border-l-4 border-[#ffcc00] pl-4 mb-4">
      <span className="text-[#ffcc00] uppercase tracking-[0.3em] text-xs sm:text-sm font-bold">
        {children}
      </span>
    </div>
  );
}

export function CatalogCategoryPage(props: CatalogCategoryPageProps) {
  const {
    heroImage, heroTitle, heroTitleHighlight, heroSubtitle,
    heroSupportingLine = "Fabricando equipamiento profesional de combate desde 1984.",
    features, galleryImages,
    useCasesTitle, useCasesTitleHighlight, useCasesSubtitle, useCases,
    specs, specsDisclaimer,
    adviceTitle, adviceTitleHighlight, adviceText, adviceQuestions,
    related,
  } = props;

  return (
    <div className="bg-[#0A0A0A] min-h-screen overflow-x-hidden">
      <Header />

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={heroTitle} className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/60 to-transparent" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              to="/#catalog"
              className="inline-flex items-center gap-2 text-[#ffcc00]/70 hover:text-[#ffcc00] text-sm uppercase tracking-widest transition-colors duration-300"
            >
              <ArrowLeft size={14} />
              Volver al catálogo
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SectionLabel>Catálogo Julmo Sport</SectionLabel>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6"
          >
            <span className="text-white">{heroTitle}</span>
            <br />
            <span className="text-[#ffcc00]">{heroTitleHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-gray-300 text-base sm:text-xl max-w-xl mb-3 leading-relaxed"
          >
            {heroSubtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-gray-500 text-sm sm:text-base max-w-md mb-10 uppercase tracking-wider"
          >
            {heroSupportingLine}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#ffcc00] text-[#0A0A0A] px-8 py-4 font-black uppercase tracking-wider hover:bg-white transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              <MessageCircle size={18} />
              Consultar por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── 2. PRODUCT PROMISE ──────────────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-[#0A0A0A]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `repeating-linear-gradient(90deg,#ffcc00 0px,transparent 1px,transparent 60px),repeating-linear-gradient(0deg,#ffcc00 0px,transparent 1px,transparent 60px)` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-14">
            <SectionLabel>La promesa Julmo</SectionLabel>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-[0.95]">
              Construidos para durar.
              <br />
              <span className="text-[#ffcc00]">Diseñados para ganar.</span>
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-gradient-to-br from-[#151515] to-[#0d0d0d] border border-[#ffcc00]/20 hover:border-[#ffcc00]/60 p-7 transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-8 h-[3px] bg-[#ffcc00]" />
                <div className="absolute top-0 left-0 w-[3px] h-8 bg-[#ffcc00]" />
                <div className="bg-[#ffcc00]/10 border border-[#ffcc00]/20 group-hover:bg-[#ffcc00] group-hover:border-[#ffcc00] p-3 w-fit mb-5 transition-all duration-300">
                  <f.Icon className="w-5 h-5 text-[#ffcc00] group-hover:text-[#0A0A0A] transition-colors duration-300" strokeWidth={2.5} />
                </div>
                <h3 className="text-white font-black uppercase tracking-tight text-lg mb-3 leading-tight">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. EDITORIAL GALLERY ────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-14">
            <SectionLabel>Galería editorial</SectionLabel>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-[0.95]">
              Detalle que
              <br />
              <span className="text-[#ffcc00]">se siente</span>
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`group relative overflow-hidden ${i === 0 ? "col-span-2 md:col-span-1 row-span-2" : ""}`}
              >
                <div className={i === 0 ? "h-full min-h-[300px] sm:min-h-[420px]" : "h-[180px] sm:h-[200px]"}>
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ffcc00] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute bottom-0 left-0 p-3 sm:p-4">
                  <span className="text-xs uppercase tracking-wider text-gray-400 group-hover:text-[#ffcc00] transition-colors duration-300">
                    {img.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. USE CASES ────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-14">
            <SectionLabel>Líneas disponibles</SectionLabel>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-[0.95] mb-4">
              {useCasesTitle}
              <br />
              <span className="text-[#ffcc00]">{useCasesTitleHighlight}</span>
            </h2>
            {useCasesSubtitle && (
              <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">{useCasesSubtitle}</p>
            )}
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-gradient-to-br from-[#131313] to-[#0d0d0d] border border-[#ffcc00]/15 hover:border-[#ffcc00]/50 p-7 flex flex-col justify-between gap-6 transition-all duration-500"
              >
                <div className="flex items-start justify-between">
                  <span className="text-5xl font-black text-[#ffcc00]/10 group-hover:text-[#ffcc00]/20 transition-colors duration-300 leading-none select-none">
                    0{i + 1}
                  </span>
                  <div className="w-6 h-[2px] bg-[#ffcc00]/30 group-hover:bg-[#ffcc00] mt-3 transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-white font-black uppercase tracking-tight text-xl mb-3">
                    {uc.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 group-hover:text-gray-400 transition-colors duration-300">
                    {uc.desc}
                  </p>
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#ffcc00] text-xs uppercase tracking-widest font-bold hover:gap-3 transition-all duration-300"
                  >
                    Consultar disponibilidad
                    <ChevronRight size={13} />
                  </a>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ffcc00] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SPECS ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#050505]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-12">
            <SectionLabel>Ficha técnica</SectionLabel>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-[0.95]">
              Detalles del
              <br />
              <span className="text-[#ffcc00]">producto</span>
            </h2>
          </SectionReveal>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="border border-[#ffcc00]/20 overflow-hidden"
          >
            {specs.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 px-6 sm:px-8 py-5 hover:bg-[#ffcc00]/5 transition-colors duration-200 ${i < specs.length - 1 ? "border-b border-[#ffcc00]/10" : ""}`}
              >
                <span className="text-gray-500 text-xs uppercase tracking-widest font-bold sm:w-56 shrink-0">
                  {s.label}
                </span>
                <span className={`font-bold uppercase tracking-wide text-sm ${s.value === "Confirmar" || s.value === "Consultar disponibilidad" || s.value.startsWith("Consultar") ? "text-[#ffcc00]/60 italic" : "text-white"}`}>
                  {s.value}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-xs mt-5 uppercase tracking-wider"
          >
            {specsDisclaimer ?? "* Las especificaciones pueden variar según el modelo. Consultar disponibilidad por WhatsApp."}
          </motion.p>
        </div>
      </section>

      {/* ── 6. ADVICE ────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute right-0 top-0 text-[#ffcc00]/[0.03] font-black text-[200px] sm:text-[300px] leading-none select-none pointer-events-none">
          ?
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <SectionReveal>
              <SectionLabel>Asesoría personalizada</SectionLabel>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-[0.95] mb-6">
                {adviceTitle}
                <br />
                <span className="text-[#ffcc00]">{adviceTitleHighlight}</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
                {adviceText}
              </p>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#ffcc00] text-[#0A0A0A] px-8 py-4 font-black uppercase tracking-wider hover:bg-white transition-all duration-300 hover:scale-105 text-sm"
              >
                <MessageCircle size={18} />
                Recibir asesoría por WhatsApp
              </a>
            </SectionReveal>

            <div className="space-y-4">
              {adviceQuestions.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-[#111] border border-[#ffcc00]/15 px-5 py-4"
                >
                  <div className="bg-[#ffcc00] text-[#0A0A0A] font-black text-xs w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-[#ffcc00] text-xs uppercase tracking-widest font-bold mb-1">
                      {item.label}
                    </div>
                    <div className="text-gray-400 text-sm">{item.q}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. RELATED CATEGORIES ───────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-14">
            <SectionLabel>Catálogo completo</SectionLabel>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-[0.95]">
              Categorías
              <br />
              <span className="text-[#ffcc00]">relacionadas</span>
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-stretch">
            {related.map((rel, i) => (
              <motion.div
                key={rel.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="h-full"
              >
                <Link
                  to={rel.href}
                  className="group relative flex flex-col h-full bg-gradient-to-br from-[#141414] to-[#0d0d0d] border border-[#ffcc00]/15 hover:border-[#ffcc00]/50 p-8 transition-all duration-500"
                >
                  <div className="bg-[#ffcc00]/10 border border-[#ffcc00]/20 group-hover:bg-[#ffcc00] group-hover:border-[#ffcc00] p-3 w-fit mb-5 transition-all duration-300">
                    <rel.Icon className="w-5 h-5 text-[#ffcc00] group-hover:text-[#0A0A0A] transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <h3 className="text-white font-black uppercase tracking-tight text-xl mb-3">
                    {rel.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors duration-300 flex-1">
                    {rel.desc}
                  </p>
                  <div className="flex items-center gap-2 text-[#ffcc00] text-xs uppercase tracking-widest font-bold group-hover:gap-3 transition-all duration-300 mt-6">
                    Ver categoría
                    <ChevronRight size={13} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ffcc00] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ────────────────────────────────────── */}
      <section className="relative py-28 sm:py-36 overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] bg-[#ffcc00]/5 rounded-full blur-[100px]" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ffcc00]/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <span className="text-[#ffcc00]/[0.025] font-black text-[100px] sm:text-[180px] uppercase tracking-tighter select-none whitespace-nowrap">
            Julmo Sport
          </span>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <SectionReveal>
            <div className="inline-block border-l-4 border-r-4 border-[#ffcc00] px-6 mb-8">
              <span className="text-[#ffcc00] uppercase tracking-[0.3em] text-xs sm:text-sm font-bold">
                Desde 1984
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[1.05] mb-6">
              Calidad Julmo
              <br />
              <span className="text-[#ffcc00]">dura más contigo</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Consulta modelos, disponibilidad y personalización directamente por WhatsApp.
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#ffcc00] text-[#0A0A0A] px-10 py-5 font-black uppercase tracking-wider text-base sm:text-lg hover:bg-white transition-all duration-300 hover:scale-105 border-2 border-[#ffcc00]"
            >
              <MessageCircle size={22} />
              Hablar por WhatsApp
            </a>
          </SectionReveal>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

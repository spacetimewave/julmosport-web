import { BrowserRouter, Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { LegacySection } from "./components/LegacySection";
import { CatalogSection } from "./components/CatalogSection";
import { WhyJulmoSection } from "./components/WhyJulmoSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactCTA } from "./components/ContactCTA";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { ScrollToTop } from "./components/ScrollToTop";
import { GuantesDeBoxeoPage } from "./components/GuantesDeBoxeoPage";
import { EquiposCombatePage } from "./components/EquiposCombatePage";
import { EquiposEntrenamientoPage } from "./components/EquiposEntrenamientoPage";
import { MaterialGimnasioPage } from "./components/MaterialGimnasioPage";
import { ArtesMarcialesPage } from "./components/ArtesMarcialesPage";
import { ColchonetasPage } from "./components/ColchonetasPage";
import { RingAccesoriosPage } from "./components/RingAccesoriosPage";

function HomePage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <LegacySection />
        <CatalogSection />
        <WhyJulmoSection />
        <TestimonialsSection />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogo/guantes-de-boxeo" element={<GuantesDeBoxeoPage />} />
        <Route path="/catalogo/equipos-para-el-combate" element={<EquiposCombatePage />} />
        <Route path="/catalogo/equipos-para-entrenamiento" element={<EquiposEntrenamientoPage />} />
        <Route path="/catalogo/material-para-gimnasio" element={<MaterialGimnasioPage />} />
        <Route path="/catalogo/artes-marciales-deportes-combate" element={<ArtesMarcialesPage />} />
        <Route path="/catalogo/colchonetas-areas-especiales" element={<ColchonetasPage />} />
        <Route path="/catalogo/ring-y-accesorios" element={<RingAccesoriosPage />} />
      </Routes>
    </BrowserRouter>
  );
}

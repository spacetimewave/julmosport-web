import { Facebook, Instagram, Mail } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const isSubPage = typeof window !== "undefined" && window.location.pathname !== "/";

  const nav = (hash: string) => (isSubPage ? `/${hash}` : hash);

  const navLinks = [
    { label: "Inicio", href: isSubPage ? "/" : "#hero" },
    { label: "Legado", href: nav("#legacy") },
    { label: "Catálogo", href: nav("#catalog") },
    { label: "Por qué Julmo", href: nav("#why") },
    { label: "Contacto", href: nav("#contact") },
  ];

  const productLinks = [
    { label: "Guantes de Boxeo", href: "/catalogo/guantes-de-boxeo", internal: true },
    { label: "Equipos para el Combate", href: "/catalogo/equipos-para-el-combate", internal: true },
    { label: "Equipos para Entrenamiento", href: "/catalogo/equipos-para-entrenamiento", internal: true },
    { label: "Material para Gimnasio", href: "/catalogo/material-para-gimnasio", internal: true },
    { label: "Artes Marciales / Deportes de Combate", href: "/catalogo/artes-marciales-deportes-combate", internal: true },
    { label: "Colchonetas para Áreas Especiales", href: "/catalogo/colchonetas-areas-especiales", internal: true },
    { label: "Ring y Accesorios", href: "/catalogo/ring-y-accesorios", internal: true },
  ];

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-[#ffcc00]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link to="/" className="inline-block">
                <h3 className="text-3xl sm:text-4xl font-black text-[#ffcc00] tracking-tighter uppercase mb-2">
                  Julmo Sport
                </h3>
              </Link>
              <p className="text-gray-400 text-sm uppercase tracking-widest">
                Desde 1984
              </p>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-md">
              Fabricando equipamiento profesional de combate con orgullo venezolano.
              Calidad Julmo dura más contigo.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-12 h-12 flex items-center justify-center bg-[#ffcc00]/10 border border-[#ffcc00]/30 hover:bg-[#ffcc00] hover:border-[#ffcc00] transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-[#ffcc00] group-hover:text-[#0A0A0A] transition-colors duration-300" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-12 h-12 flex items-center justify-center bg-[#ffcc00]/10 border border-[#ffcc00]/30 hover:bg-[#ffcc00] hover:border-[#ffcc00] transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-[#ffcc00] group-hover:text-[#0A0A0A] transition-colors duration-300" />
              </a>
              <a
                href="mailto:info@julmosport.com"
                aria-label="Correo electrónico"
                className="w-12 h-12 flex items-center justify-center bg-[#ffcc00]/10 border border-[#ffcc00]/30 hover:bg-[#ffcc00] hover:border-[#ffcc00] transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-[#ffcc00] group-hover:text-[#0A0A0A] transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-white font-black uppercase text-sm tracking-wider mb-6">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#ffcc00] transition-colors duration-300 text-sm uppercase tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-white font-black uppercase text-sm tracking-wider mb-6">
              Productos
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#ffcc00] transition-colors duration-300 text-sm uppercase tracking-wide leading-snug block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-[#ffcc00]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Julmo Sport. Todos los derechos reservados.
              <br className="md:hidden" />
              <span className="text-[#ffcc00] ml-1">Hecho con orgullo en Venezuela</span>
            </p>
            <p className="text-gray-500 text-xs uppercase tracking-widest">
              Calidad Julmo dura más contigo
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ffcc00] to-transparent" />
    </footer>
  );
}

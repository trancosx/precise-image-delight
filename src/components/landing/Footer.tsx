import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-cdr.png.asset.json";
import { trackEvent, trackWhatsApp } from "@/lib/analytics";
import { site, whatsappHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-page grid gap-8 py-12 md:grid-cols-3">
        <div>
          <img
            src={logo.url}
            alt="Contabilidad de Resultados"
            width={955}
            height={252}
            loading="lazy"
            className="h-9 w-auto"
          />
          <p className="mt-4 text-sm text-muted-foreground">
            Estudio contable, tributario y financiero para empresas en el Perú. +20 años de
            experiencia y +150 empresas atendidas.
          </p>
        </div>

        <address className="not-italic text-sm text-muted-foreground">
          <p className="font-semibold text-secondary-foreground">Contacto</p>
          <p className="mt-3">
            {site.address.street}
            <br />
            {site.address.locality} – {site.address.region}, Perú
          </p>
          <p className="mt-3">
            <a
              href={`tel:${site.phone}`}
              onClick={() => trackEvent("phone_click")}
              className="transition-colors hover:text-primary"
            >
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mt-1">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("footer")}
              className="transition-colors hover:text-primary"
            >
              WhatsApp {site.whatsappDisplay}
            </a>
          </p>
          <p className="mt-1">
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-primary">
              {site.email}
            </a>
          </p>
        </address>

        <nav className="text-sm text-muted-foreground">
          <p className="font-semibold text-secondary-foreground">Legal</p>
          <ul className="mt-3 grid gap-2">
            <li>
              <Link to="/politica-de-privacidad" className="transition-colors hover:text-primary">
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link to="/terminos-y-condiciones" className="transition-colors hover:text-primary">
                Términos y Condiciones
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-border py-5">
        <p className="container-page text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

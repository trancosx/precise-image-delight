import logo from "@/assets/logo-cdr.png.asset.json";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { trackEvent } from "@/lib/analytics";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <img
          src={logo.url}
          alt="Contabilidad de Resultados"
          width={955}
          height={252}
          className="h-8 w-auto md:h-10"
        />
        <div className="flex items-center gap-5">
          <a
            href={`tel:${site.phone}`}
            onClick={() => trackEvent("phone_click")}
            className="hidden text-sm font-medium text-secondary-foreground transition-colors hover:text-primary lg:inline"
          >
            {site.phoneDisplay}
          </a>
          <WhatsAppCTA location="header" label="Hablar por WhatsApp" className="hidden sm:inline-flex" />
        </div>
      </div>
    </header>
  );
}

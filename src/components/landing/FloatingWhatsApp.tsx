import { WhatsAppIcon } from "@/components/WhatsAppCTA";
import { trackWhatsApp } from "@/lib/analytics";
import { whatsappHref } from "@/lib/site";

/** CTA flotante: barra compacta en móvil, botón discreto en desktop. */
export function FloatingWhatsApp() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsApp("float")}
          className="flex w-full items-center justify-center gap-2.5 rounded-full bg-accent px-5 py-3.5 text-base font-semibold text-accent-foreground shadow-[var(--shadow-cta)] active:bg-accent-dark"
        >
          <WhatsAppIcon className="size-5" />
          Hablar por WhatsApp
        </a>
      </div>

      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsApp("float")}
        aria-label="Hablar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 hidden size-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-cta)] transition-colors hover:bg-accent-dark md:flex"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </>
  );
}

import { trackWhatsApp } from "@/lib/analytics";
import { CTA_LABEL, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  /** Ubicación del botón: genera el evento whatsapp_<location>. */
  location: string;
  label?: string;
  size?: "md" | "lg";
  variant?: "solid" | "outline";
  className?: string;
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.35-1.4a9.82 9.82 0 0 0 4.69 1.19h.01c5.43 0 9.85-4.42 9.85-9.86A9.79 9.79 0 0 0 19 4.86 9.79 9.79 0 0 0 12.04 2zm0 17.98h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.17.83.85-3.09-.2-.32a8.14 8.14 0 0 1-1.25-4.34c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.86 5.8 2.41a8.14 8.14 0 0 1 2.4 5.8c0 4.52-3.68 8.23-8.16 8.23z" />
    </svg>
  );
}

export function WhatsAppCTA({
  location,
  label = CTA_LABEL,
  size = "md",
  variant = "solid",
  className,
}: Props) {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsApp(location)}
      aria-label={label}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-colors",
        size === "lg"
          ? "px-7 py-4 text-base md:text-lg"
          : "px-5 py-3 text-sm md:text-base",
        variant === "solid"
          ? "bg-accent text-accent-foreground shadow-[var(--shadow-cta)] hover:bg-accent-dark"
          : "border border-primary text-primary hover:bg-primary-soft",
        className,
      )}
    >
      <WhatsAppIcon className={size === "lg" ? "size-6 shrink-0" : "size-5 shrink-0"} />
      <span>{label}</span>
    </a>
  );
}

export { WhatsAppIcon };

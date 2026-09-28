import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { site } from "@/lib/site";

const items = [
  "Empresas que ya están operando y creciendo.",
  "Empresas que necesitan delegar su contabilidad a un equipo especializado.",
  "Empresas que quieren reducir riesgos tributarios.",
  "Empresas que necesitan estados financieros confiables.",
  "Empresas que quieren entender mejor su flujo de caja y rentabilidad.",
  "Empresas que buscan una asesoría más cercana a la gerencia.",
  "Empresas que sienten que su contador actual cumple, pero no les ayuda a entender el negocio.",
];

export function ClienteIdeal() {
  return (
    <section className="section-y bg-surface">
      <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <h2 className="text-2xl font-semibold text-secondary-foreground md:text-4xl">
            ¿Para qué tipo de empresa es este servicio?
          </h2>
          <ul className="mt-8 grid gap-3">
            {items.map((i) => (
              <li key={i} className="flex gap-3 text-base text-secondary-foreground">
                <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-1 size-5 shrink-0 fill-accent">
                  <path d="M8.1 14.6 4 10.5l1.4-1.4 2.7 2.7 6.5-6.5L16 6.7z" />
                </svg>
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="h-fit rounded-2xl border border-primary-soft bg-card p-6 shadow-[var(--shadow-card)] md:p-8 lg:sticky lg:top-28">
          <p className="eyebrow">Inversión</p>
          <p className="mt-3 font-display text-3xl font-semibold text-primary md:text-4xl">
            Planes desde {site.priceFrom}.
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            El precio final depende del volumen de operaciones, número de trabajadores,
            obligaciones y nivel de acompañamiento requerido.
          </p>
          <WhatsAppCTA location="client_fit" size="lg" className="mt-6 w-full" />
        </aside>
      </div>
    </section>
  );
}

import { WhatsAppCTA } from "@/components/WhatsAppCTA";

const filas = [
  {
    antes: "Solo recibes el monto de impuestos del mes.",
    despues: "Entiendes qué está pasando financieramente en tu empresa.",
  },
  {
    antes: "Te enteras de un problema cuando llega una observación.",
    despues: "Identificas riesgos de manera preventiva.",
  },
  {
    antes: "Sabes cuánto vendes.",
    despues: "Sabes cuánto ganas y dónde están tus márgenes.",
  },
  {
    antes: "Tomas decisiones principalmente por intuición.",
    despues: "Tomas decisiones apoyándote en información financiera.",
  },
];

export function Transformacion() {
  return (
    <section className="section-y bg-surface-blue">
      <div className="container-page">
        <h2 className="max-w-3xl text-2xl font-semibold text-secondary-foreground md:text-4xl">
          Tu contador debería ayudarte a entender tu negocio.
        </h2>

        <div className="mt-10 grid gap-4">
          <div className="hidden grid-cols-2 gap-4 px-1 md:grid">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Antes
            </p>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Con nosotros</p>
          </div>
          {filas.map((f) => (
            <div key={f.antes} className="grid gap-3 md:grid-cols-2 md:gap-4">
              <p className="rounded-xl border border-border bg-background/70 p-5 text-base text-muted-foreground">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wider md:hidden">
                  Antes
                </span>
                {f.antes}
              </p>
              <p className="flex gap-3 rounded-xl border border-primary-soft bg-card p-5 text-base font-medium text-secondary-foreground shadow-[var(--shadow-card)]">
                <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-1 size-5 shrink-0 fill-accent">
                  <path d="M8.1 14.6 4 10.5l1.4-1.4 2.7 2.7 6.5-6.5L16 6.7z" />
                </svg>
                <span>
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-primary md:hidden">
                    Con nosotros
                  </span>
                  {f.despues}
                </span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <WhatsAppCTA location="services" />
        </div>
      </div>
    </section>
  );
}

import { WhatsAppCTA } from "@/components/WhatsAppCTA";

const preguntas = [
  "¿Mi empresa realmente está ganando dinero?",
  "¿Dónde están mis principales riesgos contables o tributarios?",
  "¿Por qué tengo ventas pero sigo teniendo problemas de caja?",
  "¿Qué productos, clientes o servicios realmente me dejan margen?",
  "¿Estoy pagando más impuestos de los necesarios dentro del marco legal?",
  "¿Estoy preparado ante una eventual fiscalización de SUNAT?",
];

export function Problema() {
  return (
    <section className="section-y bg-surface">
      <div className="container-page">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-secondary-foreground md:text-4xl">
            Cuando una empresa crece, cumplir con SUNAT ya no es suficiente.
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            La contabilidad debería decirte mucho más que cuánto tienes que pagar de impuestos.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {preguntas.map((p) => (
            <li
              key={p}
              className="rounded-xl border border-border bg-card p-5 text-base font-medium text-secondary-foreground shadow-[var(--shadow-card)]"
            >
              <span className="mb-3 block h-1 w-8 rounded-full bg-primary" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>

        <div className="mt-10 max-w-3xl border-l-4 border-primary pl-5">
          <p className="text-base text-secondary-foreground md:text-lg">
            Si hoy tu contador principalmente procesa documentos y presenta declaraciones,
            probablemente estás utilizando solo una parte del valor que puede darte tu información
            contable.
          </p>
        </div>

        <div className="mt-8">
          <WhatsAppCTA location="problem" />
        </div>
      </div>
    </section>
  );
}

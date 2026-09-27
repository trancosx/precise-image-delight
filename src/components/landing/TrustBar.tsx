import { site } from "@/lib/site";

const items = [
  "+20 años de experiencia",
  "+150 empresas atendidas",
  "Contabilidad · Finanzas · Tributación",
  `Planes desde ${site.priceFrom}`,
];

export function TrustBar() {
  return (
    <section aria-label="Señales de confianza" className="border-b border-border bg-surface">
      <div className="container-page grid grid-cols-2 gap-px py-6 text-center lg:grid-cols-4">
        {items.map((item) => (
          <p
            key={item}
            className="px-2 py-3 text-sm font-medium text-secondary-foreground lg:border-l lg:border-border lg:first:border-l-0 lg:text-base"
          >
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}

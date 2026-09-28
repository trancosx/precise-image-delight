const pilares = [
  {
    titulo: "Contabilidad y cumplimiento tributario",
    texto:
      "Nos encargamos del procesamiento contable, libros electrónicos, declaraciones mensuales, estados financieros y demás obligaciones de tu empresa.",
  },
  {
    titulo: "Prevención de riesgos",
    texto:
      "Revisamos tu información contable y tributaria para detectar inconsistencias, contingencias y riesgos antes de que se conviertan en problemas mayores.",
  },
  {
    titulo: "Gestión financiera",
    texto: "Transformamos la información contable en información útil para la gerencia.",
    tags: [
      "Flujo de caja",
      "Ventas",
      "Márgenes",
      "Rentabilidad",
      "Costos",
      "Resultados",
      "Indicadores financieros",
    ],
  },
  {
    titulo: "Estrategia tributaria",
    texto:
      "Analizamos las operaciones de tu empresa para identificar alternativas tributarias eficientes dentro del marco legal.",
  },
];

export function Solucion() {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">Nuestro servicio</p>
          <h2 className="mt-4 text-2xl font-semibold text-primary md:text-4xl">
            Contabilidad que protege tu empresa y te ayuda a tomar decisiones.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {pilares.map((p, i) => (
            <article
              key={p.titulo}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8"
            >
              <span className="font-display text-sm font-semibold text-primary">
                0{i + 1}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-secondary-foreground md:text-2xl">
                {p.titulo}
              </h3>
              <p className="mt-3 text-base text-muted-foreground">{p.texto}</p>
              {p.tags && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-primary-soft px-3 py-1 text-sm font-medium text-primary"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export const faqs = [
  {
    q: "¿Cuánto cuesta el servicio contable?",
    a: "Los planes empiezan desde S/1,000 mensuales. La tarifa depende principalmente del volumen de operaciones, número de trabajadores y complejidad contable y tributaria de cada empresa.",
  },
  {
    q: "¿Atienden solamente empresas de Lima?",
    a: "Atendemos empresas en Lima y otras ciudades del Perú de manera presencial y remota.",
  },
  {
    q: "¿Solo se encargan de declarar impuestos?",
    a: "No. Además de las obligaciones contables y tributarias, nuestro enfoque busca que la gerencia tenga información financiera útil para controlar riesgos y tomar mejores decisiones.",
  },
  {
    q: "Ya tengo contador. ¿Puedo cambiarme?",
    a: "Sí. Podemos revisar la situación actual de tu contabilidad y definir un proceso ordenado de transición.",
  },
  {
    q: "¿Pueden revisar si mi contabilidad tiene problemas?",
    a: "Sí. Podemos revisar la información disponible e identificar posibles contingencias contables o tributarias.",
  },
  {
    q: "¿Trabajan con cualquier tamaño de empresa?",
    a: "Nuestro servicio está principalmente orientado a empresas que ya tienen operaciones y necesitan un nivel de gestión contable y financiera más completo.",
  },
];

export function Faq() {
  return (
    <section className="section-y bg-surface">
      <div className="container-page max-w-3xl">
        <h2 className="text-2xl font-semibold text-secondary-foreground md:text-4xl">
          Preguntas frecuentes
        </h2>
        <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card px-5 md:px-7">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-secondary-foreground md:text-lg">
                {f.q}
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="size-5 shrink-0 fill-primary transition-transform group-open:rotate-45"
                >
                  <path d="M9 4h2v12H9z" />
                  <path d="M4 9h12v2H4z" />
                </svg>
              </summary>
              <p className="mt-3 text-base text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

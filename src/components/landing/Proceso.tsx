const pasos = [
  {
    titulo: "Nos cuentas sobre tu empresa.",
    texto: "Conocemos brevemente tu operación y qué necesitas mejorar.",
  },
  {
    titulo: "Entendemos tu situación.",
    texto: "Revisamos tus necesidades contables, tributarias y financieras.",
  },
  {
    titulo: "Te recomendamos un plan.",
    texto: "Definimos el alcance adecuado según el tamaño y complejidad de tu empresa.",
  },
  {
    titulo: "Nos encargamos de tu contabilidad.",
    texto: "Comenzamos el proceso de gestión, seguimiento y acompañamiento.",
  },
];

export function Proceso() {
  return (
    <section className="section-y">
      <div className="container-page">
        <h2 className="text-2xl font-semibold text-primary md:text-4xl">¿Cómo empezamos?</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pasos.map((p, i) => (
            <li key={p.titulo} className="border-t-2 border-primary-soft pt-5">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary-soft font-display text-sm font-semibold text-primary">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-secondary-foreground">{p.titulo}</h3>
              <p className="mt-2 text-base text-muted-foreground">{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

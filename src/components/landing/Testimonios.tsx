import { LiteYouTube } from "@/components/LiteYouTube";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

const testimonios = [
  { id: "aWCoxbQ8IpU", event: "testimonial_1_play" },
  { id: "c45nwaqt7mU", event: "testimonial_2_play" },
  { id: "LW-ifgQY6oI", event: "testimonial_3_play" },
  { id: "SYw2ihlymHU", event: "testimonial_4_play" },
];

export function Testimonios() {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">Testimonios reales</p>
          <h2 className="mt-4 text-2xl font-semibold text-primary md:text-4xl">
            Empresas que ya confían en Contabilidad de Resultados
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            No queremos que solo nosotros te contemos cómo trabajamos. Escucha la experiencia de
            empresarios que ya confiaron su contabilidad y gestión financiera a nuestro equipo.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonios.map((t, i) => (
            <figure key={t.id}>
              <LiteYouTube
                videoId={t.id}
                title={`Testimonio ${i + 1} — Cliente de Contabilidad de Resultados`}
                playEvent={t.event}
              />
              <figcaption className="mt-3 text-sm font-medium text-muted-foreground">
                Cliente de Contabilidad de Resultados
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-surface p-6 text-center md:p-10">
          <h3 className="mx-auto max-w-2xl text-xl font-semibold text-secondary-foreground md:text-2xl">
            ¿Quieres tener este nivel de claridad y acompañamiento en tu empresa?
          </h3>
          <div className="mt-6 flex flex-col items-center">
            <WhatsAppCTA location="testimonials" size="lg" className="w-full sm:w-auto" />
            <p className="mt-3 text-sm text-muted-foreground">
              Cuéntanos sobre tu empresa y evaluemos cómo podemos ayudarte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

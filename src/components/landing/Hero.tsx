import heroImg from "@/assets/hero-gerencia.jpg";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { site } from "@/lib/site";

const signals = [
  "+20 años de experiencia",
  "+150 empresas atendidas en Perú",
  `Planes desde ${site.priceFrom}`,
];

export function Hero() {
  return (
    <section className="border-b border-border bg-gradient-to-b from-surface-blue to-background">
      <div className="container-page grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
        <div>
          <p className="eyebrow">Estudio contable y financiero para empresas</p>
          <h1 className="mt-4 text-3xl leading-[1.12] font-semibold text-primary md:text-5xl">
            Tu empresa ya creció. Tu contabilidad también debería hacerlo.
          </h1>
          <p className="mt-4 max-w-xl text-lg font-medium text-secondary-foreground md:text-xl">
            Contabilidad para empresas que necesitan controlar sus riesgos, impuestos, flujo de
            caja y rentabilidad.
          </p>
          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            No nos limitamos a declarar impuestos cada mes. Nos encargamos de tu contabilidad y te
            damos una visión clara de la salud financiera de tu empresa para que puedas tomar
            mejores decisiones.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {signals.map((s) => (
              <li key={s} className="flex items-center gap-2 text-sm font-medium text-secondary-foreground">
                <svg viewBox="0 0 20 20" aria-hidden="true" className="size-4 shrink-0 fill-accent">
                  <path d="M8.1 14.6 4 10.5l1.4-1.4 2.7 2.7 6.5-6.5L16 6.7z" />
                </svg>
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <WhatsAppCTA location="hero" size="lg" className="w-full sm:w-auto" />
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Cuéntanos brevemente sobre tu empresa y te orientamos sobre el plan adecuado.
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroImg}
            alt="Gerentes revisando información financiera de su empresa junto a su asesor contable"
            width={1280}
            height={1280}
            fetchPriority="high"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-card)] lg:aspect-[5/6]"
          />
          <div className="mt-4 rounded-xl border border-border bg-card p-4 text-sm shadow-[var(--shadow-card)] lg:absolute lg:-bottom-6 lg:-left-6 lg:mt-0 lg:max-w-[16rem]">
            <p className="font-display text-lg font-semibold text-primary">Desde {site.priceFrom}</p>
            <p className="mt-1 text-muted-foreground">
              Contabilidad, tributación y gestión financiera para empresas en operación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

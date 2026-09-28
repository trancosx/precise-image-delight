import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { site } from "@/lib/site";

export function CtaFinal() {
  return (
    <section className="section-y bg-gradient-to-b from-surface-blue to-background">
      <div className="container-page max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-primary md:text-4xl">
          Tu empresa puede crecer sin perder el control.
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          A medida que un negocio crece, también crecen sus operaciones, sus obligaciones
          tributarias y sus riesgos.
        </p>
        <p className="mt-6 font-display text-xl font-semibold text-secondary-foreground md:text-2xl">
          Tu contabilidad debería crecer contigo.
        </p>
        <p className="mt-4 text-base text-muted-foreground">
          Conversemos sobre la situación contable y financiera de tu empresa.
        </p>
        <p className="mt-6 inline-block rounded-full border border-primary-soft bg-card px-4 py-2 text-sm font-semibold text-primary">
          Planes desde {site.priceFrom}.
        </p>
        <div className="mt-8 flex flex-col items-center">
          <WhatsAppCTA location="final" size="lg" className="w-full sm:w-auto" />
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Cuéntanos brevemente sobre tu empresa y te orientamos sobre el plan adecuado.
          </p>
        </div>
      </div>
    </section>
  );
}

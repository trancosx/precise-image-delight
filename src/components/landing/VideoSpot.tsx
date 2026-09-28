import { LiteYouTube } from "@/components/LiteYouTube";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { site } from "@/lib/site";

export function VideoSpot() {
  return (
    <section className="section-y">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div>
          <p className="eyebrow">Contabilidad para tomar mejores decisiones</p>
          <h2 className="mt-4 text-2xl font-semibold text-primary md:text-4xl">
            Mucho más que presentar impuestos todos los meses.
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Conoce cómo entendemos la contabilidad y por qué creemos que la información financiera
            debe ayudar al empresario a controlar riesgos y tomar mejores decisiones.
          </p>
          <div className="mt-7">
            <WhatsAppCTA location="after_video" />
            <p className="mt-3 text-sm text-muted-foreground">Planes desde {site.priceFrom}.</p>
          </div>
        </div>
        <LiteYouTube
          videoId="Xl268CPe2ig"
          title="Contabilidad de Resultados — spot institucional"
          playEvent="video_spot_play"
        />
      </div>
    </section>
  );
}

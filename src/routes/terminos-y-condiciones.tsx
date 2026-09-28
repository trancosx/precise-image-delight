import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/lib/site";

const title = "Términos y Condiciones | Contabilidad de Resultados";
const description =
  "Condiciones de uso del sitio de Contabilidad de Resultados y alcance de la información publicada sobre nuestros servicios contables.";

export const Route = createFileRoute("/terminos-y-condiciones")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Terminos,
});

function Terminos() {
  return (
    <main className="container-page max-w-3xl py-14">
      <Link to="/" className="text-sm font-medium text-primary hover:underline">
        ← Volver al inicio
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-primary">Términos y Condiciones</h1>
      <div className="mt-6 grid gap-4 text-base text-muted-foreground">
        <p>
          El contenido de esta página es informativo y describe los servicios contables,
          tributarios y financieros que ofrece {site.name} a empresas en el Perú.
        </p>
        <h2 className="mt-4 text-xl font-semibold text-secondary-foreground">Alcance y precios</h2>
        <p>
          Los planes empiezan desde {site.priceFrom}. El precio final depende del volumen de
          operaciones, número de trabajadores, obligaciones y nivel de acompañamiento requerido, y
          se define en una propuesta específica para cada empresa.
        </p>
        <h2 className="mt-4 text-xl font-semibold text-secondary-foreground">
          Naturaleza de la información
        </h2>
        <p>
          La información publicada no constituye asesoría contable o tributaria aplicable a un caso
          particular. Cualquier recomendación requiere el análisis previo de la situación concreta
          de la empresa.
        </p>
        <h2 className="mt-4 text-xl font-semibold text-secondary-foreground">Contacto</h2>
        <p>
          Para consultas sobre estos términos escríbenos a{" "}
          <a className="text-primary hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          o llámanos al {site.phoneDisplay}.
        </p>
      </div>
    </main>
  );
}

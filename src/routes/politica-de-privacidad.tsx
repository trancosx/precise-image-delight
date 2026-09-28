import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/lib/site";

const title = "Política de Privacidad | Contabilidad de Resultados";
const description =
  "Cómo Contabilidad de Resultados trata los datos personales de quienes nos contactan por WhatsApp, teléfono o correo.";

export const Route = createFileRoute("/politica-de-privacidad")({
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
  component: Privacidad,
});

function Privacidad() {
  return (
    <main className="container-page max-w-3xl py-14">
      <Link to="/" className="text-sm font-medium text-primary hover:underline">
        ← Volver al inicio
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-primary">Política de Privacidad</h1>
      <div className="mt-6 grid gap-4 text-base text-muted-foreground">
        <p>
          En {site.name} respetamos la privacidad de las personas que se comunican con nosotros.
          Esta política explica qué datos recibimos y cómo los utilizamos.
        </p>
        <h2 className="mt-4 text-xl font-semibold text-secondary-foreground">Datos que tratamos</h2>
        <p>
          Recibimos los datos que tú nos proporcionas voluntariamente al escribirnos por WhatsApp,
          llamarnos o enviarnos un correo: nombre, teléfono, correo electrónico y la información
          sobre tu empresa que decidas compartir.
        </p>
        <h2 className="mt-4 text-xl font-semibold text-secondary-foreground">Finalidad</h2>
        <p>
          Utilizamos esos datos únicamente para responder tu consulta, orientarte sobre el servicio
          contable adecuado y dar seguimiento comercial a tu solicitud.
        </p>
        <h2 className="mt-4 text-xl font-semibold text-secondary-foreground">
          Cookies y medición
        </h2>
        <p>
          Esta página puede utilizar cookies y herramientas de medición como Google Analytics y
          Google Ads para entender el uso del sitio y la efectividad de nuestras campañas. Puedes
          desactivar las cookies desde la configuración de tu navegador.
        </p>
        <h2 className="mt-4 text-xl font-semibold text-secondary-foreground">Tus derechos</h2>
        <p>
          Puedes solicitar el acceso, la actualización o la eliminación de tus datos escribiéndonos
          a{" "}
          <a className="text-primary hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </div>
    </main>
  );
}

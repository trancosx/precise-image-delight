import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { VideoSpot } from "@/components/landing/VideoSpot";
import { Problema } from "@/components/landing/Problema";
import { Solucion } from "@/components/landing/Solucion";
import { Transformacion } from "@/components/landing/Transformacion";
import { Testimonios } from "@/components/landing/Testimonios";
import { ClienteIdeal } from "@/components/landing/ClienteIdeal";
import { Proceso } from "@/components/landing/Proceso";
import { Faq, faqs } from "@/components/landing/Faq";
import { CtaFinal } from "@/components/landing/CtaFinal";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";
import { ScrollTracker } from "@/components/landing/ScrollTracker";
import { site } from "@/lib/site";

const title = "Estudio Contable para Empresas en Lima | Contabilidad de Resultados";
const description =
  "Servicio contable, tributario y financiero para empresas en Perú. Controla riesgos, flujo de caja, rentabilidad e impuestos. +20 años de experiencia.";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    areaServed: "PE",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(schema),
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="pb-20 md:pb-0">
      <ScrollTracker />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <VideoSpot />
        <Problema />
        <Solucion />
        <Transformacion />
        <Testimonios />
        <ClienteIdeal />
        <Proceso />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

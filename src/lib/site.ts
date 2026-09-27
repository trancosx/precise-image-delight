/**
 * Datos reales de Contabilidad de Resultados.
 * Editar aquí para actualizar teléfonos, correo o dirección en toda la landing.
 */
export const site = {
  name: "Contabilidad de Resultados",
  legalName: "Contabilidad de Resultados",
  url: "https://www.contabilidaderesultados.com/",
  whatsappNumber: "51993124755",
  whatsappDisplay: "+51 993 124 755",
  phone: "+51955485276",
  phoneDisplay: "+51 955 485 276",
  email: "contacto@contabilidaderesultados.com",
  address: {
    street: "Conde de Salvatierra 103, Of. 201",
    locality: "Santiago de Surco",
    region: "Lima",
    country: "PE",
  },
  priceFrom: "S/1,000 mensuales",
  whatsappMessage:
    "Hola, vengo de Google y quisiera información sobre el servicio contable para mi empresa.",
} as const;

export const CTA_LABEL = "Hablar con un asesor por WhatsApp";

export function whatsappHref(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

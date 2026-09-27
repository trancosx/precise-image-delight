/**
 * Capa mínima de tracking, lista para Google Tag Manager / GA4 / Google Ads.
 * Empuja los eventos al dataLayer y, si existe gtag, también lo llama.
 */
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  window.gtag?.("event", event, params);
}

/** Conversión principal: clic a WhatsApp, diferenciado por ubicación. */
export function trackWhatsApp(location: string) {
  trackEvent("whatsapp_click", { location });
  trackEvent(`whatsapp_${location}`);
}

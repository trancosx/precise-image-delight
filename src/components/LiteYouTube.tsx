import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Props = {
  videoId: string;
  title: string;
  /** Evento GA4 al reproducir, ej. video_spot_play */
  playEvent: string;
  className?: string;
};

/**
 * Embed ligero de YouTube: muestra la miniatura y solo carga el iframe al hacer clic.
 * Evita cargar varios reproductores pesados al entrar a la página.
 */
export function LiteYouTube({ videoId, title, playEvent, className }: Props) {
  const [active, setActive] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-2xl bg-secondary shadow-[var(--shadow-card)]",
        className,
      )}
    >
      {active ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            trackEvent(playEvent, { video_id: videoId });
            setActive(true);
          }}
          className="group absolute inset-0 size-full cursor-pointer"
          aria-label={`Reproducir video: ${title}`}
        >
          <img
            src={thumb}
            alt={title}
            loading="lazy"
            width={480}
            height={360}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 bg-[oklch(0.25_0.03_250_/_25%)] transition-colors group-hover:bg-[oklch(0.25_0.03_250_/_15%)]" />
          <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background/95 shadow-[var(--shadow-card)] transition-transform group-hover:scale-110 md:size-20">
            <svg viewBox="0 0 24 24" className="ml-1 size-7 fill-primary md:size-8" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

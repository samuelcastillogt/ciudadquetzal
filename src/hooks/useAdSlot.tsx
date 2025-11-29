import { useEffect } from 'react';

// Hook ligero para inicializar un slot de AdSense de forma segura.
// - Espera a que el contenedor tenga ancho > 0
// - Espera a que entre en viewport (IntersectionObserver)
// - Comprueba que el <ins> no tenga data-adsbygoogle-status="done"
// - Usa ResizeObserver y fallback por intervalo
export function useAdSlot(ref: React.RefObject<HTMLElement> | null) {
  useEffect(() => {
    const node = ref && ref.current;
    if (!node) return;

    let pushed = false;
    const getIns = () => (node.querySelector ? node.querySelector('ins.adsbygoogle') as HTMLElement | null : null);

    const canPush = () => {
      const ins = getIns();
      if (!ins) return false;
      const status = ins.getAttribute('data-adsbygoogle-status');
      if (status === 'done') return false;
      const width = ins.clientWidth || node.clientWidth || 0;
      return width > 0;
    };

    const doPush = () => {
      try {
        (window as any).adsbygoogle = (window as any).adsbygoogle || [];
        (window as any).adsbygoogle.push({});
        pushed = true;
      } catch (e) {
        // Registrar y continuar; evitar que la app rompa
        // TagError puede venir si AdSense intenta renderizar con width=0 o duplicado
        console.warn('Adsense push error (useAdSlot)', e);
      }
    };

    const tryPush = () => {
      if (pushed) return;
      if (canPush()) doPush();
    };

    // IntersectionObserver: preferible para cargar cuando el slot está visible
    let io: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            tryPush();
          }
        }
      }, { threshold: 0.01 });
      io.observe(node);
    }

    // ResizeObserver para detectar cuando el ancho deja de ser 0
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => tryPush());
      ro.observe(node);
    }

    // Fallback por intervalo (500ms) durante unos segundos
    let intervalId: number | null = null;
    let attempts = 0;
    if (!pushed) {
      intervalId = window.setInterval(() => {
        attempts += 1;
        tryPush();
        // parar después de 20 intentos (~10s)
        if (pushed || attempts > 20) {
          if (intervalId) clearInterval(intervalId);
        }
      }, 500);
    }

    // Intento inmediato también
    tryPush();

    return () => {
      if (io) io.disconnect();
      if (ro) ro.disconnect();
      if (intervalId) clearInterval(intervalId);
    };
  }, [ref]);
}

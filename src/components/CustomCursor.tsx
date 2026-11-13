import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const isRunning = useRef(false);
  const animId = useRef<number | null>(null);
  const isVisible = useRef(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on devices that have a real fine pointer (mouse/trackpad) and hover capability
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const checkFinePointer = () => {
      const fine = mediaQuery.matches && window.innerWidth >= 768;
      setEnabled(fine);
      if (fine) {
        document.documentElement.classList.add('has-custom-cursor');
      } else {
        document.documentElement.classList.remove('has-custom-cursor');
      }
    };

    checkFinePointer();
    mediaQuery.addEventListener('change', checkFinePointer);
    window.addEventListener('resize', checkFinePointer, { passive: true });

    return () => {
      mediaQuery.removeEventListener('change', checkFinePointer);
      window.removeEventListener('resize', checkFinePointer);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const renderLoop = () => {
      const dx = mousePos.current.x - ringPos.current.x;
      const dy = mousePos.current.y - ringPos.current.y;

      ringPos.current.x += dx * 0.2;
      ringPos.current.y += dy * 0.2;

      ring.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;

      // If close enough, stop the loop to save 100% idle CPU/GPU cycles
      if (Math.abs(dx) < 0.15 && Math.abs(dy) < 0.15) {
        isRunning.current = false;
        animId.current = null;
        return;
      }

      animId.current = requestAnimationFrame(renderLoop);
    };

    const wakeUpLoop = () => {
      if (!isRunning.current) {
        isRunning.current = true;
        animId.current = requestAnimationFrame(renderLoop);
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isVisible.current) {
        isVisible.current = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }

      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      // Pure GPU compositor translation - 0 layout reflow
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;

      wakeUpLoop();
    };

    const onPointerLeave = () => {
      isVisible.current = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    // Event delegation for interactable hover effects (covers current and future elements)
    const onPointerOver = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('a, button, [data-cursor], input, textarea, select, [role="button"], .group, .glow-btn, .ghost-btn')) {
        dot.classList.add('hovering');
        ring.classList.add('hovering');
      }
    };

    const onPointerOut = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('a, button, [data-cursor], input, textarea, select, [role="button"], .group, .glow-btn, .ghost-btn')) {
        dot.classList.remove('hovering');
        ring.classList.remove('hovering');
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('mouseleave', onPointerLeave, { passive: true });
    document.addEventListener('pointerover', onPointerOver, { passive: true });
    document.addEventListener('pointerout', onPointerOut, { passive: true });

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('mouseleave', onPointerLeave);
      document.removeEventListener('pointerover', onPointerOver);
      document.removeEventListener('pointerout', onPointerOut);
      if (animId.current !== null) {
        cancelAnimationFrame(animId.current);
      }
      isRunning.current = false;
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          opacity: 0,
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          opacity: 0,
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        }}
      />
    </>
  );
}

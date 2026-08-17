'use client';
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    dot.style.opacity = '0';

    let mouseX = 0, mouseY = 0;
    let visible = false;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) {
        dot.style.opacity = '1';
        visible = true;
      }
      dot.style.transform = `translate(${mouseX - 7}px, ${mouseY - 7}px)`;
    };

    const onEnterInteractive = () => {
      dot.style.width = '28px';
      dot.style.height = '28px';
      dot.style.marginLeft = '-7px';
      dot.style.marginTop = '-7px';
    };

    const onLeaveInteractive = () => {
      dot.style.width = '14px';
      dot.style.height = '14px';
      dot.style.marginLeft = '0';
      dot.style.marginTop = '0';
    };

    const addListeners = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select, label').forEach((el) => {
        el.addEventListener('mouseenter', onEnterInteractive);
        el.addEventListener('mouseleave', onLeaveInteractive);
      });
    };

    window.addEventListener('mousemove', onMove);
    addListeners();

    // Re-attach on DOM mutations (e.g., menu opens)
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '14px',
        height: '14px',
        borderRadius: '50%',
        backgroundColor: '#ffffff',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 999999,
        transition: 'width 0.2s ease, height 0.2s ease, margin 0.2s ease, opacity 0.3s ease',
        willChange: 'transform',
      }}
    />
  );
}

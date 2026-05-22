import { useRef, useEffect, ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
}: MagnetProps) {
  const magnetRef = useRef<HTMLDivElement>(null);
  const isActiveRef = useRef(false);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!magnetRef.current) return;
      
      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      const absDistX = Math.abs(distX);
      const absDistY = Math.abs(distY);

      if (absDistX < width / 2 + padding && absDistY < height / 2 + padding) {
        if (!isActiveRef.current) {
          magnetRef.current.style.transition = activeTransition;
          isActiveRef.current = true;
        }
        
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => {
          if (magnetRef.current) {
            magnetRef.current.style.transform = `translate3d(${distX / strength}px, ${distY / strength}px, 0)`;
          }
        });
      } else {
        if (isActiveRef.current) {
          magnetRef.current.style.transition = inactiveTransition;
          isActiveRef.current = false;
          
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(() => {
            if (magnetRef.current) {
              magnetRef.current.style.transform = `translate3d(0px, 0px, 0)`;
            }
          });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div
      ref={magnetRef}
      className={className}
      style={{
        transition: inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}

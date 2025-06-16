// components/SlideUp.tsx
import React, { useEffect, useRef } from "react";

interface SlideUpProps {
  children: React.ReactNode;
  offset?: string;
}

const SlideUp = ({ children, offset = "0px" }: SlideUpProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-slideUpCubiBezier");
          }
        });
      },
      { rootMargin: offset }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [offset]); // offset is now properly included in dependencies

  return (
    <div ref={ref} className="relative opacity-0">
      {children}
    </div>
  );
};

export default SlideUp;
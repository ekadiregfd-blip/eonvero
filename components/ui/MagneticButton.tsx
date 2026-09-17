"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  target?: string;
  onClick?: () => void;
  strength?: number;
  id?: string;
  ariaLabel?: string;
}

export default function MagneticButton({
  children,
  className = "",
  as: Tag = "button",
  href,
  target,
  onClick,
  strength = 0.3,
  id,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setTransform({
      x: x * strength,
      y: y * strength,
    });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
  };

  const props = {
    ref: ref as React.RefObject<never>,
    className: `${className} transition-transform duration-300`,
    style: {
      transform: `translate(${transform.x}px, ${transform.y}px)`,
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick,
    id,
    "aria-label": ariaLabel,
    ...(Tag === "a" ? { href, target, rel: target === "_blank" ? "noopener noreferrer" : undefined } : {}),
  };

  return <Tag {...props}>{children}</Tag>;
}

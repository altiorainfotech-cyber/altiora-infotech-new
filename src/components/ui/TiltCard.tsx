"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "gold" | "blue" | "neutral";
}

export function TiltCard({ children, className = "", glowColor = "gold" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -8; // Max 8 deg tilt
    const rotY = ((x - centerX) / centerX) * 8;

    setRotateX(rotX);
    setRotateY(rotY);

    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;
    setGlowPos({ x: glowX, y: glowY, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlowPos((prev) => ({ ...prev, opacity: 0 }));
  };

  const borderGlowClass =
    glowColor === "gold"
      ? "radial-gradient(400px circle at var(--x) var(--y), rgba(211, 172, 60, 0.4), transparent 60%)"
      : glowColor === "blue"
      ? "radial-gradient(400px circle at var(--x) var(--y), rgba(61, 114, 201, 0.4), transparent 60%)"
      : "radial-gradient(400px circle at var(--x) var(--y), rgba(255, 255, 255, 0.2), transparent 60%)";

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
      className={`relative rounded-2xl glass-panel p-6 sm:p-8 transition-shadow duration-300 ${className}`}
    >
      {/* Specular Mouse Glow Highlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          opacity: glowPos.opacity,
          background: borderGlowClass,
          // @ts-expect-error CSS variable injection
          "--x": `${glowPos.x}%`,
          "--y": `${glowPos.y}%`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

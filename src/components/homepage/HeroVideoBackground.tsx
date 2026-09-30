"use client";

import { useEffect, useRef } from "react";

export function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85;
    }
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* HTML5 Video Loop */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop"
        className="h-full w-full object-cover opacity-25 mix-blend-multiply filter contrast-125 saturate-125 transition-opacity duration-1000"
      >
        <source
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay for Text Readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(240, 247, 255, 0.7) 0%, rgba(248, 250, 252, 0.88) 65%, #ffffff 100%)",
        }}
      />

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[550px] w-[950px] rounded-full bg-blue-500/15 blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute top-10 -left-20 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="absolute top-10 -right-20 h-[450px] w-[450px] rounded-full bg-blue-600/15 blur-3xl" />

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.04)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_95%)]" />
    </div>
  );
}

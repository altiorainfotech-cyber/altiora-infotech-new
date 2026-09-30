"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Ambient homepage backdrop: a light, premium "data constellation" —
 * transparent WebGL over the white page background, metallic blue/gold
 * particles with a handful of pre-computed nearest-neighbor connections
 * (no per-frame graph search), plus two slow counter-rotating telemetry
 * rings. Restrained, light, mouse-parallaxed.
 */
export default function Background3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 16);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 1.7));
    const keyLight = new THREE.DirectionalLight(0x3d72c9, 2.0);
    keyLight.position.set(8, 10, 10);
    scene.add(keyLight);
    const goldLight = new THREE.PointLight(0xd3ac3c, 3.2, 40);
    goldLight.position.set(-8, -4, 6);
    scene.add(goldLight);

    // Particle field
    const COUNT = isMobile ? 140 : 300;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const cBlue = new THREE.Color("#1c4fa1");
    const cBlueLight = new THREE.Color("#3d72c9");
    const cGold = new THREE.Color("#d3ac3c");
    const pts: THREE.Vector3[] = [];

    for (let i = 0; i < COUNT; i++) {
      const v = new THREE.Vector3((Math.random() - 0.5) * 36, (Math.random() - 0.5) * 22, (Math.random() - 0.5) * 30 - 6);
      pts.push(v);
      positions[i * 3] = v.x;
      positions[i * 3 + 1] = v.y;
      positions[i * 3 + 2] = v.z;

      const mix = Math.random();
      const c = mix < 0.5 ? cBlue : mix < 0.85 ? cBlueLight : cGold;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const particleMat = new THREE.PointsMaterial({ size: 0.07, vertexColors: true, transparent: true, opacity: 0.4, sizeAttenuation: true });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Pre-computed constellation lines: connect nearby points once at setup.
    const linePositions: number[] = [];
    const MAX_LINKS = isMobile ? 32 : 70;
    const LINK_RADIUS = 4.0;
    let links = 0;
    outer: for (let i = 0; i < pts.length && links < MAX_LINKS; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < LINK_RADIUS) {
          linePositions.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
          links++;
          if (links >= MAX_LINKS) break outer;
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(linePositions), 3));
    const lineMat = new THREE.LineBasicMaterial({ color: 0x3d72c9, transparent: true, opacity: 0.12 });
    const constellation = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(constellation);

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        particles.rotation.y += 0.0003;
        constellation.rotation.y += 0.0003;

        // Fluid water wave particle motion
        const posArr = particleGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < COUNT; i++) {
          const idx = i * 3;
          posArr[idx + 1] = pts[i].y + Math.sin(t * 1.4 + pts[i].x * 0.25 + pts[i].z * 0.15) * 0.45;
        }
        particleGeo.attributes.position.needsUpdate = true;

        if (!isMobile) {
          camera.position.x += (mouseX * 1.4 - camera.position.x) * 0.025;
          camera.position.y += (-mouseY * 0.9 - camera.position.y) * 0.025;
          camera.lookAt(0, 0, -2);
        }

        goldLight.intensity = 2.8 + Math.sin(t * 0.6) * 0.6;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      particleGeo.dispose();
      particleMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden opacity-90"
      aria-hidden="true"
    />
  );
}

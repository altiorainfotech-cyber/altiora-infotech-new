"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function PaidAdsBackground() {
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
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 14);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x3d72c9, 2.2);
    keyLight.position.set(10, 10, 10);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xd3ac3c, 1.6);
    fillLight.position.set(-10, -6, 8);
    scene.add(fillLight);

    // Ecosystem group: concentric "target" rings representing reach & precision targeting
    const group = new THREE.Group();
    scene.add(group);

    const segments = isMobile ? 32 : 64;

    const blueMat = new THREE.MeshStandardMaterial({
      color: 0x163f85,
      emissive: 0x0d2755,
      emissiveIntensity: 0.3,
      metalness: 0.85,
      roughness: 0.2,
      transparent: true,
      opacity: 0.5,
    });

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd3ac3c,
      emissive: 0x7d6215,
      emissiveIntensity: 0.35,
      metalness: 0.9,
      roughness: 0.15,
      transparent: true,
      opacity: 0.45,
    });

    const ringRadii = [2.4, 3.4, 4.4];
    const rings: THREE.Mesh[] = [];
    ringRadii.forEach((radius, idx) => {
      const geo = new THREE.TorusGeometry(radius, 0.03, segments / 2, segments * 2);
      const mesh = new THREE.Mesh(geo, idx % 2 === 0 ? goldMat : blueMat);
      mesh.rotation.x = Math.PI / 2.4 + idx * 0.15;
      mesh.rotation.y = idx * 0.2;
      group.add(mesh);
      rings.push(mesh);
    });

    // Orbiting nodes representing ad platforms/channels
    const nodeGeo = new THREE.OctahedronGeometry(0.22, 0);
    const nodeCount = isMobile ? 4 : 7;
    const nodes: { mesh: THREE.Mesh; radius: number; speed: number; offset: number; height: number }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const mesh = new THREE.Mesh(nodeGeo, i % 2 === 0 ? goldMat : blueMat);
      const radius = 3.0 + (i % 3) * 0.7;
      const speed = 0.15 + Math.random() * 0.15;
      const offset = (i / nodeCount) * Math.PI * 2;
      const height = (Math.random() - 0.5) * 2.5;
      mesh.position.set(Math.cos(offset) * radius, height, Math.sin(offset) * radius);
      group.add(mesh);
      nodes.push({ mesh, radius, speed, offset, height });
    }

    group.position.set(isMobile ? 0 : 6.5, isMobile ? -3 : -1, -3);
    if (isMobile) group.scale.set(0.55, 0.55, 0.55);

    // Ambient particle field
    const particleCount = isMobile ? 120 : 260;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const cGold = new THREE.Color("#d3ac3c");
    const cBlue = new THREE.Color("#1c4fa1");

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const c = Math.random() > 0.5 ? cGold : cBlue;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

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
        rings.forEach((ring, idx) => {
          ring.rotation.z += 0.0015 * (idx % 2 === 0 ? 1 : -1);
        });

        nodes.forEach((node) => {
          const angle = node.offset + t * node.speed;
          node.mesh.position.set(Math.cos(angle) * node.radius, node.height + Math.sin(t * 0.4 + node.offset) * 0.3, Math.sin(angle) * node.radius);
          node.mesh.rotation.x += 0.01;
          node.mesh.rotation.y += 0.008;
        });

        group.rotation.y += 0.0008;
        particles.rotation.y -= 0.0004;

        if (!isMobile) {
          camera.position.x += (mouseX * 1.0 - camera.position.x) * 0.03;
          camera.position.y += (-mouseY * 1.0 - camera.position.y) * 0.03;
          camera.lookAt(0, 0, 0);
        }
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      rings.forEach((ring) => ring.geometry.dispose());
      nodeGeo.dispose();
      blueMat.dispose();
      goldMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden opacity-80"
      aria-hidden="true"
    />
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Sparkles, Activity } from "lucide-react";

const PILLARS = ["Strategy", "Marketing", "Technology", "Data", "People", "Growth"];

export function AboutHeroVisualClient() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activePillar, setActivePillar] = useState<string>("Growth");

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x3b82f6, 3, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xd3ac3c, 2.5, 20);
    pointLight2.position.set(-5, -5, 3);
    scene.add(pointLight2);

    // Central Core: Golden Dodecahedron Mesh (Altiora Core)
    const coreGeo = new THREE.DodecahedronGeometry(1.0, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xd3ac3c,
      roughness: 0.25,
      metalness: 0.85,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    // Inner Wireframe Shell
    const wireGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const wireMat = new THREE.MeshStandardMaterial({
      color: 0x1d4ed8,
      roughness: 0.1,
      metalness: 0.9,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    scene.add(wireMesh);

    // Outer Orbiting Pillar Nodes (6 Pillars)
    const pillarGroup = new THREE.Group();
    scene.add(pillarGroup);

    const nodeSpheres: THREE.Mesh[] = [];
    const radius = 2.6;

    PILLARS.forEach((_, idx) => {
      const angle = (idx / PILLARS.length) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      const sphereGeo = new THREE.SphereGeometry(0.22, 16, 16);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: idx % 2 === 0 ? 0x2563eb : 0xd3ac3c,
        metalness: 0.8,
        roughness: 0.2,
      });
      const node = new THREE.Mesh(sphereGeo, sphereMat);
      node.position.set(x, y, 0);
      pillarGroup.add(node);
      nodeSpheres.push(node);

      // Connecting ray lines to core
      const lineMat = new THREE.LineBasicMaterial({
        color: idx % 2 === 0 ? 0x3b82f6 : 0xd3ac3c,
        transparent: true,
        opacity: 0.5,
      });
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(x, y, 0),
      ]);
      const line = new THREE.Line(lineGeo, lineMat);
      pillarGroup.add(line);
    });

    // Floating Background Particle Cloud
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 12;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;
    let pIdx = 0;
    let lastTime = 0;

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);

      // Rotate WebGL meshes
      coreMesh.rotation.y += 0.008;
      coreMesh.rotation.x += 0.004;
      wireMesh.rotation.y -= 0.005;
      wireMesh.rotation.z += 0.003;
      pillarGroup.rotation.z += 0.004;
      particles.rotation.y -= 0.002;

      // Mouse parallax smooth lerp
      camera.position.x += (mouseX * 0.8 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 0.8 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Cycle active pillar label every 3 seconds
      if (time - lastTime > 3000) {
        pIdx = (pIdx + 1) % PILLARS.length;
        setActivePillar(PILLARS[pIdx]);
        lastTime = time;
      }

      renderer.render(scene, camera);
    };

    animate(0);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] flex items-center justify-center">
      <div ref={mountRef} className="w-full h-full absolute inset-0" />

      {/* Floating System Overlay Badge */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2.5 rounded-xl border border-white/90 bg-white/95 px-3.5 py-2 text-xs font-extrabold text-ink shadow-lg backdrop-blur-md">
        <div className="relative flex h-3 w-3 items-center justify-center">
          <span className="absolute h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
          <span className="relative h-2 w-2 rounded-full bg-blue-600" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-mono uppercase tracking-wider text-muted">Altiora System Node</span>
          <span className="font-extrabold text-blue-900 flex items-center gap-1.5">
            {activePillar} Pillar Active <Sparkles className="h-3 w-3 text-gold-500 animate-pulse" />
          </span>
        </div>
      </div>

      {/* Dynamic Telemetry Status */}
      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-3 rounded-2xl border border-gold-400/40 bg-white/95 p-3 text-xs font-black text-ink shadow-xl backdrop-blur-md">
        <Activity className="h-4 w-4 text-emerald-500 animate-pulse" />
        <div className="flex flex-col">
          <span className="text-[9px] uppercase font-mono tracking-wider text-gold-700">System Integration</span>
          <span className="text-xs font-black bg-gradient-to-r from-blue-900 to-gold-600 bg-clip-text text-transparent">
            6/6 Pillars Converged
          </span>
        </div>
      </div>
    </div>
  );
}

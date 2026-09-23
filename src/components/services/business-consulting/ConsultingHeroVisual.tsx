"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ConsultingHeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8.5);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 2.1);
    scene.add(ambientLight);

    const pointLightBlue = new THREE.PointLight(0x3d72c9, 5.0, 30);
    pointLightBlue.position.set(5, 5, 8);
    scene.add(pointLightBlue);

    const pointLightGold = new THREE.PointLight(0xd3ac3c, 4.5, 30);
    pointLightGold.position.set(-5, -5, 8);
    scene.add(pointLightGold);

    const group = new THREE.Group();

    // Central "strategy compass" core
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x163f85,
      emissive: 0x0d2755,
      emissiveIntensity: 0.4,
      metalness: 0.85,
      roughness: 0.2,
    });
    const coreGeo = new THREE.IcosahedronGeometry(0.55, 1);
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    const ringMats = [
      new THREE.MeshStandardMaterial({ color: 0xd3ac3c, emissive: 0xc9a227, emissiveIntensity: 0.5, metalness: 0.9, roughness: 0.1 }),
      new THREE.MeshStandardMaterial({ color: 0x163f85, emissive: 0x123571, emissiveIntensity: 0.4, metalness: 0.85, roughness: 0.2 }),
    ];
    const ringRadii = [1.9, 2.6];
    const rings: THREE.Mesh[] = [];
    ringRadii.forEach((radius, idx) => {
      const geo = new THREE.TorusGeometry(radius, 0.03, 24, 100);
      const mesh = new THREE.Mesh(geo, ringMats[idx]);
      mesh.rotation.x = Math.PI / 2.6 + idx * 0.22;
      group.add(mesh);
      rings.push(mesh);
    });

    // Ascending milestone markers orbiting the strategy core
    const markerGeo = new THREE.ConeGeometry(0.2, 0.5, 6);
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xd3ac3c, metalness: 0.9, roughness: 0.15 });
    const blueMat = new THREE.MeshStandardMaterial({ color: 0x163f85, metalness: 0.8, roughness: 0.2 });

    const markerCount = 6;
    const markers: { mesh: THREE.Mesh; radius: number; offset: number }[] = [];
    const nodeLines: THREE.Line[] = [];
    const lineMat = new THREE.LineBasicMaterial({ color: 0x8fb0e0, transparent: true, opacity: 0.35 });

    for (let i = 0; i < markerCount; i++) {
      const mesh = new THREE.Mesh(markerGeo, i % 2 === 0 ? goldMat : blueMat);
      const radius = 3.2;
      const offset = (i / markerCount) * Math.PI * 2;
      mesh.position.set(Math.cos(offset) * radius, Math.sin(offset * 1.3) * 0.5, Math.sin(offset) * radius * 0.4);
      group.add(mesh);
      markers.push({ mesh, radius, offset });

      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(6), 3));
      const line = new THREE.Line(lineGeo, lineMat);
      group.add(line);
      nodeLines.push(line);
    }

    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const cGold = new THREE.Color("#d3ac3c");
    const cBlue = new THREE.Color("#1c4fa1");

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const c = Math.random() > 0.5 ? cGold : cBlue;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({ size: 0.07, vertexColors: true, transparent: true, opacity: 0.5 });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    scene.add(group);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
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
        group.rotation.y += 0.005;
        particles.rotation.y -= 0.0008;
        core.rotation.y += 0.006;
        core.rotation.x += 0.003;

        rings.forEach((ring, idx) => {
          ring.rotation.z += 0.004 * (idx % 2 === 0 ? 1 : -1);
        });

        markers.forEach((marker, i) => {
          const angle = marker.offset + t * 0.3;
          marker.mesh.position.set(
            Math.cos(angle) * marker.radius,
            Math.sin(angle * 1.3) * 0.5,
            Math.sin(angle) * marker.radius * 0.4
          );
          marker.mesh.rotation.y += 0.02;

          const posAttr = nodeLines[i].geometry.getAttribute("position") as THREE.BufferAttribute;
          posAttr.setXYZ(0, 0, 0, 0);
          posAttr.setXYZ(1, marker.mesh.position.x, marker.mesh.position.y, marker.mesh.position.z);
          posAttr.needsUpdate = true;
        });
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);

      coreGeo.dispose();
      coreMat.dispose();
      rings.forEach((ring) => ring.geometry.dispose());
      ringMats.forEach((mat) => mat.dispose());
      markerGeo.dispose();
      goldMat.dispose();
      blueMat.dispose();
      lineMat.dispose();
      nodeLines.forEach((line) => line.geometry.dispose());
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 h-full w-full" />;
}

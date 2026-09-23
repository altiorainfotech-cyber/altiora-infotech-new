"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WebDevHeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    let width = container.clientWidth;
    let height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 9);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 2.5);
    scene.add(ambientLight);

    const pointLightBlue = new THREE.PointLight(0x2563eb, 6, 25);
    pointLightBlue.position.set(6, 4, 6);
    scene.add(pointLightBlue);

    const pointLightGold = new THREE.PointLight(0xd3ac3c, 5, 25);
    pointLightGold.position.set(-6, -4, 6);
    scene.add(pointLightGold);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Central "WEB ARCHITECTURE" core node
    const coreGeo = new THREE.IcosahedronGeometry(1.1, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      emissive: 0x1d4ed8,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    const innerCoreGeo = new THREE.SphereGeometry(0.55, 32, 32);
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: 0xd3ac3c,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.9,
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    mainGroup.add(innerCoreMesh);

    // Orbiting Web Tech Nodes (Next.js, React, Tailwind, Core Web Vitals, API Matrix)
    const nodeTypes = [
      { name: "Next.js", color: 0x3b82f6, radius: 2.8, speed: 0.5, size: 0.22 },
      { name: "Performance", color: 0x10b981, radius: 3.4, speed: -0.4, size: 0.18 },
      { name: "UX/UI", color: 0xd3ac3c, radius: 2.2, speed: 0.7, size: 0.24 },
      { name: "API Matrix", color: 0x6366f1, radius: 3.8, speed: -0.3, size: 0.25 },
      { name: "CRO Core", color: 0xf59e0b, radius: 4.4, speed: 0.25, size: 0.28 },
    ];

    const nodeMeshes: { mesh: THREE.Mesh; type: (typeof nodeTypes)[0]; angle: number }[] = [];
    nodeTypes.forEach((type, idx) => {
      const geo = new THREE.OctahedronGeometry(type.size, 0);
      const mat = new THREE.MeshStandardMaterial({
        color: type.color,
        emissive: type.color,
        emissiveIntensity: 0.5,
        roughness: 0.2,
        metalness: 0.8,
      });
      const mesh = new THREE.Mesh(geo, mat);
      const angle = (idx / nodeTypes.length) * Math.PI * 2;
      mesh.position.set(Math.cos(angle) * type.radius, Math.sin(angle * 1.3) * 0.8, Math.sin(angle) * type.radius * 0.5);
      mainGroup.add(mesh);
      nodeMeshes.push({ mesh, type, angle });
    });

    // Concentric Web Architecture Rings
    const ringRadii = [2.2, 3.1, 4.0];
    const ringMats: THREE.MeshStandardMaterial[] = [];
    const ringGeos: THREE.TorusGeometry[] = [];
    ringRadii.forEach((r, idx) => {
      const geo = new THREE.TorusGeometry(r, 0.02, 16, 100);
      const mat = new THREE.MeshStandardMaterial({
        color: idx % 2 === 0 ? 0xd3ac3c : 0x2563eb,
        emissive: idx % 2 === 0 ? 0xc9a227 : 0x1d4ed8,
        emissiveIntensity: 0.4,
        roughness: 0.3,
        metalness: 0.7,
      });
      const ring = new THREE.Mesh(geo, mat);
      ring.rotation.x = Math.PI / 2.8 + idx * 0.15;
      mainGroup.add(ring);
      ringMats.push(mat);
      ringGeos.push(geo);
    });

    // Code Stream Particles
    const particleCount = 200;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleInitialPositions: { x: number; y: number; z: number; speed: number }[] = [];
    const particleColors = new Float32Array(particleCount * 3);

    const cBlue = new THREE.Color(0x2563eb);
    const cGold = new THREE.Color(0xd3ac3c);
    const cEmerald = new THREE.Color(0x10b981);

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 1.5 + Math.random() * 4;
      const heightOffset = (Math.random() - 0.5) * 3;
      const x = Math.cos(angle) * radius;
      const y = heightOffset;
      const z = Math.sin(angle) * radius;

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      particleInitialPositions.push({
        x,
        y,
        z,
        speed: 0.008 + Math.random() * 0.015,
      });

      const colorPick = Math.random();
      const col = colorPick > 0.6 ? cBlue : colorPick > 0.3 ? cGold : cEmerald;
      particleColors[i * 3] = col.r;
      particleColors[i * 3 + 1] = col.g;
      particleColors[i * 3 + 2] = col.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.075,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particleSystem);

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      targetMouseX = (relX / rect.width - 0.5) * 2;
      targetMouseY = (relY / rect.height - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      if (!prefersReducedMotion) {
        coreMesh.rotation.y = time * 0.25;
        coreMesh.rotation.x = time * 0.15;
        innerCoreMesh.rotation.y = -time * 0.4;

        mainGroup.rotation.y = mouseX * 0.35 + Math.sin(time * 0.3) * 0.08;
        mainGroup.rotation.x = -mouseY * 0.35 + Math.cos(time * 0.25) * 0.08;

        nodeMeshes.forEach((node) => {
          node.angle += node.type.speed * delta;
          const a = node.angle;
          node.mesh.position.set(
            Math.cos(a) * node.type.radius,
            Math.sin(a * 1.5) * 0.7,
            Math.sin(a) * node.type.radius * 0.5
          );
          node.mesh.rotation.x += 0.02;
          node.mesh.rotation.y += 0.03;
        });

        const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
        const posArray = posAttr.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
          let px = posArray[i * 3];
          let py = posArray[i * 3 + 1];
          let pz = posArray[i * 3 + 2];

          const dist = Math.sqrt(px * px + py * py + pz * pz);
          if (dist < 0.8) {
            const init = particleInitialPositions[i];
            posArray[i * 3] = init.x;
            posArray[i * 3 + 1] = init.y;
            posArray[i * 3 + 2] = init.z;
          } else {
            const speed = particleInitialPositions[i].speed;
            posArray[i * 3] -= (px / dist) * speed;
            posArray[i * 3 + 1] -= (py / dist) * speed;
            posArray[i * 3 + 2] -= (pz / dist) * speed;
          }
        }
        posAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      coreGeo.dispose();
      coreMat.dispose();
      innerCoreGeo.dispose();
      innerCoreMat.dispose();

      nodeMeshes.forEach((n) => {
        n.mesh.geometry.dispose();
        (n.mesh.material as THREE.Material).dispose();
      });

      ringGeos.forEach((g) => g.dispose());
      ringMats.forEach((m) => m.dispose());

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

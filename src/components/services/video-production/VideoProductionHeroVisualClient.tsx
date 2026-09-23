"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function VideoProductionHeroVisualClient() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xeab308, 2.5, 20);
    pointLight.position.set(4, 4, 4);
    scene.add(pointLight);

    // Camera Lens Geometry
    const lensGroup = new THREE.Group();
    const cylinderGeo = new THREE.CylinderGeometry(1.6, 1.6, 0.6, 64);
    const lensMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.1,
      metalness: 0.9,
    });
    const mainLens = new THREE.Mesh(cylinderGeo, lensMat);
    mainLens.rotation.x = Math.PI / 2;
    lensGroup.add(mainLens);

    // Inner Gold Aperture Rings
    const ringGeo = new THREE.TorusGeometry(1.2, 0.08, 16, 64);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xeab308,
      roughness: 0.2,
      metalness: 0.8,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    lensGroup.add(ringMesh);

    scene.add(lensGroup);

    // Particle field representing optical light rays
    const particleCount = 100;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.7,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      lensGroup.rotation.z += 0.006;
      lensGroup.rotation.y += 0.003;
      particles.rotation.y -= 0.002;
      renderer.render(scene, camera);
    };

    animate();

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
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      cylinderGeo.dispose();
      lensMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full min-h-[380px] sm:min-h-[460px] flex items-center justify-center" />;
}

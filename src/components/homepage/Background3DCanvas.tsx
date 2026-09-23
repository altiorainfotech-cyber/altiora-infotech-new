"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Background3DCanvas() {
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
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 14);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Studio Lighting setup for realistic metallic shine
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const pointLightBlue = new THREE.PointLight(0x3d72c9, 5.0, 50);
    pointLightBlue.position.set(10, 10, 10);
    scene.add(pointLightBlue);

    const pointLightGold = new THREE.PointLight(0xd3ac3c, 4.5, 50);
    pointLightGold.position.set(-10, -10, 10);
    scene.add(pointLightGold);

    // Ambient particle field (Data Stream Particles)
    const particleCount = 380;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const goldColor = new THREE.Color("#d3ac3c");
    const blueColor = new THREE.Color("#3d72c9");
    const slateColor = new THREE.Color("#94a3b8");

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 45;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 45;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 45;

      const mix = Math.random();
      let col = slateColor;
      if (mix < 0.5) col = blueColor;
      else if (mix < 0.85) col = goldColor;

      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // -------------------------------------------------------------
    // ALTIORA 3D APEX GROWTH EMBLEM & GYROSCOPIC DATA RINGS
    // -------------------------------------------------------------
    const apexEngineGroup = new THREE.Group();

    // 1. Custom 3D Apex Arrowhead Delta Shape (Extruded Altiora Growth Logo Crest)
    const apexShape = new THREE.Shape();
    apexShape.moveTo(0, 2.8);
    apexShape.lineTo(2.2, -2.0);
    apexShape.lineTo(0, -0.9);
    apexShape.lineTo(-2.2, -2.0);
    apexShape.closePath();

    // Inner Arrow Cutout
    const innerHole = new THREE.Path();
    innerHole.moveTo(0, 1.0);
    innerHole.lineTo(0.75, -0.3);
    innerHole.lineTo(0.25, -0.3);
    innerHole.lineTo(0.25, -1.0);
    innerHole.lineTo(-0.25, -1.0);
    innerHole.lineTo(-0.25, -0.3);
    innerHole.lineTo(-0.75, -0.3);
    innerHole.closePath();
    apexShape.holes.push(innerHole);

    const extrudeSettings = {
      depth: 0.5,
      bevelEnabled: true,
      bevelSegments: 5,
      steps: 1,
      bevelSize: 0.1,
      bevelThickness: 0.1,
    };

    const apexGeometry = new THREE.ExtrudeGeometry(apexShape, extrudeSettings);
    apexGeometry.center();

    // Metallic Royal Blue Body
    const apexMat = new THREE.MeshStandardMaterial({
      color: 0x163f85,
      emissive: 0x0a1f42,
      emissiveIntensity: 0.4,
      metalness: 0.9,
      roughness: 0.15,
      transparent: true,
      opacity: 0.88,
      depthWrite: true,
    });
    const apexMesh = new THREE.Mesh(apexGeometry, apexMat);
    apexEngineGroup.add(apexMesh);

    // 2. Inner Golden Telemetry Ring
    const innerRingGeo = new THREE.TorusGeometry(3.4, 0.035, 16, 100);
    const innerRingMat = new THREE.MeshStandardMaterial({
      color: 0xd3ac3c,
      emissive: 0xc9a227,
      emissiveIntensity: 0.7,
      metalness: 0.95,
      roughness: 0.1,
      transparent: true,
      opacity: 0.55,
    });
    const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
    innerRing.rotation.x = Math.PI / 2.3;
    apexEngineGroup.add(innerRing);

    // 3. Outer Blue Data Orbit Ring
    const outerRingGeo = new THREE.TorusGeometry(4.4, 0.025, 16, 100);
    const outerRingMat = new THREE.MeshStandardMaterial({
      color: 0x3d72c9,
      emissive: 0x163f85,
      emissiveIntensity: 0.5,
      metalness: 0.9,
      roughness: 0.2,
      transparent: true,
      opacity: 0.4,
    });
    const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    outerRing.rotation.y = Math.PI / 2.5;
    apexEngineGroup.add(outerRing);

    // Align gracefully to the Right Side
    apexEngineGroup.position.set(4.2, 0, -2);
    apexEngineGroup.scale.set(0.8, 0.8, 0.8);
    scene.add(apexEngineGroup);

    // Scroll tracking
    let targetScrollY = 0;
    let currentScrollY = 0;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      if (width < 768) {
        apexEngineGroup.position.set(0, -2.2, -4);
        apexEngineGroup.scale.set(0.5, 0.5, 0.5);
      } else {
        apexEngineGroup.position.set(4.2, 0, -2);
        apexEngineGroup.scale.set(0.8, 0.8, 0.8);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    let animationFrameId: number;

    const animate = () => {
      if (!prefersReducedMotion) {
        currentScrollY += (targetScrollY - currentScrollY) * 0.05;

        particles.rotation.y += 0.0004;

        const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
        const scrollProgress = Math.min(Math.max(currentScrollY / maxScroll, 0), 1);

        // 360-Degree Gyroscopic Rotation synchronized with scroll
        apexMesh.rotation.y = scrollProgress * Math.PI * 4 + Date.now() * 0.0004;
        innerRing.rotation.z += 0.002;
        outerRing.rotation.x += 0.0015;

        // Smooth subtle vertical float tracking scroll depth
        const floatY = Math.sin(scrollProgress * Math.PI * 3) * 0.7 - scrollProgress * 1.2;
        apexEngineGroup.position.y = floatY;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      particleGeometry.dispose();
      particleMaterial.dispose();
      apexGeometry.dispose();
      apexMat.dispose();
      innerRingGeo.dispose();
      innerRingMat.dispose();
      outerRingGeo.dispose();
      outerRingMat.dispose();
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

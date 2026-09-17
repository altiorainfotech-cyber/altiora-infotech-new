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
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 15);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Ambient Lighting for smooth 3D logo depth & glowing gold halo
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const pointLightBlue = new THREE.PointLight(0x3d72c9, 4.0, 45);
    pointLightBlue.position.set(8, 8, 10);
    scene.add(pointLightBlue);

    const pointLightGold = new THREE.PointLight(0xd3ac3c, 3.5, 45);
    pointLightGold.position.set(-8, -8, 10);
    scene.add(pointLightGold);

    // Ambient particle field
    const particleCount = 450;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const goldColor = new THREE.Color("#c9a227");
    const blueColor = new THREE.Color("#1c4fa1");
    const slateColor = new THREE.Color("#a0a5b5");

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

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
      size: 0.11,
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // -------------------------------------------------------------
    // EXACT ALTIORA BRAND LOGO WITH SMOOTH SOLID 3D METALLIC BODY
    // -------------------------------------------------------------
    // Outer triangular arrowhead contour
    const logoShape = new THREE.Shape();
    logoShape.moveTo(0, 3.0);
    logoShape.lineTo(2.5, -2.2);
    logoShape.lineTo(0, -1.0);
    logoShape.lineTo(-2.5, -2.2);
    logoShape.closePath();

    // Inner Arrow Cutout Hole
    const arrowHole = new THREE.Path();
    arrowHole.moveTo(0, 1.1);
    arrowHole.lineTo(0.85, -0.3);
    arrowHole.lineTo(0.28, -0.3);
    arrowHole.lineTo(0.28, -1.14);
    arrowHole.lineTo(-0.28, -1.14);
    arrowHole.lineTo(-0.28, -0.3);
    arrowHole.lineTo(-0.85, -0.3);
    arrowHole.closePath();
    logoShape.holes.push(arrowHole);

    // Smooth 3D Extrusion Depth & Bevel Settings
    const extrudeSettings = {
      depth: 0.45,
      bevelEnabled: true,
      bevelSegments: 5,
      steps: 1,
      bevelSize: 0.08,
      bevelThickness: 0.08,
    };

    const logoGeometry = new THREE.ExtrudeGeometry(logoShape, extrudeSettings);
    logoGeometry.center();

    // Clean 3D Emblem Group
    const logoGroup = new THREE.Group();

    // Smooth & Solid Metallic Royal Blue Body (No wireframe border lines!)
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x163f85,
      emissive: 0x0a1f42,
      emissiveIntensity: 0.35,
      metalness: 0.85,
      roughness: 0.18,
      transparent: true,
      opacity: 0.92,
      depthWrite: true,
    });
    const bodyMesh = new THREE.Mesh(logoGeometry, bodyMat);
    logoGroup.add(bodyMesh);

    // Glowing Metallic Golden Halo Ring around the 3D Royal Blue Emblem (#d3ac3c)
    const ringGeo = new THREE.TorusGeometry(3.6, 0.035, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xd3ac3c,
      emissive: 0xc9a227,
      emissiveIntensity: 0.6,
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.55,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.3;
    logoGroup.add(ringMesh);

    // Initially hidden in hero section, standing straight upright (rotation.x = 0, rotation.z = 0)
    logoGroup.scale.set(0, 0, 0);
    logoGroup.position.set(0, 0, -2);
    logoGroup.rotation.set(0, 0, 0);
    scene.add(logoGroup);

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
    };

    window.addEventListener("resize", handleResize);

    let animationFrameId: number;

    const animate = () => {
      if (!prefersReducedMotion) {
        currentScrollY += (targetScrollY - currentScrollY) * 0.05;

        particles.rotation.y += 0.0005;

        const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
        const scrollProgress = Math.min(Math.max(currentScrollY / maxScroll, 0), 1);

        // 1. HERO SECTION HIDE & APPEARANCE (Scroll 0 -> 180px hidden, then scale up)
        const heroThreshold = 180;
        if (currentScrollY < heroThreshold) {
          const heroProgress = Math.max(currentScrollY / heroThreshold, 0);
          const currentScale = heroProgress * 0.25;
          logoGroup.scale.set(currentScale, currentScale, currentScale);
          bodyMat.opacity = heroProgress * 0.2;
          ringMat.opacity = heroProgress * 0.12;
        } else {
          // Beyond Hero: grow from small to full size (1.5) standing straight upright!
          const scrollFactor = (currentScrollY - heroThreshold) / 400;
          const scaleTarget = Math.min(0.25 + scrollFactor * 1.25, 1.5);
          logoGroup.scale.set(scaleTarget, scaleTarget, scaleTarget);

          bodyMat.opacity = 0.92;
          ringMat.opacity = 0.55;
        }

        // 2. UPRIGHT STANDING 3D EMBLEM + 360-DEGREE Y-AXIS ROTATION ON SCROLL
        logoGroup.rotation.x = 0;
        logoGroup.rotation.z = 0;
        logoGroup.rotation.y = scrollProgress * Math.PI * 4 + Date.now() * 0.0003;

        ringMesh.rotation.z += 0.002;

        // 3. HORIZONTAL WEAVING MOTION: Center -> Right -> Left -> Right -> Center
        const weaveX = Math.sin(scrollProgress * Math.PI * 3.5) * 4.8;
        const weaveY = -scrollProgress * 3.5 + Math.cos(scrollProgress * Math.PI * 2) * 1.0;

        logoGroup.position.x = weaveX;
        logoGroup.position.y = weaveY;
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
      logoGeometry.dispose();
      bodyMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
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

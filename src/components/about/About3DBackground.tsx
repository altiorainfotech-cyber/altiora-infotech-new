"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function About3DBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 16);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // 1. Studio Lighting System (Soft Ambient + Warm Gold Key + Deep Sapphire Fill)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xd3ac3c, 2.5); // Champagne Gold Key
    keyLight.position.set(10, 12, 10);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x163f85, 2.0); // Satin Sapphire Fill
    fillLight.position.set(-10, -8, 8);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xffffff, 1.2, 30);
    rimLight.position.set(0, 10, -5);
    scene.add(rimLight);

    // 2. Main Abstract 3D Digital Ecosystem Core Group
    const ecosystemGroup = new THREE.Group();
    scene.add(ecosystemGroup);

    // High-precision segment detail for Desktop, reduced for Mobile
    const torusSegments = isMobile ? 32 : 64;

    // Material Definitions
    // A. Satin Royal Navy Metallic Material
    const satinNavyMat = new THREE.MeshStandardMaterial({
      color: 0x163f85,
      emissive: 0x0d2755,
      emissiveIntensity: 0.25,
      metalness: 0.85,
      roughness: 0.2,
      transparent: true,
      opacity: 0.88,
    });

    // B. Champagne Gold Metallic Accent Material
    const champagneGoldMat = new THREE.MeshStandardMaterial({
      color: 0xd3ac3c,
      emissive: 0x7d6215,
      emissiveIntensity: 0.35,
      metalness: 0.9,
      roughness: 0.15,
      transparent: true,
      opacity: 0.85,
    });

    // C. Frosted Glass Inner Sphere Material
    const frostedGlassMat = new THREE.MeshPhysicalMaterial
      ? new THREE.MeshPhysicalMaterial({
          color: 0xffffff,
          transmission: 0.85,
          opacity: 0.65,
          transparent: true,
          roughness: 0.1,
          ior: 1.4,
          reflectivity: 0.5,
          metalness: 0.1,
        })
      : new THREE.MeshStandardMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.5,
          roughness: 0.1,
          metalness: 0.2,
        });

    // Geometry 1: Outer Satin Navy Main Ribbon Torus
    const navyTorusGeo = new THREE.TorusGeometry(3.2, 0.14, torusSegments, 100);
    const navyTorusMesh = new THREE.Mesh(navyTorusGeo, satinNavyMat);
    navyTorusMesh.rotation.x = Math.PI / 3.5;
    ecosystemGroup.add(navyTorusMesh);

    // Geometry 2: Inner Champagne Gold Orbital Ring
    const goldTorusGeo = new THREE.TorusGeometry(2.5, 0.06, torusSegments, 100);
    const goldTorusMesh = new THREE.Mesh(goldTorusGeo, champagneGoldMat);
    goldTorusMesh.rotation.y = Math.PI / 4;
    ecosystemGroup.add(goldTorusMesh);

    // Geometry 3: Inner Frosted Glass Core Sphere
    const glassSphereGeo = new THREE.SphereGeometry(1.6, torusSegments, torusSegments);
    const glassSphereMesh = new THREE.Mesh(glassSphereGeo, frostedGlassMat);
    ecosystemGroup.add(glassSphereMesh);

    // Geometry 4: Secondary Ambient Floating Orbital Nodes (Placed around margins)
    const ambientNodesGroup = new THREE.Group();
    scene.add(ambientNodesGroup);

    const nodePositions = [
      [-12, 6, -4],
      [13, -7, -3],
      [-9, -9, -2],
      [11, 9, -5],
    ];

    const nodeGeometries: THREE.BufferGeometry[] = [
      new THREE.TorusGeometry(1.2, 0.04, 24, 60),
      new THREE.IcosahedronGeometry(0.7, 0),
      new THREE.TorusGeometry(0.9, 0.03, 24, 60),
      new THREE.OctahedronGeometry(0.6, 0),
    ];

    const nodeMeshes: THREE.Mesh[] = [];

    nodePositions.forEach((pos, idx) => {
      const geo = nodeGeometries[idx % nodeGeometries.length];
      const mat = idx % 2 === 0 ? champagneGoldMat : satinNavyMat;
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(pos[0], pos[1], pos[2]);
      mesh.scale.setScalar(0.75);
      ambientNodesGroup.add(mesh);
      nodeMeshes.push(mesh);
    });

    // Mobile / Reduced Complexity Scaling
    if (isMobile) {
      ecosystemGroup.scale.set(0.65, 0.65, 0.65);
      ambientNodesGroup.visible = false;
    } else if (isTablet) {
      ecosystemGroup.scale.set(0.85, 0.85, 0.85);
    }

    // 3. Smooth Scroll & Parallax Interpolation Variables
    let mouseX = 0;
    let mouseY = 0;
    let targetScrollProgress = 0;
    let currentScrollProgress = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      targetScrollProgress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Initial scroll calculation
    handleScroll();

    // 4. Section Transformation Positions & Targets
    // Page progression keyframes [scrollProgress, posX, posY, posZ, scale, opacity]
    const getTargetTransform = (progress: number) => {
      if (isMobile) {
        // Mobile simple positioning: stays centered with subtle drift
        return {
          x: 0,
          y: -progress * 3,
          z: -2,
          scale: 0.6,
          opacity: 0.5,
        };
      }

      if (progress < 0.18) {
        // 1. HERO SECTION: Positioned right of hero title, crisp & prominent
        const t = progress / 0.18;
        return {
          x: THREE.MathUtils.lerp(5.5, -6.5, t * 0.2),
          y: THREE.MathUtils.lerp(0.5, 0.8, t),
          z: THREE.MathUtils.lerp(0, -1.5, t),
          scale: THREE.MathUtils.lerp(1.05, 0.85, t),
          opacity: THREE.MathUtils.lerp(0.85, 0.65, t),
        };
      } else if (progress < 0.40) {
        // 2. WHAT WE DO: Drifts to background left to ensure 100% text readability
        const t = (progress - 0.18) / 0.22;
        return {
          x: THREE.MathUtils.lerp(-6.5, 0.0, t),
          y: THREE.MathUtils.lerp(0.8, -0.5, t),
          z: THREE.MathUtils.lerp(-1.5, -2.5, t),
          scale: THREE.MathUtils.lerp(0.85, 0.95, t),
          opacity: THREE.MathUtils.lerp(0.65, 0.70, t),
        };
      } else if (progress < 0.65) {
        // 3. VISION & MISSION / HOW WE WORK: Centered split orbital depth
        const t = (progress - 0.40) / 0.25;
        return {
          x: THREE.MathUtils.lerp(0.0, 6.0, t),
          y: THREE.MathUtils.lerp(-0.5, 0.0, t),
          z: THREE.MathUtils.lerp(-2.5, -3.0, t),
          scale: THREE.MathUtils.lerp(0.95, 0.8, t),
          opacity: THREE.MathUtils.lerp(0.70, 0.55, t),
        };
      } else if (progress < 0.88) {
        // 4. EXPERIENCE & WHY ALTIORA: Recedes to far background depth
        const t = (progress - 0.65) / 0.23;
        return {
          x: THREE.MathUtils.lerp(6.0, 0.0, t),
          y: THREE.MathUtils.lerp(0.0, -1.0, t),
          z: THREE.MathUtils.lerp(-3.0, -5.0, t),
          scale: THREE.MathUtils.lerp(0.8, 0.75, t),
          opacity: THREE.MathUtils.lerp(0.55, 0.60, t),
        };
      } else {
        // 5. FINAL CTA: Returns to a balanced centered backdrop finish
        const t = (progress - 0.88) / 0.12;
        return {
          x: THREE.MathUtils.lerp(0.0, 0.0, t),
          y: THREE.MathUtils.lerp(-1.0, 0.5, t),
          z: THREE.MathUtils.lerp(-5.0, -1.0, t),
          scale: THREE.MathUtils.lerp(0.75, 1.0, t),
          opacity: THREE.MathUtils.lerp(0.60, 0.85, t),
        };
      }
    };

    // 5. Render & Animation Loop
    let animationFrameId: number;

    const animate = () => {
      // Smooth lerp scroll progress
      currentScrollProgress += (targetScrollProgress - currentScrollProgress) * 0.06;

      if (!prefersReducedMotion) {
        // Subtle Mouse Camera Parallax (Desktop only)
        if (!isMobile) {
          camera.position.x += (mouseX * 1.2 - camera.position.x) * 0.03;
          camera.position.y += (-mouseY * 1.2 - camera.position.y) * 0.03;
          camera.lookAt(0, 0, 0);
        }

        // Slow Continuous Rotation of Ecosystem Core
        navyTorusMesh.rotation.z += 0.0015;
        navyTorusMesh.rotation.y += 0.001;
        goldTorusMesh.rotation.z -= 0.002;
        goldTorusMesh.rotation.x += 0.0012;
        glassSphereMesh.rotation.y += 0.0008;

        // Rotate ambient margin nodes
        nodeMeshes.forEach((mesh, idx) => {
          mesh.rotation.x += 0.003 * (idx % 2 === 0 ? 1 : -1);
          mesh.rotation.y += 0.004 * (idx % 3 === 0 ? 1 : -1);
        });
      }

      // Compute section scroll transformations
      const transform = getTargetTransform(currentScrollProgress);

      // Smoothly lerp 3D ecosystem group position, scale, and opacity
      ecosystemGroup.position.x += (transform.x - ecosystemGroup.position.x) * 0.08;
      ecosystemGroup.position.y += (transform.y - ecosystemGroup.position.y) * 0.08;
      ecosystemGroup.position.z += (transform.z - ecosystemGroup.position.z) * 0.08;

      const currentScale = ecosystemGroup.scale.x;
      const targetScale = transform.scale;
      const lerpedScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.08);
      ecosystemGroup.scale.set(lerpedScale, lerpedScale, lerpedScale);

      satinNavyMat.opacity = THREE.MathUtils.lerp(satinNavyMat.opacity, transform.opacity, 0.08);
      champagneGoldMat.opacity = THREE.MathUtils.lerp(champagneGoldMat.opacity, transform.opacity * 0.9, 0.08);
      frostedGlassMat.opacity = THREE.MathUtils.lerp(frostedGlassMat.opacity, transform.opacity * 0.7, 0.08);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup & GPU Memory Disposal
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      navyTorusGeo.dispose();
      goldTorusGeo.dispose();
      glassSphereGeo.dispose();
      satinNavyMat.dispose();
      champagneGoldMat.dispose();
      frostedGlassMat.dispose();

      nodeGeometries.forEach((g) => g.dispose());
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

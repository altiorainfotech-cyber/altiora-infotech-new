"use client";

import { useEffect, useRef, type RefObject } from "react";
import * as THREE from "three";

interface GrowthCoreCanvasProps {
  activeRef: RefObject<boolean>;
}

const COLOR_BLUE = 0x2563eb;
const COLOR_CYAN = 0x00c8ff;
const COLOR_INDIGO = 0x4f46e5;
const COLOR_GOLD = 0xf59e0b;

const PULSE_EVENT = "altiora-growth-pulse";
const PULSE_INTERVAL = 3.0;
const PULSE_TRAVEL_TIME = 0.8;
const SHOCKWAVE_TIME = 0.7;

export default function GrowthCoreCanvas({ activeRef }: GrowthCoreCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    const isTablet = !isMobile && window.innerWidth < 1100;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 50);
    const baseCamPos = new THREE.Vector3(0, 0, 7.5);
    camera.position.copy(baseCamPos);
    camera.lookAt(0, 0.2, 0);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;

    // Set DOM Element styles explicitly to prevent positioning issues
    const canvasEl = renderer.domElement;
    canvasEl.style.position = "absolute";
    canvasEl.style.top = "0";
    canvasEl.style.left = "0";
    canvasEl.style.width = "100%";
    canvasEl.style.height = "100%";
    canvasEl.style.pointerEvents = "none";
    container.appendChild(canvasEl);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 2.2));

    const blueLight = new THREE.DirectionalLight(COLOR_BLUE, 4.0);
    blueLight.position.set(6, 8, 8);
    scene.add(blueLight);

    const cyanLight = new THREE.PointLight(COLOR_CYAN, 7.0, 20);
    cyanLight.position.set(0, 0.5, 4);
    scene.add(cyanLight);

    const goldLight = new THREE.PointLight(COLOR_GOLD, 4.5, 16);
    goldLight.position.set(4, 2, 4);
    scene.add(goldLight);

    const coreGlowLight = new THREE.PointLight(COLOR_CYAN, 8.0, 20);
    coreGlowLight.position.set(0, 0.3, 1);
    scene.add(coreGlowLight);

    // -----------------------------------------------------------------
    // 3D DIGITAL GROWTH ENGINE (CENTERED RIGHT BEHIND THE HERO TEXT)
    // -----------------------------------------------------------------
    const coreAnchor = new THREE.Vector3(0, 0.35, -0.3);
    const coreGroup = new THREE.Group();
    coreGroup.position.copy(coreAnchor);
    scene.add(coreGroup);

    // 1. Holographic 3D Torus Knot Core
    const knotGeo = new THREE.TorusKnotGeometry(isMobile ? 0.8 : 1.15, 0.32, 140, 28, 2, 3);
    const knotMat = new THREE.MeshStandardMaterial({
      color: COLOR_BLUE,
      emissive: COLOR_CYAN,
      emissiveIntensity: 0.75,
      metalness: 0.85,
      roughness: 0.1,
      wireframe: false,
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    coreGroup.add(knotMesh);

    // Tech Plexus Wireframe
    const wireMat = new THREE.MeshBasicMaterial({
      color: COLOR_CYAN,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const wireMesh = new THREE.Mesh(knotGeo, wireMat);
    wireMesh.scale.setScalar(1.04);
    coreGroup.add(wireMesh);

    // 2. Emissive Energy Sphere Inside Core
    const innerCoreGeo = new THREE.IcosahedronGeometry(0.55, 3);
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: COLOR_INDIGO,
      emissive: COLOR_CYAN,
      emissiveIntensity: 1.5,
      metalness: 0.6,
      roughness: 0.1,
    });
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    coreGroup.add(innerCore);

    // 3. Orbiting Halo Rings Framing Headline Text
    const ringGeo1 = new THREE.TorusGeometry(isMobile ? 1.7 : 2.6, 0.02, 16, 160);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: COLOR_CYAN,
      emissive: COLOR_CYAN,
      emissiveIntensity: 0.85,
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.85,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2.3;
    coreGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(isMobile ? 2.2 : 3.4, 0.015, 16, 180);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: COLOR_GOLD,
      emissive: COLOR_GOLD,
      emissiveIntensity: 0.75,
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.75,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 1.7;
    ring2.rotation.y = 0.6;
    coreGroup.add(ring2);

    // 4. Orbiting Glowing Nodes
    const NODE_COUNT = isMobile ? 12 : 24;
    const nodeGeo = new THREE.SphereGeometry(0.07, 12, 12);
    const nodes: { mesh: THREE.Mesh; angle: number; speed: number; radius: number; heightOffset: number }[] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      const isGold = i % 3 === 0;
      const mat = new THREE.MeshStandardMaterial({
        color: isGold ? COLOR_GOLD : COLOR_CYAN,
        emissive: isGold ? COLOR_GOLD : COLOR_CYAN,
        emissiveIntensity: 1.2,
      });
      const mesh = new THREE.Mesh(nodeGeo, mat);
      const radius = 1.9 + (i % 4) * 0.45;
      const angle = (i / NODE_COUNT) * Math.PI * 2;
      mesh.position.set(Math.cos(angle) * radius, (Math.random() - 0.5) * 1.4, Math.sin(angle) * radius);
      coreGroup.add(mesh);
      nodes.push({
        mesh,
        angle,
        speed: 0.015 + Math.random() * 0.02,
        radius,
        heightOffset: (Math.random() - 0.5) * 1.0,
      });
    }

    // Shockwave Ring
    const shockGeo = new THREE.TorusGeometry(1.4, 0.03, 16, 100);
    const shockMat = new THREE.MeshBasicMaterial({ color: COLOR_CYAN, transparent: true, opacity: 0 });
    const shockwave = new THREE.Mesh(shockGeo, shockMat);
    shockwave.rotation.x = Math.PI / 2.3;
    coreGroup.add(shockwave);

    // -----------------------------------------------------------------
    // 3D ORGANIC FLUID WAVE GRID DIRECTLY BEHIND TEXT
    // -----------------------------------------------------------------
    const waveGeo = new THREE.PlaneGeometry(18, 11, 36, 22);
    const waveMat = new THREE.MeshStandardMaterial({
      color: COLOR_BLUE,
      emissive: COLOR_CYAN,
      emissiveIntensity: 0.4,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const waveMesh = new THREE.Mesh(waveGeo, waveMat);
    waveMesh.position.set(0, 0.2, -2.0);
    waveMesh.rotation.x = -Math.PI / 6;
    scene.add(waveMesh);

    // -----------------------------------------------------------------
    // VIBRANT HIGH-DENSITY PARTICLE FIELD BEHIND TEXT
    // -----------------------------------------------------------------
    const PARTICLE_COUNT = isMobile ? 250 : 500;
    const particlePositions = new Float32Array(PARTICLE_COUNT * 3);
    const particleColors = new Float32Array(PARTICLE_COUNT * 3);

    const cBlue = new THREE.Color(COLOR_BLUE);
    const cCyan = new THREE.Color(COLOR_CYAN);
    const cGold = new THREE.Color(COLOR_GOLD);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * Math.PI * 2;
      const phi = Math.acos(2 * v - 1);
      const r = 1.0 + Math.random() * 5.2;

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) + 0.3;
      particlePositions[i * 3 + 2] = r * Math.cos(phi) - 0.5;

      const colorMix = Math.random();
      const c = colorMix < 0.65 ? cCyan : colorMix < 0.85 ? cBlue : cGold;
      particleColors[i * 3] = c.r;
      particleColors[i * 3 + 1] = c.g;
      particleColors[i * 3 + 2] = c.b;
    }

    const fieldGeo = new THREE.BufferGeometry();
    fieldGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    fieldGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const fieldMat = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });
    const particleField = new THREE.Points(fieldGeo, fieldMat);
    scene.add(particleField);

    // Data curves converging on the core
    const PATH_COUNT = isMobile ? 6 : isTablet ? 8 : 12;
    const curves: THREE.CatmullRomCurve3[] = [];

    for (let i = 0; i < PATH_COUNT; i++) {
      const angle = (i / PATH_COUNT) * Math.PI * 2 + 0.3;
      const radius = 3.8 + (i % 3) * 0.6;
      const depthZ = -1.8 + (i % 4) * 1.1;
      const source = new THREE.Vector3(Math.cos(angle) * radius, 0.4 + Math.sin(angle) * 1.6, depthZ).add(coreAnchor);
      const mid = source.clone().lerp(coreAnchor, 0.5).add(new THREE.Vector3((Math.random() - 0.5) * 2.0, (Math.random() - 0.5) * 1.4, 0));
      curves.push(new THREE.CatmullRomCurve3([source, mid, coreAnchor.clone()]));
    }

    const streamsGroup = new THREE.Group();
    scene.add(streamsGroup);

    const lineMat = new THREE.LineBasicMaterial({ color: COLOR_CYAN, transparent: true, opacity: 0.38 });
    curves.forEach((curve) => {
      const points = curve.getPoints(50);
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      streamsGroup.add(new THREE.Line(geo, lineMat));
    });

    // Pulse traveler
    const pulseGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const pulseMat = new THREE.MeshStandardMaterial({
      color: COLOR_CYAN,
      emissive: COLOR_CYAN,
      emissiveIntensity: 2.5,
      transparent: true,
      opacity: 0,
    });
    const pulseMesh = new THREE.Mesh(pulseGeo, pulseMat);
    streamsGroup.add(pulseMesh);

    // -----------------------------------------------------------------
    // INTERACTION & RENDER LOOP
    // -----------------------------------------------------------------
    const heroSection = container.closest("section");
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

    const scratch = new THREE.Vector3();
    let coreFlash = 0;
    let shockwaveStart = -Infinity;
    let lastPulseCycle = -1;
    let pulseActive = false;
    let pulseStart = 0;
    let pulsePathIndex = 0;

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!activeRef.current) return;

      const t = clock.getElapsedTime();

      // Scroll effect
      let scrollProgress = 0;
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        scrollProgress = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)));
      }

      camera.position.z = baseCamPos.z - scrollProgress * 1.8;

      if (!prefersReducedMotion) {
        // Mouse parallax
        if (!isMobile) {
          const targetX = baseCamPos.x + mouseX * 0.8;
          const targetY = baseCamPos.y + -mouseY * 0.5;
          camera.position.x += (targetX - camera.position.x) * 0.05;
          camera.position.y += (targetY - camera.position.y) * 0.05;

          cyanLight.position.x = mouseX * 4;
          cyanLight.position.y = 0.5 - mouseY * 2.5;
        }

        // Core continuous motion
        knotMesh.rotation.x = t * 0.35;
        knotMesh.rotation.y = t * 0.45;
        wireMesh.rotation.x = t * 0.35;
        wireMesh.rotation.y = t * 0.45;

        innerCore.rotation.y = -t * 0.7;

        ring1.rotation.z = t * 0.25;
        ring2.rotation.z = -t * 0.2;

        // Wave plane displacement animation
        const wavePos = waveGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < wavePos.length / 3; i++) {
          const u = wavePos[i * 3];
          const v = wavePos[i * 3 + 1];
          wavePos[i * 3 + 2] = Math.sin(t * 1.8 + u * 0.6 + v * 0.8) * 0.4;
        }
        waveGeo.attributes.position.needsUpdate = true;

        // Orbiting nodes position update
        nodes.forEach((node) => {
          node.angle += node.speed;
          node.mesh.position.x = Math.cos(node.angle) * node.radius;
          node.mesh.position.z = Math.sin(node.angle) * node.radius;
          node.mesh.position.y = Math.sin(t * 2.0 + node.angle) * 0.5 + node.heightOffset;
        });

        // Particle field floating wave motion
        const positions = fieldGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const idx = i * 3;
          positions[idx + 1] += Math.sin(t * 1.2 + positions[idx]) * 0.004;
        }
        fieldGeo.attributes.position.needsUpdate = true;
        particleField.rotation.y = t * 0.05;

        // Signal pulse cycle
        const cycle = Math.floor(t / PULSE_INTERVAL);
        if (cycle !== lastPulseCycle && cycle > 0) {
          lastPulseCycle = cycle;
          pulseActive = true;
          pulseStart = t;
          pulsePathIndex = cycle % PATH_COUNT;
        }

        if (pulseActive) {
          const p = (t - pulseStart) / PULSE_TRAVEL_TIME;
          if (p <= 1) {
            curves[pulsePathIndex].getPointAt(Math.min(p, 0.999), scratch);
            pulseMesh.position.copy(scratch);
            pulseMat.opacity = Math.sin(Math.min(p, 1) * Math.PI) * 1.0;
          } else {
            pulseActive = false;
            pulseMat.opacity = 0;
            coreFlash = 1.0;
            shockwaveStart = t;
            if (typeof window !== "undefined") {
              window.dispatchEvent(new CustomEvent(PULSE_EVENT));
            }
          }
        }

        // Core flash on pulse arrival
        if (coreFlash > 0.001) {
          coreFlash *= 0.88;
          knotMat.emissiveIntensity = 0.75 + coreFlash * 2.0;
          innerCoreMat.emissiveIntensity = 1.5 + coreFlash * 3.0;
          coreGlowLight.intensity = 8.0 + coreFlash * 8.0;
          knotMesh.scale.setScalar(1 + coreFlash * 0.2);
        } else {
          knotMat.emissiveIntensity = 0.75;
          innerCoreMat.emissiveIntensity = 1.5;
          coreGlowLight.intensity = 8.0;
          knotMesh.scale.setScalar(1.0);
        }

        // Shockwave expansion
        const shockElapsed = t - shockwaveStart;
        if (shockElapsed >= 0 && shockElapsed < SHOCKWAVE_TIME) {
          const sp = shockElapsed / SHOCKWAVE_TIME;
          shockwave.scale.setScalar(0.6 + sp * 3.5);
          shockMat.opacity = (1 - sp) * 0.8;
        } else {
          shockMat.opacity = 0;
        }
      }

      renderer.render(scene, camera);
    };

    if (prefersReducedMotion) {
      renderer.render(scene, camera);
    } else {
      animate();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      [knotGeo, innerCoreGeo, ringGeo1, ringGeo2, nodeGeo, shockGeo, waveGeo, fieldGeo, pulseGeo].forEach((g) => g.dispose());
      [knotMat, wireMat, innerCoreMat, ringMat1, ringMat2, shockMat, waveMat, fieldMat, pulseMat, lineMat].forEach((m) => m.dispose());
      nodes.forEach(({ mesh }) => (mesh.material as THREE.Material).dispose());
      streamsGroup.children.forEach((child) => {
        if (child instanceof THREE.Line) child.geometry.dispose();
      });
      renderer.dispose();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [activeRef]);

  return <div ref={containerRef} className="absolute inset-0 h-full w-full pointer-events-none overflow-hidden" aria-hidden="true" />;
}

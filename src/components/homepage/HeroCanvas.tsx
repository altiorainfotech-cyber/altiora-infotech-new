"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const GOLD = new THREE.Color("#d3ac3c");
const BLUE = new THREE.Color("#3d72c9");

const GLOBE_RADIUS = 2.2;
const NODE_COUNT = 16;
const ARC_SEGMENTS = 48;
const TARGETS_PER_HUB = 4;
const TARGET_OFFSETS = [2, 5, 7, 10];

const DRAW_IN_MS = 800;
const HOLD_MS = 1800;
const DRAW_OUT_MS = 800;
const CYCLE_MS = DRAW_IN_MS + HOLD_MS + DRAW_OUT_MS;

function buildNodes() {
  const nodes: THREE.Vector3[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < NODE_COUNT; i++) {
    const y = 1 - (i / (NODE_COUNT - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    nodes.push(
      new THREE.Vector3(Math.cos(theta) * radiusAtY, y, Math.sin(theta) * radiusAtY).multiplyScalar(
        GLOBE_RADIUS
      )
    );
  }
  return nodes;
}

function arcPoints(start: THREE.Vector3, end: THREE.Vector3) {
  const mid = start.clone().add(end).multiplyScalar(0.5);
  mid.setLength(GLOBE_RADIUS * 1.4);
  return new THREE.QuadraticBezierCurve3(start, mid, end).getPoints(ARC_SEGMENTS);
}

export default function HeroCanvas() {
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
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0.2, 0.5, 6.8);
    camera.lookAt(0, 0, 0);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting setup for realistic metallic shine
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLightGold = new THREE.PointLight(0xd3ac3c, 2.0, 20);
    pointLightGold.position.set(5, 5, 5);
    scene.add(pointLightGold);

    const pointLightBlue = new THREE.PointLight(0x3d72c9, 2.0, 20);
    pointLightBlue.position.set(-5, -5, -5);
    scene.add(pointLightBlue);

    const group = new THREE.Group();
    scene.add(group);

    // Subtle Outer Glowing Ring
    const outerRingGeo = new THREE.TorusGeometry(GLOBE_RADIUS * 1.25, 0.018, 16, 100);
    const outerRingMat = new THREE.MeshStandardMaterial({
      color: GOLD,
      emissive: GOLD,
      emissiveIntensity: 0.25,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.35,
    });
    const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    outerRing.rotation.x = Math.PI / 2.5;
    group.add(outerRing);

    // Ultra-Light Delicate Wireframe Globe Mesh (Matching Reference Image 2)
    const globeGeometry = new THREE.SphereGeometry(GLOBE_RADIUS, 32, 24);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: 0xe2e6ee,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    group.add(new THREE.Mesh(globeGeometry, globeMaterial));

    // Market nodes
    const nodes = buildNodes();
    const nodeGeometry = new THREE.SphereGeometry(0.055, 16, 16);
    const hubGeometry = new THREE.SphereGeometry(0.085, 16, 16);

    const nodeMeshes = nodes.map((position, index) => {
      const color = index % 2 === 0 ? GOLD : BLUE;
      const mesh = new THREE.Mesh(
        nodeGeometry,
        new THREE.MeshStandardMaterial({
          color,
          emissive: color,
          emissiveIntensity: 0.5,
          metalness: 0.8,
          roughness: 0.2,
        })
      );
      mesh.position.copy(position);
      group.add(mesh);
      return mesh;
    });

    const hubMarker = new THREE.Mesh(
      hubGeometry,
      new THREE.MeshStandardMaterial({ color: GOLD, emissive: GOLD, emissiveIntensity: 0.9 })
    );
    group.add(hubMarker);

    // Arc connection lines
    const arcLines = Array.from({ length: TARGETS_PER_HUB }, (_, index) => {
      const geometry = new THREE.BufferGeometry();
      const material = new THREE.LineBasicMaterial({
        color: index % 2 === 0 ? GOLD : BLUE,
        transparent: true,
        opacity: 0.75,
      });
      const line = new THREE.Line(geometry, material);
      group.add(line);
      return line;
    });

    let currentHub = -1;
    const setHub = (rawIndex: number) => {
      const hubIndex = ((rawIndex % NODE_COUNT) + NODE_COUNT) % NODE_COUNT;
      if (hubIndex === currentHub || !nodes[hubIndex]) return;
      currentHub = hubIndex;
      hubMarker.position.copy(nodes[hubIndex]);
      arcLines.forEach((line, slot) => {
        const targetIndex = (hubIndex + TARGET_OFFSETS[slot]) % NODE_COUNT;
        const points = arcPoints(nodes[hubIndex], nodes[targetIndex]);
        line.geometry.dispose();
        line.geometry = new THREE.BufferGeometry().setFromPoints(points);
        line.geometry.setDrawRange(0, prefersReducedMotion ? points.length : 0);
        line.userData.pointCount = points.length;
      });
    };
    setHub(0);

    group.rotation.x = 0.15;
    let spinY = -0.5;
    let pointerX = 0;
    let pointerY = 0;
    let scrollRotationY = 0;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointerY = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    };

    const handleScroll = () => {
      scrollRotationY = window.scrollY * 0.001;
    };

    if (!prefersReducedMotion) {
      container.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      if (width === 0 || height === 0) return;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const startTime = performance.now();
    let tiltX = 0.15;
    let frameId: number;

    const animate = (now: number) => {
      const elapsed = now - startTime;

      if (!prefersReducedMotion) {
        spinY += 0.0025;
        group.rotation.y = spinY + pointerX * 0.3 + scrollRotationY;
        tiltX += (0.15 + pointerY * 0.15 - tiltX) * 0.05;
        group.rotation.x = tiltX;

        outerRing.rotation.z += 0.003;

        const cycleIndex = Math.floor(elapsed / CYCLE_MS);
        setHub(cycleIndex % NODE_COUNT);
        const phase = elapsed - cycleIndex * CYCLE_MS;

        let progress: number;
        if (phase < DRAW_IN_MS) {
          progress = phase / DRAW_IN_MS;
        } else if (phase < DRAW_IN_MS + HOLD_MS) {
          progress = 1;
        } else {
          progress = 1 - (phase - DRAW_IN_MS - HOLD_MS) / DRAW_OUT_MS;
        }
        progress = Math.min(Math.max(progress, 0), 1);

        arcLines.forEach((line) => {
          const total = (line.userData.pointCount as number) ?? 0;
          line.geometry.setDrawRange(0, Math.round(total * progress));
        });

        const hubPulse = 0.7 + Math.sin(elapsed / 240) * 0.3;
        (hubMarker.material as THREE.MeshStandardMaterial).emissiveIntensity = hubPulse;
      }

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    if (prefersReducedMotion) {
      renderer.render(scene, camera);
    } else {
      frameId = requestAnimationFrame(animate);
    }

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      container.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);

      globeGeometry.dispose();
      globeMaterial.dispose();
      outerRingGeo.dispose();
      outerRingMat.dispose();
      nodeGeometry.dispose();
      hubGeometry.dispose();
      (hubMarker.material as THREE.Material).dispose();
      nodeMeshes.forEach((mesh) => (mesh.material as THREE.Material).dispose());
      arcLines.forEach((line) => {
        line.geometry.dispose();
        (line.material as THREE.Material).dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="h-full w-full" aria-hidden="true" />;
}

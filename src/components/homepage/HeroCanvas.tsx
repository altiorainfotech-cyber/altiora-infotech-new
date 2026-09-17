"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const GOLD = new THREE.Color("#d3ac3c");
const BLUE = new THREE.Color("#3d72c9");
const WIRE = new THREE.Color("#c7c9cf");

const GLOBE_RADIUS = 2.1;
const NODE_COUNT = 13;
const ARC_SEGMENTS = 48;
const TARGETS_PER_HUB = 4;
const TARGET_OFFSETS = [2, 4, 6, 9];

const DRAW_IN_MS = 700;
const HOLD_MS = 1600;
const DRAW_OUT_MS = 700;
const CYCLE_MS = DRAW_IN_MS + HOLD_MS + DRAW_OUT_MS;

// Evenly spread "markets" across the globe surface (golden-angle spiral).
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
  mid.setLength(GLOBE_RADIUS * 1.35);
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
    camera.position.set(0.4, 0.6, 6.8);
    camera.lookAt(0, 0, 0);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Wireframe globe.
    const globeGeometry = new THREE.SphereGeometry(GLOBE_RADIUS, 28, 18);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: WIRE,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    group.add(new THREE.Mesh(globeGeometry, globeMaterial));

    // Market nodes.
    const nodes = buildNodes();
    const nodeGeometry = new THREE.SphereGeometry(0.05, 12, 12);
    const hubGeometry = new THREE.SphereGeometry(0.075, 14, 14);
    const nodeMeshes = nodes.map((position, index) => {
      const color = index % 2 === 0 ? GOLD : BLUE;
      const mesh = new THREE.Mesh(nodeGeometry, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.55 }));
      mesh.position.copy(position);
      group.add(mesh);
      return mesh;
    });
    const hubMarker = new THREE.Mesh(hubGeometry, new THREE.MeshBasicMaterial({ color: GOLD }));
    group.add(hubMarker);

    // Reusable connection lines, re-targeted as the active hub cycles.
    const arcLines = Array.from({ length: TARGETS_PER_HUB }, (_, index) => {
      const geometry = new THREE.BufferGeometry();
      const material = new THREE.LineBasicMaterial({
        color: index % 2 === 0 ? GOLD : BLUE,
        transparent: true,
        opacity: 0.6,
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

    const handlePointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointerY = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    };

    if (!prefersReducedMotion) {
      container.addEventListener("pointermove", handlePointerMove);
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
        // Continuous free spin, independent of the pointer parallax below.
        spinY += 0.0026;
        group.rotation.y = spinY + pointerX * 0.25;
        tiltX += (0.15 + pointerY * 0.12 - tiltX) * 0.04;
        group.rotation.x = tiltX;

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

        const hubPulse = 0.7 + Math.sin(elapsed / 260) * 0.25;
        (hubMarker.material as THREE.MeshBasicMaterial).opacity = hubPulse;
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
      globeGeometry.dispose();
      globeMaterial.dispose();
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

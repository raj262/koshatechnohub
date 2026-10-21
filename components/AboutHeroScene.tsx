"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function disposeObject(object: THREE.Object3D) {
  object.traverse((node) => {
    const mesh = node as THREE.Mesh;
    if (mesh.geometry) mesh.geometry.dispose();
    const material = (node as THREE.Mesh).material;
    if (!material) return;
    const list = Array.isArray(material) ? material : [material];
    list.forEach((item) => item.dispose());
  });
}

export default function AboutHeroScene() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 80);
    camera.position.set(0, 0, 8.4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    wrap.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const icoGeo = new THREE.IcosahedronGeometry(1.72, 1);
    const shell = new THREE.LineSegments(
      new THREE.WireframeGeometry(icoGeo),
      new THREE.LineBasicMaterial({ color: 0xe8891a, transparent: true, opacity: 0.9 }),
    );
    group.add(shell);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.92, 0),
      new THREE.MeshBasicMaterial({ color: 0xe8891a, transparent: true, opacity: 0.18 }),
    );
    group.add(core);

    const nodes = new THREE.Points(
      icoGeo,
      new THREE.PointsMaterial({
        color: 0xffd59a,
        size: 0.055,
        transparent: true,
        opacity: 0.95,
        sizeAttenuation: true,
      }),
    );
    group.add(nodes);

    const ringA = new THREE.Mesh(
      new THREE.TorusGeometry(2.35, 0.012, 10, 180),
      new THREE.MeshBasicMaterial({ color: 0xf0b46a, transparent: true, opacity: 0.55 }),
    );
    ringA.rotation.set(Math.PI / 2.4, 0.4, 0.2);
    group.add(ringA);

    const ringB = new THREE.Mesh(
      new THREE.TorusGeometry(2.85, 0.008, 10, 180),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.18 }),
    );
    ringB.rotation.set(0.55, Math.PI / 3, 0.8);
    group.add(ringB);

    const count = 520;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 3.1 + Math.random() * 2.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    const cloudGeo = new THREE.BufferGeometry();
    cloudGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const cloud = new THREE.Points(
      cloudGeo,
      new THREE.PointsMaterial({
        color: 0xf0b46a,
        size: 0.028,
        transparent: true,
        opacity: 0.62,
        sizeAttenuation: true,
      }),
    );
    group.add(cloud);

    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;
    const onMove = (event: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.7;
      targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.45;
    };
    window.addEventListener("pointermove", onMove);

    const layout = () => {
      const width = wrap.clientWidth;
      const height = wrap.clientHeight;
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      const compact = width < 900;
      group.position.set(compact ? 0.15 : 2.15, compact ? 0.15 : 0.05, 0);
      group.scale.setScalar(compact ? 0.82 : 1.12);
    };
    layout();
    const observer = new ResizeObserver(layout);
    observer.observe(wrap);

    let visible = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.05 },
    );
    io.observe(wrap);

    let frame = 0;
    const tick = () => {
      frame = requestAnimationFrame(tick);
      if (!visible) return;
      mouseX += (targetX - mouseX) * 0.045;
      mouseY += (targetY - mouseY) * 0.045;
      shell.rotation.y += 0.0038;
      shell.rotation.x += 0.0012;
      core.rotation.y -= 0.006;
      nodes.rotation.y = shell.rotation.y;
      nodes.rotation.x = shell.rotation.x;
      ringA.rotation.z += 0.0042;
      ringB.rotation.x += 0.0028;
      cloud.rotation.y -= 0.0016;
      camera.position.x = mouseX * 1.35;
      camera.position.y = 0.15 - mouseY * 1.1;
      camera.lookAt(group.position.x * 0.35, 0, 0);
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      disposeObject(scene);
      renderer.dispose();
      if (renderer.domElement.parentNode === wrap) wrap.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="ab-hero-3d" ref={wrapRef} aria-hidden />;
}

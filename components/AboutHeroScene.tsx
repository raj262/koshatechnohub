"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function disposeObject(object: THREE.Object3D) {
  object.traverse((node) => {
    const mesh = node as THREE.Mesh;
    if (mesh.geometry) mesh.geometry.dispose();
    const material = mesh.material;
    if (!material) return;
    const list = Array.isArray(material) ? material : [material];
    list.forEach((item) => {
      const mapped = item as THREE.MeshBasicMaterial;
      if (mapped.map) mapped.map.dispose();
      item.dispose();
    });
  });
}

export default function AboutHeroScene() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 60);
    camera.position.set(0, 0.08, 6.4);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      premultipliedAlpha: true,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setClearAlpha(0);
    renderer.toneMapping = THREE.NoToneMapping;
    scene.background = null;
    renderer.domElement.style.background = "transparent";
    renderer.domElement.style.display = "block";
    wrap.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x2a354c, 1.35));
    const key = new THREE.PointLight(0xff9a32, 42, 22, 1.7);
    key.position.set(2.8, 2.3, 3.6);
    scene.add(key);
    const rim = new THREE.PointLight(0x6f8cff, 18, 20, 2);
    rim.position.set(-3.4, -1.5, 2.4);
    scene.add(rim);
    const back = new THREE.PointLight(0xffc37a, 12, 16, 2);
    back.position.set(0.2, -2.6, -2.4);
    scene.add(back);

    const group = new THREE.Group();
    scene.add(group);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.64, 0),
      new THREE.MeshStandardMaterial({
        color: 0xff9a2e,
        emissive: 0xe8891a,
        emissiveIntensity: 1.05,
        roughness: 0.22,
        metalness: 0.64,
      }),
    );
    group.add(core);

    const glass = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.05, 1),
      new THREE.MeshStandardMaterial({
        color: 0xffd19a,
        emissive: 0x3a2208,
        transparent: true,
        opacity: 0.16,
        roughness: 0.08,
        metalness: 0.18,
        side: THREE.DoubleSide,
      }),
    );
    group.add(glass);

    const cageGeo = new THREE.IcosahedronGeometry(1.7, 1);
    const cage = new THREE.LineSegments(
      new THREE.WireframeGeometry(cageGeo),
      new THREE.LineBasicMaterial({ color: 0xf0b46a, transparent: true, opacity: 0.92 }),
    );
    group.add(cage);

    const nodes = new THREE.Points(
      cageGeo,
      new THREE.PointsMaterial({
        color: 0xffe6c2,
        size: 0.058,
        transparent: true,
        opacity: 1,
        sizeAttenuation: true,
      }),
    );
    group.add(nodes);

    const innerCage = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.DodecahedronGeometry(1.36, 0)),
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.16 }),
    );
    group.add(innerCage);

    const ring = (radius: number, color: number, opacity: number, rotation: [number, number, number]) => {
      const mesh = new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.01, 8, 180),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity }),
      );
      mesh.rotation.set(...rotation);
      group.add(mesh);
      return mesh;
    };
    const ringA = ring(2.12, 0xf0b46a, 0.55, [Math.PI / 2.15, 0.42, 0.16]);
    const ringB = ring(2.48, 0xffffff, 0.14, [0.55, Math.PI / 3, 0.82]);
    const ringC = ring(2.86, 0xe8891a, 0.2, [1.18, 0.22, 1.08]);

    const count = 280;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 3.05 + Math.random() * 1.55;
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
        size: 0.024,
        transparent: true,
        opacity: 0.5,
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
      if (!rect.width || !rect.height) return;
      targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.7;
      targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.45;
    };
    window.addEventListener("pointermove", onMove);

    const fit = () => {
      const width = Math.max(1, Math.floor(wrap.clientWidth));
      const height = Math.max(1, Math.floor(wrap.clientHeight));
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height, false);
      const scale = Math.max(0.72, Math.min(1.12, Math.min(width, height) / 480));
      group.scale.setScalar(scale);
    };
    fit();
    const observer = new ResizeObserver(fit);
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
    const started = performance.now();
    const draw = () => {
      mouseX += (targetX - mouseX) * 0.06;
      mouseY += (targetY - mouseY) * 0.06;
      const t = reduce ? 0.6 : (performance.now() - started) / 1000;
      if (!reduce) {
        core.rotation.y = t * 0.34;
        core.rotation.x = t * 0.11;
        glass.rotation.y = -t * 0.18;
        cage.rotation.y = t * 0.15;
        cage.rotation.x = Math.sin(t * 0.22) * 0.08;
        nodes.rotation.copy(cage.rotation);
        innerCage.rotation.y = -t * 0.1;
        innerCage.rotation.z = t * 0.045;
        ringA.rotation.z += 0.0034;
        ringB.rotation.x += 0.002;
        ringC.rotation.y += 0.0015;
        cloud.rotation.y -= 0.0012;
      }
      group.rotation.x = 0.12 + mouseY * 0.28;
      group.rotation.y = mouseX * 0.42;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };

    if (reduce) {
      draw();
    } else {
      const tick = () => {
        frame = requestAnimationFrame(tick);
        if (!visible) return;
        draw();
      };
      tick();
    }

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

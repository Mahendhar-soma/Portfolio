"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Html,
  Line,
  MeshDistortMaterial,
  Sparkles,
  Trail,
} from "@react-three/drei";
import * as THREE from "three";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { GradientSphere } from "@/components/effects/GradientSphere";

type Satellite = {
  label: string;
  color: string;
  radius: number;
  speed: number;
  tilt: number;
  size: number;
  offset: number;
};

const SATELLITES: Satellite[] = [
  { label: "CI4", color: "#F87171", radius: 1.85, speed: 0.55, tilt: 0.35, size: 0.14, offset: 0 },
  { label: "Next.js", color: "#A5B4FC", radius: 2.05, speed: 0.4, tilt: -0.45, size: 0.13, offset: 1.2 },
  { label: "MySQL", color: "#22D3EE", radius: 1.7, speed: 0.7, tilt: 0.9, size: 0.12, offset: 2.4 },
  { label: "PHP", color: "#818CF8", radius: 2.2, speed: 0.32, tilt: 0.15, size: 0.13, offset: 3.5 },
  { label: "API", color: "#34D399", radius: 1.95, speed: 0.62, tilt: -0.75, size: 0.11, offset: 4.6 },
  { label: "AI", color: "#FBBF24", radius: 2.15, speed: 0.48, tilt: 1.1, size: 0.12, offset: 5.5 },
];

function CrystalCore() {
  const mesh = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (mesh.current) {
      mesh.current.rotation.y = t * 0.35;
      mesh.current.rotation.x = Math.sin(t * 0.4) * 0.2;
    }
    if (shell.current) {
      shell.current.rotation.y = -t * 0.25;
      shell.current.rotation.z = t * 0.12;
    }
  });

  return (
    <group>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[0.85, 1]} />
        <MeshDistortMaterial
          color="#4F46E5"
          emissive="#312E81"
          emissiveIntensity={0.55}
          roughness={0.12}
          metalness={0.75}
          distort={0.35}
          speed={2.4}
        />
      </mesh>

      <mesh ref={shell} scale={1.22}>
        <icosahedronGeometry args={[0.85, 0]} />
        <meshBasicMaterial
          color="#67E8F9"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      <Float speed={2} floatIntensity={0.4} rotationIntensity={0.2}>
        <mesh scale={0.28}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#F59E0B"
            emissive="#F59E0B"
            emissiveIntensity={0.8}
            metalness={0.6}
            roughness={0.2}
          />
        </mesh>
      </Float>
    </group>
  );
}

function GyroRings() {
  const a = useRef<THREE.Group>(null);
  const b = useRef<THREE.Group>(null);
  const c = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (a.current) a.current.rotation.z = t * 0.55;
    if (b.current) b.current.rotation.x = t * 0.4;
    if (c.current) {
      c.current.rotation.y = -t * 0.35;
      c.current.rotation.x = t * 0.2;
    }
  });

  return (
    <group>
      <group ref={a} rotation={[Math.PI / 2.1, 0.15, 0]}>
        <mesh>
          <torusGeometry args={[1.35, 0.018, 16, 120]} />
          <meshBasicMaterial color="#818CF8" transparent opacity={0.7} />
        </mesh>
      </group>
      <group ref={b} rotation={[0.55, 0.4, 0.2]}>
        <mesh>
          <torusGeometry args={[1.55, 0.014, 16, 120]} />
          <meshBasicMaterial color="#22D3EE" transparent opacity={0.55} />
        </mesh>
      </group>
      <group ref={c} rotation={[1.2, -0.35, 0.4]}>
        <mesh>
          <torusGeometry args={[1.75, 0.01, 16, 140]} />
          <meshBasicMaterial color="#FBBF24" transparent opacity={0.4} />
        </mesh>
      </group>
    </group>
  );
}

function OrbitingSatellite({ sat }: { sat: Satellite }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime * sat.speed + sat.offset;
    const x = Math.cos(t) * sat.radius;
    const z = Math.sin(t) * sat.radius;
    const y = Math.sin(t * 1.3) * 0.35 + Math.sin(sat.tilt) * 0.25;
    group.current.position.set(x, y, z);
    group.current.rotation.y = -t;
  });

  return (
    <group ref={group}>
      <Trail
        width={0.35}
        length={4}
        color={sat.color}
        attenuation={(w) => w * w}
      >
        <mesh>
          <sphereGeometry args={[sat.size, 16, 16]} />
          <meshStandardMaterial
            color={sat.color}
            emissive={sat.color}
            emissiveIntensity={0.9}
            metalness={0.4}
            roughness={0.25}
          />
        </mesh>
      </Trail>
      <Html
        position={[0, -0.28, 0]}
        center
        distanceFactor={8}
        zIndexRange={[100, 0]}
        style={{ pointerEvents: "none", userSelect: "none" }}
      >
        <span className="inline-block rounded-md border border-white/25 bg-black/80 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-white shadow-md backdrop-blur-md sm:text-[11px]">
          {sat.label}
        </span>
      </Html>
    </group>
  );
}

function OrbitPaths() {
  const paths = useMemo(
    () =>
      [1.7, 1.95, 2.2].map((r, i) => {
        const pts: [number, number, number][] = [];
        for (let n = 0; n <= 64; n++) {
          const a = (n / 64) * Math.PI * 2;
          pts.push([Math.cos(a) * r, Math.sin(a * 0.02 + i) * 0.08, Math.sin(a) * r]);
        }
        return pts;
      }),
    []
  );

  return (
    <>
      {paths.map((pts, i) => (
        <group key={i} rotation={[0.2 + i * 0.25, 0.1 * i, 0.15]}>
          <Line
            points={pts}
            color="#6366F1"
            lineWidth={1}
            transparent
            opacity={0.2 - i * 0.04}
          />
        </group>
      ))}
    </>
  );
}

function SceneCameraRig({ simplified = false }: { simplified?: boolean }) {
  const group = useRef<THREE.Group>(null);
  const sats = simplified ? SATELLITES.slice(0, 4) : SATELLITES;

  useFrame((state) => {
    if (!group.current) return;
    const x = state.pointer.x * (simplified ? 0.2 : 0.4);
    const y = state.pointer.y * (simplified ? 0.12 : 0.25);
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      x,
      0.045
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -y,
      0.045
    );
  });

  return (
    <group ref={group}>
      <CrystalCore />
      <GyroRings />
      {!simplified && <OrbitPaths />}
      {sats.map((sat) => (
        <OrbitingSatellite key={sat.label} sat={sat} />
      ))}
      <Sparkles
        count={simplified ? 24 : 55}
        scale={5.5}
        size={simplified ? 1.6 : 2.2}
        speed={0.45}
        opacity={0.55}
        color="#A5B4FC"
      />
    </group>
  );
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 6, 3]} intensity={1.2} color="#EEF2FF" />
      <pointLight position={[-3, -1, 2]} intensity={1.4} color="#22D3EE" />
      <pointLight position={[2, 2, -2]} intensity={1.1} color="#6366F1" />
      <pointLight position={[0, -2.5, 1]} intensity={0.7} color="#F59E0B" />
    </>
  );
}

/** Hero 3D scene — crystal core + gyroscope rings + orbiting tech satellites */
export function TechScene3D({ className }: { className?: string }) {
  const isReduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isReduced) {
    return <GradientSphere className={className} />;
  }

  return (
    <div
      className={cn(
        "relative aspect-square w-full overflow-hidden",
        className
      )}
      aria-hidden
    >
      <div className="absolute inset-[10%] rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute inset-[20%] rounded-full bg-secondary/15 blur-2xl" />

      <Canvas
        dpr={isMobile ? [1, 1.15] : [1, 1.75]}
        camera={{ position: [0, 0.35, isMobile ? 6.2 : 5.6], fov: isMobile ? 42 : 40 }}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: isMobile ? "low-power" : "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <SceneLights />
          <SceneCameraRig simplified={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
}

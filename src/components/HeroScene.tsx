"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 200 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);

  const [positions, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      sizes[i] = Math.random() * 2 + 0.5;
    }
    return [positions, sizes];
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime() * 0.3;
    mesh.current.rotation.y = time * 0.05;
    mesh.current.rotation.x = Math.sin(time * 0.1) * 0.05;
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    return geo;
  }, [positions, sizes]);

  return (
    <points ref={mesh} geometry={geometry}>
      <pointsMaterial
        size={0.03}
        color="#a855f7"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function SmokeParticle({ index }: { index: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const speed = useMemo(() => 0.2 + Math.random() * 0.5, []);
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);
  const scale = useMemo(() => 0.3 + Math.random() * 0.7, []);
  const startX = useMemo(() => (Math.random() - 0.5) * 3, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime() * speed + offset;
    ref.current.position.x = startX + Math.sin(t * 0.5) * 0.5;
    ref.current.position.y = -1 + ((t * 0.3) % 5);
    ref.current.position.z = Math.cos(t * 0.3) * 0.3;
    const lifeProgress = ((t * 0.3) % 5) / 5;
    ref.current.scale.setScalar(scale * (1 + lifeProgress * 2) * Math.sin(lifeProgress * Math.PI));
    (ref.current.material as THREE.MeshStandardMaterial).opacity = Math.sin(lifeProgress * Math.PI) * 0.15;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.5, 8, 8]} />
      <MeshDistortMaterial
        color="#a855f7"
        transparent
        opacity={0.1}
        distort={0.5}
        speed={2}
      />
    </mesh>
  );
}

function GlowingOrb() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * 0.2;
    ref.current.rotation.y = t * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.2, 1]} />
        <MeshDistortMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.7}
          distort={0.4}
          speed={3}
        />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshStandardMaterial
          color="#06b6d4"
          transparent
          opacity={0.05}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function VapeDevice() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.3;
    group.current.position.y = Math.sin(t * 0.5) * 0.15;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={group} position={[0, 0, 0]} scale={0.8}>
        {/* Main body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 2, 32]} />
          <meshStandardMaterial
            color="#1a1a2e"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        {/* Drip tip */}
        <mesh position={[0, 1.2, 0]}>
          <cylinderGeometry args={[0.12, 0.18, 0.4, 32]} />
          <meshStandardMaterial
            color="#0d0d14"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        {/* LED ring */}
        <mesh position={[0, 0.3, 0]}>
          <torusGeometry args={[0.27, 0.02, 16, 32]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={2}
          />
        </mesh>
        {/* Bottom ring */}
        <mesh position={[0, -0.9, 0]}>
          <torusGeometry args={[0.27, 0.015, 16, 32]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={1.5}
          />
        </mesh>
        {/* Window */}
        <mesh position={[0, 0, 0.251]}>
          <planeGeometry args={[0.15, 0.6]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={0.5}
            transparent
            opacity={0.3}
          />
        </mesh>
      </group>
    </Float>
  );
}

function Rings() {
  const ref1 = useRef<THREE.Mesh>(null);
  const ref2 = useRef<THREE.Mesh>(null);
  const ref3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref1.current) {
      ref1.current.rotation.x = t * 0.15;
      ref1.current.rotation.z = t * 0.1;
    }
    if (ref2.current) {
      ref2.current.rotation.y = t * 0.2;
      ref2.current.rotation.x = t * 0.1;
    }
    if (ref3.current) {
      ref3.current.rotation.z = t * 0.15;
      ref3.current.rotation.y = t * 0.08;
    }
  });

  return (
    <>
      <mesh ref={ref1}>
        <torusGeometry args={[2.5, 0.005, 16, 100]} />
        <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={1} transparent opacity={0.3} />
      </mesh>
      <mesh ref={ref2}>
        <torusGeometry args={[3, 0.005, 16, 100]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1} transparent opacity={0.2} />
      </mesh>
      <mesh ref={ref3}>
        <torusGeometry args={[3.5, 0.003, 16, 100]} />
        <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.8} transparent opacity={0.15} />
      </mesh>
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#a855f7" />
        <pointLight position={[-5, -3, 3]} intensity={0.5} color="#06b6d4" />
        <pointLight position={[0, -5, 0]} intensity={0.3} color="#ec4899" />
        <spotLight
          position={[0, 5, 0]}
          angle={0.5}
          penumbra={1}
          intensity={0.5}
          color="#a855f7"
        />

        <VapeDevice />
        <Rings />
        <Particles count={300} />
        <GlowingOrb />

        {Array.from({ length: 15 }).map((_, i) => (
          <SmokeParticle key={i} index={i} />
        ))}
      </Canvas>
    </div>
  );
}

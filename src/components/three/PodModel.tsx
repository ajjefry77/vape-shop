"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function PodBody() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.4;
    ref.current.position.y = Math.sin(t * 0.6) * 0.08;
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={ref} scale={1.4}>
        {/* Main pod body - rounded rectangle shape */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.2, 2.2, 0.5, 4, 4, 4]} />
          <MeshDistortMaterial
            color="#1a1a2e"
            metalness={0.95}
            roughness={0.05}
            distort={0.02}
            speed={2}
          />
        </mesh>

        {/* Top rounded cap (mouthpiece) */}
        <mesh position={[0, 1.35, 0]}>
          <cylinderGeometry args={[0.22, 0.38, 0.35, 32, 1, false]} />
          <meshStandardMaterial
            color="#111118"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Drip tip opening */}
        <mesh position={[0, 1.58, 0]}>
          <cylinderGeometry args={[0.15, 0.18, 0.12, 32]} />
          <meshStandardMaterial
            color="#050508"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>

        {/* LED indicator strip */}
        <mesh position={[0, 0.5, 0.251]}>
          <planeGeometry args={[0.08, 0.8]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={3}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Second LED strip */}
        <mesh position={[0, 0.5, -0.251]}>
          <planeGeometry args={[0.08, 0.8]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={2}
            transparent
            opacity={0.7}
          />
        </mesh>

        {/* Top ring glow */}
        <mesh position={[0, 1.15, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.38, 0.015, 16, 32]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={3}
          />
        </mesh>

        {/* Bottom ring glow */}
        <mesh position={[0, -1.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.38, 0.012, 16, 32]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={2}
          />
        </mesh>

        {/* Window / juice viewing area */}
        <mesh position={[0, -0.1, 0.252]}>
          <planeGeometry args={[0.6, 0.7]} />
          <meshStandardMaterial
            color="#1a1a2e"
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* Edge accent - left */}
        <mesh position={[-0.6, 0, 0]}>
          <boxGeometry args={[0.02, 2.2, 0.5]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={0.5}
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* Edge accent - right */}
        <mesh position={[0.6, 0, 0]}>
          <boxGeometry args={[0.02, 2.2, 0.5]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={0.5}
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* Airflow control (small circle at bottom) */}
        <mesh position={[0, -1.0, 0.26]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.02, 16]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={1}
          />
        </mesh>

        {/* Coil visibility through window */}
        <mesh position={[0, -0.5, 0.15]}>
          <cylinderGeometry args={[0.08, 0.08, 0.15, 8]} />
          <meshStandardMaterial
            color="#f59e0b"
            emissive="#f59e0b"
            emissiveIntensity={0.8}
            transparent
            opacity={0.6}
          />
        </mesh>
      </group>
    </Float>
  );
}

function PodCloudParticles() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(100 * 3);
    for (let i = 0; i < 100; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 2 + Math.random() * 3;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 4;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.025}
        color="#a855f7"
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function RotatingRings() {
  const ref1 = useRef<THREE.Mesh>(null);
  const ref2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref1.current) {
      ref1.current.rotation.x = t * 0.2;
      ref1.current.rotation.z = t * 0.1;
    }
    if (ref2.current) {
      ref2.current.rotation.y = t * 0.25;
      ref2.current.rotation.x = -t * 0.1;
    }
  });

  return (
    <>
      <mesh ref={ref1}>
        <torusGeometry args={[2.2, 0.004, 16, 100]} />
        <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={1.5} transparent opacity={0.25} />
      </mesh>
      <mesh ref={ref2}>
        <torusGeometry args={[2.6, 0.003, 16, 100]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1} transparent opacity={0.15} />
      </mesh>
    </>
  );
}

export default function PodModel({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0.5, 5], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.15} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#a855f7" />
        <pointLight position={[-5, 3, 3]} intensity={0.6} color="#06b6d4" />
        <pointLight position={[0, -5, 0]} intensity={0.3} color="#ec4899" />
        <spotLight
          position={[0, 5, 0]}
          angle={0.4}
          penumbra={1}
          intensity={0.8}
          color="#a855f7"
          castShadow
        />

        <PodBody />
        <RotatingRings />
        <PodCloudParticles />

        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.3}
          scale={6}
          blur={2.5}
          far={4}
          color="#a855f7"
        />
      </Canvas>
    </div>
  );
}

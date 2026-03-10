'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, Sparkles, Stars, Trail } from '@react-three/drei';
import * as THREE from 'three';

const googlePalette = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'] as const;

function BracketSegment({
  position,
  rotation,
  color,
  hovered,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  hovered: boolean;
}) {
  return (
    <group position={position} rotation={rotation}>
      <RoundedBox args={[0.28, 1.28, 0.18]} radius={0.08} smoothness={5} castShadow receiveShadow>
        <meshPhysicalMaterial
          color="#dbeafe"
          emissive={color}
          emissiveIntensity={hovered ? 1.85 : 1.05}
          metalness={0.88}
          roughness={0.14}
          transmission={0.24}
          thickness={1.4}
          transparent
          opacity={0.92}
          clearcoat={1}
          clearcoatRoughness={0.1}
          ior={1.34}
        />
      </RoundedBox>
      <RoundedBox args={[0.32, 1.34, 0.2]} radius={0.1} smoothness={4} scale={1.03}>
        <meshBasicMaterial color={color} transparent opacity={hovered ? 0.12 : 0.08} />
      </RoundedBox>
    </group>
  );
}

function OrbitingParticle({
  radius,
  speed,
  offset,
  color,
}: {
  radius: number;
  speed: number;
  offset: number;
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) {
      return;
    }

    const time = state.clock.elapsedTime * speed + offset;
    ref.current.position.x = Math.cos(time) * radius;
    ref.current.position.y = Math.sin(time * 1.4) * 0.7;
    ref.current.position.z = Math.sin(time) * radius * 0.45;
  });

  return (
    <Trail width={0.45} length={4} color={new THREE.Color(color)} attenuation={(value) => value * value}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.05, 18, 18]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </Trail>
  );
}

function CodingSymbol() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.35) * 0.08;

    const targetX = (state.mouse.x * Math.PI) / 8;
    const targetY = (state.mouse.y * Math.PI) / 10;

    groupRef.current.rotation.y += ((state.clock.elapsedTime * 0.22 + targetX) - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x += ((-targetY * 0.85) - groupRef.current.rotation.x) * 0.07;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.18;
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.18} floatIntensity={0.9}>
        <group onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
          <BracketSegment position={[-1.45, 0.74, 0]} rotation={[0, 0, 0.52]} color={googlePalette[0]} hovered={hovered} />
          <BracketSegment position={[-1.45, -0.74, 0]} rotation={[0, 0, -0.52]} color={googlePalette[1]} hovered={hovered} />
          <BracketSegment position={[-0.28, 0.74, -0.08]} rotation={[0, 0, 0.52]} color={googlePalette[2]} hovered={hovered} />
          <BracketSegment position={[-0.28, -0.74, -0.08]} rotation={[0, 0, -0.52]} color={googlePalette[3]} hovered={hovered} />

          <BracketSegment position={[1.45, 0.74, 0]} rotation={[0, 0, -0.52]} color={googlePalette[3]} hovered={hovered} />
          <BracketSegment position={[1.45, -0.74, 0]} rotation={[0, 0, 0.52]} color={googlePalette[2]} hovered={hovered} />
          <BracketSegment position={[0.28, 0.74, -0.08]} rotation={[0, 0, -0.52]} color={googlePalette[1]} hovered={hovered} />
          <BracketSegment position={[0.28, -0.74, -0.08]} rotation={[0, 0, 0.52]} color={googlePalette[0]} hovered={hovered} />

          <mesh position={[0, 0, -0.24]} scale={hovered ? 1.18 : 1.05}>
            <torusGeometry args={[2.55, 0.04, 24, 180]} />
            <meshBasicMaterial color="#4285F4" transparent opacity={0.2} />
          </mesh>

          <mesh position={[0, 0, -0.42]} rotation={[0.9, 0.25, 0.35]}>
            <torusGeometry args={[1.9, 0.03, 18, 180]} />
            <meshBasicMaterial color="#34A853" transparent opacity={0.18} />
          </mesh>
        </group>
      </Float>

      <OrbitingParticle radius={2.3} speed={1.4} offset={0} color="#4285F4" />
      <OrbitingParticle radius={2.7} speed={1.1} offset={1.2} color="#EA4335" />
      <OrbitingParticle radius={2.1} speed={1.7} offset={2.4} color="#FBBC05" />
      <OrbitingParticle radius={2.55} speed={1.25} offset={3.2} color="#34A853" />
    </group>
  );
}

export function Hero3D() {
  return (
    <div className="relative h-[440px] w-full min-h-[440px] lg:h-[640px] lg:min-h-[640px]">
      <Canvas camera={{ position: [0, 0.25, 6.2], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={['#020617']} />
        <fog attach="fog" args={['#020617', 8, 16]} />
        <ambientLight intensity={0.35} />
        <hemisphereLight intensity={0.7} groundColor="#020617" color="#8ec5ff" />
        <directionalLight position={[5, 4, 5]} intensity={1.35} color="#ffffff" />
        <directionalLight position={[-5, -1, 4]} intensity={0.75} color="#4285F4" />
        <pointLight position={[0, 0, 2.5]} intensity={2.4} color="#EA4335" />
        <pointLight position={[2.5, 1.6, 1.8]} intensity={1.8} color="#FBBC05" />
        <pointLight position={[-2.4, -1.2, 1.8]} intensity={1.5} color="#34A853" />
        <Stars radius={60} depth={32} count={2400} factor={4} saturation={0} fade speed={0.5} />
        <Sparkles count={110} scale={[8, 6, 8]} size={2.2} speed={0.28} color="#dbeafe" opacity={0.7} />
        <CodingSymbol />
      </Canvas>
    </div>
  );
}

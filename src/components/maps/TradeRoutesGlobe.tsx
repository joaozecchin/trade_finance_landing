"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { OrbitControls, Sphere, Line } from "@react-three/drei";
import * as THREE from "three";
import { tradeRoutes, latLngToVector3 } from "@/data/routes";

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      <meshStandardMaterial
        color="#1e3a5f"
        wireframe={false}
        transparent
        opacity={0.9}
      />
    </Sphere>
  );
}

function GlobeWireframe() {
  return (
    <Sphere args={[1.01, 32, 32]}>
      <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.1} />
    </Sphere>
  );
}

// Animated trade route using Line from drei with animated segments
function AnimatedTradeRoute({
  origin,
  destination,
  color,
  delay = 0,
}: {
  origin: [number, number];
  destination: [number, number];
  color: string;
  delay?: number;
}) {
  const points = useMemo(() => {
    const start = new THREE.Vector3(...latLngToVector3(origin[0], origin[1], 1.02));
    const end = new THREE.Vector3(...latLngToVector3(destination[0], destination[1], 1.02));

    // Create an arc above the globe
    const mid = new THREE.Vector3()
      .addVectors(start, end)
      .multiplyScalar(0.5)
      .normalize()
      .multiplyScalar(1.3);

    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
    return curve.getPoints(50);
  }, [origin, destination]);

  return (
    <Line
      points={points}
      color={color}
      lineWidth={2}
      transparent
      opacity={0.8}
      dashed
      dashSize={0.05}
      gapSize={0.02}
    />
  );
}

// Animated flowing particle along route
function FlowingParticle({
  origin,
  destination,
  color,
  delay = 0,
}: {
  origin: [number, number];
  destination: [number, number];
  color: string;
  delay?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  const curve = useMemo(() => {
    const start = new THREE.Vector3(...latLngToVector3(origin[0], origin[1], 1.02));
    const end = new THREE.Vector3(...latLngToVector3(destination[0], destination[1], 1.02));

    const mid = new THREE.Vector3()
      .addVectors(start, end)
      .multiplyScalar(0.5)
      .normalize()
      .multiplyScalar(1.3);

    return new THREE.QuadraticBezierCurve3(start, mid, end);
  }, [origin, destination]);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Animate particle along the curve
      const t = ((clock.getElapsedTime() * 0.3 + delay) % 1);
      const point = curve.getPoint(t);
      meshRef.current.position.copy(point);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.015, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.9} />
    </mesh>
  );
}

// Glowing endpoint marker with pulse animation
function LocationMarker({ position }: { position: [number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const pos = latLngToVector3(position[0], position[1], 1.02);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Subtle pulse effect
      const scale = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.2;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={meshRef} position={pos}>
      <sphereGeometry args={[0.025, 16, 16]} />
      <meshBasicMaterial color="#10b981" transparent opacity={0.9} />
    </mesh>
  );
}

function TradeRoutes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  // Get unique locations
  const locations = useMemo(() => {
    const locs: [number, number][] = [];
    tradeRoutes.forEach((route) => {
      locs.push(route.origin.coordinates);
      locs.push(route.destination.coordinates);
    });
    return [...new Map(locs.map((l) => [l.join(","), l])).values()];
  }, []);

  return (
    <group ref={groupRef}>
      {tradeRoutes.map((route, index) => (
        <group key={route.id}>
          <AnimatedTradeRoute
            origin={route.origin.coordinates}
            destination={route.destination.coordinates}
            color={route.color}
            delay={index * 0.3}
          />
          <FlowingParticle
            origin={route.origin.coordinates}
            destination={route.destination.coordinates}
            color={route.color}
            delay={index * 0.15}
          />
        </group>
      ))}
      {locations.map((loc, i) => (
        <LocationMarker key={i} position={loc} />
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />

      <Globe />
      <GlobeWireframe />
      <TradeRoutes />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 1.8}
      />
    </>
  );
}

export default function TradeRoutesGlobe() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 35 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

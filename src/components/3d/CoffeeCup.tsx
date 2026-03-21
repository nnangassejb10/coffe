import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CoffeeCup = () => {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
  });

  return (
    <group ref={ref} position={[0, -0.5, 0]}>
      {/* Cup body - cylinder */}
      <mesh castShadow>
        <cylinderGeometry args={[0.9, 0.7, 1.6, 32]} />
        <meshStandardMaterial color="#f5f0e8" roughness={0.3} metalness={0.05} />
      </mesh>
      {/* Coffee inside */}
      <mesh position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.85, 0.85, 0.15, 32]} />
        <meshStandardMaterial color="#3d1c02" roughness={0.1} metalness={0.3} />
      </mesh>
      {/* Handle */}
      <mesh position={[1.05, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.35, 0.08, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#f5f0e8" roughness={0.3} metalness={0.05} />
      </mesh>
      {/* Saucer */}
      <mesh position={[0, -0.9, 0]} castShadow>
        <cylinderGeometry args={[1.3, 1.3, 0.1, 32]} />
        <meshStandardMaterial color="#f5f0e8" roughness={0.3} metalness={0.05} />
      </mesh>
      {/* Steam particles */}
      <Steam />
    </group>
  );
};

const Steam = () => {
  const ref1 = useRef<THREE.Mesh>(null);
  const ref2 = useRef<THREE.Mesh>(null);
  const ref3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    [ref1, ref2, ref3].forEach((ref, i) => {
      if (!ref.current) return;
      const offset = i * 0.7;
      const cycle = ((t * 0.8 + offset) % 3) / 3;
      ref.current.position.y = 1 + cycle * 2;
      ref.current.position.x = Math.sin(t + offset) * 0.15;
      ref.current.scale.setScalar(0.5 + cycle * 0.5);
      (ref.current.material as THREE.MeshStandardMaterial).opacity = Math.max(0, 0.4 - cycle * 0.5);
    });
  });

  return (
    <>
      {[ref1, ref2, ref3].map((ref, i) => (
        <mesh key={i} ref={ref} position={[0, 1.2, 0]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
        </mesh>
      ))}
    </>
  );
};

export default CoffeeCup;

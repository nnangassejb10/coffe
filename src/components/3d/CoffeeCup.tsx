import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const CoffeeCup = () => {
  const ref = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, '/images/coffe-removebg-preview.png');

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
  });

  return (
    <group ref={ref} position={[0, -0.2, 0]}>
      <mesh>
        <planeGeometry args={[2.2, 2.2]} />
        <meshStandardMaterial
          map={texture}
          transparent
          opacity={1}
          side={THREE.DoubleSide}
        />
      </mesh>
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

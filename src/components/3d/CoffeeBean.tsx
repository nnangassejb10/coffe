import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CoffeeBeanProps {
  position: [number, number, number];
  scale?: number;
  speed?: number;
}

const CoffeeBean = ({ position, scale = 1, speed = 1 }: CoffeeBeanProps) => {
  const ref = useRef<THREE.Group>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed;
    ref.current.position.y = initialY + Math.sin(t) * 0.5;
    ref.current.rotation.x = t * 0.3;
    ref.current.rotation.z = t * 0.2;
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      {/* Bean shape: two merged spheres with a groove */}
      <mesh castShadow>
        <sphereGeometry args={[0.3, 16, 16, 0, Math.PI]} />
        <meshStandardMaterial color="#3d1c02" roughness={0.6} metalness={0.1} />
      </mesh>
      <mesh castShadow rotation={[0, Math.PI, 0]}>
        <sphereGeometry args={[0.3, 16, 16, 0, Math.PI]} />
        <meshStandardMaterial color="#5a2d0c" roughness={0.6} metalness={0.1} />
      </mesh>
      {/* Center groove */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.62, 8]} />
        <meshStandardMaterial color="#1a0a00" roughness={0.9} />
      </mesh>
    </group>
  );
};

export default CoffeeBean;

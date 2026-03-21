import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import CoffeeBean from './CoffeeBean';
import CoffeeCup from './CoffeeCup';

const beanPositions: [number, number, number][] = [
  [-3, 2, -2],
  [3.5, 1.5, -1],
  [-2.5, -1, -3],
  [2.8, -1.5, -2],
  [-4, 0.5, -1.5],
  [4, -0.5, -2.5],
  [-1.5, 3, -1],
  [1.5, -2.5, -1.5],
  [0, 2.5, -3],
  [-3.5, -2, -2.5],
  [3, 2.5, -3],
  [-1, -1.8, -2],
];

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8] as [number, number, number], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} color="#fff8e7" />
          <directionalLight position={[-5, 3, 2]} intensity={0.3} color="#7ed957" />
          <pointLight position={[0, -2, 3]} intensity={0.5} color="#7ed957" distance={10} />

          <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
            <CoffeeCup />
          </Float>

          {beanPositions.map((pos, i) => (
            <CoffeeBean
              key={i}
              position={pos}
              scale={0.4 + Math.random() * 0.4}
              speed={0.3 + Math.random() * 0.5}
            />
          ))}

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.5}
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene;

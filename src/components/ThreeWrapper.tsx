import { Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

export default function ThreeWrapper() {
  return (
    <Canvas className='three-canvas-container'>
      <Html>
        <body>
          <Suspense fallback={null}>
            <div>Three</div>
          </Suspense>
        </body>
      </Html>
    </Canvas>
  );
}

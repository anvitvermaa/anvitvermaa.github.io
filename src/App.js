import { Canvas } from '@react-three/fiber';
import MetallicName from './components/MetallicName';
import { DitherBackground } from './components/DitherBackground';

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas>
        <DitherBackground />
      </Canvas>
      <div style={{ position: 'absolute', top: 20, left: 20 }}>
        <MetallicName />
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { Canvas } from '@react-three/fiber';

import Scene from './components/Scene';

import './App.css';

function App() {
  const [cameraZoom, setCameraZoom] = useState();

  return (
    <div className="App">
      <Canvas
        concurrent="true"
        shadows
        gl={{ alpha: false }}
        // camera={{ position: [0, 3, 5], fov: 70 }}
        // onCreated={({ gl, camera }) => {
        //   camera.lookAt(0, 0, 0)
        // }}
        >
        <Scene zoom={cameraZoom} />
      </Canvas>
      <button onClick={() => setCameraZoom(!cameraZoom)} style={{position: 'absolute', bottom: '1rem', left: '1rem', fontSize: '2rem'}}>zooooom</button>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { GoogleMap } from './components/GoogleMap/GoogleMap';
import { BabylonCuboid } from './components/BabylonCuboid';
function App() {
  const [src, setSrc] = useState<string>('');

  return (
    <div style={{ display: 'flex' }}>
      <GoogleMap setSrc={setSrc} />
      <BabylonCuboid img={src} />
    </div>
  );
}

export default App;

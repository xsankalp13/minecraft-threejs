import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { Cubes, FPV, Ground,Player } from './components';
const App = () => {
  return (
    <>
        <Canvas>
            <Sky sunPosition={[100,100,20]}/>
            <ambientLight intensity={1.6}/>
            <FPV/>
            <Physics>
                <Player/>
                <Cubes/>
                <Ground/>
            </Physics>
        </Canvas>
        <div className='absolute cursor centered'>+</div>
    </>
  )
}

export default App
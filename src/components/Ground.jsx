
import { usePlane } from '@react-three/cannon'
import React from 'react'
import { groundTexture } from '../images/textures'
import { NearestFilter, RepeatWrapping } from 'three'
import { useStore } from '../../hooks/useStore'

const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI/2 ,0 ,0], position: [0,-0.5,0]
    }))

    const [addCube] = useStore((state) => [state.addCube]);





    groundTexture.magFilter = NearestFilter;
    groundTexture.wrapS = RepeatWrapping;
    groundTexture.wrapT = RepeatWrapping;
    groundTexture.repeat.set(100,100);
    return (
         <mesh ref={ref} onClick={(e) => {
           e.stopPropagation();
           const [x,y,z] = Object.values(e.point).map((coord) => Math.ceil(coord));
            addCube(x,y,z);
         }}>
            <planeGeometry args={[100,100]}/>
            <meshStandardMaterial map={groundTexture}/>
         </mesh>
        )
}

export default Ground

import { useBox } from '@react-three/cannon'
import React from 'react'
import * as textures from '../images/textures'
import { useStore } from '../../hooks/useStore'
const Cube = ({position,texture}) => {
    
    const [ref] = useBox(() => ({
        type: 'Static',
        position,
    }))
    const [addCube,removeCube] = useStore((state) => [state.addCube,state.removeCube]);

    const activeTexture = textures[texture + 'Texture']


    return (
        <mesh ref={ref} onClick={(e) => {
            e.stopPropagation();
            const clickFace = Math.floor(e.faceIndex / 2);
            // console.log("clicked", clickFace);
            const {x,y,z} = ref.current.position;


            if(e.altKey){
                removeCube(x,y,z);
                return;
            }


            if(clickFace === 0){
                addCube(x+1,y,z);
                return;
            } 
            if(clickFace === 1){
                addCube(x-1,y,z);
                return;
            } 
            if(clickFace === 2){
                addCube(x,y+1,z);
                return;
            } 
            if(clickFace === 3){
                addCube(x,y-1,z);
                return;
            }
            if(clickFace === 4){
                addCube(x,y,z+1);
                return;
            }
            if(clickFace === 5){
                addCube(x,y,z-1);
                return;
            }

        }}>
            <boxGeometry/>
            <meshStandardMaterial map={activeTexture}/>
        </mesh>
    )
}

export default Cube
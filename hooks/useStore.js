import { create } from 'zustand';
import { nanoid } from 'nanoid';
export const useStore = create((set) => ({
    texture:'dirt',
    cubes: [],
    addCube: (x,y,z) => {
        set((state) => ({
            cubes: [
                ...state.cubes,
                {
                    key: nanoid(),
                    position: [x,y,z],
                    texture: state.texture,
                }
            ]
        }))
    },
    removeCube: (x,y,z) => {
        set((state) => ({
            cubes: state.cubes.filter(cube => {
                const [cubeX,cubeY,cubeZ] = cube.position;
                return !(cubeX === x && cubeY === y && cubeZ === z);
            })
        }))
    },
    setTexture: () => {},
    setWorld: () => {},
    resetWorld: () => {},
}))
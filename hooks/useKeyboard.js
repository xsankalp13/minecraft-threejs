import { useCallback, useEffect, useState } from "react";


const actionBykey = (key) => {
    const keyActionMap = {
        KeyW: "moveForward",
        KeyS: "moveBackward",
        KeyA: "moveLeft",
        KeyD: "moveRight",
        Space: "jump",
        Digit1: "dirt",
        Digit2: "grass",
        Digit3: "glass",
        Digit4: "wood",
        Digit5: "log",
    }
    return keyActionMap[key];
}

export const useKeyboard = () => {
    
    const handleKeyDown = useCallback((e) => {
        const action = actionBykey(e.code);
        if(action) {
            setActions((a) => ({...a,[action]: true}));
        }
    }, []);
    const handleKeyUp = useCallback((e) => {
        const action = actionBykey(e.code);
        if(action) {
            setActions((a) => ({...a,[action]: false}));
        }
    }, []);
    
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        texture1: false,
        texture2: false,
        texture3: false,
        texture4: false,
        texture5: false,
    });
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, [handleKeyDown,handleKeyUp]);
    
    return actions;
}
import {useEffect, useState} from "react";

export const useScreenHeight = () => {
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    useEffect(() => {
        setScreenHeight(window.innerHeight);
        window.scrollTo(0,0);
    },[])

    return screenHeight
}
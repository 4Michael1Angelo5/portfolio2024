import React, {useEffect, useRef} from "react";
import {useInView} from "framer-motion";

export const ImageComponent = ({item, idx})=>{

    const ref = useRef()
    const inView = useInView(ref, {once:true, amount: 0.25 });
    const opacity = inView ? "1": "0"
    const transform = inView? "translateX(0px)":`translateX(${200*(-1)**(idx+1)}px)`;
    const boxShadow = inView? "1px 1px 1.1em 0.25em #dab6b6, 0px 0px 14px 6px #36348000" : "0px 0px 1.1em 0.25em #dab6b608, 0px 0px 0px 0px #363480"
    //
    useEffect(() => {
        if (inView) {

            console.log("item in view!")
            console.log(item.coverImage)
            console.log(idx, transform)

        }
    }, [inView,idx,transform]);

    return(

        <img
            className="projects-main-image"
            ref={ref}
            src={item.coverImage}
            alt={item.title}
            width="100%"
            style={{
                transform:transform,
                opacity:opacity,
                boxShadow:boxShadow,

            }}
        />
    )
}


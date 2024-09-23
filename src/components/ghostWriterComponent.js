import React, { useEffect, useState , useRef} from "react";

// super cool ghost writer effect 

const GhostWriter = (props)=>{
    // const [greeting] = useState(props.message)
    const [message, setMessage] = useState("");
    const intervalIdRef = useRef(null); // Use useRef to store interval ID

    let index = props.index; 

    let temp = props.animationComplete

     temp[props.index] = true;

    let previousAnimationComplete = props.setAnimationComplete()
  
    useEffect(() => {
      let intervalId; // Declare intervalId here so it's accessible in the cleanup function
  
      const handleMessage = (m) => {
        let i = 0;
        intervalIdRef.current = setInterval(() => {
          setMessage(prev => {
              if(i<m.length){                 
                  const newMessage = prev + m[i] ;
                  i +=1;
                  return newMessage
              }else{
                  props.setAnimationComplete(temp)
                  clearInterval(intervalIdRef.current) 
                  return prev;
              }            
  
          });
        }, 500); //speed each letter is typed
      };

      handleMessage(props.greeting);

      // Cleanup interval on component unmount
      return () => {
        if (intervalId) {
          clearInterval(intervalIdRef.current);
        }
      };
    }, [props.animationComplete]);

return(
    <>
     {message}
    </>
)
}

export default GhostWriter
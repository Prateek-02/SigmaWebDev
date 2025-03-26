import React, { useEffect, useState } from 'react'

function Resize() {
    const[windowWidth,setwindowWidth] = useState(window.innerWidth)
    useEffect(()=>{
        const handleResize = () => setwindowWidth(window.innerWidth);
        console.log("Event Listener Added")
        window.addEventListener('resize',handleResize);

        return () => {
            console.log("Event Listener Removed")
            window.removeEventListener('resize',handleResize);
        }
    },[])
    //it will run only on 1st render

    return (
    <div>
        <h1>Window width : {windowWidth}px</h1>
    </div>
  )
}

export default Resize

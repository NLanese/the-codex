import React, {useEffect, useState, useRef} from "react";

export default  function useViewport() {
    const [width, setWidth] = useState(null) // start with null, server-safe
  
    useEffect(() => {
      // This runs only on the client
      const handleResize = () => setWidth(window.innerWidth)
  
      handleResize() // set initial width
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])
  
    return { width }
  }
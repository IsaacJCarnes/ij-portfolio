import React, { useEffect, useState } from 'react';

function ScrollComponent({ scrollProp, startX, startY, height, width, children, movingUp = true, movingRight = true,  }) {
    const [leftPx, setLeftPx] = useState(0);
    const [topPx, setTopPx] = useState(0);
    useEffect(() => {
        if(startX !== undefined){
            setLeftPx(scrollProp - startX * (movingRight ? 1 : -1))
        }
        if(startY !== undefined){
            setTopPx(scrollProp - startY * (movingUp ? 1 : -1))
        }
    }, [scrollProp, movingRight, movingUp, startX, startY])
    
    return (
        <div style={{ position: 'absolute', height: height ? `${height}px` : 'fit-content', width: width ? `${width}px` : 'fit-content', left:`${leftPx}px`, top:`${topPx}px`, overflow: 'hidden'}}>{children}</div>
    );
}

export default ScrollComponent;
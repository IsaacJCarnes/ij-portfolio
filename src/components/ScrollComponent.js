import React, { useEffect, useState } from 'react';

function ScrollComponent({ scrollProp, startX, startY, height, width, children, verticalSpeed=0, horizontalSpeed=0,  }) {
    const [lastScrollProp, setLastScrollProp] = useState(scrollProp)
    const [leftPx, setLeftPx] = useState(startX - scrollProp);
    const [topPx, setTopPx] = useState(startY - scrollProp);
    useEffect(() => {
        var scrollChange = scrollProp-lastScrollProp;
        setLastScrollProp(scrollProp);
        if(startX !== undefined && horizontalSpeed !== 0){
            setLeftPx(leftPx + (scrollChange * horizontalSpeed))
        }
        if(startY !== undefined && verticalSpeed !== 0){
            setTopPx(topPx + (scrollChange * verticalSpeed))
        }
    }, [scrollProp, lastScrollProp, leftPx, topPx, horizontalSpeed, verticalSpeed, startX, startY])
    
    return (
        <div style={{ position: 'absolute', height: height ? `${height}px` : 'fit-content', width: width ? `${width}px` : 'fit-content', left:`${leftPx}px`, top:`${topPx}px`, overflow: 'hidden'}}>{children}</div>
    );
}

export default ScrollComponent;
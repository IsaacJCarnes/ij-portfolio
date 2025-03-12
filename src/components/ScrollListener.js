import React, { useEffect } from 'react';

function ScrollListener({scrollProp, setScrollProp, minScroll, maxScroll}) {

  useEffect(() => {
    const handleScroll = (e) => {
        let scrollTarget = scrollProp + e.deltaY;
        if (minScroll !== undefined) scrollTarget = Math.max(scrollTarget, minScroll) //set min
        if (maxScroll !== undefined) scrollTarget = Math.min(scrollTarget, maxScroll) //set max
        setScrollProp(scrollTarget);
    };
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [scrollProp, setScrollProp, maxScroll, minScroll]);

  return (
    <></>
  );
}

export default ScrollListener;
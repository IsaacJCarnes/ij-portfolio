import React, { useEffect } from 'react';

function ScrollListener({scrollProp, setScrollProp}) {

  useEffect(() => {
    const handleScroll = (e) => {
      setScrollProp(scrollProp + e.deltaY);
    };
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [scrollProp, setScrollProp]);

  return (
    <></>
  );
}

export default ScrollListener;
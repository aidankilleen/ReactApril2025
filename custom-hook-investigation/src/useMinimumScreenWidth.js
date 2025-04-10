import { useState, useEffect } from 'react';

export function useSafeScreenWidth(minWidth = 400) {
  const getSafeWidth = () => Math.max(window.innerWidth, minWidth);
  const [width, setWidth] = useState(getSafeWidth);

  useEffect(() => {
    const handleResize = () => {
      console.log(`resizing: ${width}`);
      setWidth(Math.max(window.innerWidth, minWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [minWidth]);

  return width;
}


export function useWindowWidth() {
    const [width, setWidth] = useState(() => window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return width;
  }
import { useState, useEffect } from 'react';
import { BREAKPOINTS } from 'consts/screen';

export const useIsMobileWidth = (size = `${BREAKPOINTS.MD}px`) => {
  const [isMobile, setIsMobile] = useState(null);

  const handleResize = () => {
    const isMobileCheck = checkMobileWitdh(`(max-width: ${size})`);
    setIsMobile(isMobileCheck);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.addEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const checkMobileWitdh = size => window.matchMedia(size).matches;

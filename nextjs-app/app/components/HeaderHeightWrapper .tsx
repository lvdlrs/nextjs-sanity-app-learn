'use client';
import { useEffect, useState } from 'react';

export default function HeaderHeightWrapper({ children }: { children: React.ReactNode }) {
  const [headerHeight, setHeaderHeight] = useState(133);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerElement = document.getElementsByTagName('header')[0];
      if (headerElement) {
        setHeaderHeight(headerElement.offsetHeight);
      }
    };
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  return <main style={{ marginTop: headerHeight }}>{children}</main>;
}

import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router';

import { LayoutProps } from './Layout.types';

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};

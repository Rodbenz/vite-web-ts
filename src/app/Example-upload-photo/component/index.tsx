import React, { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

interface ResponsiveProps {
  children: ReactNode;
}

const Desktop: React.FC<ResponsiveProps> = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? <>{children}</> : null;
};

const Tablet: React.FC<ResponsiveProps> = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? <>{children}</> : null;
};

const Mobile: React.FC<ResponsiveProps> = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? <>{children}</> : null;
};

const ResponsiveComponent: React.FC<ResponsiveProps> = ({ children }) => (
  <div>
    <Desktop>{children}</Desktop>
    <Tablet>{children}</Tablet>
    <Mobile>{children}</Mobile>
  </div>
);

export default ResponsiveComponent;

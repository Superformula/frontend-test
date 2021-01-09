import * as React from 'react';

interface HeaderProps {
  className?: string;
}

function Header({ className }: HeaderProps) {
  return <div className={className}>This will be the Header!</div>;
}

export default Header;

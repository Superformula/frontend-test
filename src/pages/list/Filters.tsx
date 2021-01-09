import * as React from 'react';

interface FiltersProps {
  className?: string;
}

function Filters({ className }: FiltersProps) {
  return <div className={className}>This will be the Filters!</div>;
}

export default Filters;

import * as React from 'react';

interface ResultsProps {
  className?: string;
}

function Results({ className }: ResultsProps) {
  return <div className={className}>This will be the Results!</div>;
}

export default Results;

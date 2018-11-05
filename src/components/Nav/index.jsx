import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'routes';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <Link
          to={ROUTES.HOME}
          className="button button--smaller button--inverse"
        >
          Home
        </Link>
      </div>
    </nav>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from 'routes';

const NotFoundContainer = () => (
  <section className="content-section">
    <div className="container">
      <div className="intro">
        <h1>Not Found</h1>
        <p>Sorry, we could not find that page.&nbsp;</p>
        <footer className="intro__footer">
          <p>
            <Link className="button button--inverse" to={ROUTES.HOME}>
              Return home
            </Link>
          </p>
        </footer>
      </div>
    </div>
  </section>
);

export default NotFoundContainer;

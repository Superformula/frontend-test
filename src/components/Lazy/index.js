import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { PageLoader } from '../PageLoader';

export const Lazy = ({ component: Component }) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

Lazy.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Lazy;

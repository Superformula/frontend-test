import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

export const Lazy = ({ component: Component }) => (
  <Suspense fallback={'loading...'}>
    <Component />
  </Suspense>
);

Lazy.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Lazy;

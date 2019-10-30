import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ isFullScreen }) =>
  <div className='loading'>
    <div className='loading-prompt'>
      Loading...
    </div>
    <style jsx>{`
      .loading {
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
        position: ${isFullScreen ? 'absolute' : 'relative'};
        width: 100%;
        height: 100%;
      }

      .loading-prompt {
        text-align: center;
        background: #fff;
        padding: 5rem;
      }
    `}</style>
  </div>;

Loading.propTypes = {
  isFullScreen: PropTypes.bool,
};

Loading.defaultProps = {
  isFullScreen: false
};

export default Loading;
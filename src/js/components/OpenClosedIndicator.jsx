import PropTypes from 'prop-types';
import React from 'react';

function OpenClosedIndicator(props) {
  return (
    <div className="open-closed-indicator">
      { props.closed ?
        <React.Fragment>
          <div className="indicator closed" />
          closed
        </React.Fragment>
      :
        <React.Fragment>
          <div className="indicator open" />
          open now
        </React.Fragment>
      }
    </div>
  );
}

OpenClosedIndicator.propTypes = { closed: PropTypes.bool.isRequired };

export default OpenClosedIndicator;

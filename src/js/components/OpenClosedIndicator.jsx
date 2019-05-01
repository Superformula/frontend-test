import React, { Component } from 'react';

class OpenClosedIndicator extends Component {

  render() {
    return (
      <div className="open-closed-indicator">
        {closed
            ? <React.Fragment>
                <div className='indicator closed'/>
                closed
            </React.Fragment>
            : <React.Fragment>
                <div className='indicator open'/>
                open now
            </React.Fragment>
        }
      </div>
    );
  }
}

export default OpenClosedIndicator;

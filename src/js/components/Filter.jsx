import React, { Component } from 'react';

class Filter extends Component {

  render() {
    return (
      <div className="filters">
        <div className="grid-container">
          <div className="row">
            <div className="col-3">
                Filter By:
                <div className="filter">
                  <div className="radio-wrapper">
                    <input type="radio" id="open" name="selector" />
                    <label htmlFor="open">Open Now</label>
                    <div className="check">
                      <div className="inside"></div>
                    </div>
                  </div>
                </div>
                <div className="filter">
                  Price
                </div>
                <div className="filter">
                  Categories
                </div>
            </div>
            <div className="col-3 text-right">
              <button
                className="btn btn--disabled"
                disabled
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;

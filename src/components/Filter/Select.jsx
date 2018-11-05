import React, { Component, Fragment } from 'react';
import { func, array, string } from 'prop-types';
import cx from 'classnames';
import Measure from 'react-measure';

import Filter from 'components/Filter';

export default class Select extends Component {
  static propTypes = {
    onSelect: func,
    type: string,
    label: string,
    values: array,
  };

  static defaultProps = {
    values: [],
  };

  state = {
    isOpen: false,
    dimensions: {},
  };

  toggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  onSelect = (value) => {
    const { onSelect, type } = this.props;
    this.toggle();
    onSelect(type, value);
  };

  render() {
    const { values, label, options } = this.props;
    const {
      isOpen,
      dimensions: { width },
    } = this.state;

    return (
      <div
        style={{ width }}
        className={cx('filter-select', {
          'filter-select--open': isOpen,
        })}
      >
        <div
          role="presentation"
          onClick={this.toggle}
          className="filter-select__label"
        >
          {label}
        </div>
        <Measure
          bounds
          onResize={(contentRect) => {
            this.setState({ dimensions: contentRect.bounds });
          }}
        >
          {({ measureRef }) => (
            <div ref={measureRef} className="filter-select__options">
              <Fragment>
                <Filter.Option
                  isActive={!values.length}
                  onSelect={this.onSelect}
                  value="All"
                />
              </Fragment>
              {options.map(option => (
                <Filter.Option
                  isActive={values.includes(option)}
                  onSelect={this.onSelect}
                  key={option}
                  value={option}
                />
              ))}
            </div>
          )}
        </Measure>
      </div>
    );
  }
}

Select.propTypes = {
  options: array.isRequired,
};

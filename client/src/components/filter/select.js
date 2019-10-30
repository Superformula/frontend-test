import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';
import { ThemeContext } from '../../contexts';
import FilterSection from './filter-section';
import Dropdown from './dropdown';

// Select is a custom dropdown selector
const Select = ({ label, options, selectedOptions, toggleOption, isOpen, minWidth, height, onClick }) => {
  const theme = useContext(ThemeContext);
  const transitions = useTransition(isOpen, null, {
    from: {
      position: 'absolute',
      width: '100%',
      top: '.5rem',
      height: '0rem',
      opacity: 0
    },
    enter: {
      opacity: 1,
      height: height > 0 ? `${height}rem`: '12rem'
    },
    leave: {
      opacity: 0,
      height: '0rem'
    },
    config: {
      velocity: 10,
      delay: 0
    }
  })

  return (
    <FilterSection>
      <div className='select'>
        <div className='title' onClick={onClick}>
          <span className='label'>{label}</span>
          <span className='icon-container'>
            {!isOpen && <i className='icon icon-caret-down'></i>}
            {!!isOpen && <i className='icon icon-caret-up'></i>}
          </span>
        </div>

        <div className='dropdown-container'>
          {transitions.map(({ item, key, props }) =>
            item && <animated.div style={props} key={key}>
              <Dropdown
                options={options}
                toggleOption={toggleOption}
                selectedOptions={selectedOptions} />
            </animated.div>)}
        </div>
      </div>
      <style jsx>{`
        // We need to set parent base font size
        // smaller than the default (16px)
        // so the icon can be scaled down using rems

        .icon-container {
          font-size: 12px;
        }

        .icon {
          color: ${theme.borderLight};
          font-size: .4rem;
        }

        .label {
          color: ${theme.primary};
        }

        .select {
          min-width: ${minWidth}rem;
        }

        animated.div {
          width: 100%;
          overflow: hidden;
          position: absolute;
          top: .5rem;
        }

        .dropdown-container {
          width: 100%;
          position: relative;
          height: auto;
          max-height: 20rem;
        }

        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
      `}</style>
    </FilterSection>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  selectedOptions: PropTypes.array,
  toggleOption: PropTypes.func,
  isOpen: PropTypes.bool,
  minWidth: PropTypes.number,
  height: PropTypes.number,
  onClick: PropTypes.func
}

Select.defaultProps = {
  label: '',
  options: [],
  selectedOptions: [],
  toggleOption: () => {},
  isOpen: false,
  minWidth: 6,
  height: 10,
  onClick: () => {}
}

export default Select;
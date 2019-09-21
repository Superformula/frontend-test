import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Checkbox.scss';
import { controlContainer } from './Controls.module.scss';
const Checkbox = ({ label, checked, onChange }) => {
    return (
        <div
            className={classNames(controlContainer, 'checkbox-container')}
            onClick={() => {
                onChange(!checked);
            }}
        >
            <div className="circle-checkbox">
                <input type="checkbox" checked={checked} id="checkboxInput" readOnly />
                <label htmlFor="checkboxInput" />
            </div>
            <div className="label-text">{label}</div>
        </div>
    );
};

Checkbox.propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func
};
export default Checkbox;

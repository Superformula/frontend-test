import React from 'react';

const Switch = ({value = false, onChange}) => {
    const toggle = () => onChange && onChange(!value);

    return <div className='switch' onClick={toggle}>
        <input type='checkbox' checked={value} readOnly/>
        <div className='knob'/>
    </div>;
};

export default Switch;

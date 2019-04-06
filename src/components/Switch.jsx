import React, {useState} from 'react';

const Switch = ({value = false, onChange}) => {
    const toggle = () => onChange(!value);

    return <div className='switch' onClick={toggle}>
        <input type='checkbox' checked={value} onChange={toggle}/>
        <div className='knob'/>
    </div>;
};

export default Switch;

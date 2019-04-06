import React, {useState} from 'react';

const Switch = ({value = false, onChange}) => {
    const [on, setOn] = useState(value);

    const toggle = () => {
        const value = !on;
        setOn(value);
        onChange(value);
    };

    return <div className='switch' onClick={toggle}>
        <input type='checkbox' checked={on} onChange={toggle}/>
        <div className='knob'/>
    </div>;
};

export default Switch;

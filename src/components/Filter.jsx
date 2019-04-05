import React, {useState} from 'react';
import {Dimmer} from 'semantic-ui-react';
import {escapeHandler, svgDownArrow, svgX} from 'Utils';

const Filter = ({ready = false}) => {
    const [open, setOpen] = useState(false);

    const openFilters = () => {
        if (!ready) return;
        setOpen(true);
        escapeHandler(() => setOpen(false));
    };
    return (
        <React.Fragment>
            <div className={`filter open ${open ? 'showing' : 'hidden'}`}>
                <div className='row'>
                    <div className='label'>Filter by:</div>
                    {svgX({className: 'cross', onClick: () => setOpen(false)})}
                </div>
                <div className='row row-button spaced'>
                    <div className='button clear'>Clear All</div>
                    <div className='button apply'>Apply</div>
                </div>
            </div>
            <div className='filter closed row'>
                <div className='label'>Filter by:</div>
                <div className='dropdown' onClick={openFilters}>
                    <div className='content'>All</div>
                    {svgDownArrow()}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Filter;

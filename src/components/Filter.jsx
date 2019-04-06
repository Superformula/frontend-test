import {clearAllBodyScrollLocks, disableBodyScroll} from 'body-scroll-lock/lib/bodyScrollLock.es6';
import OptionSelector from 'Components/OptionSelector';
import Switch from 'Components/Switch';
import React, {useState} from 'react';
import {escapeHandler, svgDownArrow, svgX} from 'Utils';

const Filter = ({ready = false, startOpen = false}) => {
    const [open, setOpen] = useState(startOpen);
    const [price, setPrice] = useState(null);
    const [openFilter, setOpenFilter] = useState(false);

    const clearFilters = () => {
        setPrice(null);
        setOpenFilter(false);
    };
    const openFilters = () => {
        if (!ready) return;
        setOpen(true);
        escapeHandler(() => setOpen(false));
    };

    const openFilterElement = document.querySelector('#filter-modal');
    open ? disableBodyScroll(openFilterElement) : clearAllBodyScrollLocks();

    return (
        <div className={`filter ${open ? 'open' : 'closed'}`}>
            <div id='filter-modal' className='filter-open'>
                <div className='row spaced'>
                    <div className='label'>Filter By</div>
                    {svgX({className: 'cross', onClick: () => setOpen(false)})}
                </div>
                <div className='hr'/>
                <div className='row spaced'>
                    <div className='button clear' onClick={clearFilters}>Clear All</div>
                    <div className='button apply'>Apply</div>
                </div>
                <div className='hr'/>
                <div className='row spaced'>
                    <div className='label open-now'>Open Now</div>
                    <Switch value={openFilter} onChange={setOpenFilter}/>
                </div>
                <div className='hr'/>
                <OptionSelector selection={price} onSelectionChange={setPrice}
                                options={['all', '$', '$$', '$$$', '$$$$']}/>
            </div>
            <div className='filter-closed row'>
                <div className='label'>Filter By:</div>
                <div className='dropdown' onClick={openFilters}>
                    <div className='content'>All</div>
                    {svgDownArrow()}
                </div>
            </div>
        </div>
    );
};

export default Filter;

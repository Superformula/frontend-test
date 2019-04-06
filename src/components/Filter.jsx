import {clearAllBodyScrollLocks, disableBodyScroll} from 'body-scroll-lock/lib/bodyScrollLock.es6';
import DropdownFilter from 'Components/filters/DropdownFilter';
import ButtonFilter from 'Components/filters/ButtonFilter';
import SwitchFilter from 'Components/filters/SwitchFilter';
import React, {useState} from 'react';
import {escapeHandler, svgDownArrow, svgX} from 'Utils';

const Filter = ({ready = false, startOpen = false}) => {
    const [open, setOpen] = useState(startOpen);
    const [price, setPrice] = useState(null);
    const [openFilter, setOpenFilter] = useState(false);
    const [category, setCategory] = useState(null);

    const clearFilters = () => {
        setPrice(null);
        setOpenFilter(false);
        setCategory(null);
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
                <div className='row'>
                    <div className='label'>Filter By</div>
                    {svgX({className: 'cross', onClick: () => setOpen(false)})}
                </div>
                <div className='hr full'/>
                <div className='row'>
                    <div className='button clear' onClick={clearFilters}>Clear All</div>
                    <div className='button-spacer'/>
                    <div className='button apply'>Apply</div>
                </div>
                <div className='hr full'/>
                <SwitchFilter
                    label='Open Now'
                    filter={openFilter}
                    onFilterChange={setOpenFilter}
                />
                <div className='hr'/>
                <ButtonFilter
                    label='price'
                    filter={price} onFilterChange={setPrice}
                    options={['all', '$', '$$', '$$$', '$$$$']}
                />
                <div className='hr'/>
                <DropdownFilter
                    label='categories' help='Select One'
                    filter={category} onFilterChange={setCategory}
                    options={['American', 'Sushi', 'Mexican', 'Italian']}
                />
                <div className='hr'/>
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

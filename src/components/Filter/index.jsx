import {clearAllBodyScrollLocks, disableBodyScroll} from 'body-scroll-lock/lib/bodyScrollLock.es6.js';
import ButtonFilter from 'Components/Filter/components/ButtonFilter';
import DropdownFilter from 'Components/Filter/components/DropdownFilter';
import SwitchFilter from 'Components/Filter/components/SwitchFilter';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {updateFilters} from 'Store/actions';
import {selectCategories, selectFilters} from 'Store/selectors';
import {buildFilterString, escapeHandler, simulateKey} from 'Utils';
import {cross, downArrow} from 'Utils/svgs';

const Filter = ({ready = false, startOpen = false, categories, filters = {}, updateFilters}) => {
    const [open, setOpen] = useState(startOpen);
    const [price, setPrice] = useState(filters.price);
    const [openFilter, setOpenFilter] = useState(filters.open_now);
    const [category, setCategory] = useState(filters.categories);
    const [loading, setLoading] = useState(false);

    const autoCloseQuery = window.matchMedia('(min-width: 680px)');
    autoCloseQuery.addListener((e) => {
        if (e.matches) simulateKey(27);
    });

    const applyFilters = (filters = null) => {
        updateFilters(filters || {open_now: openFilter, price, categories: category && category.toLowerCase()});
        setOpen(false);
    };
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
    const filtersHaveChanged = ({price, openFilter, category} = {}, filters = {}) =>
        price !== filters.price || openFilter !== filters.open_now || category !== filters.categories;

    const changed = filtersHaveChanged({price, openFilter, category}, filters);
    const autoApply = window.matchMedia('(min-width: 680px)').matches;

    if (autoApply && changed && ready && !loading) {
        setLoading(true);
        applyFilters({price, categories: category, open_now: openFilter});
    }

    if ((ready && loading && !changed) || !autoApply && loading) {
        setLoading(false);
    }

    const openFilterElement = document.querySelector('#filter-modal');
    open ? disableBodyScroll(openFilterElement) : clearAllBodyScrollLocks();
    return (
        <React.Fragment>
            <div className={`filter ${open ? 'open' : 'closed'}`}>
                <div id='filter-modal' className='filter-open'>
                    <div className='row'>
                        <div className='label'>Filter By</div>
                        {cross({className: 'cross', onClick: () => setOpen(false)})}
                    </div>
                    <div className='hr full'/>
                    <div className='row'>
                        <div className='button clear' onClick={clearFilters}>Clear All</div>
                        <div className='button-spacer'/>
                        <div className='button apply' onClick={() => applyFilters()}>Apply</div>
                    </div>
                    <div className='hr full'/>
                    <SwitchFilter label='Open Now' filter={openFilter} onFilterChange={setOpenFilter}/>
                    <div className='hr'/>
                    <ButtonFilter label='price' defaultOff={'all'} filter={price || 'all'} onFilterChange={setPrice}
                                  options={['$', '$$', '$$$', '$$$$']}/>
                    <div className='hr'/>
                    <DropdownFilter label='categories' help='Select One' filter={category} onFilterChange={setCategory}
                                    options={[null, ...categories]}/>
                    <div className='hr'/>
                </div>
                <div className='filter-closed row'>
                    <div className='label'>Filter By:</div>
                    <div className='dropdown' onClick={openFilters}>
                        <div className='content'>{buildFilterString({price, category, open: openFilter})}</div>
                        {downArrow()}
                    </div>
                </div>
                <div className='filter-large'>
                    <div className='label'>Filter By:</div>
                    <SwitchFilter label='Open Now' filter={openFilter} onFilterChange={setOpenFilter}/>
                    <DropdownFilter label='Price' filter={price} onFilterChange={setPrice}
                                    options={['$', '$$', '$$$', '$$$$']}/>
                    <DropdownFilter label='Categories' filter={category} onFilterChange={setCategory}
                                    options={[null, ...categories]}/>
                </div>
                <div className='button clear' onClick={clearFilters}>Clear All</div>
            </div>
            <div className='hr'/>
        </React.Fragment>
    );
};

export default connect(state => ({
    filters: selectFilters(state),
    categories: selectCategories(state),
}), {
    updateFilters,
})(Filter);

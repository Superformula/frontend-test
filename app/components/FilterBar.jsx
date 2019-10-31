import * as React from 'react';
import { connect } from 'react-redux';

import { setCategory, setOpen, setPrice } from '../actions/businesses';

const mapDispatch = dispatch => ({
    selectCategory: (category => { dispatch(setCategory(category)); }),
    selectPrice: (price => { dispatch(setPrice(price)); }),
    selectOpen: (open => { dispatch(setOpen(open)); })
});

const mapState = state => ({
    categories: state.categories.categories,
    filter: state.businesses.category,
    open: state.businesses.onlyOpen,
    price: state.businesses.price
});

export const FilterBar = connect(mapState, mapDispatch)(
    function FilterBar(props) {
        const options = props.categories.map(c =>
            (<option key={c.alias} value={c.alias}>{c.title}</option>));
        const clearFilters = () => {
            props.selectCategory('');
            props.selectPrice('0');
            props.selectOpen(false);
        };
        return (<div className='filterBar'>
            <span>Filter By:</span>
            <input type='checkbox'
                checked={props.open}
                onChange={e => props.selectOpen(e.target.checked)} />
            <label>Open Now</label>
            <select name='Price'
                value={`${props.price}`}
                onChange={e => props.selectPrice(+e.target.value)}>
                <option value='0'>All</option>
                <option value='1'>$</option>
                <option value='2'>$$</option>
                <option value='3'>$$$</option>
                <option value='4'>$$$$</option>
            </select>
            <select name='Categories'
                value={props.filter}
                onChange={e => props.selectCategory(e.target.value)}>
                <option value=''>All</option>
                {options}
            </select>
            <button onClick={clearFilters}>Clear All</button>
        </div>);
});

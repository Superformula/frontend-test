import * as React from 'react';
import { connect } from 'react-redux';

const mapDispatch = _dispatch => ({
    selectCategory: (category => { console.log('Category', category); }),
    selectPrice: (price => { console.log('Price', price); }),
    toggleOpen: (() => { console.log('Toggling open'); })
});

const mapState = state => ({
    categories: state.categories.categories,
    filter: '',
    open: false,
    price: 0
});

export const FilterBar = connect(mapState, mapDispatch)(
    function FilterBar(props) {
        const options = props.categories.map(c =>
            (<option key={c.alias} value={c.alias}>{c.title}</option>));
        const clearFilters = () => {
            props.selectCategory('');
            props.selectPrice('0');
            if (props.open) {
                props.toggleOpen();
            }
        };
        return (<div className='filterBar'>
            <span>Filter By:</span>
            <input type='checkbox' checked={props.open} onChange={() => props.toggleOpen()} />
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

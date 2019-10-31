import * as React from 'react';
import { connect } from 'react-redux';

import { RestaurantDetails } from './RestaurantDetails';
import { RestaurantResult } from './RestaurantResult';

const mapDispatch = _dispatch => ({
    loadMore: (() => { console.log('Get More Results'); })
});

const mapState = state => {
    const open = state.businesses.onlyOpen;
    const price = state.businesses.price;
    const businesses = state.businesses.businesses
        .filter(b => !open || !b.is_closed)
        .filter(b => price <= (b.price || '').length);
    return { businesses, hasMore: state.businesses.total > state.businesses.businesses.length };
};

export const SearchResults = connect(mapState, mapDispatch)(
    function SearchResults(props) {
        const [selected, setSelected] = React.useState('');
        const results = props.businesses.map(b =>
            <RestaurantResult key={b.id} business={b} showDetails={() => setSelected(b.id)} />);
        return (<>
            <h2>All Restaurants</h2>
            <div className='searchResults'>{results}</div>
            {props.hasMore && <button onClick={props.loadMore}>Load More</button>}
            {selected &&
            <RestaurantDetails business={props.businesses.find(b => b.id === selected)}
                dismiss={() => setSelected('')} />}
        </>);
});

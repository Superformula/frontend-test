import * as React from 'react';
import { connect } from 'react-redux';

import { loadMoreBusinesses } from '../actions/businesses';
import { RestaurantDetails } from './RestaurantDetails';
import { RestaurantResult } from './RestaurantResult';

const mapDispatch = dispatch => ({
    loadMore: (() => { dispatch(loadMoreBusinesses()); })
});

const mapState = state => {
    const open = state.businesses.onlyOpen;
    const price = state.businesses.price;
    const businesses = state.businesses.businesses
        .filter(b => !open || !b.is_closed)
        .filter(b => price <= (b.price || '').length);
    return { businesses,
        hasMore: state.businesses.total > state.businesses.businesses.length,
        loading: state.businesses.loading
    };
};

export const SearchResults = connect(mapState, mapDispatch)(
    function SearchResults(props) {
        const [selected, setSelected] = React.useState('');
        const business = props.businesses.find(b => b.id === selected);
        if (selected && !business) {
            setSelected('');
        }
        const results = props.businesses.map(b =>
            <RestaurantResult key={b.id} business={b} showDetails={() => setSelected(b.id)} />);
        return (<>
            <h2>All Restaurants</h2>
            <div className='search-results'>{results}</div>
            {!results.length && !props.loading && <div className='no-results'>No Results</div>}
            {props.hasMore &&
            <button className='load-more' onClick={props.loadMore}>Load More</button>}
            {business && <RestaurantDetails business={business} dismiss={() => setSelected('')} />}
        </>);
});

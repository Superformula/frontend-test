import * as React from 'react';
import { connect } from 'react-redux';
import GridItem from './GridItem';

const Grid = ({ listings, limit }) => (
    <div className="grid">
        {listings.slice(0, limit).map(listing => (
            <div className="grid_item" key={listing.id}>
                <GridItem listing={listing} />
            </div>
        ))}
    </div>
);

const mapStateToProps = ({ listings, limit }) => ({ listings, limit });

export default connect(mapStateToProps)(Grid);

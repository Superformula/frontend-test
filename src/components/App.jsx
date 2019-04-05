import Card from 'Components/Card';
import Filter from 'Components/Filter';
import Header from 'Components/Header';
import 'Css/main.scss';
import {get} from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {Dimmer, Loader, Segment} from 'semantic-ui-react';
import {selectBusinesses} from 'Store/selectors';

const App = ({businesses = []}) => <div className='view'>
    <Header title={'Restaurants'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Header>
    <div className='hr'/>
    <Filter/>
    <div className='title'>{'All Restaurants'}</div>
    <div className='grid'>
        {!businesses.length
            ? <Segment className='loading-pane'>
                <Dimmer inverted active>
                    <Loader size='massive'/>
                </Dimmer>
            </Segment>
            : businesses.map(place => <Card
                name={place.name}
                imgSrc={get(place, 'photos[0]')}
                rating={place.rating}
                price={place.price}
                key={place.id || place.name || 'Unknown Name'}
                category={get(place, 'categories[0].title', 'Unknown').toUpperCase()}
                isOpen={!get(place, 'is_closed', true)}
            />)}
    </div>
</div>;

export default connect(state => ({
    businesses: selectBusinesses(state),
}))(App);

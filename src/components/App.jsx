import Card from 'Components/Card';
import Filter from 'Components/Filter';
import Header from 'Components/Header';
import 'Css/main.scss';
import React from 'react';
import {connect} from 'react-redux';
import {Dimmer, Loader, Segment} from 'semantic-ui-react';
import {loadBusinesses} from 'Store/actions';
import {selectBusinesses, selectBusinessesLoading} from 'Store/selectors';

const App = ({businesses = [], loading, loadBusinesses}) => {
    if (!businesses.length) {
        loadBusinesses();
    }
    return <div className='view'>
        <Header title={'Restaurants'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Header>
        <div className='hr'/>
        <Filter ready={!loading}/>
        <div className='title'>{'All Restaurants'}</div>
        <Dimmer inverted active={loading}/>
        <div className='grid'>
            {loading
                ? <Segment className='loading-pane'>
                    <Dimmer inverted active>
                        <Loader size='massive'/>
                    </Dimmer>
                </Segment>
                : businesses.map(place => <Card key={place.id} place={place}/>)}
        </div>
    </div>;
};

export default connect(state => ({
    businesses: selectBusinesses(state),
    loading: selectBusinessesLoading(state),
}), {
    loadBusinesses,
})(App);

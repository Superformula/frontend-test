import Business from 'Components/Business';
import Filter from 'Components/Filter';
import Header from 'Components/Header';
import 'Css/main.scss';
import React from 'react';
import {connect} from 'react-redux';
import {Dimmer, Loader} from 'semantic-ui-react';
import {selectBusinesses, selectBusinessesLoading} from 'Store/selectors';

const generateBusinessGrid = buses => {
    return <ul className='grid'>{buses.map(place => <Business key={place.id} place={place}/>)}</ul>;
};

const buildDisplay = (loading, content) => {
    return <div className='view'>
        <Header title={'Restaurants'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Header>
        <div className='hr'/>
        <Filter ready={!loading}/>
        <div className='title'>{'All Restaurants'}</div>
        {content}
    </div>;
};

const App = ({businesses = [], loading}) => {
    return buildDisplay(loading, loading
        ? <Dimmer inverted active>
            <Loader size='massive'/>
        </Dimmer>
        : generateBusinessGrid(businesses));
};

export default connect(state => ({
    businesses: selectBusinesses(state),
    loading: selectBusinessesLoading(state),
}))(App);

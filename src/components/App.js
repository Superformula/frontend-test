import Filter from 'Components/Filter';
import Header from 'Components/Header';
import 'Css/main.scss';
import React from 'react';
import {Dimmer, Loader} from 'semantic-ui-react';

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
            ? <Dimmer active inverted>
                <Loader inverted size='massive'/>
            </Dimmer>
            : ''}
    </div>
</div>;

export default App;

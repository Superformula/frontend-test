import React from 'react';
import '../css/main.scss';
import Filter from './Filter';
import Header from './Header';

export default () => <div className='view'>
    <Header title={'Restaurants'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Header>
    <div className='hr'/>
    <Filter/>
</div>

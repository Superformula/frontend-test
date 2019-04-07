import Header from 'Components/Header';
import 'Css/main.scss';
import React from 'react';
import {Link} from 'react-router-dom';

const Detail = ({match}) => {
    return <div className='view'>
        <Link to='/' className='back-arrow'>←</Link>
        <Header title={'Restaurants'}>
            {match.params.alias}
        </Header>
    </div>;
};

export default Detail;

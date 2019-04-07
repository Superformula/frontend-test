import Header from 'Components/Header';
import 'Css/main.scss';
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {selectBusiness} from 'Store/selectors';

const Detail = ({match, selectBusiness}) => {
    const name = match.params.name;
    const business = selectBusiness(name);
    return (
        business
            ? <div className='view'>
                <Link to='/' className='back-arrow'>←</Link>
                <Header title={name}>
                </Header>
            </div>
            : <div className='view'>
                <Link to='/' className='back-arrow'>←</Link>
                <Header title={`${name}`}>
                    Unable to find restaurant with the name {name}
                </Header>
                <div className='row spaced'>Redirecting back to the home page...</div>
            </div>
    );
};

export default connect(state => ({
    selectBusiness: selectBusiness(state),
}))(Detail);

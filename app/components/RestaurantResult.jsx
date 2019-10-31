import * as React from 'react';

export function RestaurantResult(props) {
    return (<div className='restaurant'>{JSON.stringify(props.business)}</div>)
}
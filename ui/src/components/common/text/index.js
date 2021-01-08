import React from 'react';
import './text.scss';

export const Title =  ({children, ...rest}) => {
    return <h1 className="title" {...rest}>{children}</h1>
}

export const HeaderText =  ({children, ...rest}) => {
    return <p className="header-text">{children}</p>
}


export const ItemTitle =  ({children, ...rest}) => {
    return <p className="item-title-text">{children}</p>
}

export const ItemPropertyText =  ({children, ...rest}) => {
    return <span className="item-property-text">{children}</span>
}
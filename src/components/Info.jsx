import React from 'react';

const Info = ({price, category, open, openText = 'OPEN', closedText = 'CLOSED'}) => {
    return <React.Fragment>
        <div className='category' style={{overflow: 'ellipsis'}}>{category}</div>
        <div className='separator'>•</div>
        <div className='price'>{price}</div>
        {open
            ? <React.Fragment>
                <div className='indicator open'/>
                <div className='status open'>{openText}</div>
            </React.Fragment>
            : <React.Fragment>
                <div className='indicator closed'/>
                <div className='status closed'>{closedText}</div>
            </React.Fragment>
        }
    </React.Fragment>;
};

export default Info;

import StarRating from 'Components/StarRating';
import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import {Link} from 'react-router-dom';

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

const Card = (props) => {
    const {imgSrc, name, rating, category, price, isOpen} = props;

    return (
        <div className='card'>
            <img className='image' src={imgSrc} alt={name}/>
            <div className='card-details'>
                <ResponsiveEllipsis className='name' text={name} maxLine={2} trimRight basedOn='letters'/>
                <StarRating rating={rating}/>
                <div className='card-info'>
                    <div className='category' style={{overflow: 'ellipsis'}}>{category}</div>
                    <div className='separator'>•</div>
                    <div className='price'>{price}</div>
                    {isOpen
                        ? <div className='status open'>OPEN</div>
                        : <div className='status closed'>CLOSED</div>
                    }
                </div>
                <div className='button learn-more'>
                    <Link to={`/detail/${encodeURIComponent(name)}`} className='text'>
                        Learn More <span className='arrow'>→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;

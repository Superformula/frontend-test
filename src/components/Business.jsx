import StarRating from 'Components/StarRating';
import {get} from 'lodash';
import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateFilters} from 'Store/actions';

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

const Business = ({place = {}, loadReviews}) => {
    const name = place.name;
    const id = place.id;
    const imgSrc = get(place, 'photos[0]');
    const rating = place.rating;
    const price = place.price;
    const category = get(place, 'categories[0].title', 'Unknown').toUpperCase();
    const isOpen = get(place, 'hours[0].is_open_now', true);

    return (
        <li className='business'>
            <img className='image' src={imgSrc} alt={name}/>
            <div className='business-details'>
                <ResponsiveEllipsis className='name' text={name} maxLine={2} trimRight basedOn='letters'/>
                <StarRating rating={rating}/>
                <div className='business-info'>
                    <div className='category' style={{overflow: 'ellipsis'}}>{category}</div>
                    <div className='separator'>•</div>
                    <div className='price'>{price}</div>
                    {isOpen
                        ? <div className='status open'>OPEN</div>
                        : <div className='status closed'>CLOSED</div>
                    }
                </div>
                <Link to={`/detail/${encodeURIComponent(id)}`} className='button learn-more' onClick={loadReviews}>
                    <div className='text'>
                        Learn More <span className='arrow'>→</span>
                    </div>
                </Link>
            </div>
        </li>
    );
};

export default connect(null, {
    updateFilters,
})(Business);

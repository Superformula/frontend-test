// Imports
// -------

// Libraries
import React, {useState, useCallback} from 'react';
// Components
import CardGallery from '../CardGallery';
import CategoriesDropDown from "../CategoriesDropDown";
import Hero from '../Hero';
import FilterBy from '../FilterBy';
import Checkbox from "../Checkbox";
import DropDownMenu from '../DropDownMenu';
import Button from "../Button";
// GraphQL
import getRestaurantsQuery from '../../graphql/yelp/queries/getRestaurants';
// Hooks
import requestData from "../../hooks/requestData";
// Styles
import style from './style.module.css';

// Internal
// --------

export interface MainViewProps {
}

const MainView: React.FC<MainViewProps> = ({}) => {
    //
    // State

    const [openNow, setOpenNow] = useState(false);
    const [priceMenuSelected, setPriceMenuSelected] = useState(false);
    const [priceSelected, setPriceSelected] = useState<null | string>(null);
    const [categories, setCategories] = useState([]);
    const [categorySelected, setCategorySelected] = useState<null | string>(null);

    //
    // Callback

    const openNowCallback = useCallback(() => {
        setOpenNow(!openNow);
    }, [openNow, setOpenNow]);

    const priceMenuSelectedCallback = useCallback(() => {
        setPriceMenuSelected(!priceMenuSelected);
    }, [priceMenuSelected, setPriceMenuSelected]);

    const priceSelectedCallback = useCallback((price: string) => {
        setPriceSelected(price);
    }, [setPriceSelected]);

    const categorySelectedCallback = useCallback((category: string) => {
        setCategorySelected(category);
    }, [setCategorySelected]);

    const clearAllCallback = useCallback(() => {
        setOpenNow(false);
        setPriceSelected(null);
        setCategorySelected(null);
    }, [setOpenNow, setPriceSelected, setCategorySelected]);

    //
    // Render

    const mock = [{id: 'id', imgSrc: 'http://via.placeholder.com/500', title: 'Title', rating: 2, category: 'seafood', price: 2, status: 'open' },
        {id: 'id', imgSrc: 'http://via.placeholder.com/500', title: 'Title', rating: 2.5, category: 'seafood', price: 2, status: 'open' },
        {id: 'id', imgSrc: 'http://via.placeholder.com/500', title: 'Title', rating: 3, category: 'seafood', price: 2, status: 'open' },
        {id: 'id', imgSrc: 'http://via.placeholder.com/500', title: 'Title', rating: 2, category: 'seafood', price: 2, status: 'open' },
        {id: 'id', imgSrc: 'http://via.placeholder.com/500', title: 'Title', rating: 2, category: 'seafood', price: 2, status: 'open' },
        {id: 'id', imgSrc: 'http://via.placeholder.com/500', title: 'Title', rating: 2, category: 'seafood', price: 2, status: 'open' }];

    const disableClearAll = !openNow && priceSelected === null && categorySelected === null;

    return (
        <div>
            <Hero title="Restaurants"/>
            <div className={ style.filterSection }>
                <FilterBy clearAll={ clearAllCallback } disableClearAll={ disableClearAll }>
                    <Checkbox role="radiobutton" checked={ openNow } onClick={ openNowCallback }>Open Now</Checkbox>
                    <DropDownMenu text="Price" selected={ priceMenuSelected } onClick={ priceMenuSelectedCallback } dimensions={{ width: 97, height: 32 }} option={ priceSelected } setOption={ priceSelectedCallback }>
                        { ['All', '$', '$$', '$$$', '$$$$'] }
                    </DropDownMenu>
                    <CategoriesDropDown categorySelected={ categorySelected } setCategories={ setCategories } categorySelectedCallback={ categorySelectedCallback }>
                        { categories }
                    </CategoriesDropDown>
                </FilterBy>
            </div>
            <h1>All Restaurants</h1>
            <CardGallery data={ mock } />
            <div className={ style.loadMoreButton }>
                <Button text='Load More' tier='secondary' size='large' />
            </div>
        </div>
    );
}

// Exports
// -------

export default MainView;

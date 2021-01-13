import React, { useState, useEffect } from "react";
import Api, { priceOptions } from "./api";
import SearchPage from "./pages/search";
import "./styles/base.scss";

export default () => {
    const [serverResults, setServerResults] = useState([]);
    const [categories, setCategories] = useState([]);
    const [openNowFilterValue, setOpenNowFilterValue] = useState(true);
    const [categoryFilterValue, setCategoryFilterValue] = useState("");
    const [priceFilterValue, setPriceFilterValue] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);

    /* Fetch categories */

    useEffect(() => {
        (async () => {
            const categories = await Api.fetchCategories();
            setCategories(categories);
        })();
    }, []);

    /* Server side filtering triggered when the category changes */
    useEffect(() => {
        (async () => {
            //TODO: support more than one category as a filter
            const {count, items} = await Api.search([categoryFilterValue]);
            setServerResults(items);
        })();
    }, [categoryFilterValue]);

    /* Client side filtering triggered when price or isOpen changes */
    useEffect(() => {
        let items = [...serverResults];
        //Use Open now filter?
        if(openNowFilterValue){
            items = items.filter( item => item.isOpen)
        }
        //Filter by price
        if(priceFilterValue){
            items = items.filter( item => item.price === priceFilterValue)
        }
       
        setFilteredItems(items);
    }, [serverResults,openNowFilterValue, categoryFilterValue, priceFilterValue]);

    const onPriceSelected = (value) => {
        console.log('price:', value)
        setPriceFilterValue(value)
    }

    const onCategorySelected = (value) => {
        setCategoryFilterValue(value)
    }

    const onOpenNowChange = (value) => {
        setOpenNowFilterValue(value)
    }

    const onClearFilter = () => {
        console.log('on clear')
        setPriceFilterValue(null);
        setCategoryFilterValue(null);
        setOpenNowFilterValue(false);
    }

    const searchResultsProps = { items: filteredItems };
    const filterProps = {
        priceOptions: priceOptions,
        categoryOptions: categories,
        onPriceSelected,
        onCategorySelected,
        onOpenNowChange,
        openNowSelected: openNowFilterValue,
        priceFilterValue,
        categoryFilterValue,
        onClearFilter
    };

    console.log(filterProps)
  
    return (
        <SearchPage
            searchResultsProps={searchResultsProps}
            filterProps={filterProps}
        />
    );
};

import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import Filter from "../../components/filter";
import ResultsGrid from "../../components/results-grid";
import Api, { priceOptions } from "../../api";
import "./search-page.scss";

const SearchPage = ({ filterProps, searchResultsProps }) => {
  return (
    <section className="search-page">
      <Header />
      <section className="filter-container">
        <Filter {...filterProps} />
      </section>
      <ResultsGrid {...searchResultsProps} />
    </section>
  );
};

/* 
   Add state to the presentation component,
   here we could connect it to a redux store but useState
   works fine.
 */
export const ConnectedSearchPage = () => {
  const [offset, setOffset] = useState(0);
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
      const { count, items } = await Api.search([categoryFilterValue], 0);
      setOffset(0);
      setServerResults(items);
    })();
  }, [categoryFilterValue]);

  /* When the offset changes to 1 or more, request again and append results */
  useEffect(() => {
    (async () => {
      if (offset > 0) {
        const { count, items } = await Api.search(
          [categoryFilterValue],
          offset
        );
        setServerResults([...serverResults, ...items]);
      }
    })();
  }, [offset]);

  /* Client side filtering triggered when price or isOpen changes */
  useEffect(() => {
    let items = [...serverResults];
    //Use Open now filter?
    if (openNowFilterValue) {
      items = items.filter(item => item.isOpen);
    }
    //Filter by price
    if (priceFilterValue) {
      items = items.filter(item => item.price === priceFilterValue);
    }

    setFilteredItems(items);
  }, [
    serverResults,
    openNowFilterValue,
    categoryFilterValue,
    priceFilterValue
  ]);

  const onPriceSelected = value => {
    console.log("price:", value);
    setPriceFilterValue(value);
  };

  const onCategorySelected = value => {
    setCategoryFilterValue(value);
  };

  const onOpenNowChange = value => {
    setOpenNowFilterValue(value);
  };

  const onLoadMoreResults = () => {
    setOffset(offset + 20);
  };

  const onClearFilter = () => {
    console.log("on clear");
    setPriceFilterValue(null);
    setCategoryFilterValue(null);
    setOpenNowFilterValue(false);
  };

  const searchResultsProps = {
    items: filteredItems,
    onLoadMore: onLoadMoreResults
  };

  const filterProps = {
    priceOptions,
    categoryOptions: categories,
    onPriceSelected,
    onCategorySelected,
    onOpenNowChange,
    openNowSelected: openNowFilterValue,
    priceFilterValue,
    categoryFilterValue,
    onClearFilter
  };

  return (
    <SearchPage
      searchResultsProps={searchResultsProps}
      filterProps={filterProps}
    />
  );
};

export default SearchPage;

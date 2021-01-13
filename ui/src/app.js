import React, {useState, useEffect} from "react";
import Api from "./api";
import SearchPage from "./pages/search";
import './styles/base.scss';


export default () => {

    const [searchResults, setSearchResults] = useState([]);

    useEffect(()=>{
        (async ()=>{
            const results = await Api.search();
            setSearchResults(results);
        })()
    }, [])
    const searchResultsProps = {"items":searchResults}
    const filterProps = {"priceOptions":[{"id":"$","name":"$"},{"id":"$$","name":"$$"}],"categoryOptions":[{"id":"1","name":"Category 1"},{"id":"2","name":"Category 2"}],"priceFilterValue":"$$","categoryFilterValue":"2"}

    return (
        <SearchPage
            searchResultsProps={searchResultsProps}
            filterProps={filterProps}
        />
    );
};

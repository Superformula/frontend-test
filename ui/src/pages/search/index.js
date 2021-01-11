import React from "react";
import Header from "../../components/header";
import Filter from "../../components/filter";
import ResultsGrid from '../../components/results-grid';
import './search-page.scss';

export default ({filterProps, searchResultsProps}) => {
  return (
    <section className="search-page">
      <Header />
      <section className="filter-container">
        <Filter  {...filterProps}/>
      </section>
      <ResultsGrid {...searchResultsProps}/>
    </section>
  );
};

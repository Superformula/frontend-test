import React from "react";
import { fetchYelp } from "fetchYelp";
import { createSearchQuery, createCategoriesQuery } from "./graphQueries";

import Filters from "./Filters";
import Divider from "components/Divider";
import Button from "./Button";
import Restaurant from "./Restaurant";

import "./home.scss";

export default class Home extends React.Component {

  state = {
    businesses: [],
    categories: [],
    openNow: false,
    price: "",
    selectedCategory: ""
  };

  async componentDidMount() {
    const categoriesFetch = fetchYelp(createCategoriesQuery());

    const searchFetch = fetchYelp(createSearchQuery());

    const [categoriesRes, searchRes] = await Promise.all([
      categoriesFetch,
      searchFetch
    ]);

    this.setState({
      businesses: searchRes.search.business,
      categories: categoriesRes.categories.category,
    });
  }

  filterPrices = businesses => {
    const { price } = this.state;

    if (!price) return businesses;

    return businesses.filter(bus => bus.price === price);
  };

  filterOpen = businesses => {
    const { openNow } = this.state;

    if (!openNow) return businesses;

    return businesses.filter(bus => {
      if (bus.hours && bus.hours[0] && bus.hours[0].is_open_now) {
        return true;
      }
    });
  };

  applyFilter = async (field, value) => {
    this.setState({
      [field]: value,
    });

    if (field === 'selectedCategory') {
      const { categories } = this.state;

      const foundCat = categories.find(cat => cat.title === value);
      if (!foundCat) return null;
      
      const searchRes = await fetchYelp(createSearchQuery(foundCat.alias));

      this.setState({
        businesses: searchRes.search.business
      });
    }
  };

  render() {
    const {
      businesses,
      categories,
      openNow,
      price,
      selectedCategory
    } = this.state;

    const filteredByPrice = this.filterPrices(businesses);
    const filteredByOpen = this.filterOpen(filteredByPrice);

    return (
      <div id="home">
        <h1 className="page-padding">Restaurants</h1>
        <p className="page-padding">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          iste ratione veniam saepe repudiandae laboriosam quam culpa, eveniet
          ex facere esse. A accusamus explicabo qui nulla placeat ipsa, sint
          vero.
        </p>
        <Divider />
        <Filters
          openNow={openNow}
          price={price}
          selectedCategory={selectedCategory}
          onChange={this.applyFilter}
          categories={categories}
        />
        <Divider />
        <h2 className="page-padding">All Restaurants</h2>
        <div className="page-padding">
          <div className="search-results">
            {filteredByOpen.map(business => (
              <Restaurant key={business.id} restaurant={business} />
            ))}
          </div>
        </div>
        <div className="loadmore-container">
          <Button>LOAD MORE</Button>
        </div>
      </div>
    );
  }
}

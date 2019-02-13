import React from "react";
import { fetchYelp } from "fetchYelp";

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
    const categoriesFetch = fetchYelp(`
      {
          categories {
              total
              category {
                  title
                  alias
                  parent_categories {
                      title
                  }
              }
          }
      }
    `);

    const searchFetch = fetchYelp(`
      {
        search(location: "Las Vegas") {
          total
          business {
            name
            id
            alias
            rating
            url
            price
            photos
          }
        }
      }
    `);

    const [categoriesRes, searchRes] = await Promise.all([
      categoriesFetch,
      searchFetch
    ]);

    this.setState({
      businesses: searchRes.search.business,
      categories: categoriesRes.categories.category,
    });
  }

  applyFilter = async (field, value) => {
    this.setState({
      [field]: value,
    });

    if (field === 'selectedCategory') {
      const { categories } = this.state;

      const foundCat = categories.find(cat => cat.title === value);
      
      const searchRes = await fetchYelp(`
        {
          search(location: "Las Vegas", categories: "${foundCat.alias}") {
            total
            business {
              name
              id
              alias
              rating
              url
              price
              photos
            }
          }
        }
      `);

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
            {businesses.map(business => (
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

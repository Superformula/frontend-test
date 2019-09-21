import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { filters, filtersRow, filterByLabel, filterContainer } from './Filters.module.scss';
import Checkbox from './controls/Checkbox';
import { openNowChanged, fetchRestaurants, selectedPriceChanged, selectedCategoryChanged } from '../store/actions';
import Dropdown from './controls/Dropdown';

const priceItems = [
    { label: 'All', value: 'all' },
    { label: '$', value: '$' },
    { label: '$$', value: '$$' },
    { label: '$$$', value: '$$$' },
    { label: '$$$$', value: '$$$$' }
];
const Filters = ({
    openNow,
    openNowChanged,
    fetchRestaurants,
    queryOffset,
    selectedPrice,
    selectedPriceChanged,
    selectedCategory,
    selectedCategoryChanged,
    restaurants
}) => {
    // Get all categories that exist in the restaurants array
    const categories = restaurants.reduce((acc, restaurant) => {
        if (openNow && !restaurant.hours[0].is_open_now) {
            // if filtering out closed restaurants, we don't need their categories
            return acc;
        }
        if (!acc[restaurant.categories[0].title]) {
            acc[restaurant.categories[0].title] = {
                label: restaurant.categories[0].title,
                value: restaurant.categories[0].title.toLowerCase()
            };
        }
        return acc;
    }, {});
    const categoryItems = Object.values(categories);
    categoryItems.unshift({ label: 'All', value: 'all' });
    // if the category that was selected has been filtered out, set selected category to 'all'
    // TODO this doesn't represent the store, I no like
    const selectedCategoryAfterFilter =
        typeof categoryItems.find(item => item.value === selectedCategory) !== 'undefined' ? selectedCategory : 'all';
    return (
        <div className={classNames(filters, 'contentContainer')}>
            <div className={filtersRow}>
                <div className={filterByLabel}>Filter By:</div>
                <span className={filterContainer}>
                    <Checkbox
                        label="Open Now"
                        checked={openNow}
                        onChange={checked => {
                            openNowChanged(checked);
                            fetchRestaurants(queryOffset);
                        }}
                    />
                </span>
                <span className={filterContainer}>
                    <Dropdown
                        label="Price"
                        items={priceItems}
                        selected={selectedPrice}
                        onChange={value => {
                            selectedPriceChanged(value);
                        }}
                        width={100}
                    />
                </span>
                <span className={filterContainer}>
                    <Dropdown
                        label="Categories"
                        items={categoryItems}
                        selected={selectedCategoryAfterFilter}
                        onChange={value => {
                            selectedCategoryChanged(value);
                        }}
                        width={200}
                    />
                </span>
            </div>
        </div>
    );
};

Filters.propTypes = {
    openNow: PropTypes.bool,
    openNowChanged: PropTypes.func,
    queryOffset: PropTypes.number,
    fetchRestaurants: PropTypes.func,
    selectedPrice: PropTypes.string,
    selectedPriceChanged: PropTypes.func,
    selectedCategory: PropTypes.string,
    selectedCategoryChanged: PropTypes.func,
    restaurants: PropTypes.array
};

export default connect(
    state => ({
        openNow: state.openNow,
        queryOffset: state.queryOffset,
        selectedPrice: state.selectedPrice,
        selectedCategory: state.selectedCategory,
        restaurants: state.restaurants
    }),
    {
        openNowChanged,
        selectedPriceChanged,
        selectedCategoryChanged,
        fetchRestaurants
    }
)(Filters);

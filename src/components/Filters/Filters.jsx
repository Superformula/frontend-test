import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import truncate from 'truncate';
import classNames from 'classnames';
import { contentContainer } from 'scss/layout.module.scss';
import { filters, filtersRow, filterByLabel, filterContainer, clearFiltersButton } from './Filters.module.scss';
import Checkbox from '../controls/Checkbox';
import { openNowChanged, selectedPriceChanged, selectedCategoryChanged, clearFilters } from '../../store/actions';
import Dropdown from '../controls/Dropdown';

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
	selectedPrice,
	selectedPriceChanged,
	selectedCategory,
	selectedCategoryChanged,
	restaurants,
	clearFilters
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
	const categoryItems = Object.values(categories).map(val => ({ ...val, label: truncate(val.label, 17) }));
	categoryItems.unshift({ label: 'All', value: 'all' });
	// if the category that was selected has been filtered out, set selected category to 'all'
	// TODO this doesn't represent the store, I no like
	const selectedCategoryAfterFilter =
		typeof categoryItems.find(item => item.value === selectedCategory) !== 'undefined' ? selectedCategory : 'all';
	return (
		<div className={classNames(filters, contentContainer)}>
			<div className={filtersRow}>
				<div className={filterByLabel}>Filter By:</div>
				<div className={filterContainer}>
					<Checkbox
						label="Open Now"
						checked={openNow}
						onChange={checked => {
							openNowChanged(checked);
						}}
					/>
				</div>
				<div className={filterContainer}>
					<Dropdown
						label="Price"
						items={priceItems}
						selected={selectedPrice}
						onChange={value => {
							selectedPriceChanged(value);
						}}
						width={100}
					/>
				</div>
				<div className={filterContainer}>
					<Dropdown
						label="Categories"
						items={categoryItems}
						selected={selectedCategoryAfterFilter}
						onChange={value => {
							selectedCategoryChanged(value);
						}}
						width={200}
					/>
				</div>
			</div>
			<div className={clearFiltersButton} onClick={() => clearFilters()}>
				CLEAR ALL
			</div>
		</div>
	);
};

Filters.propTypes = {
	openNow: PropTypes.bool,
	openNowChanged: PropTypes.func,
	selectedPrice: PropTypes.string,
	selectedPriceChanged: PropTypes.func,
	selectedCategory: PropTypes.string,
	selectedCategoryChanged: PropTypes.func,
	restaurants: PropTypes.array,
	clearFilters: PropTypes.func
};

export default connect(
	state => ({
		openNow: state.openNow,
		selectedPrice: state.selectedPrice,
		selectedCategory: state.selectedCategory,
		restaurants: state.restaurants
	}),
	{
		openNowChanged,
		selectedPriceChanged,
		selectedCategoryChanged,
		clearFilters
	}
)(Filters);

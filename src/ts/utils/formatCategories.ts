// Internal
// --------

const extractAliasAndTitle = ({ title }) => (
    title
);

const filterByRestaurant = ({ parent_categories }) => (
    parent_categories?.some(({ alias }) => alias === 'restaurants')
);

const formatCategories = ({ categories }) => (
    categories.category.filter(filterByRestaurant).map(extractAliasAndTitle)
);

// Exports
// -------

export default formatCategories;

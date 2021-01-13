import axios from "axios";

/* Use a local proxy in development mode to pass CORS restrictions */
const isDev = process.env.NODE_ENV === "development";
const apiPrefix = isDev ? 'http://localhost:8010/proxy' : '/api'
const searchURL = `${apiPrefix}/businesses/search`;
const categoriesURL = `${apiPrefix}/categories`;

export default {
    /* Get search results and normalize */
    search: (categories) => {
        return axios.get(searchURL, {
            params: { categories: categories.join(','), location: "Las Vegas" },
        }).then(resp => {
            return {
                count: resp.data.total,
                items: resp.data.businesses.map(item => ({
                                    id: item.alias,
                                    name: item.name,
                                    price: item.price,
                                    rating: item.rating,
                                    isOpen: !item.is_closed,
                                    img: item.image_url,
                                    address: item.address1,
                                    reviewCount: item.review_count,
                                    category: item.categories[0]?.title,
                                    categories: item.categories,
                                }))
            }
        });
    },
    /* Filter categories, select only restaurants */
    fetchCategories: () => {
        return axios.get(categoriesURL).then(r => r.data.categories.filter(category => {
            return category.parent_aliases.some( parentAlias => parentAlias === "restaurants")
        }).map(item => {
            return {
                id: item.alias,
                name: item.title
            }
        }))
    },
};

/* Create the price options e.g $, $$, $$$ */
export const priceOptions = new Array(4).fill(1).map((_, ix) => {
    const value = "".padStart(ix + 1, "$");
    return {
        id: value,
        name: value
    }
});

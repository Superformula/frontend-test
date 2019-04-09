import {REDUX_KEYS} from 'Constants';
import {fromJS} from 'immutable';


export default {
    [REDUX_KEYS.BUSINESSES]: fromJS({
        loading: false,
        notFound: false,
        businesses: [
            {
                photos: [
                    'https://s3-media3.fl.yelpcdn.com/bphoto/i-KxHt0FbLwDtXnmDhOgIw/o.jpg',
                ],
                is_closed: false,
                __typename: 'Business',
                price: '$$',
                name: '167 Raw',
                hours: [
                    {
                        is_open_now: true,
                        __typename: 'Hours',
                    },
                ],
                location: {
                    address1: '289 E Bay St',
                    address2: '',
                    address3: '',
                    city: 'Charleston',
                    state: 'SC',
                    postal_code: '29401',
                    __typename: 'Location',
                },
                id: 'OJ3mj9U3TygEfmkR5hBgvQ',
                categories: [
                    {
                        title: 'Seafood',
                        alias: 'seafood',
                        __typename: 'Category',
                    },
                    {
                        title: 'Seafood Markets',
                        alias: 'seafoodmarkets',
                        __typename: 'Category',
                    },
                    {
                        title: 'Bars',
                        alias: 'bars',
                        __typename: 'Category',
                    },
                ],
                rating: 4.5,
            },
            {
                photos: [
                    'https://s3-media4.fl.yelpcdn.com/bphoto/N8RKmePMQ7TepDa6zx1MpA/o.jpg',
                ],
                is_closed: false,
                __typename: 'Business',
                price: '$$$$',
                name: 'Halls Chophouse',
                hours: [
                    {
                        is_open_now: false,
                        __typename: 'Hours',
                    },
                ],
                location: {
                    address1: '434 King St',
                    address2: '',
                    address3: '',
                    city: 'Charleston',
                    state: 'SC',
                    postal_code: '29403',
                    __typename: 'Location',
                },
                id: 'ejq3eWMaxWPPaSzvzOlZMA',
                categories: [
                    {
                        title: 'Steakhouses',
                        alias: 'steak',
                        __typename: 'Category',
                    },
                    {
                        title: 'Seafood',
                        alias: 'seafood',
                        __typename: 'Category',
                    },
                    {
                        title: 'Bars',
                        alias: 'bars',
                        __typename: 'Category',
                    },
                ],
                rating: 4.5,
            },
            {
                photos: [
                    'https://s3-media4.fl.yelpcdn.com/bphoto/C1l3i1GtW7PTQw5Ro9YSHA/o.jpg',
                ],
                is_closed: false,
                __typename: 'Business',
                price: '$$',
                name: 'Poogan\'s Porch',
                hours: [
                    {
                        is_open_now: true,
                        __typename: 'Hours',
                    },
                ],
                location: {
                    address1: '72 Queen St',
                    address2: '',
                    address3: '',
                    city: 'Charleston',
                    state: 'SC',
                    postal_code: '29401',
                    __typename: 'Location',
                },
                id: 'AkjKISCsqAVLJYITn5Z3HQ',
                categories: [
                    {
                        title: 'Southern',
                        alias: 'southern',
                        __typename: 'Category',
                    },
                    {
                        title: 'Breakfast & Brunch',
                        alias: 'breakfast_brunch',
                        __typename: 'Category',
                    },
                    {
                        title: 'Seafood',
                        alias: 'seafood',
                        __typename: 'Category',
                    },
                ],
                rating: 4,
            },
            {
                photos: [
                    'https://s3-media3.fl.yelpcdn.com/bphoto/NzNlKBdtIEAmcX48ngDP2g/o.jpg',
                ],
                is_closed: false,
                __typename: 'Business',
                price: '$$$',
                name: 'Husk',
                hours: [
                    {
                        is_open_now: false,
                        __typename: 'Hours',
                    },
                ],
                location: {
                    address1: '76 Queen St',
                    address2: '',
                    address3: '',
                    city: 'Charleston',
                    state: 'SC',
                    postal_code: '29401',
                    __typename: 'Location',
                },
                id: 'nE1tMHoYh9wRt9XmguyxpQ',
                categories: [
                    {
                        title: 'American (Traditional)',
                        alias: 'tradamerican',
                        __typename: 'Category',
                    },
                    {
                        title: 'Seafood',
                        alias: 'seafood',
                        __typename: 'Category',
                    },
                    {
                        title: 'Southern',
                        alias: 'southern',
                        __typename: 'Category',
                    },
                ],
                rating: 4,
            },
            {
                photos: [
                    'https://s3-media4.fl.yelpcdn.com/bphoto/q4O62E2xfibNZcTySJxF_w/o.jpg',
                ],
                is_closed: false,
                __typename: 'Business',
                price: '$$$',
                name: 'Magnolias',
                hours: [
                    {
                        is_open_now: false,
                        __typename: 'Hours',
                    },
                ],
                location: {
                    address1: '185 E Bay St',
                    address2: null,
                    address3: '',
                    city: 'Charleston',
                    state: 'SC',
                    postal_code: '29401',
                    __typename: 'Location',
                },
                id: 'dDKffemM7UJjLII0YGrYkg',
                categories: [
                    {
                        title: 'Southern',
                        alias: 'southern',
                        __typename: 'Category',
                    },
                    {
                        title: 'Wine Bars',
                        alias: 'wine_bars',
                        __typename: 'Category',
                    },
                ],
                rating: 4.5,
            },
            {
                photos: [
                    'https://s3-media2.fl.yelpcdn.com/bphoto/kXtMMEuYja6ODt_FKEBOXQ/o.jpg',
                ],
                is_closed: false,
                __typename: 'Business',
                price: '$$$',
                name: 'FIG',
                hours: [
                    {
                        is_open_now: false,
                        __typename: 'Hours',
                    },
                ],
                location: {
                    address1: '232 Meeting St',
                    address2: '',
                    address3: '',
                    city: 'Charleston',
                    state: 'SC',
                    postal_code: '29401',
                    __typename: 'Location',
                },
                id: 'V5PK2V8EEPZo8TVq5IQB-A',
                categories: [
                    {
                        title: 'American (New)',
                        alias: 'newamerican',
                        __typename: 'Category',
                    },
                    {
                        title: 'Bars',
                        alias: 'bars',
                        __typename: 'Category',
                    },
                ],
                rating: 4.5,
            },
            {
                photos: [
                    'https://s3-media3.fl.yelpcdn.com/bphoto/vAnpDvmnwBZkUw1RECQO1A/o.jpg',
                ],
                is_closed: false,
                __typename: 'Business',
                price: '$$',
                name: 'Cru Café',
                hours: [
                    {
                        is_open_now: true,
                        __typename: 'Hours',
                    },
                ],
                location: {
                    address1: '18 Pinckney St',
                    address2: '',
                    address3: '',
                    city: 'Charleston',
                    state: 'SC',
                    postal_code: '29401',
                    __typename: 'Location',
                },
                id: 'PwyW0gdeRSRTOvD0afqU1g',
                categories: [
                    {
                        title: 'American (New)',
                        alias: 'newamerican',
                        __typename: 'Category',
                    },
                    {
                        title: 'Comfort Food',
                        alias: 'comfortfood',
                        __typename: 'Category',
                    },
                    {
                        title: 'Food',
                        alias: 'food',
                        __typename: 'Category',
                    },
                ],
                rating: 4.5,
            },
            {
                photos: [
                    'https://s3-media4.fl.yelpcdn.com/bphoto/UnX76hhQacV49juNFpxqqQ/o.jpg',
                ],
                is_closed: false,
                __typename: 'Business',
                price: '$$',
                name: 'Hominy Grill',
                hours: [
                    {
                        is_open_now: true,
                        __typename: 'Hours',
                    },
                ],
                location: {
                    address1: '207 Rutledge Ave',
                    address2: '',
                    address3: '',
                    city: 'Charleston',
                    state: 'SC',
                    postal_code: '29403',
                    __typename: 'Location',
                },
                id: 'JnZWJhJgc-lsv5RN36EBJA',
                categories: [
                    {
                        title: 'Southern',
                        alias: 'southern',
                        __typename: 'Category',
                    },
                    {
                        title: 'Breakfast & Brunch',
                        alias: 'breakfast_brunch',
                        __typename: 'Category',
                    },
                    {
                        title: 'American (Traditional)',
                        alias: 'tradamerican',
                        __typename: 'Category',
                    },
                ],
                rating: 4,
            },
            {
                photos: [
                    'https://s3-media4.fl.yelpcdn.com/bphoto/_LxVAzqGJvaKeqzoy3PIKw/o.jpg',
                ],
                is_closed: false,
                __typename: 'Business',
                price: '$$',
                name: 'Second State Coffee',
                hours: [
                    {
                        is_open_now: true,
                        __typename: 'Hours',
                    },
                ],
                location: {
                    address1: '70 1/2 Beaufain St',
                    address2: null,
                    address3: '',
                    city: 'Charleston',
                    state: 'SC',
                    postal_code: '29401',
                    __typename: 'Location',
                },
                id: 'B8uNtQRgus0YAOEtdoXWdQ',
                categories: [
                    {
                        title: 'Coffee & Tea',
                        alias: 'coffee',
                        __typename: 'Category',
                    },
                ],
                rating: 4.5,
            },
            {
                photos: [
                    'https://s3-media2.fl.yelpcdn.com/bphoto/ZlLP4daUAn5S5IlCI_21tg/o.jpg',
                ],
                is_closed: false,
                __typename: 'Business',
                price: '$$',
                name: 'Pearlz Oyster Bar',
                hours: [
                    {
                        is_open_now: false,
                        __typename: 'Hours',
                    },
                ],
                location: {
                    address1: '153 E Bay St',
                    address2: '',
                    address3: '',
                    city: 'Charleston',
                    state: 'SC',
                    postal_code: '29401',
                    __typename: 'Location',
                },
                id: 'nVMSyt7l4sfTd0p3RR0z7g',
                categories: [
                    {
                        title: 'Seafood',
                        alias: 'seafood',
                        __typename: 'Category',
                    },
                    {
                        title: 'Bars',
                        alias: 'bars',
                        __typename: 'Category',
                    },
                    {
                        title: 'Live/Raw Food',
                        alias: 'raw_food',
                        __typename: 'Category',
                    },
                ],
                rating: 4.5,
            },
            {
                photos: [
                    'https://s3-media2.fl.yelpcdn.com/bphoto/H4UMtVvp4s22n-4hp7omWA/o.jpg',
                ],
                is_closed: false,
                __typename: 'Business',
                price: '$',
                name: 'Persimmon Cafe Sandwich Shop',
                hours: [
                    {
                        is_open_now: true,
                        __typename: 'Hours',
                    },
                ],
                location: {
                    address1: '226 Calhoun St',
                    address2: '',
                    address3: '',
                    city: 'Charleston',
                    state: 'SC',
                    postal_code: '29401',
                    __typename: 'Location',
                },
                id: 'WIYrJ3Zyx_EtPNtJ4KCrJg',
                categories: [
                    {
                        title: 'Cafes',
                        alias: 'cafes',
                        __typename: 'Category',
                    },
                    {
                        title: 'Sandwiches',
                        alias: 'sandwiches',
                        __typename: 'Category',
                    },
                    {
                        title: 'Soup',
                        alias: 'soup',
                        __typename: 'Category',
                    },
                ],
                rating: 4.5,
            },
            {
                photos: [
                    'https://s3-media1.fl.yelpcdn.com/bphoto/eGOqMWDok8tLHmRzXK91SQ/o.jpg',
                ],
                is_closed: false,
                __typename: 'Business',
                price: '$$',
                name: 'Eli\'s Table',
                hours: [
                    {
                        is_open_now: true,
                        __typename: 'Hours',
                    },
                ],
                location: {
                    address1: '129 Meeting St',
                    address2: '',
                    address3: '',
                    city: 'Charleston',
                    state: 'SC',
                    postal_code: '29401',
                    __typename: 'Location',
                },
                id: '4ShcB54-Vr5nY-8fs6Wm0A',
                categories: [
                    {
                        title: 'Southern',
                        alias: 'southern',
                        __typename: 'Category',
                    },
                    {
                        title: 'Breakfast & Brunch',
                        alias: 'breakfast_brunch',
                        __typename: 'Category',
                    },
                    {
                        title: 'American (New)',
                        alias: 'newamerican',
                        __typename: 'Category',
                    },
                ],
                rating: 4,
            },
            {
                photos: [
                    'https://s3-media1.fl.yelpcdn.com/bphoto/Zu_N-TO8XCxPfosSbUr0Bw/o.jpg',
                ],
                is_closed: false,
                __typename: 'Business',
                price: '$$$',
                name: 'Slightly North of Broad',
                hours: [
                    {
                        is_open_now: false,
                        __typename: 'Hours',
                    },
                ],
                location: {
                    address1: '192 E Bay St',
                    address2: '',
                    address3: '',
                    city: 'Charleston',
                    state: 'SC',
                    postal_code: '29401',
                    __typename: 'Location',
                },
                id: 'On08eGBpolwEAmzb3RhPig',
                categories: [
                    {
                        title: 'American (New)',
                        alias: 'newamerican',
                        __typename: 'Category',
                    },
                    {
                        title: 'Southern',
                        alias: 'southern',
                        __typename: 'Category',
                    },
                ],
                rating: 4.5,
            },
            {
                photos: [
                    'https://s3-media2.fl.yelpcdn.com/bphoto/y2wKrtjT1Ak70j-P6Wzhgw/o.jpg',
                ],
                is_closed: false,
                __typename: 'Business',
                price: '$$',
                name: 'Fleet Landing Restaurant',
                hours: [
                    {
                        is_open_now: true,
                        __typename: 'Hours',
                    },
                ],
                location: {
                    address1: '186 Concord St',
                    address2: '',
                    address3: '',
                    city: 'Charleston',
                    state: 'SC',
                    postal_code: '29401',
                    __typename: 'Location',
                },
                id: 'GJ-inOmAuyDWwPOAXxTIjw',
                categories: [
                    {
                        title: 'Seafood',
                        alias: 'seafood',
                        __typename: 'Category',
                    },
                    {
                        title: 'Sandwiches',
                        alias: 'sandwiches',
                        __typename: 'Category',
                    },
                    {
                        title: 'Cocktail Bars',
                        alias: 'cocktailbars',
                        __typename: 'Category',
                    },
                ],
                rating: 4,
            },
            {
                photos: [
                    'https://s3-media1.fl.yelpcdn.com/bphoto/wfIJEHigWUM0UbZ1N1Iy5g/o.jpg',
                ],
                is_closed: false,
                __typename: 'Business',
                price: '$$',
                name: 'Brown Dog Deli',
                hours: [
                    {
                        is_open_now: true,
                        __typename: 'Hours',
                    },
                ],
                location: {
                    address1: '40 Broad St',
                    address2: null,
                    address3: '',
                    city: 'Charleston',
                    state: 'SC',
                    postal_code: '29401',
                    __typename: 'Location',
                },
                id: 'ol7B0ZrFJ1mQQCtTWmTx-g',
                categories: [
                    {
                        title: 'Delis',
                        alias: 'delis',
                        __typename: 'Category',
                    },
                    {
                        title: 'Sandwiches',
                        alias: 'sandwiches',
                        __typename: 'Category',
                    },
                ],
                rating: 4.5,
            },
            {
                photos: [
                    'https://s3-media2.fl.yelpcdn.com/bphoto/da9yo0inU-vW4-pnLRNn0Q/o.jpg',
                ],
                is_closed: false,
                __typename: 'Business',
                price: '$$',
                name: 'Leyla Fine Lebanese Cuisine',
                hours: [
                    {
                        is_open_now: false,
                        __typename: 'Hours',
                    },
                ],
                location: {
                    address1: '298 King St',
                    address2: '',
                    address3: '',
                    city: 'Charleston',
                    state: 'SC',
                    postal_code: '29401',
                    __typename: 'Location',
                },
                id: 'cEqNkd5mPIbdWJe2bndvzQ',
                categories: [
                    {
                        title: 'Lebanese',
                        alias: 'lebanese',
                        __typename: 'Category',
                    },
                    {
                        title: 'Bars',
                        alias: 'bars',
                        __typename: 'Category',
                    },
                ],
                rating: 4.5,
            },
            {
                photos: [
                    'https://s3-media4.fl.yelpcdn.com/bphoto/ppud2auXpALDvhBS1qyiTA/o.jpg',
                ],
                is_closed: false,
                __typename: 'Business',
                price: '$',
                name: 'Callie\'s Hot Little Biscuit',
                hours: [
                    {
                        is_open_now: true,
                        __typename: 'Hours',
                    },
                ],
                location: {
                    address1: '476 King St',
                    address2: '',
                    address3: '',
                    city: 'Charleston',
                    state: 'SC',
                    postal_code: '29403',
                    __typename: 'Location',
                },
                id: 'k9rQpbh_UV3D0URyT9yUQw',
                categories: [
                    {
                        title: 'Breakfast & Brunch',
                        alias: 'breakfast_brunch',
                        __typename: 'Category',
                    },
                    {
                        title: 'Southern',
                        alias: 'southern',
                        __typename: 'Category',
                    },
                    {
                        title: 'Sandwiches',
                        alias: 'sandwiches',
                        __typename: 'Category',
                    },
                ],
                rating: 4.5,
            },
            {
                photos: [
                    'https://s3-media1.fl.yelpcdn.com/bphoto/7qLHx1TUjYtG2SeNybnMCA/o.jpg',
                ],
                is_closed: false,
                __typename: 'Business',
                price: '$$',
                name: 'Hyman\'s Seafood',
                hours: [
                    {
                        is_open_now: true,
                        __typename: 'Hours',
                    },
                ],
                location: {
                    address1: '215 Meeting St',
                    address2: '',
                    address3: '',
                    city: 'Charleston',
                    state: 'SC',
                    postal_code: '29401',
                    __typename: 'Location',
                },
                id: 'sUgDuS2O4blqSnMkorvQyg',
                categories: [
                    {
                        title: 'Seafood',
                        alias: 'seafood',
                        __typename: 'Category',
                    },
                ],
                rating: 3.5,
            },
            {
                photos: [
                    'https://s3-media4.fl.yelpcdn.com/bphoto/s7aNbE7ceM-JYG9J-VcitQ/o.jpg',
                ],
                is_closed: false,
                __typename: 'Business',
                price: '$$',
                name: 'Jeni\'s Splendid Ice Creams',
                hours: [
                    {
                        is_open_now: false,
                        __typename: 'Hours',
                    },
                ],
                location: {
                    address1: '501-A King St',
                    address2: '',
                    address3: '',
                    city: 'Charleston',
                    state: 'SC',
                    postal_code: '29403',
                    __typename: 'Location',
                },
                id: '46a0c9YuMhKuRJ9QJYe7zg',
                categories: [
                    {
                        title: 'Ice Cream & Frozen Yogurt',
                        alias: 'icecream',
                        __typename: 'Category',
                    },
                ],
                rating: 4.5,
            },
            {
                photos: [
                    'https://s3-media3.fl.yelpcdn.com/bphoto/Qs9OSQX5Mw6nWjCN-4butw/o.jpg',
                ],
                is_closed: false,
                __typename: 'Business',
                price: '$$$$',
                name: 'Charleston Grill',
                hours: [
                    {
                        is_open_now: false,
                        __typename: 'Hours',
                    },
                ],
                location: {
                    address1: '224 King St',
                    address2: '',
                    address3: '',
                    city: 'Charleston',
                    state: 'SC',
                    postal_code: '29401',
                    __typename: 'Location',
                },
                id: 'OAAQYFkDqwAPPsBvcLZwaQ',
                categories: [
                    {
                        title: 'American (New)',
                        alias: 'newamerican',
                        __typename: 'Category',
                    },
                    {
                        title: 'Southern',
                        alias: 'southern',
                        __typename: 'Category',
                    },
                ],
                rating: 4.5,
            },
        ],
    }),
    [REDUX_KEYS.CATEGORIES]: fromJS({
        loading: true,
        categories: [
            {
                alias: 'american',
                title: 'American',
            },
            {
                alias: 'italian',
                title: 'Italian',
            },
            {
                alias: 'mexican',
                title: 'Mexican',
            },
            {
                alias: 'seafood',
                title: 'Seafood',
            },
            {
                alias: 'steakhouse',
                title: 'Steakhouse',
            },
            {
                alias: 'thai',
                title: 'Thai',
            },
        ],
    }),
    [REDUX_KEYS.FILTERS]: fromJS({}),
    [REDUX_KEYS.LOCATION]: fromJS({
        location: '29401',
    }),
    [REDUX_KEYS.PAGINATION]: fromJS([]),
    [REDUX_KEYS.REVIEWS]: fromJS({
        loading: false,
        total: 1789,
        'for': 'OJ3mj9U3TygEfmkR5hBgvQ',
        reviews: [
            {
                id: 'FxcNgER255MUnl92tJu71Q',
                rating: 5,
                text: 'Our group of 6 all agreed that Raw is one of the best eats in Charleston. Super fresh oysters and great seafood all around. The chefs really know how to let...',
                time_created: '2019-04-08 08:37:30',
                user: {
                    name: 'Jenny G.',
                    image_url: 'https://s3-media2.fl.yelpcdn.com/photo/e8NgpKRNVxXWNgOkO53RMA/o.jpg',
                    id: 'bfdFzJ264QGhK_WdzcOjww',
                    __typename: 'User',
                },
                __typename: 'Review',
            },
            {
                id: 'KZNGAO-d4F0u9aL4nnU75g',
                rating: 3,
                text: 'Very long wait, and pretty expensive for what it is. In general, would recommend going earlier and then putting your name down then walking around...',
                time_created: '2019-03-23 18:21:48',
                user: {
                    name: 'Camille C.',
                    image_url: 'https://s3-media3.fl.yelpcdn.com/photo/Z979CcOzIWUpntcv_0E91Q/o.jpg',
                    id: 'Q1gXjp7hnxQfQWZI23f_yw',
                    __typename: 'User',
                },
                __typename: 'Review',
            },
            {
                id: 'K1t2D0zLNzZnqShnYQdljQ',
                rating: 5,
                text: 'This little spot does seafood properly. The lobster roll was lightly dressed and the chunks of meat were significant and flavorful. The oyster po\'boy was...',
                time_created: '2019-03-12 09:35:29',
                user: {
                    name: 'Jack P.',
                    image_url: 'https://s3-media2.fl.yelpcdn.com/photo/vApqgvhK1UylDh1iBwGT4w/o.jpg',
                    id: 'QCGr2Oh7u3HGb0y3ZjUJ2g',
                    __typename: 'User',
                },
                __typename: 'Review',
            },
        ],
    }),
};

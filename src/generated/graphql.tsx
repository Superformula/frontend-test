import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  /** Load information about a specific business. */
  business?: Maybe<Business>;
  /** Match detailed business location data to businesses on Yelp. */
  business_match?: Maybe<Businesses>;
  /** Load reviews for a specific business. */
  reviews?: Maybe<Reviews>;
  /** Search for businesses on Yelp by their phone number. */
  phone_search?: Maybe<Businesses>;
  /** Search for businesses on Yelp. */
  search?: Maybe<Businesses>;
  /** Load information about a specific event. */
  event?: Maybe<Event>;
  /** Search for events based on search parameters. */
  event_search?: Maybe<Events>;
  categories?: Maybe<Categories>;
};


export type QueryBusinessArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryBusiness_MatchArgs = {
  name: Scalars['String'];
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  state: Scalars['String'];
  country: Scalars['String'];
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  phone?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  match_threshold?: Maybe<MatchThreshold>;
};


export type QueryReviewsArgs = {
  business?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryPhone_SearchArgs = {
  phone?: Maybe<Scalars['String']>;
};


export type QuerySearchArgs = {
  term?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort_by?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  categories?: Maybe<Scalars['String']>;
  open_now?: Maybe<Scalars['Boolean']>;
  open_at?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<Maybe<Scalars['String']>>>;
  radius?: Maybe<Scalars['Float']>;
};


export type QueryEventArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryEvent_SearchArgs = {
  locale?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort_by?: Maybe<Scalars['String']>;
  sort_on?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['Int']>;
  end_date?: Maybe<Scalars['Int']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  is_free?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  radius?: Maybe<Scalars['Float']>;
};


export type QueryCategoriesArgs = {
  alias?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Business = {
  __typename?: 'Business';
  /** Name of this business. */
  name?: Maybe<Scalars['String']>;
  /** Yelp ID of this business. */
  id?: Maybe<Scalars['String']>;
  /** Yelp alias of this business. */
  alias?: Maybe<Scalars['String']>;
  /** Whether business has been claimed by a business owner. */
  is_claimed?: Maybe<Scalars['Boolean']>;
  /** Whether business has been (permanently) closed. */
  is_closed?: Maybe<Scalars['Boolean']>;
  /** URL for business page on Yelp. */
  url?: Maybe<Scalars['String']>;
  /** Phone number of the business. */
  phone?: Maybe<Scalars['String']>;
  /** Phone number of the business formatted nicely to be displayed to users. The format is the standard phone number format for the business's country. */
  display_phone?: Maybe<Scalars['String']>;
  /** Number of reviews for this business. */
  review_count?: Maybe<Scalars['Int']>;
  /** A list of category title and alias pairs associated with this business. */
  categories?: Maybe<Array<Maybe<Category>>>;
  /** Rating for this business (value ranges from 1, 1.5, ... 4.5, 5). */
  rating?: Maybe<Scalars['Float']>;
  /** Price level of the business. Value is one of $, $$, $$$ and $$$$ or null if we don't have price available for the business. */
  price?: Maybe<Scalars['String']>;
  /** The location of this business, including address, city, state, postal code and country. */
  location?: Maybe<Location>;
  /** The coordinates of this business. */
  coordinates?: Maybe<Coordinates>;
  /** URLs of up to three photos of the business. */
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Opening hours of the business. */
  hours?: Maybe<Array<Maybe<Hours>>>;
  /** Special hours of the business, these override regular opening hours of the business. */
  special_hours?: Maybe<Array<Maybe<SpecialHours>>>;
  /** Review snippets from the business. */
  reviews?: Maybe<Array<Maybe<Review>>>;
  /** When searching, this provides the distance of the business from the search location in meters */
  distance?: Maybe<Scalars['Float']>;
  /** Business attributes. */
  attributes?: Maybe<BusinessAttributes>;
  /** Information and action links for transacting with this business online. */
  transactions?: Maybe<Transactions>;
  /** Information and action links for messaging with this business via Yelp, including requesting quotes. */
  messaging?: Maybe<BusinessMessaging>;
};


export type BusinessReviewsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Category = {
  __typename?: 'Category';
  /** Title of a category for display purposes. */
  title?: Maybe<Scalars['String']>;
  /** Alias of a category, when searching for business in certain categories, use alias rather than the title. */
  alias?: Maybe<Scalars['String']>;
  /** List of parent categories. */
  parent_categories?: Maybe<Array<Maybe<Category>>>;
  /** Countries for which this category is whitelisted. */
  country_whitelist?: Maybe<Array<Maybe<Country>>>;
  /** Countries for which this category is blacklisted. */
  country_blacklist?: Maybe<Array<Maybe<Country>>>;
};

export type Country = {
  __typename?: 'Country';
  /** The ISO 3166-1 alpha-2 code for this country. */
  code?: Maybe<Scalars['String']>;
  /** Supported locales with this country. */
  locales?: Maybe<Array<Maybe<Locale>>>;
};

export type Locale = {
  __typename?: 'Locale';
  /** The code for this locale, in the format of {language_code}_{country_code}. */
  code?: Maybe<Scalars['String']>;
  /** The language component of this locale. */
  language?: Maybe<Language>;
  /** The country component of this locale. */
  country?: Maybe<Country>;
};

export type Language = {
  __typename?: 'Language';
  /** The ISO 639-1 alpha-2 code for this language. When such a code is unavailable for a language, it will be a ISO 639-2 alpha-3 code instead. */
  code?: Maybe<Scalars['String']>;
  /** Supported locales with this language. */
  locales?: Maybe<Array<Maybe<Locale>>>;
};

export type Location = {
  __typename?: 'Location';
  /** Street address of this business. */
  address1?: Maybe<Scalars['String']>;
  /** Street address of this business, continued. */
  address2?: Maybe<Scalars['String']>;
  /** Street address of this business, continued. */
  address3?: Maybe<Scalars['String']>;
  /** City of this business. */
  city?: Maybe<Scalars['String']>;
  /** ISO 3166-2 (with a few exceptions) state code of this business. */
  state?: Maybe<Scalars['String']>;
  /** Postal code of this business. */
  postal_code?: Maybe<Scalars['String']>;
  /** ISO 3166-1 alpha-2 country code of this business. */
  country?: Maybe<Scalars['String']>;
  /** Array of strings that if organized vertically give an address that is in the standard address format for the business's country. */
  formatted_address?: Maybe<Scalars['String']>;
};

export type Coordinates = {
  __typename?: 'Coordinates';
  /** The latitude of this business. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude of this business. */
  longitude?: Maybe<Scalars['Float']>;
};

export type Hours = {
  __typename?: 'Hours';
  /** The type of the opening hours information. Right now, this is always REGULAR. */
  hours_type?: Maybe<Scalars['String']>;
  /** The specific open hours and days for a business. */
  open?: Maybe<Array<Maybe<OpenHours>>>;
  /** Describes if the business is open now. */
  is_open_now?: Maybe<Scalars['Boolean']>;
};

export type OpenHours = {
  __typename?: 'OpenHours';
  /** Whether the business opens overnight or not. When this is true, the end time will be lower than the start time. */
  is_overnight?: Maybe<Scalars['Boolean']>;
  /** End of the opening hours in a day, in 24-hour clock notation, like 2130 means 9:30 PM. */
  end?: Maybe<Scalars['String']>;
  /** Start of the opening hours in a day, in 24-hour clock notation, like 1000 means 10 AM. */
  start?: Maybe<Scalars['String']>;
  /** From 0 to 6, representing day of the week from Monday to Sunday. Notice that you may get the same day of the week more than once if the business has more than one opening time slots. */
  day?: Maybe<Scalars['Int']>;
};

export type SpecialHours = {
  __typename?: 'SpecialHours';
  /** Whether the business opens overnight or not. When this is true, the end time will be lower than the start time. */
  is_overnight?: Maybe<Scalars['Boolean']>;
  /** Whether the business is closed on the indicated date. */
  is_closed?: Maybe<Scalars['Boolean']>;
  /** End of the opening hours in a day, in 24-hour clock notation, like 2130 means 9:30 PM. */
  end?: Maybe<Scalars['String']>;
  /** Start of the opening hours in a day, in 24-hour clock notation, like 1000 means 10 AM. */
  start?: Maybe<Scalars['String']>;
  /** The date for which the special hours apply inISO8601 format, AKA YYYY-MM-DD */
  date?: Maybe<Scalars['Date']>;
};


export type Review = {
  __typename?: 'Review';
  /** Yelp ID of this review. */
  id?: Maybe<Scalars['String']>;
  /** Rating of this review. */
  rating?: Maybe<Scalars['Int']>;
  /** The user who wrote the review. */
  user?: Maybe<User>;
  /** Text excerpt of this review. */
  text?: Maybe<Scalars['String']>;
  /** The time that the review was created in PST. */
  time_created?: Maybe<Scalars['String']>;
  /** URL of this review. */
  url?: Maybe<Scalars['String']>;
  /** Details about the publicly visible response to this review posted by the business owner. */
  public_response?: Maybe<PublicReviewResponse>;
};

export type User = {
  __typename?: 'User';
  /** The User's ID, a 22 character string */
  id?: Maybe<Scalars['String']>;
  /** User's profile url */
  profile_url?: Maybe<Scalars['String']>;
  /** URL of the user's profile photo. */
  image_url?: Maybe<Scalars['String']>;
  /** Name of the user. */
  name?: Maybe<Scalars['String']>;
};

export type PublicReviewResponse = {
  __typename?: 'PublicReviewResponse';
  /** Text of this public review response. */
  text?: Maybe<Scalars['String']>;
  /** The time that this public review response was created in ISO8601 format. */
  time_created?: Maybe<Scalars['DateTime']>;
  /** Details about business user associated with the business who posted this public review response comment. */
  business_user?: Maybe<BusinessUser>;
};


export type BusinessUser = {
  __typename?: 'BusinessUser';
  /** Name of the business user. */
  name?: Maybe<Scalars['String']>;
  /** Business role for the business user. */
  role?: Maybe<Scalars['String']>;
  /** URL of the business user's profile photo. */
  photo_url?: Maybe<Scalars['String']>;
};

export type BusinessAttributes = {
  __typename?: 'BusinessAttributes';
  /** Whether business has gender neutral restrooms. See https://www.yelpblog.com/2017/06/find-gender-neutral-restrooms-160000-businesses-yelp for more details. */
  gender_neutral_restrooms?: Maybe<BusinessAttribute>;
  /** Whether business has opted in to the "Open to All" pledge. See https://www.yelpblog.com/2018/07/opentoall for more details. */
  open_to_all?: Maybe<BusinessAttribute>;
  /** Whether business is wheelchair accessible. */
  wheelchair_accessible?: Maybe<BusinessAttribute>;
};

export type BusinessAttribute = {
  __typename?: 'BusinessAttribute';
  /** The machine-friendly name of this business attribute. */
  name_code?: Maybe<Scalars['String']>;
  /** The machine-friendly value of this business attribute. */
  value_code?: Maybe<Scalars['String']>;
};

export type Transactions = {
  __typename?: 'Transactions';
  /** Online reservations via Yelp Reservations. */
  restaurant_reservations?: Maybe<RestaurantReservations>;
};

export type RestaurantReservations = {
  __typename?: 'RestaurantReservations';
  /** Visit this action link URL to go directly into the Yelp Reservations flow for this business. */
  url?: Maybe<Scalars['String']>;
};

export type BusinessMessaging = {
  __typename?: 'BusinessMessaging';
  /** Visit this action link URL to go directly into the business messaging flow for this business. */
  url?: Maybe<Scalars['String']>;
  /** The localized text description of the type of messaging this business is enabled for. Example: "Request a Quote" */
  use_case_text?: Maybe<Scalars['String']>;
};

export type Businesses = {
  __typename?: 'Businesses';
  /** A list of business Yelp finds based on the search criteria. */
  business?: Maybe<Array<Maybe<Business>>>;
  /** Total number of businesses found. */
  total?: Maybe<Scalars['Int']>;
};

/** An enumeration. */
export enum MatchThreshold {
  None = 'NONE',
  Default = 'DEFAULT',
  Strict = 'STRICT'
}

export type Reviews = {
  __typename?: 'Reviews';
  /** The reviews objects. */
  review?: Maybe<Array<Maybe<Review>>>;
  /** Total number of reviews. */
  total?: Maybe<Scalars['Int']>;
  /** A list of languages for which the business has at least one review. */
  possible_languages?: Maybe<Array<Maybe<Language>>>;
  /** The business associated with the reviews */
  business?: Maybe<Business>;
};

export type Event = {
  __typename?: 'Event';
  /** Name of this event. */
  name?: Maybe<Scalars['String']>;
  /** Event id. */
  id?: Maybe<Scalars['String']>;
  /** The business tied to this event. */
  business?: Maybe<Business>;
  /** The ID of the related business. */
  business_id?: Maybe<Scalars['String']>;
  /** Number of Yelp users attending this event. */
  attending_count?: Maybe<Scalars['String']>;
  /** The category of this event. */
  category?: Maybe<Scalars['String']>;
  /** Cost of attending this event. */
  cost?: Maybe<Scalars['Int']>;
  /** Maximum cost of this event. */
  cost_max?: Maybe<Scalars['Int']>;
  /** Description excerpt of this event. */
  description?: Maybe<Scalars['String']>;
  /** Yelp page of this event. */
  event_site_url?: Maybe<Scalars['String']>;
  /** Yelp image url of this event. */
  image_url?: Maybe<Scalars['String']>;
  /** Number of Yelp users interested in attending this event. */
  interested_count?: Maybe<Scalars['String']>;
  /** Whether this event is canceled. */
  is_canceled?: Maybe<Scalars['Boolean']>;
  /** Whether this event is free. */
  is_free?: Maybe<Scalars['Boolean']>;
  /** Whether this event is created by a Yelp community manager. */
  is_official?: Maybe<Scalars['Boolean']>;
  /** Latitude of this event. */
  latitude?: Maybe<Scalars['Float']>;
  /** Longitude of this event. */
  longitude?: Maybe<Scalars['Float']>;
  /** The location of this business, including address, city, state, postal code and country. */
  location?: Maybe<Location>;
  /** URL to buy tickets for this event. */
  tickets_url?: Maybe<Scalars['String']>;
  /** Time this event ends. Returns time and date in the following format - "YYYY-MM-DD HH-mm". */
  time_end?: Maybe<Scalars['String']>;
  /** Time the event starts. Returns time and date in the following format - "YYYY-MM-DD HH-mm". */
  time_start?: Maybe<Scalars['String']>;
};

export type Events = {
  __typename?: 'Events';
  /** List of events found matching search criteria. */
  events?: Maybe<Array<Maybe<Event>>>;
  /** Total number of events found. */
  total?: Maybe<Scalars['Int']>;
};

export type Categories = {
  __typename?: 'Categories';
  /** The category objects. */
  category?: Maybe<Array<Maybe<Category>>>;
  /** Total number of categories. */
  total?: Maybe<Scalars['Int']>;
};

export type GetCategoriesQueryVariables = Exact<{
  location: Scalars['String'];
}>;


export type GetCategoriesQuery = (
  { __typename?: 'Query' }
  & { search?: Maybe<(
    { __typename?: 'Businesses' }
    & { business?: Maybe<Array<Maybe<(
      { __typename?: 'Business' }
      & { categories?: Maybe<Array<Maybe<(
        { __typename?: 'Category' }
        & Pick<Category, 'alias' | 'title'>
      )>>> }
    )>>> }
  )> }
);

export type SearchRestaurantsQueryVariables = Exact<{
  location: Scalars['String'];
  openNow?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type SearchRestaurantsQuery = (
  { __typename?: 'Query' }
  & { search?: Maybe<(
    { __typename?: 'Businesses' }
    & { business?: Maybe<Array<Maybe<(
      { __typename?: 'Business' }
      & SearchRestaurantFragmentFragment
    )>>> }
  )> }
);

export type SearchRestaurantFragmentFragment = (
  { __typename?: 'Business' }
  & Pick<Business, 'id' | 'name' | 'is_closed' | 'rating' | 'price' | 'photos'>
  & { categories?: Maybe<Array<Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'alias' | 'title'>
  )>>> }
);

export type GetRestaurantQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;


export type GetRestaurantQuery = (
  { __typename?: 'Query' }
  & { business?: Maybe<(
    { __typename?: 'Business' }
    & RestaurantFragmentFragment
  )> }
);

export type RestaurantFragmentFragment = (
  { __typename?: 'Business' }
  & Pick<Business, 'name' | 'is_closed' | 'rating' | 'price' | 'photos' | 'review_count'>
  & { hours?: Maybe<Array<Maybe<(
    { __typename?: 'Hours' }
    & Pick<Hours, 'is_open_now'>
  )>>>, categories?: Maybe<Array<Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'alias' | 'title'>
  )>>>, coordinates?: Maybe<(
    { __typename?: 'Coordinates' }
    & Pick<Coordinates, 'latitude' | 'longitude'>
  )>, location?: Maybe<(
    { __typename?: 'Location' }
    & Pick<Location, 'formatted_address'>
  )>, reviews?: Maybe<Array<Maybe<(
    { __typename?: 'Review' }
    & ReviewFragmentFragment
  )>>> }
);

export type ReviewFragmentFragment = (
  { __typename?: 'Review' }
  & Pick<Review, 'rating' | 'text' | 'time_created'>
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'image_url' | 'name'>
  )> }
);

export const SearchRestaurantFragmentFragmentDoc = gql`
    fragment SearchRestaurantFragment on Business {
  id
  name
  is_closed
  rating
  price
  photos
  categories {
    alias
    title
  }
}
    `;
export const ReviewFragmentFragmentDoc = gql`
    fragment ReviewFragment on Review {
  rating
  text
  time_created
  user {
    image_url
    name
  }
}
    `;
export const RestaurantFragmentFragmentDoc = gql`
    fragment RestaurantFragment on Business {
  name
  is_closed
  rating
  price
  photos
  review_count
  hours {
    is_open_now
  }
  categories {
    alias
    title
  }
  coordinates {
    latitude
    longitude
  }
  location {
    formatted_address
  }
  reviews {
    ...ReviewFragment
  }
}
    ${ReviewFragmentFragmentDoc}`;
export const GetCategoriesDocument = gql`
    query GetCategories($location: String!) {
  search(term: "restaurants", location: $location) {
    business {
      categories {
        alias
        title
      }
    }
  }
}
    `;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *      location: // value for 'location'
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, baseOptions);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, baseOptions);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const SearchRestaurantsDocument = gql`
    query SearchRestaurants($location: String!, $openNow: Boolean, $categories: String, $price: String, $limit: Int, $offset: Int) {
  search(
    location: $location
    limit: $limit
    offset: $offset
    categories: $categories
    open_now: $openNow
    price: $price
  ) {
    business {
      ...SearchRestaurantFragment
    }
  }
}
    ${SearchRestaurantFragmentFragmentDoc}`;

/**
 * __useSearchRestaurantsQuery__
 *
 * To run a query within a React component, call `useSearchRestaurantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchRestaurantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchRestaurantsQuery({
 *   variables: {
 *      location: // value for 'location'
 *      openNow: // value for 'openNow'
 *      categories: // value for 'categories'
 *      price: // value for 'price'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useSearchRestaurantsQuery(baseOptions: Apollo.QueryHookOptions<SearchRestaurantsQuery, SearchRestaurantsQueryVariables>) {
        return Apollo.useQuery<SearchRestaurantsQuery, SearchRestaurantsQueryVariables>(SearchRestaurantsDocument, baseOptions);
      }
export function useSearchRestaurantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchRestaurantsQuery, SearchRestaurantsQueryVariables>) {
          return Apollo.useLazyQuery<SearchRestaurantsQuery, SearchRestaurantsQueryVariables>(SearchRestaurantsDocument, baseOptions);
        }
export type SearchRestaurantsQueryHookResult = ReturnType<typeof useSearchRestaurantsQuery>;
export type SearchRestaurantsLazyQueryHookResult = ReturnType<typeof useSearchRestaurantsLazyQuery>;
export type SearchRestaurantsQueryResult = Apollo.QueryResult<SearchRestaurantsQuery, SearchRestaurantsQueryVariables>;
export const GetRestaurantDocument = gql`
    query GetRestaurant($id: String) {
  business(id: $id) {
    ...RestaurantFragment
  }
}
    ${RestaurantFragmentFragmentDoc}`;

/**
 * __useGetRestaurantQuery__
 *
 * To run a query within a React component, call `useGetRestaurantQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRestaurantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRestaurantQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRestaurantQuery(baseOptions?: Apollo.QueryHookOptions<GetRestaurantQuery, GetRestaurantQueryVariables>) {
        return Apollo.useQuery<GetRestaurantQuery, GetRestaurantQueryVariables>(GetRestaurantDocument, baseOptions);
      }
export function useGetRestaurantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRestaurantQuery, GetRestaurantQueryVariables>) {
          return Apollo.useLazyQuery<GetRestaurantQuery, GetRestaurantQueryVariables>(GetRestaurantDocument, baseOptions);
        }
export type GetRestaurantQueryHookResult = ReturnType<typeof useGetRestaurantQuery>;
export type GetRestaurantLazyQueryHookResult = ReturnType<typeof useGetRestaurantLazyQuery>;
export type GetRestaurantQueryResult = Apollo.QueryResult<GetRestaurantQuery, GetRestaurantQueryVariables>;
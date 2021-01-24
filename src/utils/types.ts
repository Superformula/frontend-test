

export interface CheckboxItemProps {
  id: String
  text: String
}

export interface SelectItemProps {
  alias: String
  title: String
  activesList: Array<String>,
  isActive?: Boolean,
  handleSelect: (id: String, isActive: Boolean) => void
}

export type SelectListType = {
  alias: String
  title: String,
  isActive?: Boolean
}

export interface SelectProps {
  readonly id: String,
  readonly text: String,
  readonly list: Array<SelectListType>,
  readonly minWidth?: number
}

export type FilterType = {
  alias: String
  title: String
}

export type FiltersListType = {
  id: String
  text: String
  values: Array<FilterType>,
  minWidth?: number
}

export interface FiltersProps {
  list: Array<FiltersListType>
}

export interface RatingProps {
  readonly value: number
}

export type RestaurantItemType = {
  alias: string,
  name: string,
  is_closed: boolean,
  rating: number,
  price: string,
  categories: Array<{
    alias: string,
    title: string
  }>,
  photos: Array<string>
}

export interface ShowcaseItemProps {
  item: RestaurantItemType
}

export interface ShowcaseProps {
  readonly title: string,
  list: Array<RestaurantItemType>
}

export type StatusType = {
  id: String,
  text: String
}

export interface StatusProps {
  readonly active: String
}

export type ReviewsType = {
  rating: number
  text: string
  user: {
    image_url: string
    name: string
  }
}

export type RestaurantType = {
  name: string
  is_closed: boolean
  rating: number
  price: string
  photos: Array<string>
  review_count: number
  categories: Array<{
    alias: string
    title: string
  }>
  coordinates: {
    latitude: number
    longitude: number
  }
  location: {
    formatted_address: string
  }
  reviews: Array<ReviewsType>
}

export interface RestaurantProps {
  restaurant: RestaurantType
}

export interface RestaurantHeaderProps {
  name: string
  rating: number
  is_closed: boolean
  price: string
  category: string
}
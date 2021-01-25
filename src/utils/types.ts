import { MouseEventHandler } from "react"


export interface CheckboxItemProps {
  id: string
  text: string
}

export interface SelectItemProps {
  parentID: string,
  alias: string
  title: string
  isActive?: Boolean,
  handleSelect: (id: string, isActive: Boolean) => void
}

export type SelectListType = {
  alias: string
  title: string,
  isActive?: Boolean
}

export interface SelectProps {
  readonly id: string,
  readonly text: string,
  readonly list: Array<SelectListType>,
  readonly minWidth?: number
}

export type FilterType = {
  alias: string
  title: string
}

export type FiltersListType = {
  id: string
  text: string
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
  isLoading: boolean
}

export type StatusType = {
  id: string,
  text: string
}

export interface StatusProps {
  readonly active: string
}

export type ReviewsType = {
  rating: number
  text: string
  time_created: string
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

export interface PhotosProps {
  photos: Array<string>
  coordinates: {
    latitude: number
    longitude: number
  }
  location: {
    formatted_address: string
  }
}

export interface ReviewsProps {
  review_count: number
  reviews: Array<ReviewsType>
}

export type RestaurantsContextType = {
  restaurantsList: Array<RestaurantItemType>,
  setRestaurantsList: Function,
  categoriesFilter: Array<string>,
  priceFilter: Array<string>,
  openFilter: boolean,
  setFilter: Function
}

export type LoadMoreProps = {
  onClick: MouseEventHandler
  isLoading: boolean
}
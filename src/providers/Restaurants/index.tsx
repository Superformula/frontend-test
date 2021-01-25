import { RestaurantsContextType } from '@utils/types'
import * as React from 'react'

export const RestaurantsContext = React.createContext<RestaurantsContextType>({
  restaurantsList: [],
  setRestaurantsList: (_) => {},
  categoriesFilter: [],
  priceFilter: [],
  openFilter: false,
  setFilter: (a, b) => {}
})

const RestaurantsProvider = ({ children }) => {
  const [activesList, setActivesList] = React.useState([])
  const [restaurantsList, setRestaurantsList] = React.useState([])
  const [categoriesFilter, setCategoriesFilter] = React.useState([])
  const [priceFilter, setPriceFilter] = React.useState([])
  const [openFilter, setOpenFilter] = React.useState(false)

  const setFilter = (filter, value) => {
    switch(filter) {
      case "categories":
        setCategoriesFilter(value)
        break
      case "price":
        setPriceFilter(value)
        break
      case "open":
        setOpenFilter(value)
      default:
        break
    }
  }

  return (
    <RestaurantsContext.Provider 
      value={{ restaurantsList, setRestaurantsList, categoriesFilter, priceFilter, openFilter, setFilter}}
    >
      { children }
    </RestaurantsContext.Provider>
  )
}

export const useRestaurantsList = () => React.useContext(RestaurantsContext)

export default RestaurantsProvider
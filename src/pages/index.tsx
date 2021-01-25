import * as React from 'react'
import { RestaurantsContext } from '@providers/Restaurants'
import Head from 'next/head'
import Header from '@components/Header'
import Filters from '@components/Filters'
import Showcase from '@components/Showcase'
import Loading from '@components/Loading'
import LoadMore from '@components/Showcase/LoadMore'
import { useQuery } from '@apollo/client'
import { getFiltersList } from '@utils/filters'
import { GET_CATEGORIES, GET_RESTAURANTS } from '@utils/queries'

const HomePage: React.FunctionComponent = () => {
  const { restaurantsList, setRestaurantsList, categoriesFilter } = React.useContext(RestaurantsContext)
  const [filtersList, setFiltersList] = React.useState([])
  const [offset, setOffset] = React.useState<number>(0)
  const [shouldConcat, setShouldConcat] = React.useState<Boolean>(false)
  const limit = 8
  const { loading: categoriesLoading, error: categoriesError, data: categoriesData } = useQuery(GET_CATEGORIES, {
    variables: {
      term: "restaurants",
      location: process.env.DEFAULT_LOCATION,
    }
  })

  const { loading: restaurantsLoading, error: restaurantsError, data: restaurantsData } = useQuery(GET_RESTAURANTS, {
    variables: {
      term: "restaurants",
      location: process.env.DEFAULT_LOCATION,
      categories: categoriesFilter.join(','),
      limit,
      offset
    }
  })

  React.useEffect(() => {
    if(!categoriesLoading && categoriesData) {
      setFiltersList(getFiltersList(categoriesData?.search.business))
    }
  }, [categoriesLoading, categoriesError, categoriesData])

  React.useEffect(() => {
    if(!restaurantsLoading && restaurantsData) {
      if(shouldConcat && restaurantsList.length > 0) {
        setRestaurantsList([...restaurantsList, restaurantsData?.search.business].flat())
        setShouldConcat(false)
      } else {
        setRestaurantsList(restaurantsData?.search.business)
      }
    }
  }, [restaurantsLoading, restaurantsError, restaurantsData])

  React.useEffect(() => {
    if(offset > 0) {
      setShouldConcat(true)
    }
  }, [offset])

  const handleLoadMore = () => {
    setOffset(offset + limit)
  }

  if(categoriesLoading && restaurantsLoading)
    return (<Loading />)

  return (
    <>
      <Head>
        <title>Homepage | Frontend Test - Frederico Soares</title>
      </Head>
      <Header />
      <Filters 
        list={filtersList} 
      />
      <Showcase 
        title="All Restaurants"
        list={restaurantsList}
        isLoading={restaurantsLoading}
      />
      <LoadMore onClick={handleLoadMore} isLoading={restaurantsLoading} />
    </>
  )
}

export default HomePage
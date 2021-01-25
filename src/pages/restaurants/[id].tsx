import * as React from 'react'
import { useRouter } from 'next/router'
import { GET_RESTAURANT } from '@utils/queries'
import { axiosYelpAPI } from '@utils/api'
import RestaurantHeader from '@components/RestaurantHeader'
import Photos from '@components/Photos'
import Reviews from '@components/Reviews'

const Retaurant = () => {
  const [restaurant, setRestaurant] = React.useState([])
  const router = useRouter()
  const { id } = router.query

  React.useEffect(() => {
    axiosYelpAPI.post('', {
      operationName: "GetRestaurant",
      query: GET_RESTAURANT,
      variables: {
        term: id,
        location: process.env.DEFAULT_LOCATION,
        limit: 1
      }
    }).then(({ data }) => {
      setRestaurant(data.data.search.business)
    })
  }, [])
  
  if(restaurant.length === 0)
    return <></>

  const { name, is_closed, rating, price, photos, review_count, categories, coordinates, location, reviews } = restaurant[0]

  return (
    <>
      <RestaurantHeader 
        name={name}
        rating={rating}
        is_closed={is_closed}
        price={price}
        category={categories[0].title}
      />
      <Photos 
        photos={photos}
        coordinates={coordinates}
        location={location}
      />
      <Reviews
        review_count={review_count}
        reviews={reviews}
      />
    </>
  )
}

export default Retaurant
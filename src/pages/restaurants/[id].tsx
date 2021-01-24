import * as React from 'react'
import { GET_RESTAURANT } from '@utils/queries'
import { axiosYelpAPI } from '@utils/api'
import { RestaurantProps } from '@utils/types'
import RestaurantHeader from '@components/RestaurantHeader'
import Photos from '@components/Photos'
import Reviews from '@components/Reviews'

const Retaurant: React.FunctionComponent<RestaurantProps> = ({ restaurant }) => {
  const { name, is_closed, rating, price, photos, review_count, categories, coordinates, location, reviews } = restaurant

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

export async function getServerSideProps(ctx) {
  const { id } = ctx.params

  const { data } = await axiosYelpAPI.post('', {
    operationName: "GetRestaurant",
    query: GET_RESTAURANT,
    variables: {
      term: id,
      location: process.env.DEFAULT_LOCATION,
      limit: 1
    }
  })

  const restaurant = data?.data.search.business[0]

  return {
    props: {
      restaurant
    }
  };
}

export default Retaurant
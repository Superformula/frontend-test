import * as React from 'react'
import { GET_RESTAURANT } from '@utils/queries'
import { axiosYelpAPI } from '@utils/api'
import { RestaurantProps } from '@utils/types'
import RestaurantHeader from '@components/RestaurantHeader'

const Retaurant: React.FunctionComponent<RestaurantProps> = ({ restaurant }) => {
  const { name, is_closed, rating, price, photos, review_count, categories, coordinates, location, reviews } = restaurant

  return(
    <RestaurantHeader 
      name={name}
      rating={rating}
      is_closed={is_closed}
      price={price}
      category={categories[0].title}
    />
  )
}

export async function getServerSideProps(ctx) {
  const alias = ctx.params.alias

  const { data } = await axiosYelpAPI.post('', {
    operationName: "GetRestaurant",
    query: GET_RESTAURANT,
    variables: {
      term: alias,
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
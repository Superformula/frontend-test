import * as React from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths } from 'next'
import { GET_RESTAURANT } from '@utils/queries'
import { axiosYelpAPI } from '@utils/api'
import { RestaurantProps } from '@utils/types'
import RestaurantHeader from '@components/RestaurantHeader'
import Photos from '@components/Photos'
import Reviews from '@components/Reviews'

const Retaurant = ({ restaurant }) => {
  const router = useRouter()
  if(router.isFallback)
    return <div>loading...</div>

  if(restaurant.length === 0)
    return <div>404!</div>

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params
  
  try {
    const { data } = await axiosYelpAPI.post('', {
      operationName: "GetRestaurant",
      query: GET_RESTAURANT,
      variables: {
        term: id,
        location: process.env.DEFAULT_LOCATION,
        limit: 1
      }
    })
    const restaurant = data?.data.search.business

    return {
      props: {
        restaurant: restaurant
      }
    };
  } catch(err) {
    throw err
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
     
    ],
    fallback: 'blocking'
  };
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}

export default Retaurant
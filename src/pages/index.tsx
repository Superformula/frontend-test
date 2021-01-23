import * as React from 'react'
import Head from 'next/head'
import Theme from '@components/Layout/Theme'
import Header from '@components/Header'
import Filters from '@components/Filters'
import Showcase from '@components/Showcase'

const HomePage: React.FunctionComponent = () => {
  const filtersList = [
    {
      id: "price",
      text: "Price",
      values: [
        {
          id: "all",
          text: "All",
          isActive: true
        },
        {
          id: "cheap",
          text: "$"
        },
        {
          id: "normal",
          text: "$$"
        },
        {
          id: "expensive",
          text: "$$$"
        },
        {
          id: "superexpensive",
          text: "$$$$",
        }
      ]
    },
    {
      id: "categories",
      text: "Categories",
      minWidth: 193,
      values: [
        {
          id: "all",
          text: "All",
          isActive: true
        },
        {
          id: "italian",
          text: "Italian"
        },
        {
          id: "seafood",
          text: "Seafood"
        },
        {
          id: "steakhouses",
          text: "Stakehouses"
        },
        {
          id: "japanese",
          text: "Japanese"
        },
        {
          id: "american",
          text: "American"
        },
        {
          id: "mexican",
          text: "Mexican"
        },
        {
          id: "thai",
          text: "Thai"
        }
      ]
    }
  ]

  return (
    <Theme>
      <Head>
        <title>Homepage</title>
      </Head>
      <Header />
      <Filters 
        list={filtersList} 
      />
      <Showcase 
        title="All Restaurants"
        list={[1, 2, 3, 4, 5, 6, 7, 8]}
      />
    </Theme>
  )
}

export default HomePage
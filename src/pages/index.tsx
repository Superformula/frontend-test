import * as React from 'react'
import Head from 'next/head'
import Theme from '@components/Layout/Theme'
import Header from '@components/Header'
import Filters from '@components/Filters'
import Showcase from '@components/Showcase'


const HomePage = () => (
  <Theme>
    <Head>
      <title>Homepage</title>
    </Head>
    <Header />
    <Showcase 
      title="All Restaurants"
    />
  </Theme>
)

export default HomePage
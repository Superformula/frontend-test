import LoadingIndicator from 'design-system/LoadingIndicator';
import * as React from 'react';
import styled from 'styled-components';

import Header from './Header';
import MediaBanner from './MediaBanner';
import Reviews from './Reviews';
import useDetailPageData from './useDetailPageData';

const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

function Detail() {
  const { data, loading } = useDetailPageData();

  if (loading) {
    return (
      <Main>
        <Container>
          <LoadingIndicator />
        </Container>
      </Main>
    );
  }

  // Get the first category that it's not restaurants
  const category = data.business.categories.find(
    ({ alias }) => alias !== 'restaurants'
  ).title;

  return (
    <Main>
      <Header
        name={data.business.name}
        rating={data.business.rating}
        category={category}
        price={data.business.price}
        isClosed={data.business.isClosed}
      />
      <MediaBanner
        name={data.business.name}
        address={data.business.location.formattedAddress}
        coordinates={data.business.coordinates}
        photos={data.business.photos}
      />
      <Reviews
        reviewCount={data.business.reviewCount}
        reviews={data.business.reviews}
      />
    </Main>
  );
}

export default Detail;

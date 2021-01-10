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

function Detail() {
  const { data, loading } = useDetailPageData();

  !loading && console.log({ data });

  return (
    <Main>
      <Header />
      <MediaBanner />
      <Reviews />
    </Main>
  );
}

export default Detail;

import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

import { Details, DetailsProps } from '~/components/templates';
import { BusinessService, ReviewService } from '~/services';
import { mapBusinessToDetails, mapReviews } from '~/utils/map';

interface DetailsPageProps extends DetailsProps {}

const DetailsPage: FC<DetailsPageProps> = (props) => {
  const router = useRouter();

  if (router.isFallback) return <Details {...props} reviews={[{}, {}, {}]} loading />;
  return <Details {...props} />;
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: true,
});

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as unknown;
  const { id } = params as { id: string };

  const [business, { reviews }] = await Promise.all([
    BusinessService.getOne({ id }),
    ReviewService.getOne({ id }),
  ]);

  return {
    props: {
      ...mapBusinessToDetails(business),
      reviews: mapReviews(reviews),
    },
    revalidate: 60 * 5,
  };
};

export default DetailsPage;

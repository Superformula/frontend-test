import axios from 'axios';
import { useRouter } from 'next/router';
import React, {
  FC,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { Details, DetailsProps, ReviewData } from '~/components/templates';
import { Business, Review } from '~/models';
import { mapBusinessToDetails, mapReviews } from '~/utils/map';

const DetailsPage: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [category, setCategory] = useState<string>('');
  const [imageUrl1, setImageUrl1] = useState<string>('');
  const [imageUrl2, setImageUrl2] = useState<string>('');
  const [status, setStatus] = useState<string>('open');
  const [totalReviews, setTotalReviews] = useState<number>(0);
  const [price, setPrice] = useState<number>(1);
  const [address, setAddress] = useState<string>('');
  const [reviews, setReviews] = useState<ReviewData[]>([{}, {}, {}]);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingReviews, setLoadingReviews] = useState<boolean>(false);

  const requestBusiness = useCallback(async () => {
    if (!id) return;

    setLoading(true);
    const { data } = await axios.get<Business>(`/api/businesses/${id}`);

    const business = mapBusinessToDetails(data);

    setTitle(business.title);
    setRating(business.rating);
    setCategory(business.category);
    setImageUrl1(business.imageUrl1);
    setImageUrl2(business.imageUrl2);
    setStatus(business.status);
    setTotalReviews(business.totalReviews);
    setPrice(business.price);
    setAddress(business.address);

    setLoading(false);
  }, [id]);

  const requestReviews = useCallback(async () => {
    if (!id) return;

    setLoadingReviews(true);

    const { data } = await axios.get<{ reviews: Review[] }>(`/api/businesses/reviews/${id}`);
    setReviews(mapReviews(data.reviews));

    setLoadingReviews(false);
  }, [id]);

  useEffect(() => {
    requestBusiness();
    requestReviews();
  }, [requestBusiness, requestReviews]);

  return (
    <Details
      loading={loading}
      loadingReviews={loadingReviews}
      title={title}
      rating={rating as DetailsProps['rating']}
      category={category}
      imageUrl1={imageUrl1}
      imageUrl2={imageUrl2}
      status={status as DetailsProps['status']}
      totalReviews={totalReviews}
      price={price as DetailsProps['price']}
      address={address}
      reviews={reviews}
    />
  );
};

export default DetailsPage;

import { Business, Review } from '~/models';

export const mapBusiness = (data: Business) => {
  const {
    name,
    rating,
    categories,
    photos,
    is_closed,
    review_count,
    price,
    location,
  } = data;

  const [category] = categories;
  const [imageUrl1, imageUrl2] = photos;
  const status = is_closed ? 'closed' : 'open';
  const address = location.display_address.join(' ');

  return {
    title: name,
    rating,
    category: category.title,
    imageUrl1,
    imageUrl2,
    status,
    totalReviews: review_count,
    price: price.length,
    address,
  };
};

export const mapReviews = (data: Review[]) => {
  const reviews = data.map(({
    rating,
    text,
    user,
    time_created,
  }) => (
    {
      avatarUrl: user.image_url,
      user: user.name,
      date: time_created,
      text,
      rating,
    }
  ));

  return reviews;
};

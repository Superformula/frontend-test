import { RestaurantItemData } from '~/components';
import { Business, Review } from '~/models';

export const mapBusinessToDetails = (data: Business) => {
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

export const mapBusinessToMain = (data: Business[]): RestaurantItemData[] => {
  const businesses = data.map(({
    alias,
    name,
    rating,
    categories,
    is_closed,
    price,
    image_url,
  }) => ({
    id: alias,
    title: name,
    imageUrl: image_url,
    category: categories[0].title,
    price: (price?.length || 1) as RestaurantItemData['price'],
    rating: rating as RestaurantItemData['rating'],
    status: (is_closed ? 'closed' : 'open') as RestaurantItemData['status'],
  }));

  return businesses;
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

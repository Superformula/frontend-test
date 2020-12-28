export interface Review {
  id: string;
  text: string;
  rating: number;
  time_created: string;
  user: {
    name: string;
    image_url: string;
  }
}

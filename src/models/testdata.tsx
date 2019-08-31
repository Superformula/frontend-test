import { Restaurant, Review, Cost, Categories } from './models';

const sampleReview = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
ut labore et dolore magna aliqua. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. 
Suspendisse ultrices gravida dictum fusce. Aliquet nec ullamcorper sit amet risus. At consectetur lorem donec 
massa sapien faucibus et molestie. Amet justo donec enim diam vulputate ut pharetra sit. Cursus in hac habitasse 
platea dictumst. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Dolor purus non enim praesent 
elementum facilisis leo. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Maecenas accumsan 
lacus vel facilisis volutpat. Volutpat maecenas volutpat blandit aliquam etiam. Egestas fringilla phasellus 
faucibus scelerisque eleifend donec pretium vulputate. Egestas tellus rutrum tellus pellentesque eu tincidunt 
tortor aliquam nulla. Amet cursus sit amet dictum sit amet. Nisi porta lorem mollis aliquam ut. Dignissim diam 
quis enim lobortis scelerisque fermentum dui. Ipsum dolor sit amet consectetur adipiscing elit ut. Tellus molestie 
nunc non blandit massa enim nec. Et malesuada fames ac turpis egestas maecenas.`

const karReviews = [
  new Review('111', '1', 'Jon', '08/31/2019', 4, sampleReview),
  new Review('112', '1', 'Sarah', '08/31/2019', 5, sampleReview),
  new Review('113', '1', 'Imani', '08/31/2019', 4, sampleReview),
  new Review('114', '1', 'Michael', '08/31/2019', 5, sampleReview),
];

const copeReviews = [
  new Review('211', '2', 'Jon', '08/31/2019', 4, sampleReview),
  new Review('212', '2', 'Sarah', '08/31/2019', 5, sampleReview),
  new Review('213', '2', 'Imani', '08/31/2019', 5, sampleReview),
  new Review('214', '2', 'Michael', '08/31/2019', 4, sampleReview),
];

const dragReviews = [
  new Review('311', '3', 'Jon', '08/31/2019', 4, sampleReview),
  new Review('312', '3', 'Sarah', '08/31/2019', 3, sampleReview),
  new Review('313', '3', 'Imani', '08/31/2019', 5, sampleReview),
  new Review('314', '3', 'Michael', '08/31/2019', 4, sampleReview),
];

const redReviews = [
  new Review('411', '4', 'Jon', '08/31/2019', 4, sampleReview),
  new Review('412', '4', 'Sarah', '08/31/2019', 3, sampleReview),
  new Review('413', '4', 'Imani', '08/31/2019', 3, sampleReview),
  new Review('414', '4', 'Michael', '08/31/2019', 4, sampleReview),
];

const outReviews = [
  new Review('511', '5', 'Jon', '08/31/2019', 4, sampleReview),
  new Review('512', '5', 'Sarah', '08/31/2019', 4, sampleReview),
  new Review('513', '5', 'Imani', '08/31/2019', 4, sampleReview),
  new Review('514', '5', 'Michael', '08/31/2019', 4, sampleReview),
]

const pandaReviews = [
  new Review('611', '6', 'Jon', '08/31/2019', 4, sampleReview),
  new Review('612', '6', 'Sarah', '08/31/2019', 3, sampleReview),
  new Review('613', '6', 'Imani', '08/31/2019', 3, sampleReview),
  new Review('614', '6', 'Michael', '08/31/2019', 4, sampleReview),
];

const mcReviews = [
  new Review('711', '7', 'Jon', '08/31/2019', 1, sampleReview),
  new Review('712', '7', 'Sarah', '08/31/2019', 2, sampleReview),
  new Review('713', '7', 'Imani', '08/31/2019', 3, sampleReview),
  new Review('714', '7', 'Michael', '08/31/2019', 4, sampleReview),
];

const felReviews = [
  new Review('811', '8', 'Jon', '08/31/2019', 3, sampleReview),
  new Review('812', '8', 'Sarah', '08/31/2019', 4, sampleReview),
  new Review('813', '8', 'Imani', '08/31/2019', 3, sampleReview),
  new Review('814', '8', 'Michael', '08/31/2019', 5, sampleReview),
];

const chiReviews = [
  new Review('911', '9', 'Jon', '08/31/2019', 3, sampleReview),
  new Review('912', '9', 'Sarah', '08/31/2019', 4, sampleReview),
  new Review('913', '9', 'Imani', '08/31/2019', 5, sampleReview),
  new Review('914', '9', 'Michael', '08/31/2019', 5, sampleReview),
];

const phoReviews = [
  new Review('1011', '10', 'Jon', '08/31/2019', 5, sampleReview),
  new Review('1012', '10', 'Sarah', '08/31/2019', 4, sampleReview),
  new Review('1013', '10', 'Imani', '08/31/2019', 4, sampleReview),
  new Review('1014', '10', 'Michael', '08/31/2019', 4, sampleReview),
];


export const exRestaurants = [
  new Restaurant('1', 'Karrabas', Categories[0], true, Cost[2], 4, karReviews),
  new Restaurant('2', 'Copelands', Categories[0], true, Cost[3], 4, copeReviews),
  new Restaurant('3', 'Dragos', Categories[1], true, Cost[3], 4, dragReviews),
  new Restaurant('4', 'Red Lobster', Categories[1], true, Cost[2], 4, redReviews),
  new Restaurant('5', 'Outback', Categories[2], true, Cost[3], 4, outReviews),
  new Restaurant('6', 'Panda Express', Categories[3], true, Cost[0], 4, pandaReviews),
  new Restaurant('7', 'McDonalds', Categories[4], true, Cost[0], 4, mcReviews),
  new Restaurant('8', 'Felipe\'s', Categories[5], true, Cost[1], 4, felReviews),
  new Restaurant('9', 'Chipotle', Categories[5], true, Cost[1], 4, chiReviews),
  new Restaurant('10', 'Pho Bistro', Categories[6], true, Cost[2], 4, phoReviews),
];
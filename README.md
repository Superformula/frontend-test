# Superformula Front-end Developer Coding Test

[Setup](#setup)  
[Design](#design)  
[Optimizations](#optimizations)  
[Screenshots](#screenshots)  

## Setup
Create your own .env file with the following variables:
```
GOOGLE_KEY="YOUR_KEY" (required to see locations in a map)
YELP_ACCESS_TOKEN="YOUR_KEY" (required to fetch data)
```
Note: If you do not own a key set [MOCK_API](./src/api/yelp.ts#L14) as `true` to have an offline version of the app.

**Start the application**
```
npm install
npm start
```

**Run tests**
```
npm test
```
## Design
The app was made with the [KISS principle](https://en.wikipedia.org/wiki/KISS_principle) principle in mind.  
Most overkill approaches like [Redux](https://redux.js.org/) were not used.  
Did unit tests for atomic components that are being reused by several components.  
### File Structure
```
declarations
index
- api
	- yelp 
- components
	App 
	- Home 
		- Restaurants
		- Filters
			- Checkbox
			- Select 
		hook
	- Detail 
		- RestaurantMedia
		- Reviews
		hook
    - Shared
    	- Icon
    	- Button
    	- Spinner
    	- ErrorFallBack
    	- Rating 
```
The approach is to have a tree file structure where the more deep a file is in the structure the more atomic it is.  
All shared types and interfaces are stored in the [declarations](./src/declarations.ts) file.  

If a component/hook needs test/style/type file, it will be in the same folder. 
### State Management
Home page state is being handle using the [Context API](https://en.reactjs.org/docs/context.html).  
A [custom hook](./src/components/Home/useSearchState.ts#L64) handles the state to keep the components as clean as possible. It uses most of react hooks to handle state, side effects and memoize functions to prevent re renders.  
Since the Detail page was more straight forward, the state is passed via props to its childs. Another [custom hook](./src/components/Detail/useRestaurantState.ts#L21) handles the state of the page.  

If the app starts growing it could be a good idea to create a single source of truth for the shared state. [Context API](https://en.reactjs.org/docs/context.html) or [Redux](https://redux.js.org/) would be good candidates.
### Stack
- React v17
- Typescript
- CSS
- Jest
- React Testing Library
- Eslint
- Prettier
- Webpack
- Babel
### Libraries Used
- [Google Maps React](https://github.com/google-map-react/google-map-react#readme)
- [React Error Boundary](https://github.com/bvaughn/react-error-boundary)
## Optimizations
Everything here could improve the app.
Lack of time/scope/knowledge were the main reasons to avoid implementing these features.
### Lazy loading
Split bundle to smaller chunks where the most important chunk can be loaded first and then every other secondary one lazily loaded.
### Cancel Requests
Promises are not being cancelled after leaving the page.
With this change the app would save network usage.
### Storybook
Adding storybook would speed up development by having all the components isolated.
### Testing
- Add E2E tests to cover main flows of the app. [Cypress](https://www.cypress.io/) would be a good fit.
- Add integration tests. I like to follow [The Testing Trophy](https://kentcdodds.com/blog/write-tests) by Kent C. Dodds.
### Responsiveness
Changing every pixel unit into rem would facilitate making the app responsive with a few media queries.
However, this method does not make the app fully responsive, it just scales nicely based on screen size.
To make it fully responsive its needed to go page-by-page checking if everything fit between most popular devices.
Styles libraries like [ChakraUI](https://chakra-ui.com/) make this task much less painful.  

Note: SCSS was considered an overkill for this app. This could have been a mistake since it could helped with responsiveness by using a few mixins.
### SSR
If the app benefits from better SEO or faster loading times using something like [NextJS](https://nextjs.org/) might be a good idea. However, better performance is not default and it would increase hosting costs. 

## Screenshots
### Check [Screenshots](./screenshots/) folder for more images
<img alt="Home section" src="https://github.com/rodriguezmarting/frontend-test/blob/master/screenshots/categories.png?raw=true" width="700" height="400">  
<img alt="Home section" src="https://github.com/rodriguezmarting/frontend-test/blob/master/screenshots/restaurant.png?raw=true" width="700" height="400">  
<img alt="Home section" src="https://github.com/rodriguezmarting/frontend-test/blob/master/screenshots/spinner.png?raw=true" width="700" height="400">  
<img alt="Home section" src="https://github.com/rodriguezmarting/frontend-test/blob/master/screenshots/no-results.png?raw=true" width="700" height="400">  
<img alt="Home section" src="https://github.com/rodriguezmarting/frontend-test/blob/master/screenshots/error%20boundary.png?raw=true" width="700" height="400">  

# Superformula Code challenge - Brendan Crich

## Running

(use NPM in place of yarn if you like...)

first:

```
$ yarn install
```

then:

```
$ yarn start
```

This should run the webpack dev server locally at https://localhost:3000/

For testing you can run

```
$ yarn test
```

To create a prod build:

```
$ yarn build
```

(I haven't looked into the prod build too much, and it probably could be improved/optimized).

## Notes

### Service calls, async

I decided to use redux-thunk in lieu of redux-saga or something else; there are just a few relatively straightforward fetches and not much complex async stuff so I kept it simple.

### Styles

This uses css modules for the most part (in scss) - css modules can make components a lot more modular and portable, though perhaps not altogether necessary in a smaller project like this, and requires a bit more boilerplate.

### Testing

I did some basic tests of the reducer and most of the actions, and component tests of the two main views. This is just a sample of testing, and not at all complete.

### Categories

It's mentioned in the README that categories would be filtered server-side - I believe the GraphQL implementation of the API (which I didn't use) lets you do this; I'm not sure if you can do it with the basic API but in any case I deviated somewhat from the requirements here and made the menu populate with the categories that exist in the results, and filter them client-side when you select a category.

## Future improvements

#### Project structure

The structure is pretty basic, the main 'app reducer' could probably be split up into a few reducers, actions could be separated out more, etc... I kept most of these sorts of things in single files.

#### Loader

I don't love the way the loader looks, and it would be possible pretty easily to do view states that show loading of different areas of the app - for instance in the Restaurant Detail view, the reviews loader could be separate. The store is already mostly set up to account for views like that.

#### Styles

Since the criteria called for only doing the "desktop" view, I didn't design the styles with responsiveness or mobile in mind at all, so a lot of things could be changed from hard pixel values to more responsive-friendly styles. Styles in general could use a bit of work.

#### GraphQL/Sagas

I'd probably switch out the services for a GraphQL implementation, and use redux-saga if I were to really refactor this.

#### Error handling

Right now I just have one main ugly error boundary that shows up if anything goes wrong in the services. Error handling could be done a lot better.

Thanks for taking a look! It's been enjoyable.

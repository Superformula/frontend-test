declare namespace RestaurantMediaCssNamespace {
  export interface IRestaurantMediaCss {
    address: string;
    container: string;
    media: string;
    photo: string;
  }
}

declare const RestaurantMediaCssModule: RestaurantMediaCssNamespace.IRestaurantMediaCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: RestaurantMediaCssNamespace.IRestaurantMediaCss;
};

export = RestaurantMediaCssModule;

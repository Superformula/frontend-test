declare namespace RestaurantsCssNamespace {
  export interface IRestaurantsCss {
    card: string;
    container: string;
    header: string;
    img: string;
    restaurants: string;
  }
}

declare const RestaurantsCssModule: RestaurantsCssNamespace.IRestaurantsCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: RestaurantsCssNamespace.IRestaurantsCss;
};

export = RestaurantsCssModule;

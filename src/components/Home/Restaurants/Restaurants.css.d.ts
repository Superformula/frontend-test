declare namespace RestaurantsCssNamespace {
  export interface IRestaurantsCss {
    card: string;
    container: string;
    details: string;
    footer: string;
    header: string;
    img: string;
    info: string;
    name: string;
    restaurants: string;
    stars: string;
  }
}

declare const RestaurantsCssModule: RestaurantsCssNamespace.IRestaurantsCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: RestaurantsCssNamespace.IRestaurantsCss;
};

export = RestaurantsCssModule;

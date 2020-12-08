declare namespace RestaurantInfoCssNamespace {
  export interface IRestaurantInfoCss {
    details: string;
    detailsXl: string;
    info: string;
    infoCard: string;
    name: string;
    openNow: string;
    stars: string;
  }
}

declare const RestaurantInfoCssModule: RestaurantInfoCssNamespace.IRestaurantInfoCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: RestaurantInfoCssNamespace.IRestaurantInfoCss;
};

export = RestaurantInfoCssModule;

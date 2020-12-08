declare namespace ReviewsCssNamespace {
  export interface IReviewsCss {
    marginLeft: string;
    rating: string;
    review: string;
    reviewInfo: string;
    reviewText: string;
    reviewsCount: string;
    user: string;
    userDate: string;
    userImg: string;
    userInfo: string;
    userName: string;
  }
}

declare const ReviewsCssModule: ReviewsCssNamespace.IReviewsCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ReviewsCssNamespace.IReviewsCss;
};

export = ReviewsCssModule;

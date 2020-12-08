declare namespace DetailCssNamespace {
  export interface IDetailCss {
    marginLeft: string;
  }
}

declare const DetailCssModule: DetailCssNamespace.IDetailCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DetailCssNamespace.IDetailCss;
};

export = DetailCssModule;

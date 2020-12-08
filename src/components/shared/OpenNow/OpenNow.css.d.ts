declare namespace OpenNowCssNamespace {
  export interface IOpenNowCss {
    openNow: string;
  }
}

declare const OpenNowCssModule: OpenNowCssNamespace.IOpenNowCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: OpenNowCssNamespace.IOpenNowCss;
};

export = OpenNowCssModule;

declare namespace ErrorFallBackCssNamespace {
  export interface IErrorFallBackCss {
    container: string;
  }
}

declare const ErrorFallBackCssModule: ErrorFallBackCssNamespace.IErrorFallBackCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ErrorFallBackCssNamespace.IErrorFallBackCss;
};

export = ErrorFallBackCssModule;

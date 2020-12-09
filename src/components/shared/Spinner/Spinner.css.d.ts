declare namespace SpinnerCssNamespace {
  export interface ISpinnerCss {
    load1: string;
    loader: string;
  }
}

declare const SpinnerCssModule: SpinnerCssNamespace.ISpinnerCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SpinnerCssNamespace.ISpinnerCss;
};

export = SpinnerCssModule;

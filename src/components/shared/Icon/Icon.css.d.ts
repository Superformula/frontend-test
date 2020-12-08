declare namespace IconCssNamespace {
  export interface IIconCss {
    arrow: string;
    check: string;
    checkbox: string;
    circleFill: string;
    circleFillGreen: string;
    circleFillRed: string;
    circleFillXl: string;
    star: string;
    starXl: string;
  }
}

declare const IconCssModule: IconCssNamespace.IIconCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IconCssNamespace.IIconCss;
};

export = IconCssModule;

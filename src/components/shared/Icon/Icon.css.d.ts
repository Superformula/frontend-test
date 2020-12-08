declare namespace IconCssNamespace {
  export interface IIconCss {
    arrow: string;
    check: string;
    checkbox: string;
    openNow: string;
    openNowGreen: string;
    openNowRed: string;
    star: string;
  }
}

declare const IconCssModule: IconCssNamespace.IIconCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IconCssNamespace.IIconCss;
};

export = IconCssModule;

declare namespace ButtonCssNamespace {
  export interface IButtonCss {
    btn: string;
    primary: string;
    secondary: string;
    sizeMd: string;
    sizeXl: string;
  }
}

declare const ButtonCssModule: ButtonCssNamespace.IButtonCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ButtonCssNamespace.IButtonCss;
};

export = ButtonCssModule;

declare namespace FiltersCssNamespace {
  export interface IFiltersCss {
    container: string;
    filter: string;
    filters: string;
    selectOption: string;
    selectOptions: string;
  }
}

declare const FiltersCssModule: FiltersCssNamespace.IFiltersCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FiltersCssNamespace.IFiltersCss;
};

export = FiltersCssModule;

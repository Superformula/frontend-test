const PRICE_OPTIONS = Object.freeze(['$', '$$', '$$$', '$$$$']);

export const PRICES = PRICE_OPTIONS.map(price => ({
  label: price,
  value: price,
}));

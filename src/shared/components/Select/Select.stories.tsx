import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Select } from './Select';

const priceOptions = [
  { value: 'all', label: 'All' },
  { value: '$', label: '$' },
  { value: '$$', label: '$$' },
  { value: '$$$', label: '$$$' },
];

const categoriesOptions = [
  { value: 'all', label: 'All' },
  { value: 'italian', label: 'Italian' },
  { value: 'seafood', label: 'Seafood' },
  { value: 'steakhouses', label: 'Steakhouses' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'american', label: 'American' },
  { value: 'mexican', label: 'Mexican' },
  { value: 'thai', label: 'Thai' },
];

const priceSelectWidth = 97;
const categoriesSelectWidth = 193;

storiesOf('Select', module)
  .addDecorator(storyFn => <div style={{ display: 'flex' }}>{storyFn()}</div>)
  .add('Default (without values prop)', () => (
    <Select
      title="Price"
      targetStyle={{ width: priceSelectWidth }}
      optionsStyle={{ width: priceSelectWidth }}
      options={priceOptions}
      onChange={values => console.log(values)}
    />
  ))
  .add('Categories (with values as prop)', () => {
    const [values, setValues] = useState<string[]>([]);

    return (
      <Select
        title="Categories"
        targetStyle={{ width: categoriesSelectWidth }}
        optionsStyle={{ width: categoriesSelectWidth, height: 206, overflowX: 'scroll' }}
        options={categoriesOptions}
        values={values}
        onChange={setValues}
      />
    );
  });

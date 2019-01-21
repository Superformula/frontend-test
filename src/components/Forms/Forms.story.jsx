import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';

import {
  Checkbox,
  GridItem,
  Heading,
  SelectDropDown,
} from '../index';


class ExampleCheckbox extends PureComponent {
  state = { checked: false };

  handleCheckboxChange = event => this.setState({ checked: event.target.checked });

  render() {
    const { checked } = this.state;
    return (
      <Checkbox
        checked={checked}
        onChange={this.handleCheckboxChange}
        name="test"
        id="test"
        label="Open Now"
      />
    );
  }
}

storiesOf('Form elements', module)
  .add('Checkbox', () => (
    <GridItem p={2}>
      <GridItem>
        <Heading>Checkbox</Heading>
      </GridItem>
      <ExampleCheckbox />
    </GridItem>
  ))
  .add('Select Dropdown', () => (
    <GridItem p={2}>
      <GridItem>
        <Heading>Select Dropdown</Heading>
      </GridItem>
      <GridItem
        mt={2}
        width={[1 / 16]}
        display="inline-block"
        mr={4}
      >
        <SelectDropDown
          heading="Price"
          items={[
            { title: 'All', value: '' },
            { title: '$', value: '$' },
            { title: '$$', value: '$$' },
            { title: '$$$', value: '$$$' },
            { title: '$$$$', value: '$$$$' },
          ]}
          onSelect={() => {}}
          selectedItem="$$$"
        />
      </GridItem>
      <GridItem
        mt={2}
        width={[1 / 8]}
        display="inline-block"
      >
        <SelectDropDown
          heading="Categories"
          items={[
            { title: 'All', value: '' },
            { title: 'Italian', value: 'italian' },
            { title: 'Seafood', value: 'seafood' },
            { title: 'Steakhouses', value: 'steakhouses' },
            { title: 'Japanese', value: 'japanese' },
            { title: 'American', value: 'american' },
            { title: 'Mexican', value: 'mexican' },
            { title: 'Thai', value: 'thai' },
          ]}
          onSelect={() => {}}
          selectedItem="american"
        />
      </GridItem>
    </GridItem>
  ));

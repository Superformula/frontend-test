import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  GridItem,
  Container,
  Checkbox,
  SelectDropDown,
  Button,
} from '..';

const FilterHeading = styled.span`
  color: ${props => props.theme.colors.black60};
`;

class FilterNav extends PureComponent {
  handleFilter = (filter, value) => {
    const { toggleFilter } = this.props;
    toggleFilter(filter, value);
  };

  render() {
    const {
      openNow,
      price,
      category,
      toggleCategory,
    } = this.props;
    return (
      <GridItem
        width={[1]}
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="black10"
        py={4}
      >
        <Container>
          <GridItem
            width={[1 / 2, 3 / 4, 3 / 4]}
            display="inline-flex"
          >
            <GridItem
              display="inline-block"
              mr={4}
            >
              <FilterHeading>Filter By:</FilterHeading>
            </GridItem>
            <GridItem
              display="inline-block"
              mr={4}
            >
              <Checkbox
                checked={openNow}
                onChange={() => this.handleFilter('openNow', !openNow)}
                name="openNow"
                id="openNow"
                label="Open Now"
              />
            </GridItem>
            <GridItem
              width={97}
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
                selectedItem={price}
                onSelect={item => this.handleFilter('price', item.value)}
              />
            </GridItem>
            <GridItem
              width={193}
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
                selectedItem={category}
                onSelect={item => toggleCategory(item.value)}
              />
            </GridItem>
          </GridItem>
          <GridItem
            width={[1 / 2, 1 / 4, 1 / 4]}
            display="inline-flex"
            justifyContent="flex-end"
          >
            <Button variant="secondary" small>Clear Filters</Button>
          </GridItem>
        </Container>
      </GridItem>
    );
  }
}

FilterNav.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  toggleCategory: PropTypes.func.isRequired,
  openNow: PropTypes.bool.isRequired,
  price: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default FilterNav;

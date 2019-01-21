import React from 'react';
import PropTypes from 'prop-types';
import { borderColor, borders } from 'styled-system';
import styled from 'styled-components';

import CircleCheck from '../../../assets/circle-check.svg';
import { GridItem } from '../..';

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  ${borders}
  ${borderColor}
`;

const SelectContentsItem = styled(GridItem)`
  outline: none;
  cursor: pointer;
  color: ${props => props.theme.colors.black60}
  &:hover {
    color: ${props => props.theme.colors.primary}
  }
`;

const ItemTitle = styled.span`
  padding-left: 4px;
`;

const SelectDropDownItem = ({ item, selectedItem, onSelect }) => {
  const icon = selectedItem === item.value
    ? <CircleCheck />
    : (
      <StyledCheckbox
        border="1px solid"
        borderColor="black21"
      />
    );
  return (
    <li>
      <SelectContentsItem
        // TODO: remove auto-binding onSelect functions
        onClick={() => onSelect(item)}
        role="button"
        onKeyPress={() => onSelect(item)}
        tabIndex={0}
        display="flex"
        alignItems="center"
        py={2}
      >
        {icon}
        <ItemTitle>{item.title}</ItemTitle>
      </SelectContentsItem>
    </li>
  );
};

SelectDropDownItem.defaultProps = {
  selectedItem: undefined,
};

SelectDropDownItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedItem: PropTypes.string,
};

export default SelectDropDownItem;

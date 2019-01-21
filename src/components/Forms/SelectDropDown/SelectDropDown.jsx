import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';
import onClickOutside from 'react-onclickoutside';

import { GridItem } from '../..';
import SelectDropDownItem from './SelectDropDownItem';
import ChevronUp from '../../../assets/chevron-up.svg';
import ChevronDown from '../../../assets/chevron-down.svg';

const ChevronWrapper = styled.span`
  > svg {
    width: 12px;
    height: 12px;
    ${space}
    stroke: ${props => props.theme.colors.black41}
  }
`;

const SelectContents = styled.ul`
  border: 1px solid ${props => props.theme.colors.black21};
  box-shadow: 0 6px 5px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.colors.white};
  margin-top: -1px;
  padding: 8px 12px;
  list-style: none;
  position: absolute;
  z-index: 1;
  width: 100%;
`;

const DropDownHeader = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.colors.primary}
  border-bottom: 1px solid ${props => props.theme.colors.black21}
  padding-bottom: 4px;
  outline: 0;
  cursor: pointer;
  width: 100%;
`;

class SelectDropDown extends PureComponent {
  state = {
    open: false,
  };

  handleClickOutside = () => {
    this.setState({ open: false });
  };

  onSelect = (selectedItem) => {
    const { onSelect } = this.props;
    onSelect(selectedItem);
    this.toggleDropDown();
  };

  toggleDropDown = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    const {
      heading,
      items,
      selectedItem,
    } = this.props;
    const { open } = this.state;
    const chevron = open ? <ChevronUp /> : <ChevronDown />;
    return (
      <GridItem position="relative">
        <DropDownHeader
          onClick={this.toggleDropDown}
          role="button"
          onKeyPress={this.toggleDropDown}
          tabIndex={0}
        >
          {heading}
          <ChevronWrapper>{chevron}</ChevronWrapper>
        </DropDownHeader>
        {open
        && (
          <SelectContents>
            {items.map(item => (
              <SelectDropDownItem
                item={item}
                onSelect={this.onSelect}
                selectedItem={selectedItem}
                key={item.title}
              />
            ))}
          </SelectContents>
        )}
      </GridItem>
    );
  }
}

SelectDropDown.propTypes = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedItem: PropTypes.string.isRequired,
};

export default onClickOutside(SelectDropDown);

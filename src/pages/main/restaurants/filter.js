import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

import RadioCheckbox from "../../../components/ui/checkbox_radio";
import Dropdown from "../../../components/ui/dropdown";

const Container = styled.section`
  padding-top: 26px;
  padding-bottom: 26px;
  margin-left: ${props => props.theme.bodyPaddingLeft};
  margin-right: ${props => props.theme.bodyPaddingRight};
`;

const FilterText = styled.span`
  display: inline-block;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSizeFilter};
  color: ${props => props.theme.colorFilterBy};
  margin-right: ${props => props.theme.marginRightFilter};
`;

const OpenNow = styled.div`
  display: inline-block;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid ${props => props.theme.colorFilterBottomBar};
  margin-right: ${props => props.theme.marginRightFilter};
  padding-bottom: 6px;
  display: inline-block;
`;

const OpenNowText = styled.label`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSizeFilter};
  color: ${props => props.theme.colorFilterText};
  margin-left: 8px;
`;

const prices = ["All", "$", "$$", "$$$", "$$$$"];

const Category = styled.select``;

export default function Filter(props) {
  const {
    openNow,
    onChangeOpenNow,
    priceFilter,
    onChangePriceFilter,
  } = props;
  return (
    <Container>
      <FilterText>Filter By:</FilterText>
      <OpenNow>
        <RadioCheckbox
          id="open-now"
          checked={openNow}
          onChange={onChangeOpenNow}
        />
        <OpenNowText htmlFor="open-now">Open Now</OpenNowText>
      </OpenNow>
      <Dropdown
        width={"10em"}
        title={"Price"}
        options={prices}
        selected={priceFilter}
        onChange={onChangePriceFilter}
      />
    </Container>
  );
}

Filter.propTypes = {
  openNow: PropTypes.bool.isRequired,
  onChangeOpenNow: PropTypes.func.isRequired,
  priceFilter: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangePriceFilter: PropTypes.func.isRequired,
};

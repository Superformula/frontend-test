import React from "react";
import "./styles.scss";
import Button from "../common/button";
import Label from "../common/label";
import Select from 'react-select';

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' }
  ]

  const MyOption = props => {
	const { innerProps, innerRef } = props;
	return (
	  <article ref={innerRef} {...innerProps} className="custom-option">
		<h4>{props.data.artist}</h4>
		<div className="sub">{props.data.title} </div>
	  </article>
	);
  };
const OpenNowFilter = () => {
  return <Label>open now</Label>;
};

const PriceFilter = () => {
  return <Select
	options={options}
	components={{Option: MyOption}}
  />
};

const CategoryFilter = () => {
  return <Select
	options={options}
	components={{Option: MyOption}}
  />
};

const FilterContainer = props => {
  return <div className="filter-panel" {...props} />;
};

export default () => {
  return (
    <FilterContainer>
      <Label> Filter By </Label>
      <OpenNowFilter />
      <PriceFilter />
      <CategoryFilter />
      <Button>Clear All</Button>
    </FilterContainer>
  );
};

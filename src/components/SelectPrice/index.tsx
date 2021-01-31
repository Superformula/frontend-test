import React from "react";
import Select from "../Select";

const OPTIONS = [
  { label: "All", value: "1,2,3" },
  { label: "$", value: "1" },
  { label: "$$", value: "2" },
  { label: "$$$", value: "3" },
];

export interface IProps {
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (newPrice: string) => any;
  className?: string;
}

export default function SelectCategories(props: IProps): JSX.Element {
  return (
    <Select
      className={props.className}
      name="select_price"
      value={props.value}
      onChange={(e) => {
        const { value } = e.target;
        props.onChange(value);
      }}
      label="Price"
      options={OPTIONS}
    />
  );
}

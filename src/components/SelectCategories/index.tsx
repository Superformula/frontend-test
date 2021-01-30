import React from "react";
import styled from "@emotion/styled";
import {
  useGetCategoriesQuery,
  getUniqueCategories,
  Category,
} from "../../dal/categories";
import Select from "../Select";

export interface IProps {
  value: Category | undefined;
  onChange: (newCategory: Category | undefined) => any;
}

export default function SelectCategories(props: IProps) {
  const { data, loading, error } = useGetCategoriesQuery({
    variables: { location: "LAS VEGAS" },
  });
  if (error) {
    // TODO handle this error more gracefully,
    // but it is a pretty traggic error for the app
    console.error("something went wrong");
  }
  const categories = getUniqueCategories(data);

  return (
    <Select
      name="select_categories"
      value={props.value?.alias || ""}
      onChange={(e) => {
        const alias = e.target.value;
        const cat = categories[alias];
        props.onChange(cat);
      }}
      label="Categories"
      options={Object.values(categories).map((cat) => ({
        value: cat.alias || "",
        label: cat.title,
      }))}
    />
  );
}

import React from "react";
import {
  useGetCategoriesQuery,
  getUniqueCategories,
  Category,
} from "../../dal/categories";
import Select from "../Select";

export interface IProps {
  value: Category | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (newCategory: Category | undefined) => any;
  className?: string;
}

export default function SelectCategories(props: IProps): JSX.Element {
  const { data, error } = useGetCategoriesQuery({
    variables: { location: "LAS VEGAS" },
  });
  if (error) {
    // TODO handle this error more gracefully,
    // but it is a pretty traggic error for the app
    console.error("something went wrong");
  }
  const categories = getUniqueCategories(data);

  const options = Object.values(categories).map((cat) => ({
    value: cat.alias || "",
    label: cat.title,
  }));
  // Push the default option
  options.unshift({ value: "", label: "All" });

  return (
    <Select
      className={props.className}
      name="select_categories"
      value={props.value?.alias || ""}
      onChange={(e) => {
        const alias = e.target.value;
        const cat = categories[alias];
        props.onChange(cat);
      }}
      label="Categories"
      options={options}
    />
  );
}

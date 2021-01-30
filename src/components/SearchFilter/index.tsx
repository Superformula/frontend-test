import React, { useState } from "react";
import styled from "@emotion/styled";

import { Category } from "../../dal/categories";
import SelectCategories from "../SelectCategories";
import SelectPrice from "../SelectPrice";
import Checkbox from "../Checkbox";
import Button from "../Button";

export interface IForm {
  /**
   * this name is actually confusing
   * because it actually controls if we
   * only care about open business or
   * any business open or closed is fine,
   * so it might be called showOnlyOpenBusiness
   */
  isOpen: boolean;
  category: Category | undefined;
  price: string;
}

export const INITIAL_VALUES: IForm = {
  isOpen: false,
  category: undefined,
  price: "",
};

export interface IMeta {
  dirty: boolean;
}

export const INITIAL_META: IMeta = {
  dirty: false,
};

export interface IProps {
  value: IForm;
  onChange: (newValues: IForm) => any;
}

/**
 * This is a very simplistic model of a form, for anything
 * any bit more complex I would probably use a library like Formik
 * because nobody should re build an ad hoc form library everytime
 * and formik is good enough
 */
export default function SearchFilter(props: IProps) {
  const [meta, setMeta] = useState<IMeta>(INITIAL_META);

  function handleChange(newForm: Partial<IForm>): void {
    props.onChange({ ...props.value, ...newForm });
    setMeta({ dirty: true });
  }

  function clear(): void {
    props.onChange(INITIAL_VALUES);
    setMeta(INITIAL_META);
  }

  return (
    <FormStyled>
      <Checkbox
        checked={props.value.isOpen}
        onChange={(e) => handleChange({ isOpen: e.target.checked })}
      >
        Open Now
      </Checkbox>
      <SelectPrice
        value={props.value.price}
        onChange={(price) => handleChange({ price })}
      />
      <SelectCategories
        value={props.value.category}
        onChange={(category) => handleChange({ category })}
      />

      <Button type="button" inverse disabled={!meta.dirty} onClick={clear}>
        Clear All
      </Button>
    </FormStyled>
  );
}

export const FormStyled = styled.form``;

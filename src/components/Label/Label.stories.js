import React from "react";

import Label from "../Label/Label";

export default {
  component: Label,
  title: "Label"
};

export const allSizesAndDivider = () => (
  <div style={{ display: "grid" }}>
    <Label> Default Label </Label>
    <Label divider> Label with divider interpunkt </Label>
    <Label large> Label with Large Text </Label>
  </div>
);

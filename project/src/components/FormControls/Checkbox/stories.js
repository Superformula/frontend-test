import React from "react";
import { storiesOf } from "@storybook/react";

import CheckBox from "./index";

storiesOf("CheckBox", module)
.add("default", () => (
  <CheckBox label="Open Now" onChange={() => {}} checked={"true"} />
));

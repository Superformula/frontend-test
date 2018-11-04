import React from "react";
import { storiesOf } from "@storybook/react";

import Select from "./index";

storiesOf("Select", module).add("default", () => (
  <Select
    onChange={() => {}}
    placeholder="Price"
    options={["All", "$", "$$", "$$$", "$$$$"]}
  />
));

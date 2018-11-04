import React from "react";
import { storiesOf } from "@storybook/react";

import FlatButton from "./index";

storiesOf("FlatButton", module)
  .add("default", () => <FlatButton>flat button</FlatButton>)
  .add("dark theme", () => <FlatButton theme="dark">flat button</FlatButton>)
  .add("fullwidth", () => <FlatButton fullWidth>flat button</FlatButton>);

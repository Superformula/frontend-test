import React from "react";
import { storiesOf } from "@storybook/react";

import PaddedSection from "./index";

storiesOf("PaddedSection", module)
.add("3 items", () => (
  <PaddedSection>
    <h1>Hey There Everyone!</h1>
    <h2>It sure is nice</h2>
    <h3>To have some padding</h3>
  </PaddedSection>
))
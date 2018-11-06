import React from "react";
import { storiesOf } from "@storybook/react";

import {Grid, Item} from "./index";

storiesOf("ItemGrid", module)
.add("3 items", () => (
  <Grid>
    <Item>
      <div style={{height: "100%", width: "100%", backgroundColor: "red"}}></div>
    </Item>
    <Item>
      <div style={{height: "100%", width: "100%", backgroundColor: "green"}}></div>
    </Item>
    <Item>
      <div style={{height: "100%", width: "100%", backgroundColor: "blue"}}></div>
    </Item>
  </Grid>
))
.add("7 items", () => (
  <Grid>
    <Item>
      <div style={{height: "100%", width: "100%", backgroundColor: "yellow"}}></div>
    </Item>
    <Item>
      <div style={{height: "100%", width: "100%", backgroundColor: "orange"}}></div>
    </Item>
    <Item>
      <div style={{height: "100%", width: "100%", backgroundColor: "red"}}></div>
    </Item>
    <Item>
      <div style={{height: "100%", width: "100%", backgroundColor: "green"}}></div>
    </Item>
    <Item>
      <div style={{height: "100%", width: "100%", backgroundColor: "blue"}}></div>
    </Item>
    <Item>
      <div style={{height: "100%", width: "100%", backgroundColor: "purple"}}></div>
    </Item>
    <Item>
      <div style={{height: "100%", width: "100%", backgroundColor: "black"}}></div>
    </Item>
  </Grid>
));

import React from "react";

import MetadataWrapper from "../MetadataWrapper/MetadataWrapper";

export default {
  component: MetadataWrapper,
  title: "MetadataWrapper"
};

export const allSizes = () => (
  <div style={{ display: "grid" }}>
    <MetadataWrapper category="Thai" price="$$$" status={true} />
    <MetadataWrapper category="Burger" price="$$" status={false} large />
  </div>
);

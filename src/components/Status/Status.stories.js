import React from "react";

import Status from "../Status/Status";

export default {
  component: Status,
  title: "Status"
};

export const allSizes = () => (
  <div style={{ display: "grid" }}>
    <Status status={true} />
    <Status status={false} large />
  </div>
);

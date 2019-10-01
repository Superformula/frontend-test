import React from "react";

import Image from "../Image/Image";

export default {
  component: Image,
  title: "Image"
};

const normalImage = 'https://via.placeholder.com/640x228';
const smallImage = 'https://via.placeholder.com/90x90';

export const allSizes = () => (
  <div style={{ display: "grid" }}>
    <Image source={normalImage}/>
    <Image source={smallImage} small/>
    <Image />
  </div>
);

import React from "react";

import Image from "../Image/Image";
import { storiesOf } from '@storybook/react';
import notes from './Image.md';


const normalImage = 'https://via.placeholder.com/640x228';
const smallImage = 'https://via.placeholder.com/90x90';

storiesOf('Image', module)
  .add("All image sizes ", () => 
    <div style={{ display: "grid" }}> 
      <Image source={normalImage}/>
      <Image source={smallImage} small/>
      <Image />
    </div>, 
  {notes:{notes}}
);
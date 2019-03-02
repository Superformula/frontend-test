import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

import _Stars from "../../../components/ui/stars";
import Button from "../../../components/ui/button_square";

export const Tile = styled.div`
  position: relative;
  width: ${props => props.theme.widthTilePx + "px"};
  height: 428px;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 228px;
  overflow: hidden;
  background: #d8d8d8;
`;

const landscape = `min-width: 304px; width: auto; height: 100%`;
const portrait = `width: 100%; height: auto; min-height: 228px;`;

function handleImgOnLoad(evt) {
  const node = evt.target;
  let landscapeMode = node.offsetWidth > node.offsetHeight;
  node.setAttribute("style", landscapeMode ? landscape : portrait);
}

function Img({ src }) {
  return <img src={src} onLoad={handleImgOnLoad} />;
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
};

export const Name = styled.h1`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fontFamily};
  font-size: 20px;
  color: black;
  line-height: 1.5;
  padding-top: 16px;
  padding-bottom: 7px;
`;

const Stars = styled(_Stars)`
  font-size: 20px;
`;

export const MiscInfo = styled.div`
  margin: 0;
  padding: 0;
  margin-top: 14px;
  width: 100%;
  height: 16px;
  font-size: 16px;
  line-height: 1;
`;

export const Category = styled.div`
  display: inline-block;
  float: left;
  font-family: ${props => props.theme.fontFamily};
  color: #757575;
  text-transform: uppercase;
  max-width: 125px;
`;

export const Price = styled(Category)`
  background: yellow;
  margin-left: 1em;
  :before {
    content: "•";
  }
`;

export const OpenStatus = styled.div`
  display: inline-block;
  float: right;
  font-family: ${props => props.theme.fontFamily};
  color: #757575;
  text-transform: uppercase;
`;

export const Status = styled.span`
  display: inline-block;
  height: 8px;
  width: 8px;
  border-radius: 100%;
  background: ${props => (props.is_closed ? "#FF3548" : "#00e8a4")};
  border: 1px solid ${props => (props.is_closed ? "#FF3548" : "#00e8a4")};
  margin-right: 4px;
`;

const LearnMoreBtn = styled(Button)`
  position: absolute;
  bottom: 0;
  /* size */
  height: 48px;
  line-height: 48px;
  width: 100%;
  font-size: 16px;
  /* styles */
  color: #ffffff;
  background: #002b56;
  border: 1px solid #002b53;
  border-radius: 3px;
  clear: both;
`;

export default function TileComponent(props) {
  return (
    <Tile className={props.className}>
      <ImgContainer>
        <Img src={props.image_url} />
      </ImgContainer>
      <Name>{props.name}</Name>
      <Stars rating={props.rating} max={5} />
      <MiscInfo>
        <Category>{props.categories[0].title}</Category>
        <Price>{props.price}</Price>
        <OpenStatus>
          <Status />
          {props.is_closed ? "closed" : "open now"}
        </OpenStatus>
      </MiscInfo>
      <LearnMoreBtn>Learn More</LearnMoreBtn>
    </Tile>
  );
}

TileComponent.defaultProps = {
  className: "",
};

TileComponent.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  is_closed: PropTypes.bool,
  name: PropTypes.string.isRequired,
  price: PropTypes.string,
  rating: PropTypes.number,
  className: PropTypes.string,
};

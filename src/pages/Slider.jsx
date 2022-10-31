import React from "react";
import ReactSlick from "react-slick";
import styled from "@emotion/styled";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { css } from "@emotion/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArrowButton = styled.button`
  padding: 16px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  z-index: 1;
  top: 50%;
  background-color: #fff;
  ${({ pos }) =>
    pos === "left"
      ? css`
          left: 0;
          transform: translate(-50%, 50%);
        `
      : css`
          right: 0;
          transform: translate(50%, -50%);
        `};
  &:before {
    content: initial;
  }
  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    color: #222;
  }
`;

export default function Slider({ children }) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    swipe: true,
    autoplay: true,
    draggable: true,
    prevArrow: (
      <ArrowButton pos="left">
        <MdOutlineArrowBackIosNew></MdOutlineArrowBackIosNew>
      </ArrowButton>
    ),
    nextArrow: (
      <ArrowButton pos="right">
        <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>
      </ArrowButton>
    ),
  };
  return <ReactSlick {...settings}>{children}</ReactSlick>;
}

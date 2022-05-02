/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Hulklogo from "../Image/hulklogo.jpg";

const Logo = () => (
  <h2 css={styles}>
<img className="logoimg" src={Hulklogo}/>
    HULK <span>GYM</span>
  </h2>
);

const styles = css`
  color: #fff;
  font-size: 50px;
  font-weight: 900;
  line-height: 1;
  cursor: pointer;
  .logoimg{
    height:100px;
    width:100px;
    border-radius:100px;
  }
  span {
    color: #04380d;
  }
`;

export default Logo;

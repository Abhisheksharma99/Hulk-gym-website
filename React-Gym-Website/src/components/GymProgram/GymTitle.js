/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const GymTitle = () => (
  <h2 css={styles}>
    CHOOSE <span>PROGRAM</span>
  </h2>
);

const styles = css`
  color: #04380d;
  font-size: 30px;
  font-weight: 900;
  line-height: 1;
  span {
    color: #04380d;
  }
`;

export default GymTitle;

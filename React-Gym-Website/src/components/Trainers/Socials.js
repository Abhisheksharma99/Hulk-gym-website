/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Socials = () => (
  <div css={styles} className="socials">
    <i className="fab fa-facebook-f"></i>
    <i className="fab fa-instagram"></i>
    <a href="https://wa.me/7827267002" target="_blank" rel="noopener noreferrer"> <i className="fab fa-whatsapp"></i></a>
  </div>
);

const styles = css`
  display: flex;
  align-items: center;
  i {
    margin-right: 18px;
    transition: color 600ms ease-in-out;
    cursor: pointer;
    &:hover {
      color: #04380d;
    }
  }
`;

export default Socials;

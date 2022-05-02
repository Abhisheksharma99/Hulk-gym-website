/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import DumbbellIcon from "../Image/dumbbell.png";

const GymProgramCard = ({ title, desc }) => (
  <div css={styles} className="card1">
    <img src={DumbbellIcon} alt="dumbbell" />
    <div className="cardInfo">
      <h4>{title}</h4>
      <p>{desc}</p>
      <a href="#/">DISCOVER MORE</a>
    </div>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 47%;
  display: flex;
  text-align: left;
  margin: 30px 0;
  img {
    margin-right: 30px;
    color: #04380d;
  }
  .cardInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom:10px;
    h4 {
      color: #04380d;
    }
    p {
      color: #7a7a7a;
      font-size: 14px;
      line-height: 1.7;
    }
    a {
      color: #04380d;
      text-decoration: none;
      transition: color 600ms ease-in-out;
      font-size: 14px;
      font-weight: 500;
      &:hover {
        color: #277434;
      }
    }
  }
  @media (max-width: 700px) {
    max-width: 100%;
  }
  @media (min-width: 701px) and (max-width: 1100px){
    max-width: 80%;
  }
`;

export default GymProgramCard;

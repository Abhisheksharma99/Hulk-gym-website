/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import Icon from "../GlobalComponents/Icon";

const Classes = ({ text }) => {

  return (
    <section css={styles} className="ourClasses" id="ourClasses">
      <h2>
        OUR <span>CLASSES</span>
      </h2>
      <Icon />
      <p>
      It's where greatness lives. It's where legacies are built. 
      <br/>And they're built every single day with the best weight & strength training, classes, equipment and trainers.
      </p>
      <div className="row">
        <div className="col"><span style={{color:"04380d"}} className="fw-bolder fs-4">MORNING TIMINGS:</span><br/>5:00 AM to 10:30 AM</div>
        <div className="col"><span style={{color:"04380d"}} className="fw-bolder fs-4">EVENING TIMINGS:</span><br/>4:00 PM to 9:30 PM</div>
      </div>
    </section>
  );
};

const styles = css`
  width: 100%;
  padding: 100px 0;
  text-align: center;
  h2 {
    color: #232d39;
    font-size: 26px;
    font-weight: 900;
    line-height: 1;
    span {
      color: #04380d;
    }
  }
  p {
    color: #7a7a7a;
    font-size: 15px;
    line-height: 1.7;
  }
  .container {
    display: flex;
    justify-content: space-between;
    padding: 80px 0 0 0;
  }
  @media (max-width: 900px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 580px) {
    p {
      padding: 0 20px;
      br {
        display: none;
      }
    }
  }
  @media (min-width: 901px) and (max-width: 1226px) {
    .container{
      justify-content: space-between;
      max-width: 90%;
    }
  }
`;

export default Classes;

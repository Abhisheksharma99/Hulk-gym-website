/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import TrainerCard from "./TrainerCard";
import Container from "../GlobalComponents/Container";
import TrainerOneBg from "../Image/trainerOne.jpeg";
import TrainerTwoBg from "../Image/trainerTwo.jpeg"; 

const Trainers = () => (
  <section css={styles} className="trainers" id="trainers">
    <h2>
      EXPERT <span>TRAINERS</span>
    </h2>
    <Icon />
    <p>
      Get Training from the best.{" "}
      <br />
      
    </p>
    <div className="row">
      <div className="col-lg text-center">
      {/* <div className="card" style={{width:"500px"}}>
  <img className="card-img-top" src={TrainerOneBg} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Muscle Trainer,Strength Trainer,Power Trainer</h5>
    <p className="card-text">Determining clients’ exercise needs,
        Assigning fitness activities and revising when needed,
        Instructing and motivating clients.</p>
  </div>
</div> */}
      <TrainerCard
      className="text-center"
        title="Muscle & Endurance Trainer"
        name="Anuj Gaur"
        desc="Determining clients ’ exercise needs,
        Assigning fitness activities and revising when needed,
        Instructing and motivating clients."
        img={TrainerOneBg}
      />
      </div>
      <div className="col-lg text-center">
      {/* <div className="card" style={{width:"500px"}}>
  <img className="card-img-top" src={TrainerOneBg} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Muscle Trainer,Strength Trainer,Power Trainer</h5>
    <p className="card-text">Determining clients’ exercise needs,
        Assigning fitness activities and revising when needed,
        Instructing and motivating clients.</p>
  </div>
</div> */}
      <TrainerCard
      className="text-center"
        title="Strength & Power Trainer"
        name="Parvesh Rajput"
        desc="Determining clients ’ exercise needs,
        Assigning fitness activities and revising when needed,
        Instructing and motivating clients."
        img={TrainerTwoBg}
      />
      </div>
    </div>
      
     
    
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  h2 {
    color: #232d39;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #04380d;
    }
  }
  > p {
    color: #7a7a7a;
    font-size: 16px;
    line-height: 1.7;
  }
  .container {
    display: block;
    justify-content: center
    align-items: center;
    padding: 50px 0 0 0;
  }
  @media (max-width: 650px) {
    > p {
      padding: 0 30px;
      br {
        display: none;
      }
    }
  }
  @media (max-width: 830px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 831px) and (max-width: 1226px) {
    .container {
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 780px;
    }
  }
`;

export default Trainers;

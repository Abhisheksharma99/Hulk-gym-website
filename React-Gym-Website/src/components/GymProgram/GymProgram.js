/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Icon from "../GlobalComponents/Icon";
import GymTitle from "./GymTitle";
import GymSubtitle from "./GymSubtitle";
import GymProgramCard from "./GymProgramCard";
import Container from "../GlobalComponents/Container";

const GymProgram = () => (
  <div css={styles} className="gymProgram">
    <GymTitle />
    <Icon />
    <GymSubtitle />
    <Container>
      <GymProgramCard
        title="Basic Fitness"
        desc="Physical activity can reduce your risk of chronic disease, improve your balance and coordination, help you lose weight, and even boost your self-esteem."
      />
      <GymProgramCard
        title="Advanced Muscle Course"
        desc="Advanced training suggests you train a muscle twice a week, since muscles need 48 hours to recover. Training Twice A Day, and resting for the following day."
      />
      <GymProgramCard
      className="mt-5"
        title="New Gym Training"
        desc="If you are a newbie and looking for starting out exercise, this workout program is best for someone looking for a helping hand in the right direction."
      />
      <GymProgramCard
        title="Yoga Training"
        desc="Yoga is a physical, mental and spiritual practice that originated in ancient India. First codified by the sage Patanjali in his Yoga Sutras around 400 C.E"
      />
      <GymProgramCard
        title="Basic Muscle Course"
        desc="This strength and muscle program is not just for beginners. You should use it if you want a precise program following casual experience with weights."
      />
      <GymProgramCard
        title="Body Building Course"
        desc="build the body of your dreams without having to dedicate your entire life to fitness. This means that you're going to build the body of your dreams in an easy and sustainable manner."
      />
    </Container>
  </div>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 120px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
  }
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  @media (min-width: 701px) and (max-width: 1100px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default GymProgram;

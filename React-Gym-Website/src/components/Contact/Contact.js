/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Icon from "../GlobalComponents/Icon";

const Contact = () => (
  <section css={styles} className="contact" id="contact">
      <div className="location">
        <h1 className="heading">Contact Info</h1>
        <Icon/>
        <br/>
      <h2 >Anuj Gaur</h2><br />
      <a style={{textDecoration:"none",color:"#04380d"}} href="tel:+917827267002">+917827267002</a><br /> 
      <a style={{textDecoration:"none",color:"#04380d"}} href="tel:+919650969398">+919650969398</a><br /> <br/>
      <h3>Address:</h3>
      
      <p>village saroorpur, near rajput dharamshala,<br/> bhatte wali road p.o gounchi tehsil ballabhgarh faridabad</p>
      </div>
    <footer>
      <p>
        Copyright &copy; <span> 2022{Date().getFullYear}</span> Hulk Gym - Designed and Developed by{" "}
        <a href="https://abhishek-sharma-portfolio.netlify.app/" target="_blank">
          <h3>Abhishek Sharma</h3>
        </a>
      </p>
    </footer>
  </section>
);

const styles = css`
  width: 100%;
  .container {
    max-width: 100%;
    display: flex;
  }
  .heading{
    font-weight: bold;
    font-size: 50px;
    color: #04380d;
  }
  .location{
    text-align: center;
  }
  footer {
    text-align: center;
    padding: 36px 0;
    p {
      font-size: 14px;
      color: #232d39;
      a {
        text-decoration: none;
        color: #04380d;
        font-weight: 500;
        &:hover {
          color: #04380d;
        }
      }
    }
  }
  @media(max-width: 1200px) {
    .container{
      flex-direction: column-reverse;
      align-items: center;
    }
  }
`;

export default Contact;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/dev.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineSkype,
  AiOutlineMail,
} from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> ME </span> 
            </h1>
            <p className="home-about-body">
              I FEEL THE WORLD! Development is my life.
              <br />
              <br />I have extensive experience in web and mobile development. <br />
              <i>
                With <b className="purple"> +10 years </b> of experience
              </i>
              <br />
              <br />
              <b className="purple"> Rules </b> I always keep in mind <br />
              <ul>
                <li>Providing high-quality solutions that ensure exceptional client satisfaction.</li>
                <li>Commitment to continuous improvement in an ever-evolving development field.</li>
                <li>Offering creative solutions and fostering excellent collaboration.</li>
                <li>Demonstrating flexibility and adaptability.</li>
              </ul>
              <br />
              <br />
              Always offer the <b className="purple">BEST</b> solutions...&nbsp;&nbsp;&nbsp;
              <i>bring your
                <b className="purple">
                  {" "}
                  Idea
                </b>
              </i>
              &nbsp; to
              <i>
                <b className="purple"> Life</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span className="purple">contact </span> me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="skype:live:.cid.b41d7ba4e1501ecc?chat"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiOutlineSkype />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/webmaster179 "
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaTelegram />
                </a>
              </li>
              <li className="social-icons">
              <a
                href="mailto:andriiluzhanskyy@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </a>
            </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

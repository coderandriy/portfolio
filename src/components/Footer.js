import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineSkype,
  AiOutlineMail,
} from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Andriy Luzhanskyy</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} A.L</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
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
  );
}

export default Footer;

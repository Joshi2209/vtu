import React from "react";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <marquee>
          VTU Results 2024 out - Check Exam results here!!!{" "}
          <Link to="/result/login"> Click hear </Link>
          Best of Luck!!
        </marquee>
      </div>
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <img
              src={process.env.PUBLIC_URL + "/media/img1.jpg"}
              alt="logo"
              className="d-block w-100 "
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src={process.env.PUBLIC_URL + "/media/img2.jpg"}
              alt="logo"
              className="d-block w-100 "
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src={process.env.PUBLIC_URL + "/media/img4.jpg"}
              alt="logo"
              className="d-block w-100 "
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <br />
      <div>
        <Row>
          <Col>
            <h3>
              <Link to="/about"> Vision</Link>
            </h3>
            <p className="p-style">
              To become an outstanding technological university at the cutting
              edge of science technology To become an outstanding technological
              university at the cutting edge of science technology To become an
              outstanding technological university at the cutting edge of
              science technology
            </p>
            <p>
              To become an outstanding technological university at the cutting
              edge of science technology To become an outstanding technological
              university at the cutting edge of science technology To become an
              outstanding technological university at the cutting edge of
              science technology
            </p>
            <Link to="/about" className="btn btn-warning">
              Readmore
            </Link>
          </Col>

          <Col>
            <h3>
              <Link to="/about"> Mission</Link>
            </h3>
            <p className="p-style">
              To become an outstanding technological university at the cutting
              edge of science technology To become an outstanding technological
              university at the cutting edge of science technology To become an
              outstanding technological university at the cutting edge of
              science technology
            </p>
            <p className="p-style">
              To become an outstanding technological university at the cutting
              edge of science technology To become an outstanding technological
              university at the cutting edge of science technology To become an
              outstanding technological university at the cutting edge of
              science technology
            </p>
            <Link to="/about" className="btn btn-warning">
              Readmore
            </Link>
          </Col>

          <Col>
            <h3>
              <Link to="/about"> Mandate</Link>
            </h3>
            <p className="p-style">
              To become an outstanding technological university at the cutting
              edge of science technology To become an outstanding technological
              university at the cutting edge of science technology To become an
              outstanding technological university at the cutting edge of
              science technology
            </p>
            <p className="p-style">
              To become an outstanding technological university at the cutting
              edge of science technology To become an outstanding technological
              university at the cutting edge of science technology To become an
              outstanding technological university at the cutting edge of
              science technology
            </p>
            <Link to="/about" className="btn btn-warning">
              Readmore
            </Link>
          </Col>
        </Row>
      </div>
      <Image src="/media/logo.jpg" />
    </>
  );
}

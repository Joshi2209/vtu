import React from "react";
import { Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <>
      <div className="container">
        <Row className="my-5">
          {" "}
          <Col sm={12} md={6}>
            <img
              src={process.env.PUBLIC_URL + "/media/vision.jpg"}
              alt="visoin"
              className="vision"
            />
          </Col>
          <Col sm={12} md={6}>
            <br />
            <h4 style={{ color: "orange" }}>
              {" "}
              <u>Vision</u>
            </h4>
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum debitis
            accusantium temporibus illo libero voluptatum earum veniam, ratione
            natus maxime fuga iusto saepe mollitia, vitae id perspiciatis ad
            sint fugit amet quo sunt neque consequuntur molestiae repellat!
            Inventore saepe odio nostrum nesciunt tempora beatae perferendis, ea
            distinctio veritatis. Mollitia quidem totam eos obcaecati. Quos,
            tota
          </Col>
        </Row>
        <hr />
        <Row className="my-5">
          <Col sm={12} md={6}>
            <br />
            <h4 style={{ color: "orange" }}>
              {" "}
              <u>Mandate</u>
            </h4>
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum debitis
            accusantium temporibus illo libero voluptatum earum veniam, ratione
            natus maxime fuga iusto saepe mollitia, vitae id perspiciatis ad
            sint fugit amet quo sunt neque consequuntur molestiae repellat!
            Inventore saepe odio nostrum nesciunt tempora beatae perferendis, ea
            distinctio veritatis. Mollitia quidem totam eos obcaecati. Quos,
            tota
          </Col>
          <Col sm={12} md={6}>
            <img
              src={process.env.PUBLIC_URL + "/media/mission.jpg"}
              alt="visoin"
              className="vision"
            />
          </Col>
        </Row>
        <hr />
        <Row className="my-5">
          <Col sm={12} md={6}>
            <img
              src={process.env.PUBLIC_URL + "/media/mandate.jpg"}
              alt="visoin"
              className="vision"
            />
          </Col>
          <Col sm={12} md={6}>
            <br />
            <h4 style={{ color: "orange" }}>
              {" "}
              <u>Mission</u>
            </h4>
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum debitis
            accusantium temporibus illo libero voluptatum earum veniam, ratione
            natus maxime fuga iusto saepe mollitia, vitae id perspiciatis ad
            sint fugit amet quo sunt neque consequuntur molestiae repellat!
            Inventore saepe odio nostrum nesciunt tempora beatae perferendis, ea
            distinctio veritatis. Mollitia quidem totam eos obcaecati. Quos,
            tota
          </Col>
        </Row>
      </div>
    </>
  );
}

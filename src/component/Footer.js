import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Footer() {
  const currentyear = new Date().getFullYear();
  return (
    <>
      <footer>
        <Row className="text-center">
          <Col>VTU &copy; {currentyear}</Col>
        </Row>
      </footer>
    </>
  );
}

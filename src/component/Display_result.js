import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import TableData from "./TableData";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Display_result() {
  const [studentDetails, setStudentDetails] = useState([]);
  const value = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3002/information")
      .then((response) => {
        response.data.map((data) => {
          if (data.registerId === value.id) {
            setStudentDetails(data);
          }
        });
      })
      .catch((error) => console.log("error", error));
  }, []);
  console.log("state", studentDetails);
  return (
    <>
      <Link to="/result/login" className="btn btn-dark mt-5 mx-3">
        Go back
      </Link>
      <Row className="justify-content-center my-5">
        <Col sm={12} md={6}>
          <h5>Visvesvaraya Technological univercity Belgam</h5>
          <h6 style={{ marginLeft: "4rem" }}>
            VII - Semister B.E result, Aprl-may 2024{" "}
          </h6>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <Form.Group>
            <Form.Label>Student Name:</Form.Label>
            <Form.Label style={{ marginLeft: "5rem" }}>
              {studentDetails.studentName}
            </Form.Label>{" "}
            <br />
            <Form.Label>Fathers Name:</Form.Label>
            <Form.Label style={{ marginLeft: "5rem" }}>
              {studentDetails.fatherName}
            </Form.Label>{" "}
            <br />
            <Form.Label>Collage:</Form.Label>
            <Form.Label style={{ marginLeft: "7.4rem" }}>
              {studentDetails.collageName}
            </Form.Label>
          </Form.Group>
        </Col>

        <Col sm={12} md={6}>
          <Form.Group>
            <Form.Label>Register Number:</Form.Label>
            <Form.Label style={{ marginLeft: "5rem" }}>
              {studentDetails.registerId}
            </Form.Label>{" "}
            <br />
          </Form.Group>
        </Col>
        <Col sm={12} md={6}></Col>
      </Row>
      <Row>
        <TableData studentId={studentDetails.registerId} />
      </Row>
    </>
  );
}

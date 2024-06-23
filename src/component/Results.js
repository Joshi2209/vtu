import React, { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

export default function Results() {
  const [registerInput, setRegisterInput] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (registerInput == "") {
      setError("Plese enter register ID");
    } else {
      axios
        .get("http://localhost:3002/information")

        .then((response) => {
          console.log("res", response.data);
          response.data.map((data, index) => {
            if (data.registerId === registerInput) {
              navigate(`/resultpage/${registerInput}`);
            } else {
              setError("invalid register ID");
            }
          });
        });
    }
  };

  return (
    <>
      <Link to="/" className="btn btn-dark mt-5 mx-3">
        Go back
      </Link>
      <Row className="container text-center my-2">
        <Col>
          {" "}
          <h3>Check your results here..</h3>
        </Col>
      </Row>
      <div style={{ marginLeft: "25rem" }}>
        <Row>
          <Col>
            <Form onSubmit={(e) => submitHandler(e)}>
              <Form.Label>Enter your register Number. </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter register number"
                style={{ width: "50%" }}
                value={registerInput}
                onChange={(e) => setRegisterInput(e.target.value)}
              />
              <Button
                type="submit"
                style={{ marginTop: "1rem", backgroundColor: "orange" }}
              >
                Submit
              </Button>
            </Form>
            <br />
            {error ? <div style={{ color: "red" }}>{error}</div> : ""}
          </Col>
        </Row>
      </div>
    </>
  );
}

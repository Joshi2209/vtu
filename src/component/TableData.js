import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios, { isAxiosError } from "axios";
import { toWords, toWordsOrdinal } from "number-to-words";

export default function TableData({ studentId }) {
  //console.log("id", studentID);

  const [resultDetails, setResultDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/information")
      .then((response) => {
        console.log("ress", response.data);
        let temp = [];
        temp = response.data.filter((d) => d.registerId === studentId);
        setResultDetails(temp);
      })
      .catch((error) => console.log("error", error));
  }, [studentId]);
  console.log("state2", resultDetails);

  const getTotalMarks = (value) => {
    let sum = 0;
    resultDetails.map((d) => {
      sum += Number(d[value]);
    });
    return sum;
  };

  const finalresult = () => {
    let count = 0;
    resultDetails.map((d) => {
      if (d.result === "FAIL") {
        count++;
      }
    });
    if (count >= 1) {
      return "fail";
    } else {
      return "pass";
    }
  };

  const currentyear = new Date().getFullYear();

  // const towordHandler = () => {
  //   const a = getTotalMarks("obtained_marks");
  //   let text = toWordsOrdinal.convert(a);
  //   return text;
  // };

  const percentageHandler = () => {
    let max_marks = getTotalMarks("max_marks");
    let obtained_marks = getTotalMarks("obtained_marks");
    let x = "%";
    let percent = Math.floor((obtained_marks / max_marks) * 100);
    return [percent, x];
  };
  return (
    <>
      <Table className="my-5" responsiv bordered>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Sl no </th>
            <th colSpan={2}>
              Subject
              <th style={{ paddingLeft: "0px 10rem" }}> Code</th>
              <th> Subject</th>
            </th>
            <th colSpan={3}>
              Examination marks obtained
              <th> Max</th>
              <th> Min</th>
              <th> Obtained marks</th>
            </th>
            <th>Subject Result</th>
          </tr>
        </thead>
        <tbody>
          {resultDetails.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.code}</td>
              <td>{data.subject}</td>
              <td>{data.max_marks}</td>
              <td>{data.min_marks}</td>
              <td>{data.obtained_marks}</td>
              <td>{data.result}</td>
            </tr>
          ))}
        </tbody>
        <thead>
          <tr>
            <th colSpan={3}>Grand total</th>
            <td>{getTotalMarks("max_marks")}</td>
            <td>{getTotalMarks("min_marks")}</td>
            <td>{getTotalMarks("obtained_marks")}</td>
            <td>{finalresult()}</td>
          </tr>
        </thead>
      </Table>
      <div>
        <b>Total Obtained Marks [in Words] : </b>
        <br />
        <p>
          <b>Result of Semester</b> {finalresult()}
          <br />
          <b>Percentage:</b>
          {percentageHandler()}
          <br />
          <b>Date:</b> {currentyear}
        </p>
      </div>
    </>
  );
}

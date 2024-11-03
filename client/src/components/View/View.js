import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import USerImg from '../images/UserImg.jpg'


function View() {
    const params = useParams();
    const [employee, setEmployee] = useState([]); 

    const getDetails = () => {
      axios
        .get("http://localhost:9000/empRouter/getemp")
        .then((res) => {
          const foundEmployee = res.data.find(emp => emp._id === params.id); 
          setEmployee(foundEmployee); 
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    useEffect(() => {
      getDetails();
    }, []); 

    return (
      <>

        <Container fluid>
          <h1 className="text-center mt-5">User Details</h1>
          <Row className="mt-5">
            <Col lg={6}>
            <img src={USerImg} alt="User" style={{ width: "100%", height: "70%" }} />            </Col>
            <Col lg={6}>
            {employee ? (
              <Card style={{ width: '18rem' }} className="mt-5">
              <ListGroup variant="flush" key={employee._id}>
                <ListGroup.Item><strong>ID:</strong> {employee._id}</ListGroup.Item>
                <ListGroup.Item><strong>Name:</strong> {employee.name}</ListGroup.Item>
                <ListGroup.Item><strong>Designation:</strong> {employee.des}</ListGroup.Item>
                <ListGroup.Item><strong>Salary:</strong> {employee.sal}</ListGroup.Item>
                <ListGroup.Item><strong>Experience:</strong> {employee.exp}</ListGroup.Item>
              </ListGroup>
            </Card>
            ):"No data found"}
            </Col>
          </Row>
        </Container>
      </>
    );
}

export default View;

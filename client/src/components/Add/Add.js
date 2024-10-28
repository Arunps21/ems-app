import React, { useState } from "react";
import { Col, Container, Row, Form, Card, Button, Alert } from "react-bootstrap";
import axios from 'axios';

function Add() {
    const [emp, setEmp] = useState({});
    const [message, setMessage] = useState(""); 
    const [variant, setVariant] = useState("success"); 

    const changeFun = (event) => {
        setEmp({ ...emp, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:9000/empRouter/emp", emp);
            setMessage(data.msg);
            setVariant("success");
            setEmp({}); 
            console.log(data.msg);
        } catch (error) {
            setMessage("Failed to add employee. Please try again."); 
            setVariant("danger"); 
        }
    };

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="p-4 shadow-lg border-0">
                        <h4 className="text-center mb-4">Add Employee</h4>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formFullName" className="mb-3">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter full name"
                                    aria-label="Full Name"
                                    required
                                    name="name"
                                    value={emp.name || ""}
                                    onChange={changeFun}
                                    className="bg-light"
                                />
                            </Form.Group>
                            <Form.Group controlId="formDesignation" className="mb-3">
                                <Form.Label>Designation</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter designation"
                                    aria-label="Designation"
                                    name="des"
                                    required
                                    value={emp.des || ""}
                                    onChange={changeFun}
                                    className="bg-light"
                                />
                            </Form.Group>
                            <Form.Group controlId="formSalary" className="mb-3">
                                <Form.Label>Salary</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter salary"
                                    aria-label="Salary"
                                    name="sal"
                                    required
                                    value={emp.sal || ""}
                                    onChange={changeFun}
                                    className="bg-light"
                                />
                            </Form.Group>
                            <Form.Group controlId="formExperience" className="mb-3">
                                <Form.Label>Experience</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter experience"
                                    aria-label="Experience"
                                    name="exp"
                                    required
                                    value={emp.exp || ""}
                                    onChange={changeFun}
                                    className="bg-light"
                                />
                            </Form.Group>
                            <div className="text-center">
                                <Button type="submit" className="w-25">
                                    Add
                                </Button>
                            </div>
                        </Form>
                        {message && (
                            <Alert variant={variant} className="mt-4 text-center">
                                {message}
                            </Alert>
                        )}
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Add;

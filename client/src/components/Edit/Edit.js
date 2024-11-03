import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Card, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [emp, setEmp] = useState({
    name: "",
    des: "",
    sal: "",
    exp: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  const changeFun = (event) => {
    setEmp({ ...emp, [event.target.name]: event.target.value });
  };

  const editFun = async () => {
    try {
      const { data } = await axios.get("http://localhost:9000/empRouter/editemp", {
        headers: { id: params.id },
      });
      setEmp({
        name: data[0].name,
        des: data[0].des,
        sal: data[0].sal,
        exp: data[0].exp,
      });
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  useEffect(() => {
    editFun();
  }, []);

  const handlesubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:9000/empRouter/updateEmp",
        emp,
        { headers: { id: params.id } }
      );
      alert(data);
      navigate("/");
    } catch (error) {
      console.error("Error updating employee data:", error);
      alert("Failed to update employee data.");
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-4 shadow-lg border-0">
            <h4 className="text-center mb-4">Edit Employee</h4>
            <Form onSubmit={handlesubmit}>
              <Form.Group controlId="formFullName" className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter full name"
                  name="name"
                  value={emp.name}
                  onChange={changeFun}
                  className="bg-light"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formDesignation" className="mb-3">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter designation"
                  name="des"
                  value={emp.des}
                  onChange={changeFun}
                  className="bg-light"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formSalary" className="mb-3">
                <Form.Label>Salary</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter salary"
                  name="sal"
                  value={emp.sal}
                  onChange={changeFun}
                  className="bg-light"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formExperience" className="mb-3">
                <Form.Label>Experience</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter experience"
                  name="exp"
                  value={emp.exp}
                  onChange={changeFun}
                  className="bg-light"
                  required
                />
              </Form.Group>
              <div className="text-center">
                <Button type="submit" className="w-25">
                  Edit
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Edit;

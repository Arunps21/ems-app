import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import context from "../ComponentProvider";

function Search() {
    const {setSearch} = useContext(context)
    const searchFun=(event)=>{
        setSearch(event.target.value)
    }
  return (
    <Container fluid>
      <Form className="d-flex justify-content-center my-4">
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={searchFun}
            />
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Search;

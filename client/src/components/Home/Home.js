import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import HomeImage from "../images/emsHome.png";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import axios from "axios";

function Home() {
  const [get, setGet] = useState([]);

  const getDetails = () => {
    axios
      .get("http://localhost:9000/empRouter/getemp")
      .then((res) => setGet(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetails();
  }, []); 

  return (
    <>
      <div className="p-3">
        <Row>
          <Col lg={6}>
            <div className="container mt-3 p-5" align="center">
              <h1>Employee Management</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit distinctio molestiae commodi beatae reiciendis! Sit
                repellendus, natus eum officia omnis assumenda dolores placeat
                obcaecati mollitia rerum recusandae consectetur inventore alias!
                Fugiat minus quod libero praesentium deserunt debitis explicabo
                modi autem rem nostrum exercitationem, harum beatae rerum? Iusto
                quisquam odio voluptas ex, ea accusamus quia soluta, aut error
                minima esse atque! Maxime, atque blanditiis! Explicabo unde rem
                nihil dolores, facere quasi modi ab magni et suscipit, quae
                consequatur sed culpa officiis dignissimos obcaecati qui
              </p>
              <Button href="/add">
                <PersonAddIcon className="me-2" />
                Add New Employee
              </Button>
            </div>
          </Col>
          <Col lg={6}>
            <Image className="ms-5" src={HomeImage} />
          </Col>
        </Row>
      </div>
      <div className="container-fluid mt-1 p-3 bg-light">
        <h1 className="text-center">List Of Employees</h1>
        <Table striped bordered hover variant="primary" className="mt-3">
          <thead>
            <tr className="text-center text-danger">
              <th className="text-danger">Id</th>
              <th className="text-danger">Full Name</th>
              <th className="text-danger">Designation</th>
              <th className="text-danger">Salary</th>
              <th className="text-danger">Experience</th>
              <th className="text-danger">Actions</th>
            </tr>
          </thead>
          <tbody>
            {get.length > 0 ? (
              get.map((list) => (
                <tr key={list._id} className="text-center">
                  <td>{list._id}</td>
                  <td>{list.name}</td>
                  <td>{list.des}</td>
                  <td>{list.sal}</td>
                  <td>{list.exp}</td>
                  <td>
                    <a href={`/edit/${list._id}`} className="me-2 text-info">
                      <EditIcon />
                    </a>
                    <a href={`/view/${list._id}`} className="me-2 text-success">
                      <VisibilityIcon />
                    </a>
                    <a href="#" className="text-danger">
                      <DeleteIcon />
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Home;

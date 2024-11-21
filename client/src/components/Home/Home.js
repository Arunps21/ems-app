import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import HomeImage from "../images/emsHome.png";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import axios from "axios";
import Search from "./Search";
import context from "../ComponentProvider";

function Home() {
  const [get, setGet] = useState([]);
  const [loading, setLoading] = useState(true);
  const {search} = useContext(context)

  const getDetails = async () => {
    try {
      const res = await axios.get("http://localhost:9000/empRouter/getemp");
      setGet(res.data);
    } catch (err) {
      console.log("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  const delFun = async (id) => {
    const ans = window.confirm("Do you want to delete?");
    if (ans) {
      try {
        const { data } = await axios.delete(
          `http://localhost:9000/empRouter/delemp/${id}`
        );
        alert(data.message);
        getDetails();
      } catch (err) {
        console.log("Error in:", err);
      }
    } else {
      alert("Operation Cancelled");
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <div className="p-3">
        <Row>
          <Col lg={6}>
            <div className="container mt-3 p-5 text-center">
              <h1>Employee Management</h1>
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit distinctio molestiae commodi beatae reiciendis! Sit
                repellendus, natus eum officia omnis assumenda dolores placeat
                obcaecati mollitia rerum recusandae consectetur inventore alias!
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
      <div >
        <Search />
      </div>{" "}
      <div className="container-fluid mt-1 p-3 bg-light">
        <h1 className="text-center">List Of Employees</h1>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <Table striped bordered hover variant="primary" className="mt-3">
            <thead>
              <tr className="text-center text-danger">
                <th className="text-danger">#</th>
                <th className="text-danger">Full Name</th>
                <th className="text-danger">Designation</th>
                <th className="text-danger">Salary</th>
                <th className="text-danger">Experience</th>
                <th className="text-danger">Actions</th>
              </tr>
            </thead>
            <tbody>
              {get.length > 0 ? (
                get.filter((filt)=>(
                  filt.des.toLocaleLowerCase().match(search.toLocaleLowerCase())
                ))
                .map((list, index) => (
                  <tr key={list._id} className="text-center">
                    <td>{index + 1}</td>
                    <td>{list.name}</td>
                    <td>{list.des}</td>
                    <td>{list.sal}</td>
                    <td>{list.exp}</td>
                    <td>
                      <Button
                        variant="link"
                        href={`/edit/${list._id}`}
                        className="me-2 text-info"
                        aria-label="Edit Employee"
                      >
                        <EditIcon />
                      </Button>
                      <Button
                        variant="link"
                        href={`/view/${list._id}`}
                        className="me-2 text-success"
                        aria-label="View Employee"
                      >
                        <VisibilityIcon />
                      </Button>
                      <Button
                        variant="link"
                        onClick={() => delFun(list._id)}
                        className="text-danger"
                        aria-label="Delete Employee"
                      >
                        <DeleteIcon />
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        )}
      </div>
    </>
  );
}

export default Home;

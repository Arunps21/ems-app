import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";

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
        <Table striped bordered hover variant="primary" className="mt-3">
          <thead>
            <tr className="text-center text-danger">
              <th className="text-danger">Id</th>
              <th className="text-danger">Full Name</th>
              <th className="text-danger">Designation</th>
              <th className="text-danger">Salary</th>
              <th className="text-danger">Experience</th>
            </tr>
          </thead>
          <tbody>
            {employee ? (
              <tr key={employee._id} className="text-center">
                <td>{employee._id}</td>
                <td>{employee.name}</td>
                <td>{employee.des}</td>
                <td>{employee.sal}</td>
                <td>{employee.exp}</td>
              </tr>
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </>
    );
}

export default View;

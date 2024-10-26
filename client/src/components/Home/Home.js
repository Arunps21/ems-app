import React from "react";
import { Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import HomeImage from '../images/emsHome.png'

function Home() {
  return (
    <>
      <div className="p-3">
        <Row>
          <Col lg={6}>
            <div className="container mt-3 p-5">
              <h1 className="text-center">Employee Management</h1>
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
            </div>
          </Col>
          <Col lg={6}>
            <Image  className="ms-5" src={HomeImage}  />
          </Col>
        </Row>
      </div>
      <div className="container-fluid mt-3 bg-light">
        <h1 className="text-center">List Of Employees</h1>
        <Table striped bordered hover variant="primary" className="mt-3">
          <thead>
            <tr className="text-center text-danger">
              <th className="text-danger">#</th>
              <th className="text-danger">Id</th>
              <th className="text-danger">Full Name</th>
              <th className="text-danger">Designation</th>
              <th className="text-danger">Salary</th>
              <th className="text-danger">Experience</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr className="text-center">
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr className="text-center">
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>{" "}
    </>
  );
}

export default Home;

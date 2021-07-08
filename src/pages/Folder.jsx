import { NavLink } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
import React from "react";
import image1 from '../assets/img/pc-code.jpg'

export default function Folder() {
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row justify-content-around">
          <Nav.Link to="/ToDo" className="cards-folder" style={{backgroundImage: "url(" + image1 + ")"}} as={NavLink}>
            {/* <div className="cards-folder"> */}
              <p className="">Work</p>
              <Button className="btn-delete" variant="danger" size="sm"><i class="bi bi-trash-fill"></i></Button>{' '}
            {/* </div> */}
          </Nav.Link>
          <div className="cards-folder"></div>
          <div className="cards-folder"></div>
          <div className="cards-folder"></div>
        </div>
      </div>
    </>
  );
}

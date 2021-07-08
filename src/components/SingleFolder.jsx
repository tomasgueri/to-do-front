import { Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import image1 from '../assets/img/pc-code.jpg';
import React from 'react';

export default function SingleFolder({ folder }) {
  return (
    <>
        <Nav.Link to={"/ToDo/" + folder._id} className="cards-folder" style={{backgroundImage: "url(" + image1 + ")"}} as={NavLink}>
              <strong>{folder.name}</strong>
              <Button className="btn-delete p-0" variant="danger" size="sm"><i className="bi bi-trash-fill"></i></Button>{' '}
          </Nav.Link>
    </>
  );
}

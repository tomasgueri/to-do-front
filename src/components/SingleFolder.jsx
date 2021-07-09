import { Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import image1 from "../assets/img/pc-code.jpg";
import { React, useState } from "react";

export default function SingleFolder({ folder, getFolders }) {
  const [imageFolder, setImageFolder] = useState(folder.image || image1);

  const eliminar = async (event) => {
    event.preventDefault();
    window.confirm("If you delete the folder you will lose everything inside");
    try {
      await axios.delete("/folder/" + folder._id);
      getFolders();
    } catch (error) {
      console.log(error);
    }
  };
  console.log('id', folder._id)

  return (
    <>
      <Nav.Link
        to={"/ToDo/" + folder._id}
        className="cards-folder"
        style={{ backgroundImage: "url(" + imageFolder + ")" }}
        as={NavLink}
      >
        <div className="folder-title d-flex">
          <strong>{folder.name}</strong>
          <Button className="ml-3 py-0" variant="outline-light" size="sm">
            <i class="bi bi-pencil"></i>
          </Button>{" "}
        </div>
        <Button
          onClick={eliminar}
          className="btn-delete p-0"
          variant="danger"
          size="sm"
        >
          <i className="bi bi-trash-fill"></i>
        </Button>{" "}
      </Nav.Link>
    </>
  );
}

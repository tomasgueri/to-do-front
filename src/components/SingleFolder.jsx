import { Nav, Button, Modal, Form  } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import image1 from "../assets/img/pc-code.jpg";
import { React, useState } from "react";

export default function SingleFolder({ folder, getFolders }) {
  const [imageFolder, setImageFolder] = useState(folder.image || image1);
  const [input, setInput] = useState();
  const [show, setShow] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let changedInput = { ...input, [name]: value, id: folder._id };
    setInput(changedInput);
  };

  const handleSubmit = async (event) => {
    // const form = event.currentTarget;
    event.preventDefault();
    try {
      await axios.put("/folder", input);
      getFolders();
    } catch (error) {
      console.log(error);
    }
  };

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
          <Button className="ml-3 py-0" onClick={(event) => handleShow(event)} variant="outline-light" size="sm">
            <i className="bi bi-pencil"></i>
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit the {folder.name} folder</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-5">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
              type="text"
              onChange={(e) => handleChange(e)}
              name="name"
              placeholder="Name"
              defaultValue={folder.name}
              />
            </Form.Group>

            <Form.Group className="my-4" controlId="formBasicPassword">
              <Form.Control
              type="url"
              placeholder="Cover photo - URL"
              onChange={(e) => handleChange(e)}
              name="image"
              defaultValue={folder.image}
              />
            </Form.Group>
            <Button variant="primary" className="col-10 offset-1" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

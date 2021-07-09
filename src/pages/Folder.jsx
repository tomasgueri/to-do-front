import React from "react";
import { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import SingleFolder from "../components/SingleFolder";

export default function Folder() {
  const [folders, setFolders] = useState();
  const [input, setInput] = useState();
  const [show, setShow] = useState(false);
  const [actionForm, setActionForm] = useState('crear')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getFolders = async () => {
    const { data } = await axios.get("/folder");
    setFolders(data);
  };
  useEffect(() => {
    getFolders();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let changedInput = { ...input, [name]: value };
    setInput(changedInput);
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    try {
      await axios.post("/folder", input);
      getFolders();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="mb-5">
          <Button
            className="col-4 py-3"
            onClick={handleShow}
            variant="outline-success"
          >
            <i className="bi bi-folder-plus mr-2"></i> New Folder
          </Button>{" "}
        </div>
        <div className="row justify-content-around">
          {folders?.map((folder, index) => (
            <SingleFolder folder={folder} key={index} getFolders={getFolders} />
          ))}
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a new folder</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-5">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
              type="text"
              onChange={(e) => handleChange(e)}
              name="name"
              placeholder="Name"
              />
            </Form.Group>

            <Form.Group className="my-4" controlId="formBasicPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
              type="url"
              placeholder="Cover photo - URL"
              onChange={(e) => handleChange(e)}
              name="image"
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

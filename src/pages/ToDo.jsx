import React from "react";
import { Form, Button } from "react-bootstrap";

export default function ToDo() {
  return (
    <>
      <div className="container mt-5 pt-5 text-left">
        <h3>Work</h3>
        <div className="row mt-5">
          <div className="col-4 mt-3">
            <h5>Office</h5>
            <div className="List">
              <Form className="col-1 px-0">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" />
                </Form.Group>
              </Form>
              <p className="col-8">Buy coffee</p>
              <Button className="btn-edit mr-1" variant="success" size="sm">
                <i class="bi bi-pencil-square"></i>
              </Button>{" "}
              <Button className="btn-delete" variant="danger" size="sm">
                <i class="bi bi-trash-fill"></i>
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

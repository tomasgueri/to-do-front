import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

export default function SingleTask({
  toDo,
  action,
  index,
  getFolder,
  folderId,
}) {
  const [input, setInput] = useState();
  const [save, setSave] = useState(false);
  const [checkInput, setCheckInput] = useState(toDo?.check);
  const [styleInput, setStyleInput] = useState(toDo?.check && 'text-decoration-line-through' )

  const handleChange = (e) => {
    setSave(true);
    const { name, value } = e.target;
    let changedInput = { ...input, [name]: value, id: folderId };
    setInput(changedInput);
  };

  const handleChangeCheck = async (e) => {
    try {
      let checkI = false;
      if (toDo?.check === true) {
        setCheckInput(false);
        setStyleInput('')
      } else {
        setCheckInput(true);
        setStyleInput('text-decoration-line-through')
        checkI = true;
      }
      const { name } = e.target;
      let changedInput = { [name]: checkI, id: folderId, i: index };
      await axios.put("/folder/item", changedInput);
      getFolder();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async () => {
    try {
      const task = { id: folderId, i: index };
      await axios.put("/folder/delete", task);
    } catch (error) {
        console.log(error);
    }
    getFolder();
  };

  const handleSubmit = async (event) => {
    try {
      if (action === "edit") {
        const modifiedTask = { ...input, id: folderId, i: index };
        await axios.put("/folder/item", modifiedTask);
      } else {
        const modified = { ...input };
        await axios.put("/folder/new", modified);
      }
      setSave(false);
      getFolder();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="List">
        <Form onSubmit={handleSubmit} className="col-11 px-0 d-flex">
        { action === 'edit' ? 
          <Form.Group className="pt-2 col-1" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              as="input"
              name="check"
              checked={checkInput}
              onChange={(e) => handleChangeCheck(e)}
            />
          </Form.Group> :
          <p className="col-2 px-0 pt-2">New:</p>
        }
          <Form.Group className="col-11" controlId="formPlaintextEmail">
            <Form.Control
              plaintext
              //   readOnly={disabledDomicilio}
              className={styleInput}
              defaultValue={action === "edit" ? toDo?.bodyItem : ""}
              placeholder="..."
              rows={1}
              as="textarea"
              name="bodyItem"
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          {/* <p className="col-8">Buy coffee</p> */}
        </Form>
        {/* <Button className="btn-action-task mr-1" variant="success" size="sm">
          <i className="bi bi-pencil-square"></i>
        </Button>{" "} */}
        { action === 'edit' && 
        <Button
          className="btn-action-task"
          onClick={() => {
            deleteTask();
          }}
          variant="danger"
          size="sm"
        >
          <i className="bi bi-trash-fill"></i>
        </Button>
        }{" "}
        {save && (
          <Button
            onClick={(e) => handleSubmit(e)}
            className="btn-save ml-2"
            variant="primary"
            size="sm"
          >
            <i className="bi bi-save"></i>
          </Button>
        )}{" "}
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import SingleTask from '../components/SingleTask';

export default function ToDo() {
  const params = useParams();
  const [folder, setFolder] = useState({})
  const [id, setId] = useState('')

  const getFolder = async () => {
    const response = await axios.get("/folder/one/" + params.id);
    setId(response.data._id);
    setFolder(response.data);
  };
  useEffect(() => {
    getFolder();
  }, []);


  return (
    <>
      <div className="container mt-5 pt-5 text-center">
        <h3>{folder.name}</h3>
        <div className="row mt-5 justify-content-center">
          <div className="col-12 col-md-6 mt-3">
            {
              folder.toDo?.map((toDo, index) => (
                <SingleTask action="edit" toDo={toDo} folderId={id} index={index} getFolder={getFolder} />
              ))
            }
            { id && <SingleTask action="create" folderId={id} getFolder={getFolder} /> }
          </div>
        </div>
      </div>
    </>
  );
}

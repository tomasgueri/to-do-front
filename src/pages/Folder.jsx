import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleFolder from '../components/SingleFolder'

export default function Folder() {
  const [folders, setFolders] = useState()

  useEffect(() => {
        const request = async () => {
            const { data } = await axios.get("/folder");
            setFolders(data);
        };
        request();
}, []);
  console.log('folder', folders)
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row justify-content-around">
          
          { folders?.map((folder, index) => (
            <SingleFolder folder={folder} key={index} />
          )) }
          
        </div>
      </div>
    </>
  );
}

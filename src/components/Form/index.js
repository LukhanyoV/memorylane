import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  let [theFilename, setTheFilename] = useState("");
  let [theFile, setTheFile] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const file = {
      "filename": theFilename || theFile.name,
      "file": theFile
    }
    console.log("i am in", JSON.stringify(file));
    const results = await axios.post("http://comm-drive.deta.dev/upload", file, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log("results", results);
    console.log("filename", theFilename);
    console.log("file", theFile);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='filename'>Input file name</label>
        <input type='text' id='filename' name='filename' onChange={e => setTheFilename(e.target.value)} />
      </div>
      <div>
        <label htmlFor='file'>Select file</label>
        <input type='file' id='file' name='file' onChange={e => setTheFile(e.target.files[0])} />
      </div>
      <button type='submit'>ADD</button>
    </form>
  )
}

export default Form;
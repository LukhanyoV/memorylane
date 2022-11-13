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
    await axios.post("https://comm-drive.deta.dev/upload", file, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='filename'>Input file name</label>
        <input type='text' id='filename' name='filename' onChange={e => setTheFilename(e.target.value)} placeholder='optional' />
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
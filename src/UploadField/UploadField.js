import React, { useState } from 'react';
import { FileList } from './FileList';
import { FileDrop } from './FileDrop';

function UploadField() {
  const [files, setFiles] = useState([]);

  return (
    <div>
      <FileDrop setFiles={setFiles} />
      <FileList files={files} />
    </div>
  );
}

export { UploadField };

import React, { Fragment } from 'react';

const FileList = ({ files }) =>
  files.length > 0 ? (
    <ul>
      {files.map(file => (
        <li key={file.path}>{file.name}</li>
      ))}
    </ul>
  ) : (
    <Fragment />
  );

export { FileList };

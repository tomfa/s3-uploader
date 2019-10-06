import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileDrop = ({ setFiles }) => {
  const onDrop = useCallback(
    droppedFiles =>
      setFiles(
        droppedFiles.map(file => {
          file.uploaded = false;
          return file;
        }),
      ),
    [],
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <span>Drop the files here ...</span>
      ) : (
        <span>Drag 'n' drop some files here, or click to select files</span>
      )}
    </div>
  );
};

export { FileDrop };

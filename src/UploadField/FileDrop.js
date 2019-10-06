import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

const StyledDrop = styled.div`
  padding: 20px;
  background-color: ${props => (props.isActive ? '#BAE9AE' : '#ece9e9')};
  cursor: pointer;
`;

const FileDrop = ({ setFiles }) => {
  const onDrop = useCallback(
    droppedFiles =>
      setFiles(
        droppedFiles.map(file => {
          file.uploaded = false;
          return file;
        }),
      ),
    [setFiles],
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <StyledDrop isActive={isDragActive} {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <span>Drop the files here ...</span>
      ) : (
        <span>Click or Drag and drop files here</span>
      )}
    </StyledDrop>
  );
};

export { FileDrop };

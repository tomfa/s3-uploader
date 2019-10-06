import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { Normalize } from 'styled-normalize';

import { FileDrop } from './components/FileDrop';
import { FileList } from './components/FileList';
import { uploadFile } from './lib/aws/s3';

const Body = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 5px;
`;

const uploadSingleFile = async fileObj => {
  if (!fileObj.uploaded) {
    await uploadFile({ fileObj, isPublic: true });
    fileObj.uploaded = true;
  }
  return fileObj;
};

function App() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const onDrop = async files => {
    setFiles(files);
    setLoading(true);
    files = await Promise.all(files.map(item => uploadSingleFile(item)));
    setFiles([...files]);
    setLoading(false);
  };
  return (
    <Fragment>
      <Normalize />
      <Body className="App">
        <FileDrop setFiles={onDrop} />
        <FileList files={files} loading={loading} />
      </Body>
    </Fragment>
  );
}

export default App;

import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { Normalize } from 'styled-normalize';

import { FileDrop } from './components/FileDrop';
import { FileList } from './components/FileList';

const Body = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 5px;
`;

function App() {
  const [files, setFiles] = useState([]);

  return (
    <Fragment>
      <Normalize />
      <Body className="App">
        <FileDrop setFiles={setFiles} />
        <FileList files={files} />
      </Body>
    </Fragment>
  );
}

export default App;

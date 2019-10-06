import React from 'react';
import styled from 'styled-components';
import { Normalize } from 'styled-normalize';

import { UploadField } from './UploadField/';

const Body = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 5px;
`;

function App() {
  return (
    <React.Fragment>
      <Normalize />
      <Body className="App">
        <UploadField />
      </Body>
    </React.Fragment>
  );
}

export default App;

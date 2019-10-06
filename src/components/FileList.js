import React, { Fragment } from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  padding: 5px 0;
  list-style: none;
`;

const FileList = ({ files }) =>
  files.length > 0 ? (
    <ul>
      {files.map(file => (
        <ListItem key={file.path}>{file.name}</ListItem>
      ))}
    </ul>
  ) : (
    <Fragment />
  );

export { FileList };

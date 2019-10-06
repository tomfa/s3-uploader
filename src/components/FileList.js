import React, { Fragment } from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  padding: 5px 0;
  list-style: none;
`;

const Spinner = ({ loading }) => (loading ? <p>Loading...</p> : <Fragment />);

const FileList = ({ files, loading }) => {
  if (files.length === 0) {
    return <Spinner loading={loading} />;
  }
  return (
    <Fragment>
      <Spinner loading={loading} />
      <ul>
        {files.map(file => (
          <ListItem key={file.path}>
            {file.path}
            {file.uploaded ? '– Uploaded' : ''}
          </ListItem>
        ))}
      </ul>
    </Fragment>
  );
};

export { FileList };

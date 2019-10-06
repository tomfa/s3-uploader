import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { Normalize } from 'styled-normalize';

import { FileDrop } from './components/FileDrop';
import { FileList } from './components/FileList';
import { uploadFile } from './lib/aws/s3';
import { StorageSelector } from './components/StorageSelector';
import { KeyInput } from './components/KeyInput';

const Body = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 5px;
`;

const Panel = styled.div`
  margin: 10px 0;
  padding: 20px;
  background-color: #ece9e9;
`;

const uploadSingleFile = async ({
  fileObj,
  destination,
  accessKey,
  secretKey,
}) => {
  if (!fileObj.uploaded) {
    await uploadFile({ fileObj, destination, keys: { accessKey, secretKey } });
    fileObj.uploaded = true;
  }
  return fileObj;
};

function App() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [destinations, setDestination] = useState([
    {
      region: 'eu-central-1',
      bucket: 'test-bucket',
      prefix: 'images/',
      isPublic: true,
    },
    {
      region: 'eu-central-1',
      bucket: 'test-bucket',
      prefix: 'images/thumbnails/',
      isPublic: true,
    },
  ]);
  const [chosenDestination, setChosenDestination] = useState(
    destinations.length > 0 ? destinations[0] : null,
    [destinations],
  );
  const [accessKey, setAccessKey] = useState(null);
  const [secretKey, setSecretKey] = useState(null);

  const onDrop = async newFiles => {
    const oldFiles = files;
    setFiles([...oldFiles, ...newFiles]);
    setLoading(true);
    newFiles = await Promise.all(
      newFiles.map(item =>
        uploadSingleFile({
          fileObj: item,
          destination: chosenDestination,
          accessKey,
          secretKey,
        }),
      ),
    );
    setFiles([...oldFiles, ...newFiles]);
    setLoading(false);
  };

  const onSelectDestination = bucketKey => {
    const chosenDestination = destinations.find(
      d => bucketKey === `${d.bucket}/${d.prefix}`,
    );
    setChosenDestination(chosenDestination);
  };

  return (
    <Fragment>
      <Normalize />
      <Body className="App">
        <h1>Storage uploader</h1>
        <Panel>
          <KeyInput
            label="Access key"
            placeholder="AKIA..."
            currentValue={accessKey}
            setKey={setAccessKey}
          />
          <KeyInput
            label="Secret key"
            placeholder="de01B..."
            currentValue={secretKey}
            setKey={setSecretKey}
          />
        </Panel>
        <p>
          <span>Uploading to: </span>
          <strong>
            {chosenDestination.bucket}/{chosenDestination.prefix}
          </strong>
        </p>
        <StorageSelector
          destinations={destinations}
          selectDestination={onSelectDestination}
        />
        <FileDrop setFiles={onDrop} />
        <FileList files={files} loading={loading} />
      </Body>
    </Fragment>
  );
}

export default App;

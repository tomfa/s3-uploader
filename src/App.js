import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { Normalize } from 'styled-normalize';

import { FileDrop } from './components/FileDrop';
import { FileList } from './components/FileList';
import { uploadFile } from './lib/aws/s3';
import { StorageSelector } from './components/StorageSelector';
import { KeyInput } from './components/KeyInput';
import { getQueryParams } from './lib/utils';
import {Destination} from "./components/Destination";

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

const buildDestinationFromString = bucketString => {
  const [bucket, prefix, isPublic, region] = bucketString.split(',');
  if (!bucket) {
    return null;
  }
  return {
    bucket,
    prefix: prefix || '',
    isPublic: isPublic === 'true',
    region: region || 'eu-central-1',
  };
};


function App() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [chosenDestination, setChosenDestination] = useState(
    destinations.length > 0 ? destinations[0] : null,
    [destinations],
  );

  const [accessKey, setAccessKey] = useState('');
  const [secretKey, setSecretKey] = useState('');

  useEffect(() => {
    const params = getQueryParams();
    if (params['access-key']) {
      setAccessKey(params['access-key']);
    }
    if (params['secret-key']) {
      setSecretKey(params['secret-key']);
    }
    const buckets = params['buckets'] && params['buckets'].split(';');

    if (buckets && buckets.length > 0) {
      const parsedDestinations = buckets.map(buildDestinationFromString).filter(d => !!d)
      setDestinations(parsedDestinations);
      setChosenDestination(parsedDestinations[0])
    }
  }, []);

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
        <Destination destination={chosenDestination} />
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

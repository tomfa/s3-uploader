import React from 'react';
import styled from 'styled-components';

const key = destination => `${destination.bucket}/${destination.prefix}`;

const Selector = styled.select`
  margin-bottom: 30px;
`;

const StorageSelector = ({ destinations, selectDestination }) => (
  <Selector onChange={ev => selectDestination(ev.target.value)}>
    {destinations.map(d => (
      <option key={key(d)} value={key(d)}>
        {key(d)}
      </option>
    ))}
  </Selector>
);

export { StorageSelector };

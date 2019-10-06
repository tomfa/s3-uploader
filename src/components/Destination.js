import React from 'react';

const Destination = ({ destination }) =>
  destination ? (
    <p>
      <span>Uploading to: </span>
      <strong>
        {destination.bucket}/{destination.prefix}
      </strong>
    </p>
  ) : (
    <p>No destination chosen</p>
  );

export { Destination };

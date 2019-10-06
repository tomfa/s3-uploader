import React, { Fragment } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: block;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-bottom: 3px;
  display: block;
`;

const KeyInput = ({ label, placeholder, currentValue, setKey }) => (
  <InputWrapper>
    <Label htmlFor="">{label}</Label>
    <input
      type="text"
      placeholder={placeholder}
      onChange={ev => setKey(ev.target.value)}
    />
  </InputWrapper>
);

export { KeyInput };

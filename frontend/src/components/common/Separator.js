import React, { Component } from 'react';
import styled from 'styled-components';

const Separator = styled.div`
  margin: 1rem 0 2rem;
  width: 100%;
  height: 10px;
  border-top: 4px solid ${p => p.theme.color.blue100};
  border-bottom: 2px solid ${p => p.theme.color.pink100};
`;

export default Separator;
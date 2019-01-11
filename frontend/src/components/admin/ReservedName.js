import React, { Component } from 'react';
import styled from 'styled-components';

const Row = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

class ReservedName extends Component {
  render() {
    const { data, onSelect } = this.props;
    return (
      <Row onClick={() => onSelect(data, 'reserved')}>
        { data.name }, IP: { data.ip }
      </Row>
    );
  }
}

export default ReservedName;
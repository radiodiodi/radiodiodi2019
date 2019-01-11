import React, { Component } from 'react';
import styled from 'styled-components';

const Row = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    outline: 1px solid ${p => p.theme.color.blue100};
  }
`;

class Ban extends Component {
  render() {
    const { data, onSelect } = this.props;
    return (
      <Row onClick={() => onSelect(data, 'ban')}>
        { data.name }, IP: { data.ip }
      </Row>
    );
  }
}

export default Ban;
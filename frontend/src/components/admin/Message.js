import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    outline: 1px solid ${p => p.theme.color.blue100};
  }

  min-width: 0;
`;

const Text = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  min-width: 0;
`;

class Message extends Component {
  select = () => {
    const { data, onSelect } = this.props;
    onSelect(data, 'message');
  }

  render() {
    const { data, selected } = this.props;
    return (
      <Container selected={selected} onClick={this.select} >
        <span>{ data.name }: </span>
        <Text>{ data.text }</Text>
      </Container>
    )
  }
}

export default Message;
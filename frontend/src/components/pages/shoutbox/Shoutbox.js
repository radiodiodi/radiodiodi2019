import React, { Component } from 'react';
import styled from 'styled-components';
import Cookie from 'universal-cookie';

const WS_URL = process.env.REACT_APP_BACKEND_WS_URL;
const MAX_MESSAGES = 100;

const Container = styled.div`
  background-color: ${p => p.theme.color.contrast};
  color: ${p => p.theme.color.white};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1rem;
  min-width: 10rem;
  height: 20rem;
`;

const Log = styled.div`
  width: 100%;
  flex: 1;
  overflow: scroll;
`;

const Row = styled.div`
  padding: 0.2rem;
  ${ p => p.error && 'color: red'};
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SendButton = styled.a`
  padding: 0.5rem;
  background-color: ${p => p.theme.color.pink};
  color: ${p => p.theme.color.blue};
  margin: 0.5rem;
  cursor: pointer;
`;

const Username = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
  flex: 1;

  min-width: 200px;
`;

const Prompt = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
  flex: 2;

  min-width: 300px;
`;

class Shoutbox extends Component {
  constructor() {
    super();
    this.state = {
      log: [],
    };
    this.cookie = new Cookie();
  }

  handleData = rawData => {
    const data = JSON.parse(rawData);

    if (data.initial) {
      this.setState({
        log: data.initial
      });
    } else if (data.message) {
      const log = this.state.log.concat([ data.message ]);
      if (log.length > MAX_MESSAGES) {
        log.splice(0, 1);
      }
  
      this.setState({
        log,
      });
    } else if (data.erase) {
      const id = data.erase;
      const filtered = this.state.log.filter(m => m._id !== id);
      this.setState({
        log: filtered,
      });
    } else {
      console.log('Invalid websocket data:');
      console.log(data);
    }
  }

  sendMessage = () => {
    const text = this.prompt.value,
          username = this.username.value;

    if (!username || username.length === 0) {
      alert('A username is required!');
      return;
    }

    if (!text || text.length === 0) {
      alert('A message is required!');
      return;
    }

    console.log(`Send message: ${text}, username: ${username}`);
    this.connection.send(JSON.stringify({
      name: username,
      text,
    }));

    this.cookie.set('username', username);
    this.prompt.value = '';
  }

  renderRows = rows => {
    const c = new Date(Date.now());
    const stamp = `${c.getDate()}.${c.getMonth()} ${c.getHours()}:${c.getMinutes()}`;
    return rows.map((row, index) => 
      <Row error={row.error} key={index}>{`${stamp} ${row.name}: ${row.text}`}</Row>,
    );
  }

  connect = () => {
    this.connection = new WebSocket(WS_URL);
    this.connection.onmessage = evt => this.handleData(evt.data);
    this.connection.onerror = evt => console.log(`Websocket error. Data: ${evt.data}`);
    this.connection.onclose = () => setTimeout(this.connect, 1000);

    const username = this.cookie.get('username') || '';
    this.username.value = username;
  }

  componentDidMount() {
    this.connect();
  }

  componentDidUpdate = () => {
    // Scroll to bottom of chat log
    this.chatLog.scrollTop = this.chatLog.scrollHeight;
  }

  onPromptKeyPress = event => {
    const ENTER_KEY = 13;

    if ([event.keyCode, event.which].includes(ENTER_KEY)) {
      this.sendMessage();
    }
  }

  render() {
    const { log } = this.state;
    return (
      <Container>
        <Log innerRef={chatLog => { this.chatLog = chatLog } }>
          { this.renderRows(log) }
        </Log>

        <InputContainer>
          <Username 
            placeholder="Username" 
            innerRef={ input => { this.username = input } } />
          <Prompt 
            placeholder="Message..." 
            onKeyPress={this.onPromptKeyPress} 
            innerRef={ input => { this.prompt = input } } />
          <SendButton 
            onClick={this.sendMessage}>Send</SendButton>
        </InputContainer>
      </Container>
    );
  }
}

export default Shoutbox;
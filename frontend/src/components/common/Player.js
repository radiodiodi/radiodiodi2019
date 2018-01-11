import React from 'react';
import styled from 'styled-components';
import play from '../../svg/play.svg';

const Container = styled.div`
  background-color: ${p => p.theme.color.pink};
  padding: 1rem;
  color: ${p => p.theme.color.dark};

  margin: 1rem;
  @media screen and (max-width: 800px) {
    margin: 1rem 0 1rem;
  }
`;

const PlayButton = styled.img`
  width: 4rem;
  padding: 0.5rem 0 0.5rem;
`;

const Line = styled.p`
  margin: 0;
`;

class Player extends React.Component {
  render() {
    return (
      <Container>
        <Line>Äänessä Mouhomaanantai</Line>
        <Line>Puhutaan tekstieditoreista</Line>
        <PlayButton src={ play } />
        <Line>Nyt soi: DJ Tan Juomi – Psykoosi Louhoksella</Line>
      </Container>
    );
  }
};

export default Player;
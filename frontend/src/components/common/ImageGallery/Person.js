import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FadeImage from '../FadeImage';

const Guy = styled.div`
  padding: 1rem 3rem 1rem;
  width: calc(100% - 2rem);

  @media screen and (min-width: 500px) {
    width: calc((100% - 4rem) / 2);
    padding: 1rem;
  }

  @media screen and (min-width: 700px) {
    width: calc((100% - 6rem) / 3);
    padding: 0.5rem;
  }

  text-align: center;
`;

const Img = styled(FadeImage)`
  border-radius: 50%;
  border-style: solid;
  border-width: 4px;
  max-width: 100%;
  ${p => p.css};
`;

class Person extends Component {
  static propTypes = {
    name: PropTypes.string,
    img: PropTypes.any,
    role: PropTypes.string,
  }

  static contextTypes = {
    trans: PropTypes.object,
  }

  render() {
    const { name, img, role, css } = this.props;
    const { trans } = this.context;

    return (
    <Guy>
      <Img alt={name} src={img} css={css} />
      <h4>{ name }</h4>
      <span>{ trans[role] }</span>
    </Guy>
    )
  };
}

export default Person;
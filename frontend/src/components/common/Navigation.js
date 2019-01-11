import styled from 'styled-components';
import React, { Component } from 'react';
import { Link as ReactLink } from 'react-router-dom'
import PropTypes from 'prop-types';

const Link = styled(ReactLink)`
    margin-right: 1rem;
`;

const Rectangle = styled.div`
  margin-bottom: 2rem;
  padding: 1rem 2rem 1rem;
`;

const Language = styled.a`
  @media screen and (min-width: 800px) {
    margin-left: auto;
    margin-right: 0;
  }
`;

const BurgerButton = styled.div`
  @media screen and (min-width: 800px) {
    display: none;
  }

  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;

  flex-direction: row;
  @media screen and (max-width: 800px) {
    display: ${p => p.expanded ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
  }
`;

class Navigation extends Component {
  static contextTypes = {
    trans: PropTypes.any,
  }

  static propTypes = {
    changeLanguage: PropTypes.func,
  }

  constructor() {
    super();
    this.state = {
      expanded: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    const { expanded } = this.state;
    const { changeLanguage } = this.props;
    const { trans } = this.context;

    return (
      <Rectangle>
        <BurgerButton onClick={this.toggle}>
          <i className="fa fa-bars" />
        </BurgerButton>
        <Menu expanded={expanded}>
          <Link to="/">{trans.frontpage}</Link>
          <Link to="/ilmo">{trans.registration}</Link>
          <Link to="/guide">{trans.oto}</Link>
          <Link to="/sponsors">{trans.forbusinesses}</Link>
          <Link to="/library">{trans.musiclibrary}</Link>
          <Language onClick={changeLanguage}>{trans.changelang}</Language>
        </Menu>
      </Rectangle>
    );
  }
}

export default Navigation;

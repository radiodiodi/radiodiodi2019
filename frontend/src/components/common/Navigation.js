import styled from 'styled-components';
import React, { Component } from 'react';
import { Link as ReactLink } from 'react-router-dom'
import PropTypes from 'prop-types';

const Link = styled(ReactLink)`
  margin-right: 1rem;
`;

const Rectangle = styled.div`
  @media screen and (min-width: 801px) {
    ${p => p.mobile && 'display: none;'};
  }
  @media screen and (max-width: 800px) {
    ${p => !p.mobile && 'display: none;'};
  }

  padding: 0.5rem 1rem;
`;

const Language = styled.a`
  @media screen and (min-width: 801px) {
    margin-left: auto;
    margin-right: 0;
  }
`;

const BurgerButton = styled.div`
  @media screen and (min-width: 801px) {
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
    mobile: PropTypes.bool,
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
    const { changeLanguage, mobile } = this.props;
    const { trans } = this.context;

    return (
      <Rectangle mobile={mobile}>
        <BurgerButton onClick={this.toggle}>
          <i className="fa fa-bars" />
        </BurgerButton>
        <Menu expanded={expanded}>
          <Link to="/">{trans.frontpage}</Link>
          <Link to="/ilmo">{trans.registration}</Link>
          <Link to="/guide">{trans.oto}</Link>
          <Link to="/sponsors">{trans.forbusinesses}</Link>
          <Link to="/library">{trans.musiclibrary}</Link>
          <Link to="/english">{trans.english}</Link>
          {/* <Language onClick={changeLanguage}>{trans.changelang}</Language> */}
        </Menu>
      </Rectangle>
    );
  }
}

export default Navigation;

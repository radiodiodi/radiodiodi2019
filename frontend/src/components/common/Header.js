import React, { Fragment, PureComponent, Component } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
`;

const HeaderGraphicsContainer = styled.div`
  padding: 3rem 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Logo = styled.img`
  max-height: 270px;
  width: auto;

  @media screen and (max-width: 600px) {
    margin: 1rem 0 0;
  }
`;

const SocialMediaButton = styled.i`
  font-size: 2rem;
`;

const SocialMediaLink = styled.a`
  color: ${p => p.theme.color.blue100};
  margin: 0 0.5rem 0;
`;

const SocialMediaContainer = styled.span`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  @media screen and (max-width: 600px) {
    order: 99;
    margin-top: 1rem;
  }

  @media screen and (min-width: 600px) {
    margin-left: 0;
    margin-right: auto;
  }
`;

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderGraphicsContainer>
          <Link to="/">
            <Logo src="https://static.radiodiodi.fi/img/2019/logo_neg.png" />
          </Link>
        </HeaderGraphicsContainer>
        <HeaderNavContainer>
          <SocialMediaContainer>
            <SocialMediaLink target="_blank" float href="https://instagram.com/radiodiodi">
              <SocialMediaButton className="fab fa-instagram" />
            </SocialMediaLink>
            <SocialMediaLink target="_blank" href="https://www.facebook.com/radiodiodi">
              <SocialMediaButton className="fab fa-facebook" />
            </SocialMediaLink>
            <SocialMediaLink target="_blank" href="https://t.me/radiodiodioffseason">
              <SocialMediaButton className="fab fa-telegram" />
            </SocialMediaLink>
          </SocialMediaContainer>
          <Navigation />
        </HeaderNavContainer>
        <Navigation mobile />
      </HeaderContainer>
    );
  }
}

export default Header;
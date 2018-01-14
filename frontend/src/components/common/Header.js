import React, { Fragment } from 'react';
import styled from 'styled-components';
import logo from '../../svg/logo_white.svg';
import mascot from '../../svg/mascot.svg';
import Navigation from './Navigation';

const HeaderContainer = styled.header`
  padding: 3rem 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: solid;
  border-width: 4px;
  border-color: ${p => p.theme.color.pink};

  @media screen and (max-width: 520px) {
    flex-direction: column;
    padding: 1rem 0 1rem;
  }
`;

const FrontpageLink = styled.a``;

const Logo = styled.img`
  max-height: 3rem;
  width: auto;

  @media screen and (max-width: 520px) {
    margin: 1rem 0 0;
  }
`;

const SocialMediaButton = styled.i`
  font-size: 2rem;
`;

const SocialMediaLink = styled.a`
  color: ${p => p.theme.color.pink};
  margin: 0 0.5rem 0;
`;

const SocialMediaContainer = styled.span`
  @media screen and (max-width: 520px) {
    order: 99;
    margin-top: 1rem;
  }

  @media screen and (min-width: 520px) {
    margin-left: auto;
    margin-right: 2rem;
  }
`;

function Header(props) {
  return (
    <Fragment>
      <HeaderContainer>
        <FrontpageLink href="/">
          <Logo src={ mascot } />
        </FrontpageLink>
        <SocialMediaContainer>
          <SocialMediaLink float href="https://instagram.com/radiodiodi">
            <SocialMediaButton className="fab fa-instagram" />
          </SocialMediaLink>
          <SocialMediaLink href="https://www.facebook.com/radiodiodi">
            <SocialMediaButton className="fab fa-facebook" />
          </SocialMediaLink>
        </SocialMediaContainer>
        <FrontpageLink href="/">
          <Logo src={ logo } />
        </FrontpageLink>
      </HeaderContainer>
      <Navigation changeLanguage={props.changeLanguage} />
    </Fragment>
  );
}

export default Header;
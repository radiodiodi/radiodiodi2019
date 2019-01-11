import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem 2rem 1rem;
  height: 3rem;

  border-top: solid;
  border-width: 4px;
  border-color: ${p => p.theme.color.pink50};
`;

function Footer() {
  return (
    <FooterContainer>
      &copy; Radiodiodi 2019
    </FooterContainer>
  );
}

export default Footer;

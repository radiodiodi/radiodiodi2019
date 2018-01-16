import React, { Fragment } from 'react';
import styled from 'styled-components';
import trans from '../Locale';
import FadeImage from './FadeImage';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  margin-bottom: 2rem;
`;

const Card = styled.a`
  align-self: center;
  text-decoration: none;
  margin: 0.5rem;

  margin-left: ${p => p.error ? 'auto' : ''};
  margin-right: ${p => p.error ? 'auto' : ''};

  padding: 0.5rem;
  background-color: ${p => p.theme.color.contrast};
  width: calc(100% - 2rem);

  @media screen and (min-width: 600px) {
    width: calc((100% - 4rem) / 2);
  }

  @media screen and (min-width: 1000px) {
    width: calc((100% - 6rem) / 3);
  }
`;

const Image = styled(FadeImage)`
  max-width: 100%;
  margin-bottom: 1rem;
`;

const Caption = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
`;

const Text = styled.i`
  color: ${p => p.theme.color.pink};
`;

function InstagramGallery(props) {
  const objs = props.images;
  const error = props.error;

  const images = !error 
    ? objs.map((obj, index) =>
      <Card key={index} href={ obj.link }>
        <Image src={ obj.img } />
        <Caption>
          <Text>{ obj.text }</Text>
        </Caption>
      </Card>
    ) : (
      <Card error>
        <Text>{ trans.failedtoloadimages }</Text>
      </Card>
    );

  return (
    <Fragment>
      <h2>{ trans.instagramfeed }</h2>
      <Container>
        { images }
      </Container>
    </Fragment>
  );
}

export default InstagramGallery;
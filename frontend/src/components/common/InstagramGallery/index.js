import React, { Fragment, PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FadeImage from '../FadeImage';
import ImageContainer from './ImageContainer';
import { shortenText } from '../../../utils'

const Card = styled.a`
  align-self: flex-start;
  margin: 0.5rem;

  margin-left: ${p => p.error ? 'auto' : ''};
  margin-right: ${p => p.error ? 'auto' : ''};

  padding: 0.5rem;
  width: calc(100% - 2rem);
  border-top: 2px solid ${p => p.theme.color.blue100};

  @media screen and (min-width: 600px) {
    width: calc((100% - 4rem) / 2);
  }

  @media screen and (min-width: 1000px) {
    width: calc((100% - 6rem) / 3);
  }
`;

const Image = styled(FadeImage) `
  max-width: 100%;
  margin-bottom: 1rem;
`;

const Caption = styled.div`
  text-overflow: ellipsis;
  width: 100%;
`;

const Text = styled.span`
`;

class InstagramGallery extends PureComponent {
  static propTypes = {
    objs: PropTypes.arrayOf(PropTypes.any),
    error: PropTypes.bool,
  }

  static contextTypes = {
    trans: PropTypes.any,
  }

  render() {
    const { objs, error } = this.props;
    const { trans } = this.context;

    const images = !error
      ? objs.map((obj, index) =>
        <Card key={index} target="_blank" href={obj.link}>
          <Image alt={trans.instagramimage} src={obj.img} />
          <Caption>
            <Text>{shortenText(obj.text)}</Text>
          </Caption>
        </Card>
      ) : (
        <Card error>
          <Text>{trans.failedtoloadimages}</Text>
        </Card>
      );

    return (
      <Fragment>
        <h2>{trans.instagramfeed}</h2>
        <ImageContainer images={images} />
      </Fragment>
    );
  }
}

export default InstagramGallery;
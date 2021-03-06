import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ImageGallery from '../../common/ImageGallery';
import Player from '../../common/Player';
import Instagram from '../../common/Instagram';
import SponsorReel from '../../common/SponsorReel';
import Calendar from '../../calendar/Calendar';
import Shoutbox from '../../common/Shoutbox';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Paragraph = styled.div`
  margin: 0;
  @media screen and (max-width: 800px) {
    max-width: 100%;
  }

  @media screen and (min-width: 600px) {
    ${p => p.margin && 'margin-right: 2rem'};
  }
`;

const Paragraph2 = Paragraph.extend`
  margin-bottom: 10px;
  max-width: initial;
  max-width: 800px;
`;

const ColumnContainer = styled.div`
  @media screen and (min-width: 801px) {
    margin: 0 ${p => p.margin ? '2rem' : 0} 1rem 0;
    width: ${p => p.size || '50%'};
  }

  @media screen and (max-width: 800px) {
    order: ${p => p.ontop ? '-1' : null};
    margin-bottom: 2rem;
  }

  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 0;
`;

const ContentRow = styled.div`
  padding: 2rem 0;
  margin: 2rem 0;
  border-top: solid;
  border-width: 2px;

  @media screen and (max-width: 800px) {
    margin-top: 2rem;
  }
`;

const ShoutboxTitle = styled.h4`
  margin: 2rem 0 1rem;
  font-size: 1.5rem;
`;

class Frontpage extends Component {
  static contextTypes = {
    trans: PropTypes.any
  };

  render() {
    const sponsorInterval = 3000; // milliseconds
    const { trans } = this.context;

    return (
      <Fragment>
        <Container>
          <ColumnContainer ontop size="70%">
            {/* <ShoutboxTitle>{trans.shoutbox}</ShoutboxTitle> */}
            {/* <Shoutbox /> */}
            <Paragraph margin>
              <Title>{trans.whatisheading}</Title>
              {trans.whatis}
            </Paragraph>
          </ColumnContainer>
          <ColumnContainer size="30%">
            <Paragraph>
              {/* <Calendar oneDayPreview /> */}
              <Title>{trans.contactheading}</Title>
              <Paragraph2 dangerouslySetInnerHTML={{__html: trans.contact}} />
            </Paragraph>
            {/* <SponsorReel interval={sponsorInterval} /> */}
            {/* <Player /> */}
          </ColumnContainer>
        </Container>
        <Calendar />
        {/* <ContentRow>
          <Title>{trans.recruitheading}</Title>
          <Paragraph2 dangerouslySetInnerHTML={{__html: trans.recruitparagraph1}} />
        </ContentRow> */}
        <ContentRow>
          <Title>{trans.imagegalleryheading}</Title>
          <ImageGallery />
        </ContentRow>
        <Instagram />
      </Fragment>
    );
  }
}

export default Frontpage;

import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch, Link as ReactLink} from 'react-router-dom';
import FAQ from './FAQ';
import Programme from './Programme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Link = styled(ReactLink)`
  margin-right: 1rem;
`;

const Rectangle = styled.div`
  padding: 1rem 2rem 1rem;
`;

class Guide extends Component {
  static contextTypes = {
    trans: PropTypes.any
  };

  render() {
    const { trans } = this.context;
    const { match } = this.props;
    return (
      <Container>
        <h3>{trans.oto}</h3>
        <Rectangle>
          <Link to={`${match.url}/faq`}>{ trans.faq }</Link>
          <Link to={`${match.url}/programme`}>{ trans.programme }</Link>
        </Rectangle>
        <Switch>
          <Route path={`${match.url}/faq`} component={FAQ} />
          <Route path={`${match.url}/programme`} component={Programme} />
          <Redirect to={`${match.url}/faq`} />
        </Switch>
      </Container>
    );
  }
}

export default Guide;
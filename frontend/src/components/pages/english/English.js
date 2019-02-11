import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Quote = styled.p`
    text-align: center;
    font-style: italic;
`;

const Source = styled.p`
    text-align: right;
    margin-right: 5rem;
`;

const Paragraph = styled.p`
  text-align: ${p => p.centered ? 'center' : 'left'};
`;

const List = styled.ul`
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
  justify-content: space-between;
`;

const Column = styled.span`
  padding: 1rem 0.5rem 1rem;
`;

const Link = styled.a`
`;

const Title = styled.h2`
  text-align: left;
`;

const AudioPlayerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const AudioPlayer = styled.span`
  display: flex;
  flex-direction: column;
  margin: 0 0.5rem 1rem;

  @supports (-moz-appearance: none) {
    width: 30%;  /* fixes firefox width bug */
  }

  @media screen and (max-width: 700px) {
    width: 80%;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const AudioPlayerLabel = styled.label`
  margin-bottom: 0.5rem;

  @media screen and (max-width: 700px) {
    margin-bottom: 0;
    align-self: center;
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 0.5rem;
  }
`;

const ContrastBox = styled.div`
  padding: 0.5rem;
  margin: 2rem 0 1rem;
`;

class English extends Component {
  static contextTypes = {
    trans: PropTypes.any,
  }

  render() {
    const { trans } = this.context;

    return (
      <Fragment>
        <Quote>{ trans.ancientromansquote }</Quote>
        <Source>— Radiodiodi</Source>

        <Title>Wappuradio</Title>
        <Paragraph>Radiodiodi on Otaniemestä ponnistava wappuradio. Toimintamme pääpiste on kahden viikon pituinen radio-ohjelma huhtikuun puoliltavälin aina wappuaattoon asti. Lähetyksemme tuotetaan Otaniemessä, Alvarin aukiolla sijaitsevasta väliaikaisesta konttistudiosta.</Paragraph>
        <Paragraph>Radio-ohjelma tekevät vapaaehtoiset Aallon opiskelijat ja ohjelma onkin yleensä sen mukaista. Toimituksella ei ole ohjelman sisällöstä etukäteen tietoa - me luomme puitteet toiminnalle mutta ohjelmaa on täysin muiden käsissä.</Paragraph>
        <Paragraph>Teemme tätä yhteisön vuoksi; haluamme luoda kaikille riemukkaan wapputunnelman!</Paragraph>

        <Title>Yleisömme</Title>
        <Paragraph>Pääkohderyhmämme on Aalto-yliopiston nykyiset ja jo valmistuneet opiskelijat. Kauttamme tavoittaa parhaiten niin nuoret kuluttajat kuin rekryttävätkin. Tätä yleisöä et saa yhtenäisenä kuuntelijakuntana mistään muualta.</Paragraph>
        <Paragraph>Kuulumme kuitenkin koko pääkaupunkiseudulle FM taajuuksilla ja koko kuuluvuusalueellamme asuukin yhteensä yli miljoona ihmistä. Vaikka ohjelmaa tehdäänkin opiskelijat mielessä, on kuuntelijakuntamme tätä laajempaa.</Paragraph>
        <Paragraph>Kuuntelijoidemme lisäksi tavoitamme kaikki Radiodiodiin ohjemaa tekevät Aallon opiskelijat suoraan lähetyskontilla sekä erinäisissä koulutuksissa.</Paragraph>
        <Paragraph><i>Yleisömme odottaa erilaista sisältöä – emme edes pyri olemaan perinteinen radiokanava!</i></Paragraph>
      </Fragment>
    );
  }
}

export default English;
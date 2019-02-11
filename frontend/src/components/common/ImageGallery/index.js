import React, { Component } from 'react';
import styled from 'styled-components';

import Person from './Person';

const Gallery = styled.section`
  padding: 1rem 0;
`;

const GalleryInner = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  max-width: 800px;
  margin: 0 auto;
`;

const people = [
  { name: 'Rosa', role: 'editorinchief', img: '', desc: 'Kapellimestari aikatauluopuksella ja radioantennilla varustettuna. Toimii myös keppinä.', mail: 'pt@radiodiodi.fi' },
  { name: 'Heidi', role: 'marketingmanager', img: '', desc: 'Somejen spämmiminen ja ylipäätään Wappuradiosta mouhoaminen aina, kun tulee tilaisuus.', mail: 'heidi@radiodiodi.fi' },
  { name: 'Saku', role: 'headofstudio', img: '', desc: 'Lähetysäänen vastuuhenkilö. Studiokontin rankaisija. The signal chain calls me daddy.', mail: 'saku@radiodiodi.fi' },
  { name: 'Jutta', role: 'corporaterelationsmanager', img: '', desc: '', mail: 'jutta@radiodiodi.fi' },
  { name: 'Jan', role: 'elderman', img: '', desc: 'Ei noin, vaan näin. Parrakas mouho, jolla on jo muutama radiotuotanto vyön alla.', mail: 'jan@radiodiodi.fi' },
  { name: 'Ville', role: 'artdirector', img: '', desc: 'Kuvat ja kulma-aurinko on se mun juttu.', mail: 'ville@radiodiodi.fi' },
  { name: 'Elias', role: 'constructionengineer', img: '', desc: 'Kontit paikalle, sähköt kiinni ja lähetys käyntiin.', mail: 'elias@radiodiodi.fi' },
  { name: 'Juhana', role: 'itdirector', img: '', desc: 'Paijaan servereitä ja hajoan webstackiin.', mail: 'juhana@radiodiodi.fi' },
  { name: 'Aarni', role: 'webdirector', img: '', desc: 'Täyttä pinoamista, Agility level 99.', mail: 'aarni@radiodiodi.fi' },
];

class ImageGallery extends Component {
  render() {
    return (
      <Gallery>
        <GalleryInner>
          { people.map((person, index) =>
            <Person key={index} {...person} />) }
        </GalleryInner>
      </Gallery>
    );
  }
}

export default ImageGallery;

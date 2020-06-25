import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import styles from './Info.scss';
import {infoContent} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoContent.title} imgSrc={infoContent.image} />
    <h2 className={styles.subtitle}>{infoContent.subtitle}</h2>
    <p className={styles.content}>{infoContent.content}</p>
  </Container>
);

export default Info;
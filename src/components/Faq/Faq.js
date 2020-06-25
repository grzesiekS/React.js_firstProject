import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faqContent, infoContent } from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={faqContent.title} imgSrc={infoContent.image} />
  </Container>
);

export default Faq;
import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqContent} from '../../data/dataStore';
import PropTypes from 'prop-types';

class FaqContent extends React.Component {
    static propTypes = {
      question: PropTypes.string,
      answer: PropTypes.string,
    }
   
    render() {
      const {question, answer} = this.props;
  
      return(
        <li>
          <h2>{question}</h2>
          <p>{answer}</p>
        </li>
      );
    }
}

const Faq = () => (
  <Container>
    <Hero titleText={faqContent.title} imgSrc={faqContent.image} />
    <h2>{faqContent.subtitle}</h2>
    <ul>
      {faqContent.qaa.map(qaaData => (
        <FaqContent key={qaaData.key} {...qaaData} />
      ))}
    </ul>
  </Container>
);

export default Faq;
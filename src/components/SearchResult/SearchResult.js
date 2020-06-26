import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResult.scss'; 
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {searchResultContent} from '../../data/dataStore';
import Card from '../Card/Card';

class SearchResult extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
  }

  render() {
    const {cards} = this.props;

    return(
      <Container>
        <Hero titleText={searchResultContent.title} imgSrc={searchResultContent.image} />
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={styles.icon}><i className={searchResultContent.icon}></i></span>
          </h3>

          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResult;
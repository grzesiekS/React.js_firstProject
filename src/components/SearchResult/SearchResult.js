import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResult.scss'; 
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
// import Card from '../Card/Card';
import {searchResultContent} from '../../data/dataStore';

class SearchResult extends React.Component {
  static propTypes = {
    searchString: PropTypes.string,
  }

  render() {
    console.log(this);

    return(
      <Container>
        <Hero titleText={searchResultContent.title} imgSrc={searchResultContent.image} />
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={styles.icon}><i className={searchResultContent.icon}></i></span>
          </h3>

          <div className={styles.cards}>
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResult;
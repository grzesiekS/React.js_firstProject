import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
    static propTypes = {
      title: PropTypes.string,
    }

    render() {
      const {title} = this.props;

      return (
        <div className={styles.component}>
          <p className={styles.subtitle}>{title}</p>
        </div>
      );
    }
}

export default Card; 
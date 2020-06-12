import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    imgSrc: PropTypes.string,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} 
          imgSrc={this.props.imgSrc}
        />

        <div className={styles.columns}>
          <Column title='Work' />
          <Column title='Home' />
          <Column title='Groceries' />
        </div>

        <div className={styles.description}>
          {this.props.children}
        </div>
      </section>
    )
  }
}

export default List;
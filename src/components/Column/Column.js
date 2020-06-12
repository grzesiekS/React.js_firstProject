import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

class Column extends React.Component {
    static propTypes = {
        title: PropTypes.string
    }

    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>{this.props.title}</h3>
                <Card />
            </section>
        )
    }
}

export default Column
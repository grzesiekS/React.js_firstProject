import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import {settings} from '../../data/dataStore';

class Column extends React.Component {
    state = {
        card: this.props.cards || [],
    }
    
    static propTypes = {
        title: PropTypes.string,
        card: PropTypes.array,
    }

    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>{this.props.title}</h3>
                {this.state.card.map(({key, ...cardProps}) => (
                    <Card key={key} {...cardProps}/>
                ))}
            </section>
        )
    }
}

export default Column
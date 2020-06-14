import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component {
    state = {
        card: this.props.cards || [],
    }
    
    static propTypes = {
        title: PropTypes.string,
        card: PropTypes.array,
    }

    addCard(title){
        this.setState(state => (
          {
            card: [
              ...state.card,
              {
                key: state.card.length ? state.card[state.card.length-1].key+1 : 0,
                title,
                icon: 'list-alt',
                cards: []
              }
            ]
          }
        ));
      }

    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>
                  {this.props.title}
                  <span className={styles.icon}><Icon name={this.props.icon}/></span>
                </h3>
                {this.state.card.map(({key, ...cardProps}) => (
                    <Card key={key} {...cardProps}/>
                ))}

                <div className={styles.creator}>
                    <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
                </div>
            </section>
        )
    }
}

export default Column
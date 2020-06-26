import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
// import {Droppable} from 'react-beautiful-dnd';

class Column extends React.Component {
    state = {
      card: this.props.cards || [],
    }
    
    static propTypes = {
      title: PropTypes.string,
      card: PropTypes.array,
      cards: PropTypes.array,
      icon: PropTypes.string,
      addCard: PropTypes.func,
      id: PropTypes.string,
    }

    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }

    render() {
      const {title, icon, cards, addCard} = this.props;
      cards.sort((a, b) => a.index - b.index);

      return (
        <section className={styles.component}>
          <h3 className={styles.title}>
            {title}
            <span className={styles.icon}><Icon name={icon}/></span>
          </h3>
          
          {/* <Droppable droppableId={id}>
            {provided => (
              <div
                className={styles.cards}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {cards.map(cardData => (
                  <Card key={cardData.id} {...cardData} />
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable> */}

          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>

          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={addCard}/>
          </div>
        </section>
      );
    }
}

export default Column;
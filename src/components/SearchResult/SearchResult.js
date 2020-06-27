import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResult.scss'; 
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {searchResultContent} from '../../data/dataStore';
import {Droppable, DragDropContext} from 'react-beautiful-dnd';
import Card from '../Card/Card';

class SearchResult extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    id: PropTypes.string,
    moveCard: PropTypes.func,
  }

  render() {
    const {cards, id, moveCard} = this.props;
    console.log(cards);

    const moveCardHandler = result => {
      if(
        result.destination
        &&
        (
          result.destination.index != result.source.index
          ||
          result.destination.droppableId != result.source.droppableId
        )
      ){
        moveCard({
          id: result.draggableId,
          dest: {
            index: result.destination.index,
            columnId: result.destination.droppableId,
          },
          src: {
            index: result.source.index,
            columnId: result.source.droppableId,
          },
        });
      }
    };

    return(
      <Container>
        <Hero titleText={searchResultContent.title} imgSrc={searchResultContent.image} />
        <DragDropContext onDragEnd={moveCardHandler}>
          <section className={styles.component}>
            <h3 className={styles.title}>
              <span className={styles.icon}><i className={searchResultContent.icon}></i></span>
            </h3>

            <Droppable droppableId={id}>
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
            </Droppable>
          </section>
        </DragDropContext>
      </Container>
    );
  }
}

export default SearchResult;
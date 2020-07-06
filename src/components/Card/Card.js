import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import {Draggable} from 'react-beautiful-dnd';

class Card extends React.Component {
    static propTypes = {
      title: PropTypes.string,
      id: PropTypes.string,
      index: PropTypes.number,
      dragDisable: PropTypes.bool,
      searchedCard: PropTypes.bool,
    }

    static defaultProps = {
      dragDisable: false,
    }

    searchedCardsRender(styleComponent, id, index, dragDisable, title) {
      return (
        <Draggable draggableId={id} index={index} isDragDisabled={dragDisable}>
          {(provided) => (
            <article
              className={styleComponent}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <p className={styles.subtitle}>{title}</p>
            </article>
          )}
        </Draggable>
        // <article className={styles.component}>
        //   <p className={styles.subtitle}>{title}</p>
        // </article>
      );
    }

    render() {
      const {title, id, index, dragDisable} = this.props;

      if(this.props.searchedCard == true) {
        return this.searchedCardsRender(styles.componentSearch, id, index, dragDisable, title);
      } else {
        return this.searchedCardsRender(styles.component, id, index, dragDisable, title);
      }
    }
}

export default Card; 
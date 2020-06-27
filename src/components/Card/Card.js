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
    }

    static defaultProps = {
      dragDisable: false,
    }


    render() {
      const {title, id, index, dragDisable} = this.props;

      return (
        <Draggable draggableId={id} index={index} isDragDisabled={dragDisable}>
          {(provided) => (
            <article
              className={styles.component}
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
}

export default Card; 
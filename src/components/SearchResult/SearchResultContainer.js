import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import {getCardsFromSearch, createAction_moveCard} from '../../redux/cardsRedux';
import shortid from 'shortid';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.searchString;
  const id = shortid.generate();
  const cards = getCardsFromSearch(state, searchString);

  /*[DONE] change searchedCard status for all cards to false*/
  state.cards.map(card => {
    card.searchedCard = false;
  });

  /*[DONE] change cearchedCardStatus for cards (getCardsFromSearch) to true */
  cards.map(card => {
    card.searchedCard = true;
  });

  /* [DONE] Filter columns by serched cards */
  const columns = state.columns.filter((columns) => {
    return cards.map(card => {
      if(columns.id === card.columnId) {
        card.listId = columns.listId;
        card.columnTitle = columns.title;
      }
      return columns.id === card.columnId;
    });
  });

  /* [DONE] filter lists by filtered coulmns */
  const lists = state.lists.filter(lists => {
    return cards.map(card => {
      if(card.listId === lists.id) {
        card.listTitle = lists.title;
        card.listDesc = lists.description;
        card.image = lists.image;
      }
      return card.listId === lists.id;
    });
  });

  return{
    id,
    cards,
    columns,
    lists,
  };
};

const mapDispatchToProps = (dispatch) => ({
  moveCard: payload => dispatch(createAction_moveCard(payload)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
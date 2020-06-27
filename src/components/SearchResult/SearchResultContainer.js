import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import {getCardsFromSearch, createAction_moveCard} from '../../redux/cardsRedux';
import shortid from 'shortid';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.searchString;
  const id = shortid.generate();
  const cards = getCardsFromSearch(state, searchString);
  const mergeArrays =[];

  /* [DONE] Filter columns by serched cards */
  const columns = state.columns.filter((columns) => {
    return cards.some(cards => {
      if(columns.id === cards.columnId) {
        mergeArrays.push({...columns,...cards});
      }
      return columns.id === cards.columnId;
    });
  });

  /* [DONE] filter lists by filtered coulmns */
  const lists = state.lists.filter(lists => {
    return columns.some(columns => {
      return columns.listId === lists.id;
    });
  });

  return{
    id,
    cards,
    columns,
    lists,
    mergeArrays,
  };
};

const mapDispatchToProps = (dispatch) => ({
  moveCard: payload => dispatch(createAction_moveCard(payload)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import {getCardsFromSearch, createAction_moveCard} from '../../redux/cardsRedux';
import shortid from 'shortid';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.searchString;
  const id = shortid.generate();
  const cards = getCardsFromSearch(state, searchString);

  /* [DONE] Filter columns by serched cards */
  const columns = state.columns.filter((columns) => {
    return cards.some(cards => {
      return columns.id === cards.columnId;
    });
  });

  return{
    id,
    cards,
    columns,
  };
};

const mapDispatchToProps = (dispatch) => ({
  moveCard: payload => dispatch(createAction_moveCard(payload)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
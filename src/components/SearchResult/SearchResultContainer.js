import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import {getCardsFromSearch, createAction_moveCard} from '../../redux/cardsRedux';
import shortid from 'shortid';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.searchString;
  const id = shortid.generate();
  const cards = getCardsFromSearch(state, searchString);

  return{
    id,
    cards,
  };
};

const mapDispatchToProps = (dispatch) => ({
  moveCard: payload => dispatch(createAction_moveCard(payload)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
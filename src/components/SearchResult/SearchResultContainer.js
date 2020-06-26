import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import {getCardsFromSearch} from '../../redux/cardsRedux';


const mapStateToProps = (state, props) => {
  const searchString = props.match.params.searchString;

  return{
    cards: getCardsFromSearch(state, searchString),
  };
};


export default connect(mapStateToProps)(SearchResult);
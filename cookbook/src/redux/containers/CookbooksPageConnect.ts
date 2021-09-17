import { connect } from 'react-redux';
import CookbooksPage from '../../components/SearchCookbooksPage';
import { State } from '../../interfaces';
import {
  getCookbooks,
  sortCookbooks,
  filterCookbooks,
  createComment,
} from '../actions/cookbooks';
import { getRecipes } from '../actions/recipes';
import { saveToUsersCookbooks, saveToUsersRecipes } from '../actions/user';

const mapStateToProps = (state: State) => {
  const { user, cookbooks, recipes } = state;
  const username = user ? user.username : '';
  const userId = user ? user.id : null;

  return {
    cookbooks,
    recipes,
    username,
    userId,
  };
};

const mapDispatchToProps = {
  getCookbooks,
  getRecipes,
  sortCookbooks,
  filterCookbooks,
  saveToUsersCookbooks,
  saveToUsersRecipes,
  createComment,
};

const CookbooksPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(CookbooksPage);

export default CookbooksPageConnect;

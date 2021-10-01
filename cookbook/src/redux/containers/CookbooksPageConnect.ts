import { connect } from 'react-redux';
import CookbooksPage from '../../components/SearchCookbooksPage';
import { State } from '../../interfaces';
import {
  getAllCookbooks,
  sortCookbooks,
  filterCookbooks,
  createComment,
  hideUsersCookbooks,
} from '../actions/cookbooks';
import { getAllRecipes } from '../actions/recipes';
import { saveToUsersCookbooks, saveToUsersRecipes } from '../actions/user';

const mapStateToProps = (state: State) => {
  const { user, cookbooks, recipes } = state;
  const loggedInUserId = user ? user.id : null;

  return {
    cookbooks,
    recipes,
    loggedInUserId,
  };
};

const mapDispatchToProps = {
  getAllCookbooks,
  getAllRecipes,
  sortCookbooks,
  filterCookbooks,
  saveToUsersCookbooks,
  saveToUsersRecipes,
  createComment,
  hideUsersCookbooks,
};

const CookbooksPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CookbooksPage);

export default CookbooksPageConnect;

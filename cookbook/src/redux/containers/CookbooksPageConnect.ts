import { connect } from 'react-redux';
import CookbooksPage from '../../components/SearchCookbooksPage';
import { getCookbooks, sortCookbooks, filterCookbooks } from '../actions/cookbooks-actions';
import { getRecipes } from '../actions/recipes-actions';

const mapStateToProps = (state: any) => {
  const { cookbooks } = state.cookbooks;
  const { recipes } = state.recipes;
  let username;

  if (state.user.user) {
    username = state.user.user.username;
  } else {
    username = '';
  }

  return {
    cookbooks,
    recipes,
    username,
  };
};

const mapDispatchToProps = {
  getCookbooks,
  getRecipes,
  sortCookbooks,
  filterCookbooks,
};

const CookbooksPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CookbooksPage);

export default CookbooksPageConnect;

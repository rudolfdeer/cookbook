import { connect } from 'react-redux';
import CookbooksPage from '../../components/SearchCookbooksPage';
import { getCookbooks, sortCookbooks, filterCookbooks } from '../actions/cookbooks';
import { getRecipes } from '../actions/recipes';

const mapStateToProps = (state: any) => {
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
};

const CookbooksPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CookbooksPage);

export default CookbooksPageConnect;

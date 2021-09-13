import { connect } from 'react-redux';
import RecipesPage from '../../components/SearchRecipesPage';
import { filterRecipes, getRecipes, sortRecipes } from '../actions/recipes';
import { saveToUsersRecipes } from '../actions/user';

function mapStateToProps(state: any) {
  const { user, recipes } = state;
  const username = user ? user.username : '';
  const userId = user ? user.id : null;

  return {
    recipes,
    username,
    userId,
  };
}

const mapDispatchToProps = {
  getRecipes,
  sortRecipes,
  filterRecipes,
  saveToUsersRecipes,
};

const RecipesPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesPage);

export default RecipesPageConnect;

import { connect } from 'react-redux';
import RecipesPage from '../../components/SearchRecipesPage';
import { State } from '../../interfaces';
import {
  filterRecipes,
  getRecipes,
  sortRecipes,
  createComment,
} from '../actions/recipes';
import { saveToUsersRecipes } from '../actions/user';

function mapStateToProps(state: State) {
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
  createComment,
};

const RecipesPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesPage);

export default RecipesPageConnect;

import { connect } from 'react-redux';
import RecipesPage from '../../components/SearchRecipesPage';
import {
  filterRecipes,
  getAllRecipes,
  sortRecipes,
  createComment,
  likeRecipe,
} from '../thunks/recipes';
import { saveToUsersRecipes } from '../thunks/user';
import { State } from '../../interfaces';

function mapStateToProps(state: State) {
  const { user, recipes } = state;
  const loggedInUserId = user ? user.id : null;

  return {
    recipes,
    loggedInUserId,
  };
}

const mapDispatchToProps = {
  getAllRecipes,
  sortRecipes,
  filterRecipes,
  saveToUsersRecipes,
  createComment,
  likeRecipe,
};

const RecipesPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipesPage);

export default RecipesPageConnect;

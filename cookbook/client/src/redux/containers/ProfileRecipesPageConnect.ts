import { connect } from 'react-redux';
import ProfileRecipesPage from '../../components/ProfileRecipesPage';
import { State } from '../../interfaces';
import {
  getUsersCreatedRecipes,
  createRecipe,
  modifyRecipe,
  deleteRecipe,
  updateRecipesImage,
} from '../thunks/recipes';

function mapStateToProps(state: State) {
  const { recipes, user } = state;

  return {
    recipes,
    user,
  };
}

const mapDispatchToProps = {
  getUsersCreatedRecipes,
  createRecipe,
  modifyRecipe,
  updateRecipesImage,
  deleteRecipe,
};

const ProfileRecipesPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileRecipesPage);

export default ProfileRecipesPageConnect;

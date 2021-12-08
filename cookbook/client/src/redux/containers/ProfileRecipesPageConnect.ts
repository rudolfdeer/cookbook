import { connect } from 'react-redux';
import ProfileRecipesPage from '../../components/ProfileRecipesPage';
import { State } from '../../interfaces';
import { IState } from '../../interfacesServer';
import {
  getUsersCreatedRecipes,
  createRecipe,
  modifyRecipe,
  deleteRecipe,
} from '../thunks/recipes';

function mapStateToProps(state: IState) {
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
  deleteRecipe,
};

const ProfileRecipesPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileRecipesPage);

export default ProfileRecipesPageConnect;

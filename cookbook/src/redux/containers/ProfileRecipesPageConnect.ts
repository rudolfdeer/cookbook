import { connect } from 'react-redux';
import ProfileRecipesPage from '../../components/ProfileRecipesPage';
import { State } from '../../interfaces';
import { getUsersCreatedRecipes } from '../actions/recipes';

function mapStateToProps(state: State) {
  const { recipes, user } = state;

  return {
    recipes,
    user,
  };
}

const mapDispatchToProps = {
  getUsersCreatedRecipes,
};

const ProfileRecipesPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileRecipesPage);

export default ProfileRecipesPageConnect;

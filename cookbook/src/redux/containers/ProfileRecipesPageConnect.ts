import { connect } from 'react-redux';
import ProfileRecipesPage from '../../components/ProfileRecipesPage';
import { getUsersCreatedRecipes } from '../actions/recipes';

function mapStateToProps(state: any) {
  const { recipes, user } = state;
  //const { username, bio, avatar, id, savedRecipes } = user;

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
  mapDispatchToProps
)(ProfileRecipesPage);

export default ProfileRecipesPageConnect;

import { connect } from 'react-redux';
import ProfileRecipesPage from '../../components/ProfileRecipesPage';
import { getUsersRecipes } from '../actions/recipes';

function mapStateToProps(state: any) {
  const { recipes, user } = state;
  const { username, bio, avatar, id, savedRecipes } = user;

  return {
    recipes,
    username,
    bio,
    avatar,
    id,
    savedRecipes,
  };
}

const mapDispatchToProps = {
  getUsersRecipes,
};

const ProfileRecipesPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileRecipesPage);

export default ProfileRecipesPageConnect;

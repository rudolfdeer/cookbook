import { connect } from 'react-redux';
import ProfileRecipesPage from '../../components/ProfileRecipesPage';
import { getUsersRecipes } from '../actions/recipes-actions';

function mapStateToProps(state: any) {
  const { recipes } = state.recipes;
  const { username, bio, avatar, id } = state.user.user;

  return {
    recipes,
    username,
    bio,
    avatar,
    id,
  };
}

const mapDispatchToProps = {
  getUsersRecipes,
};

const ProfileRecipesPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileRecipesPage);

export default ProfileRecipesPageConnect;

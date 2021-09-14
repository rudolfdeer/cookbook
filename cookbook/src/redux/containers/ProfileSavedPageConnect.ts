import { connect } from 'react-redux';
import { getUsersSavedRecipes } from '../actions/recipes';
import { getUsersSavedCookbooks } from '../actions/cookbooks';
import ProfileSavedPage from '../../components/ProfileSavedPage';

function mapStateToProps(state: any) {
  const { recipes, user, cookbooks } = state;
  const { username, bio, avatar, id, savedRecipes, savedCookbooks } = user;

  return {
    recipes,
    cookbooks,
    username,
    bio,
    avatar,
    id,
    savedRecipes,
    savedCookbooks,
  };
}

const mapDispatchToProps = {
  getUsersSavedRecipes,
  getUsersSavedCookbooks,
};

const ProfileSavedPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileSavedPage);

export default ProfileSavedPageConnect;

import { connect } from 'react-redux';
import ProfileCookbooksPage from '../../components/ProfileCookbooksPage';
import { getUsersCookbooks } from '../actions/cookbooks-actions';

const mapStateToProps = (state: any) => {
  const { cookbooks } = state.cookbooks;
  const { username, bio, avatar, id } = state.user.user;

  return {
    cookbooks,
    username,
    bio,
    avatar,
    id,
  };
};

const mapDispatchToProps = {
  getUsersCookbooks,
};

const ProfileCookbooksPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileCookbooksPage);

export default ProfileCookbooksPageConnect;

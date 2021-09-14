import { connect } from 'react-redux';
import ProfileCookbooksPage from '../../components/ProfileCookbooksPage';
import { getUsersCreatedCookbooks } from '../actions/cookbooks';

const mapStateToProps = (state: any) => {
  const { cookbooks, user } = state;
  const { username, bio, avatar, id } = user;

  return {
    cookbooks,
    username,
    bio,
    avatar,
    id,
  };
};

const mapDispatchToProps = {
  getUsersCreatedCookbooks,
};

const ProfileCookbooksPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileCookbooksPage);

export default ProfileCookbooksPageConnect;

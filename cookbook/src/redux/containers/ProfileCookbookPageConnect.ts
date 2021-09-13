import { connect } from 'react-redux';
import ProfileCookbooksPage from '../../components/ProfileCookbooksPage';
import { getUsersCookbooks } from '../actions/cookbooks';

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
  getUsersCookbooks,
};

const ProfileCookbooksPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileCookbooksPage);

export default ProfileCookbooksPageConnect;

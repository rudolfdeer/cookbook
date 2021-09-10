import { connect } from 'react-redux';
import ProfileCookbooksPage from '../../components/ProfileCookbooksPage';
import { getCookbooks } from '../actions/cookbooks-actions';

const mapStateToProps = (state: any) => {
  const { cookbooks } = state.cookbooks;
  const { username, bio, avatar } = state.user.user;

  return {
    cookbooks,
    username,
    bio,
    avatar,
  };
};

const mapDispatchToProps = {
  getCookbooks,
};

const ProfileCookbooksPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileCookbooksPage);

export default ProfileCookbooksPageConnect;

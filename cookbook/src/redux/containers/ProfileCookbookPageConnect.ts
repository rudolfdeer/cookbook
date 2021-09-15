import { connect } from 'react-redux';
import ProfileCookbooksPage from '../../components/ProfileCookbooksPage';
import { getUsersCreatedCookbooks } from '../actions/cookbooks';

const mapStateToProps = (state: any) => {
  const { cookbooks, user } = state;
  //const { username, bio, avatar, id } = user;

  return {
    cookbooks,
    user,
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

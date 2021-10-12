import { connect } from 'react-redux';
import ProfileUsersPage from '../../components/ProfileUsersPage';
import { State } from '../../interfaces';
import { getUsersCreatedCookbooks } from '../actions/cookbooks';

const mapStateToProps = (state: State) => {
  const { cookbooks, user } = state;
  const loggedInUserId = user.id;

  return {
    cookbooks,
    loggedInUserId,
  };
};

const mapDispatchToProps = {
  getUsersCreatedCookbooks,
};

const ProfileUsersPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileUsersPage);

export default ProfileUsersPageConnect;

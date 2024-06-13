import { connect } from 'react-redux';
import ProfileUsersPage from '../../components/ProfileUsersPage';
import { State } from '../../interfaces';

const mapStateToProps = (state: State) => {
  const { user } = state;
  const loggedInUserId = user ? user.id : null;

  return {
    loggedInUserId,
  };
};

const ProfileUsersPageConnect = connect(
  mapStateToProps,
)(ProfileUsersPage);

export default ProfileUsersPageConnect;

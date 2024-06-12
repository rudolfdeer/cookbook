import { connect } from 'react-redux';
import ProfileUsersPage from '../../components/ProfileUsersPage';
import { IState } from '../../interfaces';

const mapStateToProps = (state: IState) => {
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

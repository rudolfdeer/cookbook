import { connect } from 'react-redux';
import ProfileUsersPage from '../../components/ProfileUsersPage';
import { IState } from '../../interfacesServer';
import { getUsersCreatedCookbooks } from '../thunks/cookbooks';

const mapStateToProps = (state: IState) => {
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

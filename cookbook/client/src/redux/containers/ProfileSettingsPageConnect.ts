import { connect } from 'react-redux';
import ProfileSettingsPage from '../../components/ProfileSettingsPage';
import { IState } from '../../interfacesServer';
import {
  deleteUser,
  updateUser,
  changePassword,
  changeEmail,
  getLoggedInUser,
} from '../thunks/user';

function mapStateToProps(state: IState) {
  const { user } = state;
  return {
    user,
  };
}
const mapDispatchToProps = {
  // changeUserBio,
  // changeUserName,
  // changeUserEmail,
  // changeUserPassword,
  // updateUserPhoto,
  //logOut,
  deleteUser,
  updateUser,
  changePassword,
  changeEmail,
  
};

const ProfileSettingsPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileSettingsPage);

export default ProfileSettingsPageConnect;

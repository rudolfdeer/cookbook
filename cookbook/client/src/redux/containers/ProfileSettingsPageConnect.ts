import { connect } from 'react-redux';
import ProfileSettingsPage from '../../components/ProfileSettingsPage';
import { State } from '../../interfaces';
import {
  deleteUser,
  updateUser,
  changePassword,
  changeEmail,
  updateUsersPhoto,
  signOut,
} from '../thunks/user';

function mapStateToProps(state: State) {
  const { user } = state;
  return {
    user,
  };
}
const mapDispatchToProps = {
  signOut,
  deleteUser,
  updateUser,
  changePassword,
  changeEmail,
  updateUsersPhoto,
};

const ProfileSettingsPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileSettingsPage);

export default ProfileSettingsPageConnect;

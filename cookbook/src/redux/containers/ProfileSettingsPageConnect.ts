import { connect } from 'react-redux';
import ProfileSettingsPage from '../../components/ProfileSettingsPage';
import { State } from '../../interfaces';
import { deleteUsersCookbooks } from '../actions/cookbooks';
import { deleteUsersRecipes } from '../actions/recipes';
import {
  changeUserBio,
  changeUserName,
  changeUserEmail,
  changeUserPassword,
  updateUserPhoto,
  logOut,
  deleteUser,
} from '../actions/user';

function mapStateToProps(state: State) {
  const { user } = state;
  return {
    user,
  };
}
const mapDispatchToProps = {
  changeUserBio,
  changeUserName,
  changeUserEmail,
  changeUserPassword,
  updateUserPhoto,
  logOut,
  deleteUser,
};

const ProfileSettingsPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileSettingsPage);

export default ProfileSettingsPageConnect;

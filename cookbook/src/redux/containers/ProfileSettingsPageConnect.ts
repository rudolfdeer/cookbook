import { connect } from 'react-redux';
import ProfileSettingsPage from '../../components/ProfileSettingsPage';
import { State } from '../../interfaces';
import {
  changeUserBio,
  changeUserName,
  changeUserEmail,
  changeUserPassword,
  logOut,
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
  logOut,
};

const ProfileSettingsPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileSettingsPage);

export default ProfileSettingsPageConnect;

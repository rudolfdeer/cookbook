import { connect } from 'react-redux';
import ProfileSettingsPage from '../../components/ProfileSettingsPage';
import {
  changeUserBio,
  changeUserName,
  changeUserEmail,
  changeUserPassword,
} from '../actions/user';

function mapStateToProps(state: any) {
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
};

const ProfileSettingsPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileSettingsPage);

export default ProfileSettingsPageConnect;

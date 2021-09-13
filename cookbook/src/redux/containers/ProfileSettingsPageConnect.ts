import { connect } from 'react-redux';
import ProfileSettingsPage from '../../components/ProfileSettingsPage';

function mapStateToProps(state: any) {
  const { user } = state;
  return {
    user,
  };
}

// const mapDispatchToProps = {
//   getRecipes,
// };

const ProfileSettingsPageConnect = connect(
  mapStateToProps,
  null,
)(ProfileSettingsPage);

export default ProfileSettingsPageConnect;

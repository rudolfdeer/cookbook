import { connect } from 'react-redux';
import ProfileSettingsPage from '../../components/ProfileSettingsPage';
import { getRecipes } from '../actions/recipes-actions';

function mapStateToProps(state: any) {
  const { user } = state.user;
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
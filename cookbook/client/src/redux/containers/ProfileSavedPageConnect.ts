import { connect } from 'react-redux';
import { getUsersSavedRecipes } from '../thunks/recipes';
import ProfileSavedPage from '../../components/ProfileSavedPage';
import { IState } from '../../interfaces';

function mapStateToProps(state: IState) {
  const { recipes, user } = state;

  return {
    recipes,
    user,
  };
}

const mapDispatchToProps = {
  getUsersSavedRecipes,
};

const ProfileSavedPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileSavedPage);

export default ProfileSavedPageConnect;

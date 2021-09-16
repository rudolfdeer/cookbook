import { connect } from 'react-redux';
import { getUsersSavedRecipes } from '../actions/recipes';
import { getUsersSavedCookbooks } from '../actions/cookbooks';
import ProfileSavedPage from '../../components/ProfileSavedPage';
import { State } from '../../interfaces';

function mapStateToProps(state: State) {
  const { recipes, user, cookbooks } = state;

  return {
    recipes,
    cookbooks,
    user,
  };
}

const mapDispatchToProps = {
  getUsersSavedRecipes,
  getUsersSavedCookbooks,
};

const ProfileSavedPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileSavedPage);

export default ProfileSavedPageConnect;

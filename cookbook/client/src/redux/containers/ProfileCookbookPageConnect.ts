import { connect } from 'react-redux';
import ProfileCookbooksPage from '../../components/ProfileCookbooksPage';
import { State } from '../../interfaces';
import {
  getUsersCreatedCookbooks,
  createCookbook,
  modifyCookbook,
  deleteCookbook,
} from '../actions/cookbooks';

const mapStateToProps = (state: State) => {
  const { cookbooks, user } = state;

  return {
    cookbooks,
    user,
  };
};

const mapDispatchToProps = {
  getUsersCreatedCookbooks,
  createCookbook,
  modifyCookbook,
  deleteCookbook,
};

const ProfileCookbooksPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileCookbooksPage);

export default ProfileCookbooksPageConnect;
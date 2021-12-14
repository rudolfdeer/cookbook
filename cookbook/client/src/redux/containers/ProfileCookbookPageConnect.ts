import { connect } from 'react-redux';
import ProfileCookbooksPage from '../../components/ProfileCookbooksPage';
import { IState } from '../../interfacesServer';
import {
  getUsersCreatedCookbooks,
  createCookbook,
  modifyCookbook,
  deleteCookbook,
} from '../thunks/cookbooks';
import { getLoggedInUser } from '../thunks/user';

const mapStateToProps = (state: IState) => {
  const { cookbooks, user, recipes } = state;

  return {
    cookbooks,
    user,
    recipes,
  };
};

const mapDispatchToProps = {
  getLoggedInUser,
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

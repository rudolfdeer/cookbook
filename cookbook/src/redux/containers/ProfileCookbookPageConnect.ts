import { connect } from 'react-redux';
import ProfileCookbooksPage from '../../components/ProfileCookbooksPage';
import { getCookbooks } from '../actions/cookbooks-actions';

const mapStateToProps = (state: any) => {
  const { cookbooks } = state.cookbooks;

  return {
    cookbooks,
  };
};

const mapDispatchToProps = {
  getCookbooks,
};

const ProfileCookbooksPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileCookbooksPage);

export default ProfileCookbooksPageConnect;

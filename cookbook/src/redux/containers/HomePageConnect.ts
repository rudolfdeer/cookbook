import { connect } from 'react-redux';
import HomePage from '../../components/HomePage';
import { getCookbooks } from '../actions/cookbooks-actions';
import { getRecipes } from '../actions/recipes-actions';

function mapStateToProps(state: any) {
  const { recipes } = state.recipes;
  const { cookbooks } = state.cookbooks;
  let username;

  if (state.user.user) {
    username = state.user.user.username;
  } else {
    username = '';
  }

  return {
    recipes,
    cookbooks,
    username,
  };
}

const mapDispatchToProps = {
  getRecipes,
  getCookbooks,
};

const HomePageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

export default HomePageConnect;

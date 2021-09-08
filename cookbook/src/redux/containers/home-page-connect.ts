import { connect } from 'react-redux';
import HomePage from '../../components/HomePage';
import { getCookbooks } from '../actions/cookbooks-actions';
import { getRecipes } from '../actions/recipes-actions';

function mapStateToProps(state: any) {
  const { recipes } = state.recipes;
  const { cookbooks } = state.cookbooks;
  return {
    recipes,
    cookbooks,
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

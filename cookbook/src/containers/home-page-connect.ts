import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import { getCookbooks } from '../redux/actions/cookbooks-actions';
import { getRecipes } from '../redux/actions/recipes-actions';

function mapStateToProps(state: any) {
  const { recipes } = state.recipes;
  const { cookbooks } = state.cookbooks;
  return {
    recipes,
    cookbooks,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getRecipes: () => dispatch(getRecipes()),
  getCookbooks: () => dispatch(getCookbooks()),
});

const HomePageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

export default HomePageConnect;
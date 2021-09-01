import { connect } from 'react-redux';
import HomePage from '../components/pages/home-page/home-page';
import getRecipes from '../redux/actions/recipes-actions';

function mapStateToProps(state: any) {
  const { recipes } = state.recipesOperations;
  return {
    recipes,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getRecipes: () => dispatch(getRecipes()),
});

const recipesConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

export default recipesConnect;

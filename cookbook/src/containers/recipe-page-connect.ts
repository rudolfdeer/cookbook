import { connect } from 'react-redux';
import CookbooksPage from '../components/pages/cookbooks-page/page';
import RecipesPage from '../components/pages/recipes-page/page';
import { getCookbooks } from '../redux/actions/cookbooks-actions';
import { getRecipes } from '../redux/actions/recipes-actions';

function mapStateToProps(state: any) {
  const { recipes } = state.recipes;
  return {
    recipes,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getRecipes: () => dispatch(getRecipes()),
});

const RecipesPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipesPage);

export default RecipesPageConnect;

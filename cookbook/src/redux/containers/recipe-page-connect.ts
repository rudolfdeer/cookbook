import { connect } from 'react-redux';
import CookbooksPage from '../../components/CookbooksSearchPage';
import RecipesPage from '../../components/RecipesSearchPage';
import { getCookbooks } from '../actions/cookbooks-actions';
import { getRecipes, sortRecipes } from '../actions/recipes-actions';

function mapStateToProps(state: any) {
  const { recipes } = state.recipes;
  return {
    recipes,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getRecipes: () => dispatch(getRecipes()),
  sortRecipes: (order: string) => dispatch(sortRecipes(order)),
});

const RecipesPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipesPage);

export default RecipesPageConnect;

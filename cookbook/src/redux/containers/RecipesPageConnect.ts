import { connect } from 'react-redux';
import RecipesPage from '../../components/RecipesSearchPage';
import { filterRecipes, getRecipes, sortRecipes } from '../actions/recipes-actions';

function mapStateToProps(state: any) {
  const { recipes } = state.recipes;
  return {
    recipes,
  };
}

const mapDispatchToProps = {
  getRecipes,
  sortRecipes,
  filterRecipes,
};

const RecipesPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipesPage);

export default RecipesPageConnect;

import { connect } from 'react-redux';
import RecipesPage from '../../components/SearchRecipesPage';
import { filterRecipes, getRecipes, sortRecipes } from '../actions/recipes-actions';

function mapStateToProps(state: any) {
  const { recipes } = state.recipes;
  let username;

  if (state.user.user) {
    username = state.user.user.username;
  } else {
    username = '';
  }
  return {
    recipes,
    username,
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

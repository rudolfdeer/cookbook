import { connect } from 'react-redux';
import RecipesPage from '../../components/SearchRecipesPage';
import { filterRecipes, getRecipes, sortRecipes } from '../actions/recipes';

function mapStateToProps(state: any) {
  const { user, recipes } = state;
  const username = user ? user.username : '';

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

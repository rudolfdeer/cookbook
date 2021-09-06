import { connect } from 'react-redux';
import CookbooksPage from '../components/CookbooksSearchPage';
import { getCookbooks } from '../redux/actions/cookbooks-actions';
import { getRecipes } from '../redux/actions/recipes-actions';

function mapStateToProps(state: any) {
  const { cookbooks } = state.cookbooks;
  const { recipes } = state.recipes;

  return {
    cookbooks,
    recipes,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getCookbooks: () => dispatch(getCookbooks()),
  getRecipes: () => dispatch(getRecipes()),
});

const CookbooksPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CookbooksPage);

export default CookbooksPageConnect;

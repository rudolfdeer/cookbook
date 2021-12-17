import { connect } from 'react-redux';
import HomePage from '../../components/HomePage';
import { IState } from '../../interfaces';
import { getAllCookbooks } from '../thunks/cookbooks';
import { getAllRecipes } from '../thunks/recipes';

function mapStateToProps(state: IState) {
  const { recipes, cookbooks } = state;

  return {
    recipes,
    cookbooks,
  };
}

const mapDispatchToProps = {
  getAllRecipes,
  getAllCookbooks,
};

const HomePageConnect = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageConnect;

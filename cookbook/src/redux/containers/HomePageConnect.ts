import { connect } from 'react-redux';
import HomePage from '../../components/HomePage';
import { State } from '../../interfaces';
import { getAllCookbooks } from '../actions/cookbooks';
import { getAllRecipes } from '../actions/recipes';

function mapStateToProps(state: State) {
  const { recipes, cookbooks, user } = state;

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

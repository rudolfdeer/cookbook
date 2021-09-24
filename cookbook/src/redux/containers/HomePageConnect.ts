import { connect } from 'react-redux';
import HomePage from '../../components/HomePage';
import { State } from '../../interfaces';
import { getAllCookbooks } from '../actions/cookbooks';
import { getAllRecipes } from '../actions/recipes';

function mapStateToProps(state: State) {
  const { recipes, cookbooks, user } = state;
  const loggedInUserId = user ? user.id : null;

  return {
    recipes,
    cookbooks,
    loggedInUserId,
  };
}

const mapDispatchToProps = {
  getAllRecipes,
  getAllCookbooks,
};

const HomePageConnect = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageConnect;

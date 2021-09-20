import { connect } from 'react-redux';
import HomePage from '../../components/HomePage';
import { State } from '../../interfaces';
import { getCookbooks } from '../actions/cookbooks';
import { getRecipes } from '../actions/recipes';

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
  getRecipes,
  getCookbooks,
};

const HomePageConnect = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageConnect;

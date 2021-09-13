import { connect } from 'react-redux';
import HomePage from '../../components/HomePage';
import { getCookbooks } from '../actions/cookbooks';
import { getRecipes } from '../actions/recipes';

function mapStateToProps(state: any) {
  const { recipes, cookbooks, user } = state;
  const username = user ? user.username : '';

  return {
    recipes,
    cookbooks,
    username,
  };
}

const mapDispatchToProps = {
  getRecipes,
  getCookbooks,
};

const HomePageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

export default HomePageConnect;

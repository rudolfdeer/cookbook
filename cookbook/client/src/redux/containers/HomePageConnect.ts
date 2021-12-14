import { connect } from 'react-redux';
import HomePage from '../../components/HomePage';
import { IState } from '../../interfacesServer';
import { getAllCookbooks } from '../thunks/cookbooks';
import { getAllRecipes } from '../thunks/recipes';
import { getLoggedInUser } from '../thunks/user';

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
  getLoggedInUser,
};

const HomePageConnect = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageConnect;

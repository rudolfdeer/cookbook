import { connect } from 'react-redux';
import HomePage from '../../components/HomePage';
import { IState } from '../../interfaces';
import { getAllRecipes } from '../thunks/recipes';

function mapStateToProps(state: IState) {
  const { recipes, user } = state;

  return {
    recipes,
    user,
  };
}

const mapDispatchToProps = {
  getAllRecipes,
};

const HomePageConnect = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageConnect;

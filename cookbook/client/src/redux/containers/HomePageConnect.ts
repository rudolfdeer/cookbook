import { connect } from 'react-redux';
import HomePage from '../../components/HomePage';
import { IState } from '../../interfaces';
import { createComment, getAllRecipes, likeRecipe } from '../thunks/recipes';
import { saveToUsersRecipes } from '../thunks/user';

function mapStateToProps(state: IState) {
  const { recipes, user } = state;

  return {
    recipes,
    user,
  };
}

const mapDispatchToProps = {
  getAllRecipes,
  saveToUsersRecipes,
  createComment,
  likeRecipe,
};

const HomePageConnect = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageConnect;

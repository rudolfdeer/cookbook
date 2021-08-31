import { connect } from 'react-redux';
import HomePage from '../components/pages/home-page/home-page';
import getRecepies from '../redux/actions/recepies-actions';

function mapStateToProps(state: any) {
  const { recepies } = state.recipesOperations;
  return {
    recepies,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getRecepies: () => dispatch(getRecepies()),
});

const RecepiesConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

export default RecepiesConnect;

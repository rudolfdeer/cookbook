import { connect } from 'react-redux';
import CookbooksPage from '../components/pages/cookbooks-page/cookbooks-page';
import { getCookbooks } from '../redux/actions/cookbooks-actions';

function mapStateToProps(state: any) {
  const { cookbooks } = state.cookbooks;
  return {
    cookbooks,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getCookbooks: () => dispatch(getCookbooks()),
});

const CookbooksPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CookbooksPage);

export default CookbooksPageConnect;

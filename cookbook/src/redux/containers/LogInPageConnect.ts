import { connect } from 'react-redux';
import LogInPage from '../../components/LogInPage';
import { logIn } from '../actions/user';

function mapStateToProps(state: any) {
  const { user } = state;
  const isLoggedIn = user ? true : false;

  return {
    isLoggedIn,
  };
}

const mapDispatchToProps = {
  logIn,
};

const LogInPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogInPage);

export default LogInPageConnect;

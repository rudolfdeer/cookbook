import { connect } from 'react-redux';
import LogInPage from '../../components/LogInPage';
import { logIn } from '../actions/user-actions';

function mapStateToProps(state: any) {
  const { user } = state.user;
  let isLoggedIn;

  if (user) {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  }

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

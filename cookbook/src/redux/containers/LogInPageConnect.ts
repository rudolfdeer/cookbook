import { connect } from 'react-redux';
import LogInPage from '../../components/LogInPage';
import { State } from '../../interfaces';
import { logIn } from '../actions/user';

function mapStateToProps(state: State) {
  const { user } = state;
  const isLoggedIn = !!user;

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

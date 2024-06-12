import { connect } from 'react-redux';
import LogInPage from '../../components/LogInPage';
import { State } from '../../interfaces';
import { signIn, getLoggedInUser } from '../thunks/user';

function mapStateToProps(state: State) {
  const { user } = state;

  return {
    user,
  };
}

const mapDispatchToProps = {
  signIn,
  getLoggedInUser,
};

const LogInPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogInPage);

export default LogInPageConnect;

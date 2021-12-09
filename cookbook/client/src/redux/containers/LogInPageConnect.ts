import { connect } from 'react-redux';
import LogInPage from '../../components/LogInPage';
//import { State } from '../../interfaces';
import { IState } from '../../interfacesServer';
import { signIn } from '../thunks/user';

function mapStateToProps(state: IState) {
  const { user } = state;
  const isLoggedIn = !!user;

  return {
    isLoggedIn,
  };
}

const mapDispatchToProps = {
  signIn,
};

const LogInPageConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogInPage);

export default LogInPageConnect;

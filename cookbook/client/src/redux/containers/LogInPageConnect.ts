import { connect } from 'react-redux';
import LogInPage from '../../components/LogInPage';
import { State } from '../../interfaces';
import { IState } from '../../interfacesServer';
import { logIn } from '../actions/user';

function mapStateToProps(state: IState) {
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

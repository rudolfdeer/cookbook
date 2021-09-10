import { connect } from 'react-redux';
import LogInPage from '../../components/LogInPage';
import { logIn } from '../actions/user-actions';

const mapDispatchToProps = {
  logIn,
};

const LogInPageConnect = connect(
  null,
  mapDispatchToProps,
)(LogInPage);

export default LogInPageConnect;

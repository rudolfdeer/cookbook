import { connect } from 'react-redux';
import SignUpPage from '../../components/SignUpPage';
import { createUser } from '../actions/user';

const mapDispatchToProps = {
  createUser,
};

const SignUpPageConnect = connect(null, mapDispatchToProps)(SignUpPage);

export default SignUpPageConnect;

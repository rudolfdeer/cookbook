import { connect } from 'react-redux';
import Header from '../../components/Header';
import { State } from '../../interfaces';

const mapStateToProps = (state: State) => {
  const { user } = state;
  const loggedInUserName = user ? user.name : null;

  return {
    loggedInUserName,
  };
};

const HeaderConnect = connect(mapStateToProps, null)(Header);

export default HeaderConnect;

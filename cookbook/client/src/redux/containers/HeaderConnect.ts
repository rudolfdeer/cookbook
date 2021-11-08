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

const HeaderConnect = mapStateToProps
  ? connect(mapStateToProps, null)(Header)
  : connect(null, null)(Header);

export default HeaderConnect;

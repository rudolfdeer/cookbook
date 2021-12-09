import { connect } from 'react-redux';
import Header from '../../components/Header';
import { IState } from '../../interfacesServer';

const mapStateToProps = (state: IState) => {
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

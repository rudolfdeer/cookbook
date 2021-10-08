import { connect } from 'react-redux';
import LikesIcon from '../../components/svg/Likes';
import { State } from '../../interfaces';
import { likeCookbook } from '../actions/cookbooks';

const mapStateToProps = (state: State) => {
  const { cookbooks, user } = state;

  return {
    cookbooks,
    user,
  };
};

const mapDispatchToProps = {
  likeCookbook,
};

const LikesIconConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(LikesIcon);

export default LikesIconConnect;

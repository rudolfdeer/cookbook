import Api from '../../utils/api';
import ACTION_TYPES from '../../constants/action-types';

export const getCookbooks = () => {
  const resData = Api.getCookbooksList();

  return {
    type: ACTION_TYPES.COOKBOOK_GET_ALL,
    payload: resData,
  };
};

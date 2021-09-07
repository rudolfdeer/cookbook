import Api from '../../utils/api';
import ACTION_TYPES from '../../constants/action-types';
import { Cookbook } from '../../constants/types';

export const getCookbooks = () => {
  const resData = Api.getCookbooksList();

  return {
    type: ACTION_TYPES.COOKBOOK_GET_ALL,
    payload: resData,
  };
};

export const sortCookbooks = (order: string) => {
  const currentData = Api.getCookbooksList();
  let resData;

  switch (order) {
    case 'likes': {
      resData = currentData.sort((a, b) => b.likes - a.likes);
      break;
    }
    case 'views': {
      resData = currentData.sort((a, b) => b.views - a.views);
      break;
    }
    default:
      resData = currentData;
  }

  return {
    type: ACTION_TYPES.COOKBOOK_SORT,
    payload: resData,
  };
};

export const filterCookbooks = (tags: string[]) => {
  const currentData = Api.getCookbooksList();
  // const resData = (currentData as any).filter((el: Cookbook) => el.tags.indexOf(tags) > -1);

  const resData = [] as Cookbook[];
 

  return {
    type: ACTION_TYPES.COOKBOOK_FILTER,
    payload: resData,
  };
};

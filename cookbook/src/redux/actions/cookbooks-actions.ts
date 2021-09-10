import { AnyAction } from 'redux';
import Api from '../../utils/api';
import ACTION_TYPES from '../../constants/action-types';

export const getCookbooks = (): AnyAction => {
  const resData = Api.getCookbooksList();

  return {
    type: ACTION_TYPES.COOKBOOK_GET_ALL,
    payload: resData,
  };
};

export const filterCookbooks = (tags: string[]): AnyAction => {
  const currentData = Api.getCookbooksList();
  const appliedTags = tags.sort();
  let resData;

  if (appliedTags.length === 0) {
    resData = Api.getCookbooksList();
  } else if (appliedTags.length === 1) {
    resData = currentData.filter((cookbook) => cookbook.tags.indexOf(appliedTags[0]) > -1);
  } else {
    resData = currentData.filter((cookbook) => {
      const cookbookTags = cookbook.tags.sort();
      return cookbookTags.every((value, index) => value === appliedTags[index]);
    });
  }

  return {
    type: ACTION_TYPES.COOKBOOK_FILTER,
    payload: resData,
  };
};

export const sortCookbooks = (order: string): AnyAction => {
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
    case 'default': {
      resData = currentData.sort((a, b) => a.id - b.id);
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

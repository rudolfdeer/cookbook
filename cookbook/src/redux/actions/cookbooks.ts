import { AnyAction } from 'redux';
import Api from '../../helpers/api';
import ACTION_TYPES from '../../constants/actionTypes';

export const getCookbooks = (): AnyAction => {
  const resData = Api.getCookbooksList();

  return {
    type: ACTION_TYPES.COOKBOOKS_GET,
    payload: resData,
  };
};

export const filterCookbooks = (tags: string[]): AnyAction => {
  const currentData = Api.getCookbooksList();
  const appliedTags = tags.sort();
  let resData;
  if (appliedTags.length === 0) {
    resData = Api.getCookbooksList();
  }
  if (appliedTags.length === 1) {
    resData = currentData.filter(
      (cookbook) => cookbook.tags.indexOf(appliedTags[0]) > -1,
    );
  }
  if (appliedTags.length > 1) {
    resData = currentData.filter((cookbook) => {
      const cookbookTags = cookbook.tags.sort();
      return cookbookTags.every((value, index) => value === appliedTags[index]);
    });
  }

  return {
    type: ACTION_TYPES.COOKBOOKS_GET,
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
    type: ACTION_TYPES.COOKBOOKS_GET,
    payload: resData,
  };
};

export const getUsersCreatedCookbooks = (userId: number): AnyAction => {
  const allCookbooks = Api.getCookbooksList();
  const createdCookbooks = allCookbooks.filter(
    (cookbook) => cookbook.userId === userId,
  );

  return {
    type: ACTION_TYPES.COOKBOOKS_GET,
    payload: createdCookbooks,
  };
};

export const getUsersSavedCookbooks = (userId: number): AnyAction => {
  const user = Api.getUser(userId);
  const { savedCookbooks } = user;

  return {
    type: ACTION_TYPES.COOKBOOKS_GET,
    payload: savedCookbooks,
  };
};

export const createComment = (
  cookbookId: number,
  userId: number,
  commentText: string,
): AnyAction => {
  const cookbooks = Api.getCookbooksList();

  const newComment = {
    userId,
    comment: commentText,
    date: new Date().toString(),
  };

  const cookbooksModified = cookbooks.map((el) => {
    if (el.id === cookbookId) {
      el.comments.push(newComment);
    }
    return el;
  });

  return {
    type: ACTION_TYPES.COOKBOOKS_GET,
    payload: cookbooksModified,
  };
};

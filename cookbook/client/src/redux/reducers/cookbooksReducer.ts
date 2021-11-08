import { AnyAction } from 'redux';
import { Cookbook } from '../../interfaces';
import ACTION_TYPES from '../../constants/actionTypes';
import api from '../../helpers/api';

const initialState = [] as Cookbook[];

type CookbooksReducer = typeof initialState;

export default function cookbooksReducer(
  state = initialState,
  action: AnyAction,
): CookbooksReducer {
  switch (action.type) {
    case ACTION_TYPES.RECIPES_GET_ALL: {
      const response = api.getCookbooksList();
      return [...response];
    }

    case ACTION_TYPES.COOKBOOKS_FILTER: {
      const { tags, userId } = action.payload;
      const currentData = api.getCookbooksList();
      const appliedTags = tags.sort();

      const hideUsersIndex = appliedTags.indexOf('hide');

      if (hideUsersIndex > -1) {
        appliedTags.splice(hideUsersIndex, 1);
      }

      let filtered;

      if (appliedTags.length === 0) {
        filtered = api.getCookbooksList();
      }
      if (appliedTags.length === 1) {
        filtered = currentData.filter(
          (cookbook) => cookbook.tags.indexOf(appliedTags[0]) > -1,
        );
      }
      if (appliedTags.length > 1) {
        filtered = currentData.filter((cookbook) => {
          const cookbookTags = cookbook.tags.sort();
          return cookbookTags.every(
            (value, index) => value === appliedTags[index],
          );
        });
      }

      let result;

      if (hideUsersIndex > -1) {
        result = filtered.filter((el) => el.userId !== userId);
        appliedTags.push('hide');
      } else {
        result = filtered;
      }

      return [...result];
    }

    case ACTION_TYPES.COOKBOOKS_SORT: {
      const order = action.payload;
      const currentData = api.getCookbooksList();

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

      return [...resData];
    }

    case ACTION_TYPES.COOKBOOKS_GET_USERS_CREATED: {
      const userId = action.payload;
      const allCookbooks = api.getCookbooksList();
      const createdCookbooks = allCookbooks.filter(
        (cookbook) => cookbook.userId === userId,
      );

      return [...createdCookbooks];
    }

    case ACTION_TYPES.COOKBOOKS_GET_USERS_SAVED: {
      const userId = action.payload;
      const user = api.getUser(userId);
      const { savedCookbooks } = user;

      return [...savedCookbooks];
    }

    case ACTION_TYPES.COOKBOOKS_CREATE_COMMENT: {
      const { cookbookId, userId, commentText } = action.payload;
      const cookbooks = api.getCookbooksList();
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

      return [...cookbooksModified];
    }

    case ACTION_TYPES.COOKBOOKS_CREATE: {
      const { data, userId, imageSrc } = action.payload;
      const cookbooks = api.getCookbooksList();
      const lastCookbookId = cookbooks[cookbooks.length - 1].id;
      const newCookbookId = lastCookbookId + 1;

      const recipesIdsNumbers = data.recipesIds.map((el: string) => Number(el));

      const newCookbook: Cookbook = {
        id: newCookbookId,
        title: data.title,
        image: imageSrc,
        userId,
        description: data.description,
        recipesIds: recipesIdsNumbers,
        tags: data.tags,
        views: 0,
        likes: 0,
        comments: [],
      };
      cookbooks.push(newCookbook);
      const usersCookbooks = api.getUsersCookbooks(userId);
      return [...usersCookbooks];
    }
    case ACTION_TYPES.COOKBOOKS_MODIFY: {
      const {
        data, cookbookId, imageSrc, userId,
      } = action.payload;
      const cookbook = api.getCookbook(cookbookId);

      cookbook.title = data.title;
      cookbook.description = data.description;
      cookbook.image = imageSrc;
      cookbook.recipesIds = data.recipesIds;

      const usersCookbooks = api.getUsersCookbooks(userId);

      return [...usersCookbooks];
    }

    case ACTION_TYPES.COOKBOOKS_HIDE_USERS_CREATED: {
      const { userId } = action.payload;
      const cookbooks = api.getCookbooksList();

      const filteredCookbooks = cookbooks.filter((el) => el.userId !== userId);

      return [...filteredCookbooks];
    }

    case ACTION_TYPES.COOKBOOKS_DELETE: {
      const { cookbookId, userId } = action.payload;
      const cookbooks = api.getCookbooksList();
      const cookbookIndex = cookbooks.findIndex((el) => el.id === cookbookId);
      cookbooks.splice(cookbookIndex, 1);

      const usersCookbooks = api.getUsersCookbooks(userId);

      return [...usersCookbooks];
    }

    case ACTION_TYPES.COOKBOOKS_LIKE: {
      const { userId, cookbookId } = action.payload;
      const cookbook = api.getCookbook(cookbookId);

      const { usersLiked } = cookbook;

      const index = usersLiked.indexOf(userId);

      if (index > -1) {
        usersLiked.splice(index, 1);
      } else {
        usersLiked.push(userId);
      }

      const cookbooks = api.getCookbooksList();

      return [...cookbooks];
    }

    default:
      return state;
  }
}

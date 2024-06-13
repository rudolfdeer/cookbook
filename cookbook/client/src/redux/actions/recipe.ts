import ACTION_TYPES from '../../constants/actionTypes';
import { Recipe, User } from '../../interfaces';

class RecipeActions {
  getAll(recipes: Recipe[]) {
    return {
      type: ACTION_TYPES.RECIPES_GET_ALL,
      payload: {
        recipes,
      },
    };
  }

  sort(recipes: Recipe[], order: string) {
    return {
      type: ACTION_TYPES.RECIPES_SORT,
      payload: {
        recipes,
        order,
      },
    };
  }

  filter(recipes: Recipe[], cookingTime: number) {
    return {
      type: ACTION_TYPES.RECIPES_FILTER,
      payload: {
        recipes,
        cookingTime,
      },
    };
  }

  getCreatedRecipes(recipes: Recipe[]) {
    return {
      type: ACTION_TYPES.RECIPES_GET_USERS_CREATED,
      payload: {
        recipes,
      },
    };
  }

  getUsersSaved(user: User) {
    return {
      type: ACTION_TYPES.RECIPES_GET_USERS_SAVED,
      payload: {
        user,
      },
    };
  }

  createComment(recipes: Recipe[]) {
    return {
      type: ACTION_TYPES.RECIPES_CREATE_COMMENT,
      payload: {
        recipes,
      },
    };
  }

  create(recipes: Recipe[], userId: number) {
    return {
      type: ACTION_TYPES.RECIPES_CREATE,
      payload: {
        recipes,
        userId,
      },
    };
  }

  update(recipes: Recipe[], userId: number) {
    return {
      type: ACTION_TYPES.RECIPES_MODIFY,
      payload: {
        recipes,
        userId,
      },
    };
  }

  like(recipes: Recipe[]) {
    return {
      type: ACTION_TYPES.RECIPES_LIKE,
      payload: {
        recipes,
      },
    };
  }

  delete(recipes: Recipe[], userId: number) {
    return {
      type: ACTION_TYPES.RECIPES_DELETE,
      payload: {
        recipes,
        userId,
      },
    };
  }
}

export default new RecipeActions();

import { AnyAction } from 'redux';
import { Recipe, SavedRecipe } from '../../interfaces';
import ACTION_TYPES from '../../constants/actionTypes';
import SortOrder from '../../constants/sortOrder';

const initialState = [] as Recipe[];

type RecipesReducer = typeof initialState;

export default function recipesReducer(
  state = initialState,
  action: AnyAction,
): RecipesReducer {
  switch (action.type) {
    case ACTION_TYPES.RECIPES_GET_ALL: {
      const { recipes } = action.payload;
      return [...recipes];
    }

    case ACTION_TYPES.RECIPES_LIKE: {
      const { recipes } = action.payload;
      return [...recipes];
    }

    case ACTION_TYPES.RECIPES_SORT: {
      const { recipes, order } = action.payload;

      let resData;

      switch (order) {
        case SortOrder.Likes: {
          resData = recipes.sort(
            (a: Recipe, b: Recipe) => b.Recipe_Likes.length - a.Recipe_Likes.length,
          );
          break;
        }
        case SortOrder.Views: {
          resData = recipes.sort((a: Recipe, b: Recipe) => b.views - a.views);
          break;
        }
        case SortOrder.Default: {
          resData = recipes.sort((a: Recipe, b: Recipe) => a.id - b.id);
          break;
        }
        default:
          resData = recipes;
      }

      return [...resData];
    }

    case ACTION_TYPES.RECIPES_FILTER: {
      const { recipes, cookingTime } = action.payload;

      const resData = recipes.filter(
        (recipe: Recipe) => recipe.time <= cookingTime,
      );

      return [...resData];
    }

    case ACTION_TYPES.RECIPES_GET_USERS_CREATED: {
      const { recipes } = action.payload;

      return [...recipes];
    }

    case ACTION_TYPES.RECIPES_GET_USERS_SAVED: {
      const { user } = action.payload;
      const savedRecipes = user.Recipe_Saveds;
      const resData = savedRecipes.map((el: SavedRecipe) => el.Recipe);

      return [...resData];
    }

    case ACTION_TYPES.RECIPES_CREATE_COMMENT: {
      const { recipes } = action.payload;

      return [...recipes];
    }

    case ACTION_TYPES.RECIPES_CREATE: {
      const { recipes, userId } = action.payload;
      const usersRecipes = recipes.filter(
        (recipe: Recipe) => recipe.UserId === userId,
      );

      return [...usersRecipes];
    }

    case ACTION_TYPES.RECIPES_MODIFY: {
      const { recipes, userId } = action.payload;

      const usersRecipes = recipes.filter(
        (recipe: Recipe) => recipe.UserId === userId,
      );

      return [...usersRecipes];
    }

    case ACTION_TYPES.RECIPES_DELETE: {
      const { recipes, userId } = action.payload;

      const usersRecipes = recipes.filter(
        (recipe: Recipe) => recipe.UserId === userId,
      );

      return [...usersRecipes];
    }

    default:
      return state;
  }
}

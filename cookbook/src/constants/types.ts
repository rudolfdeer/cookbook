import { Cookbook, Recipe, User } from './interfaces';

export type ReduxAction = {
  type: string,
  payload: Cookbook[] | Recipe[] | User[],
};

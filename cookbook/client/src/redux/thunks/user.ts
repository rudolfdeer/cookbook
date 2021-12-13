import { Dispatch } from 'redux';
import api from '../../helpers/api';
import userActions, { AuthValues } from '../actions/userActions';

export const signIn = (data: AuthValues) => async (dispatch: Dispatch): Promise<void> => {
  const user = await api.signIn(data);

  dispatch(userActions.signIn(user));
}

export const signUp = (data: AuthValues) => async (dispatch: Dispatch): Promise<void> => {
  const user = await api.signUp(data);

  dispatch(userActions.signUp(user));
}

export const deleteUser = (userId: number) => async (dispatch: Dispatch): Promise<void> => {
  await api.deleteUser(userId);

  dispatch(userActions.delete());
}
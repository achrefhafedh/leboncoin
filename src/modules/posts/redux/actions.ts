export * from './reducer';

import { ThunkDispatch } from 'redux-thunk';
import { Store } from 'store';
import { asyncLocalStorage } from 'modules/page-layout/helpers';
import { PostType } from '../types';

export const addPost = (post: PostType) => (
  dispatch: ThunkDispatch<Store, any, any>
) => {
  // TODO: add element in localStorage and check error POST with other action
  dispatch(addPostSuccess(post));
};

// Success Action
export const ADD_POST_SUCCESS: 'ADD_POST_SUCCESS' = 'ADD_POST_SUCCESS';
export const addPostSuccess = (post: PostType) => ({
  type: ADD_POST_SUCCESS,
  payload: post,
});

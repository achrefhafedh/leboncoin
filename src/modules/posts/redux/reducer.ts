import { PostType, PostsStore } from '../types';
import { addPostSuccess } from './actions';

export type PostsAction = ReturnType<typeof addPostSuccess>;

export const initialState: PostsStore = {
  posts: [],
};

export const postsReducer = (
  state: PostsStore = initialState,
  action: PostsAction
): PostsStore => {
  switch (action.type) {
    case 'ADD_POST_SUCCESS': {
      const posts: PostType[] = [...state.posts];
      posts.push(action.payload);
      return {
        ...state,
        posts,
      };
    }
    default:
      return state;
  }
};

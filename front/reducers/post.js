import produce, { finishDraft } from 'immer';

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const initialState = {
  Posts: [],
  isLoadingPosts: false,
};

const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOAD_POSTS_REQUEST: {
        draft.Posts = [];
        draft.isLoadingPosts = true;
        break;
      }
      case LOAD_POSTS_SUCCESS: {
        draft.isLoadingPosts = false;
        draft.Posts = action.data;
        break;
      }
      case LOAD_POSTS_FAILURE: {
        draft.isLoadingPosts = false;
        break;
      }
      default: {
      }
    }
  });
};

export default reducer;

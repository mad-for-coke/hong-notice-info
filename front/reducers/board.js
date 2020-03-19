import produce, { finishDraft } from 'immer';

export const LOAD_CATEGORIES_REQUEST = 'LOAD_CATEGORIES_REQUEST';
export const LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS';
export const LOAD_CATEGORIES_FAILURE = 'LOAD_CATEGORIES_FAILURE';

export const initialState = {
  currentPath: [],
  categories: [],
};

const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOAD_CATEGORIES_REQUEST: {
        draft.categories = [];
      }
      case LOAD_CATEGORIES_SUCCESS: {
        draft.categories = action.data;
      }
      case LOAD_CATEGORIES_FAILURE: {
      }
      default: {
      }
    }
  });
};

export default reducer;

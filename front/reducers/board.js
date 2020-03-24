import produce, { finishDraft } from 'immer';

export const LOAD_CATEGORIES_REQUEST = 'LOAD_CATEGORIES_REQUEST';
export const LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS';
export const LOAD_CATEGORIES_FAILURE = 'LOAD_CATEGORIES_FAILURE';

export const LOAD_SUBCATEGORIES_REQUEST = 'LOAD_SUBCATEGORIES_REQUEST';
export const LOAD_SUBCATEGORIES_SUCCESS = 'LOAD_SUBCATEGORIES_SUCCESS';
export const LOAD_SUBCATEGORIES_FAILURE = 'LOAD_SUBCATEGORIES_FAILURE';

export const SET_CURRENT_PATH = 'SET_CURRENT_PATH';

export const initialState = {
  currentPath: {
    root: 'index',
    category: null,
    subcategory: null,
  },
  categories: [],
  subcategories: [],
};

const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case SET_CURRENT_PATH: {
        draft.currentPath = action.data;
        break;
      }
      case LOAD_CATEGORIES_REQUEST: {
        draft.categories = [];
        draft.subcategories = [];
        break;
      }
      case LOAD_CATEGORIES_SUCCESS: {
        draft.categories = action.data;
        break;
      }
      case LOAD_CATEGORIES_FAILURE: {
        break;
      }
      case LOAD_SUBCATEGORIES_REQUEST: {
        draft.subcategories = [];
        break;
      }
      case LOAD_SUBCATEGORIES_SUCCESS: {
        draft.subcategories = action.data;
        break;
      }
      case LOAD_SUBCATEGORIES_FAILURE: {
        break;
      }
      default: {
      }
    }
  });
};

export default reducer;

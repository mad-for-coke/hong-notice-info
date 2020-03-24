import {
  all,
  delay,
  fork,
  put,
  takeLatest,
  call,
  takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_CATEGORIES_REQUEST,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_FAILURE,
  LOAD_SUBCATEGORIES_REQUEST,
  LOAD_SUBCATEGORIES_SUCCESS,
  SET_CURRENT_PATH,
} from '../reducers/board';

import { categories, subcategories } from './dummy';

function loadCategoriesAPI(root) {
  return { data: categories[root] };
}
function* loadCategories(action) {
  try {
    const res = yield call(loadCategoriesAPI, action.data);
    yield put({
      type: LOAD_CATEGORIES_SUCCESS,
      data: res.data,
    });

    yield put({
      type: LOAD_SUBCATEGORIES_REQUEST,
      data: {
        root: action.data,
        category: res.data[0].id,
      },
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_CATEGORIES_FAILURE,
      error: e,
    });
  }
}
function* watchLoadCategories() {
  yield takeEvery(LOAD_CATEGORIES_REQUEST, loadCategories);
}

function loadSubcategoriesAPI(root, category) {
  return { data: subcategories[root][category] };
}
function* loadSubcategories(action) {
  try {
    const res = yield call(
      loadSubcategoriesAPI,
      action.data.root,
      action.data.category
    );
    yield put({
      type: LOAD_SUBCATEGORIES_SUCCESS,
      data: res.data,
    });

    yield put({
      type: SET_CURRENT_PATH,
      data: {
        root: action.data.root,
        category: action.data.category,
        subcategory: res.data[0].id,
      },
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_SUBCATEGORIES_FAILURE,
      error: e,
    });
  }
}
function* watchLoadSubcategories() {
  yield takeEvery(LOAD_SUBCATEGORIES_REQUEST, loadSubcategories);
}
export default function* boardSaga() {
  yield all([fork(watchLoadCategories), fork(watchLoadSubcategories)]);
}

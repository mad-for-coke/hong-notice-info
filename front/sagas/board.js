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
} from '../reducers/board';

function loadCategoriesAPI(type) {
  if (type === 'notice') {
    return {
      data: [
        { id: 0, title: '학과 공지' },
        { id: 1, title: '학생 공지' },
        { id: 2, title: '클래스넷 공지' },
      ],
    };
  } else if (type === 'article') {
    return {
      data: [
        { id: 3, title: '웹' },
        { id: 4, title: '앱' },
        { id: 5, title: '알고리즘' },
        { id: 6, title: '데이터 사이언스' },
        { id: 7, title: '임베디드' },
      ],
    };
  }
}
function* loadCategories(action) {
  try {
    const res = yield call(loadCategoriesAPI, action.data);
    yield put({
      type: LOAD_CATEGORIES_SUCCESS,
      data: res.data,
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
export default function* boardSaga() {
  yield all([fork(watchLoadCategories)]);
}

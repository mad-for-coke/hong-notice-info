import {
  all,
  call,
  delay,
  fork,
  put,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_SUCCESS,
} from '../reducers/post';

function loadPostsAPI(root, category, subcategory) {
  return {
    data: [
      { id: 1, title: `${root} / ${category} / ${subcategory} => 글 1` },
      { id: 2, title: `${root} / ${category} / ${subcategory} => 글 2` },
      { id: 3, title: `${root} / ${category} / ${subcategory} => 글 3` },
    ],
  };
}
function* loadPosts(action) {
  try {
    const res = yield call(
      loadPostsAPI,
      action.data.root,
      action.data.category,
      action.data.subcategory
    );
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: res.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_POSTS_FAILURE,
      error: e,
    });
  }
}
function* watchLoadPosts() {
  yield takeEvery(LOAD_POSTS_REQUEST, loadPosts);
}
export default function* postSaga() {
  yield all([fork(watchLoadPosts)]);
}

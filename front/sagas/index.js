import { all, fork } from 'redux-saga/effects';
import user from './user';
import post from './post';
import board from './board';

export default function* rootSaga() {
  yield all([fork(user), fork(post), fork(board)]);
}

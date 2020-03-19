import { combineReducers } from 'redux';
import user from './user';
import post from './post';
import board from './board';

const rootReducer = combineReducers({
  user,
  post,
  board,
});

export default rootReducer;

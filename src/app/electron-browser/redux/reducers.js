import { combineReducers } from 'redux';

// 引入 reducer 及 actionCreator
import main, { MainActions } from './mainRedux';


const data = combineReducers({
  main,
});

export { data as default, MainActions };

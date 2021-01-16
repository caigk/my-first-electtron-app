import { combineReducers } from 'redux';

// 引入 reducer 及 actionCreator
import editor from './editorRedux';


const reducer = combineReducers({editor});

export { reducer as default };

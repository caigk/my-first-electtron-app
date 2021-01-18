
//import _, { assign, forEach, find } from 'lodash';
//const { API_URL } = require(`../../config/${ENV}.json`);

import { ACTION_NEW_DOC, ACTION_OPEN_DOC_SUCCESS, ACTION_SAVE_DOC_SUCCESS, ACTION_ALERT } from '@/typings/action.d';
import { EditorType } from '@/typings/store.d';
import { Action } from 'redux';

//初始状态
const initialState: EditorType = {
  errores: [],
  source: {
    fileName: undefined,
    type: 'md',
    title: undefined,
    path: undefined,
    content: ''
  },
  target: {
    fileName: null,
    path: null
  }
};

/**
 * reducer分配器
 * @param {*} state 
 * @param {*} action 
 */
function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case ACTION_NEW_DOC: {
      return {
        ...state,
        source: {
          fileName: null,
          type: 'md',
          title: null,
          path: null,
          content: ''
        },
        target: {
          fileName: null,
          path: null
        }
      };
    }
    case ACTION_OPEN_DOC_SUCCESS: {
      //debugger;
      console.log("reducer open...");
      const source = action.payload.data;
      return {
        ...state,
        source
      };
    }
    case ACTION_SAVE_DOC_SUCCESS: {
      //debugger;
      return {
        ...state,
      };
    }
    case ACTION_ALERT: {
      //debugger;
      const errores = action.payload;
      return {
        ...state,
        errores
      };
    }
    default:
      return state;
  }
}

export default reducer;
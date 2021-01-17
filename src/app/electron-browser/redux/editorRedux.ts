
//import _, { assign, forEach, find } from 'lodash';
//const { API_URL } = require(`../../config/${ENV}.json`);

import { NEW_DOC, OPEN_DOC_SUCCESS, SAVE_DOC_SUCCESS, ALERT } from '@/typings/action.d';
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
    case NEW_DOC: {
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
    case OPEN_DOC_SUCCESS: {
      //debugger;
      const source = action.payload.data;
      return {
        ...state,
        source
      };
    }
    case SAVE_DOC_SUCCESS: {
      //debugger;
      return {
        ...state,
      };
    }
    case ALERT: {
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
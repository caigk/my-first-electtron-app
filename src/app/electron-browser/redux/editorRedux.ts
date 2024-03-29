
//import _, { assign, forEach, find } from 'lodash';
//const { API_URL } = require(`../../config/${ENV}.json`);

import {
  ACTION_NEW_DOC,
  ACTION_OPEN_DOC_SUCCESS,
  ACTION_EDITED_DOC,
  ACTION_SAVE_DOC_SUCCESS,
  ACTION_GENERATE_DOC_SUCCESS,
  ACTION_ALERT
} from '@/typings/action.d';
import { EditorType } from '@/typings/store.d';

//初始状态
export const initialState: EditorType = {
  errores: [],
  source: {
    fileName: undefined,
    type: 'md',
    title: undefined,
    path: undefined,
    content0: '',
    content: '',
  },
  target: {
    fileName: undefined,
    path: undefined
  }
};

/**
 * reducer分配器
 * @param {*} state 
 * @param {*} action 
 */
function reducer(state = initialState, action: { type: string, payload?: any }) {
  switch (action.type) {
    case 'RESET': {
      return initialState;
    }
    case ACTION_NEW_DOC: {
      return {
        ...state,
        source: {
          fileName: undefined,
          type: 'md',
          title: undefined,
          path: undefined,
          content0: '',
          content: '',
        },
        target: {
          fileName: undefined,
          path: undefined
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
    case ACTION_EDITED_DOC: {
      //debugger;
      return {
        ...state,
        source: {
          ...state.source,
          content0: action.payload.newContent,
          content: action.payload.newContent,
        }
      };
    }
    case ACTION_SAVE_DOC_SUCCESS: {
      //debugger;
      return {
        ...state,
      };
    }
    case ACTION_GENERATE_DOC_SUCCESS: {
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
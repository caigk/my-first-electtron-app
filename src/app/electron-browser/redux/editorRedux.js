
import _, { assign, forEach, find } from 'lodash';
//const { API_URL } = require(`../../config/${ENV}.json`);

import {newDoc,OPEN_DOC,GENERATE_DOC, NEW_DOC} from './editorActions';

//初始状态
const initialState = {
  source:{
    fileName:null,
    type:'md',
    title:null,
    path:null,
    content:''
  },
  target:{
    fileName:null,
    path:null
  }
};

/**
 * reducer分配器
 * @param {*} state 
 * @param {*} action 
 */
function reducer(state = initialState, action) {
  switch (action.type) {
    case NEW_DOC: {
      return {
        ...state,
        source:{
          fileName:null,
          type:'md',
          title:null,
          path:null,
          content:''
        },
        target:{
          fileName:null,
          path:null
        }
      };
    }
    case OPEN_DOC: {
      const source = action.payload.data;
      return {
        ...state,
        source
      };
    }
    default:
      return state;
  }
}

export default reducer;
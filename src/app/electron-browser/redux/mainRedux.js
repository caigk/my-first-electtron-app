
import _, { assign, forEach, find } from 'lodash';
//const { API_URL } = require(`../../config/${ENV}.json`);

//初始状态
const initialState = {
  isAuth: 0,
  currentUser: {
    name: ''
  },
  projects: []
};

const MainActions = {
  /**
   * 协议签署
   * @param {*} id 
   */
  login(loginName, loginPW) {
    debugger;
    var fd = new FormData();
    fd.append('loginName', loginName);
    fd.append('loginPw', loginPW);
    return {
      url: API_URL + 'api/user.json',
      types: ['SEND_LOGIN_POST_MSG', 'SEND_LOGIN_POST_MSG_SUCCESS', 'SEND_LOGIN_POST_MSG_ERROR'],
      method: "GET",
      //mode: 'cors',
      headers: { 'Accept': 'application/json' },
      //body: fd
    };
  },

}


/**
 * reducer分配器
 * @param {*} state 
 * @param {*} action 
 */
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SEND_LOGIN_POST_MSG': {
      return {
        ...state,
        currentUser: null,
        isLogining: true,
        error: false
      };
    }
    case 'SEND_LOGIN_POST_MSG_SUCCESS': {
      const user = action.payload.data;
      return {
        ...state,
        currentUser: user,
        isLogining: false,
        error: false
      };
    }
    case 'SEND_LOGIN_POST_MSG_ERROR': {
      return {
        ...state,
        currentUser: null,
        isLogining: false,
        error: true
      };
    }
    default:
      return state;
  }
}

export { reducer as default, MainActions };
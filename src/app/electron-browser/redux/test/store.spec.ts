import {  assert } from 'chai';


import {
  ACTION_NEW_DOC,
  ACTION_OPEN_DOC_SUCCESS,
  ACTION_EDITED_DOC,
  ACTION_SAVE_DOC_SUCCESS,
  ACTION_GENERATE_DOC_SUCCESS,
  ACTION_ALERT
} from '@/typings/action.d';

import reducer,{initialState } from '../editorRedux';
const  {
  reset,
  newDoc,
  openDoc
} = require('../editorActions');

describe('store测试集', function () {

  beforeEach(()=>{
    console.log('before each ...');
  });

  describe('ACTION: reset', function () {
    const newStat = reducer(initialState,reset());
    it('重置状态等于初始状态', function () {
      assert.deepEqual(initialState,newStat);
    });
  });

  describe('ACTION: newDoc', function () {
    const newStat = reducer(initialState,newDoc());
    it('状态检测', function () {
      assert.deepEqual(initialState,newStat);
    });
  });

})
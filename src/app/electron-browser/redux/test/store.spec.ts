import {  assert } from 'chai';
console.log('pwd >> '+__dirname);

import reducer,{initialState } from '../editorRedux';
const  {reset} = require('../editorActions');

console.log(reducer);

describe('store', function () {
  describe('reset', function () {
    const newStat = reducer(initialState,reset());
    it('重置状态等于初始状态', function () {
      assert.deepEqual(initialState,newStat);
    });
  });
})
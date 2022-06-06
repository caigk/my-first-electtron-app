import { assert } from 'chai';

import reducer, { initialState } from '../editorRedux';
const { reset } = require('../editorActions');

describe('redux actions', function () {
  describe('reset', function () {
    const newStat = reducer(initialState, reset());
    it('重置状态等于初始状态', function () {
      assert.deepEqual(initialState, newStat);
    });
  });
})
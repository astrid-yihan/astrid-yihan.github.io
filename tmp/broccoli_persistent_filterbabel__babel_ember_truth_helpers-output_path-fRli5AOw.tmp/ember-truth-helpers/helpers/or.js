define('ember-truth-helpers/helpers/or', ['exports', 'ember-truth-helpers/utils/truth-convert'], function (exports, _truthConvert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.or = or;
  function or(params) {
    for (let i = 0, len = params.length; i < len; i++) {
      if ((0, _truthConvert.default)(params[i]) === true) {
        return params[i];
      }
    }
    return params[params.length - 1];
  }

  exports.default = Ember.Helper.helper(or);
});
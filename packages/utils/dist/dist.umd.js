(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.hut = {}));
})(this, (function (exports) { 'use strict';

  var loadMore = {
    bind(el, binding) {
      const SELECT_WRAP_DOM = el.querySelector(".lazy-select-result .el-select-dropdown__wrap");
      if (SELECT_WRAP_DOM) {
        SELECT_WRAP_DOM.addEventListener("scroll", function () {
          const condition = this.scrollHeight <= Math.ceil(this.scrollTop) + this.clientHeight;
          if (condition) {
            binding.value();
          }
        });
      }
    }
  };

  exports.loadMoreDirective = loadMore;

}));

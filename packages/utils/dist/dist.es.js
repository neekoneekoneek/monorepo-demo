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

export { loadMore as loadMoreDirective };

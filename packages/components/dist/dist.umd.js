(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.hut = {}, global.vue));
})(this, (function (exports, vue) { 'use strict';

  var loadMoreDirective = {
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

  var script$1 = {
    name: "DemoSelect",
    directives: {
      "select-load-more": loadMoreDirective
    },
    props: {
      value: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        default() {
          return [];
        }
      },
      optionConfig: {
        type: Object,
        default() {
          return {
            label: "label",
            value: "value"
          };
        }
      },
      isLazy: {
        type: Boolean,
        default: false
      },
      loadMore: {
        type: Function,
        default() {}
      },
      defaultConfig: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    computed: {
      compOptions() {
        return this.options.map(item => {
          if (!Object.prototype.hasOwnProperty.call(item, "label")) {
            this.$set(item, "label", item[this.optionConfig.label]);
          }
          if (!Object.prototype.hasOwnProperty.call(item, "value")) {
            this.$set(item, "value", item[this.optionConfig.value]);
          }
          return item;
        });
      }
    },
    methods: {
      handleChange(val) {
        this.$emit("update:value", val);
        if (this.defaultConfig.onChange && this.defaultConfig.onChange instanceof Function) {
          this.defaultConfig.onChange.call(this, val);
        }
      }
    }
  };

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_el_option = vue.resolveComponent("el-option");
    const _component_el_select = vue.resolveComponent("el-select");
    const _directive_select_load_more = vue.resolveDirective("select-load-more");
    return vue.withDirectives((vue.openBlock(), vue.createBlock(_component_el_select, vue.mergeProps({
      value: $props.value,
      class: "select"
    }, _ctx.$attrs, {
      class: {
        'lazy-select-result': $props.isLazy
      },
      onChange: $options.handleChange
    }), {
      default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.compOptions, item => {
        return vue.openBlock(), vue.createBlock(_component_el_option, {
          key: item.value,
          label: item.label,
          value: item.value
        }, null, 8 /* PROPS */, ["label", "value"]);
      }), 128 /* KEYED_FRAGMENT */))]),

      _: 1 /* STABLE */
    }, 16 /* FULL_PROPS */, ["value", "class", "onChange"])), [[_directive_select_load_more, $props.isLazy ? $props.loadMore : () => {}]]);
  }

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;
    if (!css || typeof document === 'undefined') {
      return;
    }
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".select[data-v-cfae34ea]{width:100%}";
  styleInject(css_248z);

  script$1.render = render$1;
  script$1.__scopeId = "data-v-cfae34ea";
  script$1.__file = "demo-select/index.vue";

  var script = {
    name: "demo-m-table"
  };

  const _hoisted_1 = {
    class: "demo-m-table"
  };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1);
  }

  script.render = render;
  script.__file = "demo-m-table/demo-m-table.vue";

  exports.MSelect = script$1;
  exports.MTable = script;

}));

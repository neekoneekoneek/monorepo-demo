<template>
  <el-select
    :value="value"
    v-select-load-more="isLazy ? loadMore : () => {}"
    class="select"
    v-bind="$attrs"
    :class="{ 'lazy-select-result': isLazy }"
    @change="handleChange"
  >
    <el-option
      v-for="item in compOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script>
import { loadMoreDirective } from "@yiq-demo/utils";
export default {
  name: "DemoSelect",
  directives: {
    "select-load-more": loadMoreDirective,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    optionConfig: {
      type: Object,
      default() {
        return {
          label: "label",
          value: "value",
        };
      },
    },
    isLazy: {
      type: Boolean,
      default: false,
    },
    loadMore: {
      type: Function,
      default() {},
    },
    defaultConfig: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    compOptions() {
      return this.options.map((item) => {
        if (!Object.prototype.hasOwnProperty.call(item, "label")) {
          this.$set(item, "label", item[this.optionConfig.label]);
        }
        if (!Object.prototype.hasOwnProperty.call(item, "value")) {
          this.$set(item, "value", item[this.optionConfig.value]);
        }
        return item;
      });
    },
  },
  methods: {
    handleChange(val) {
      this.$emit("update:value", val);
      if (
        this.defaultConfig.onChange &&
        this.defaultConfig.onChange instanceof Function
      ) {
        this.defaultConfig.onChange.call(this, val);
      }
    },
  },
};
</script>

<style scoped>
.select {
  width: 100%;
}
</style>

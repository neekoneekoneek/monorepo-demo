<template>
  <el-select
    v-model="value"
    v-select-load-more="isLazy ? loadMore : () => {}"
    class="select"
    v-bind="$attrs"
    :class="{ 'lazy-select-result': isLazy }"
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
import { loadMore } from "@demo/utils";
export default {
  name: "DemoSelect",
  directives: {
    "select-load-more": loadMore,
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
    config: {
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
  },
  computed: {
    compOptions() {
      return this.options.map((item) => {
        if (!Object.prototype.hasOwnProperty.call(item, "label")) {
          this.$set(item, "label", item[this.config.label]);
        }
        if (!Object.prototype.hasOwnProperty.call(item, "value")) {
          this.$set(item, "value", item[this.config.value]);
        }
        return item;
      });
    },
  },
};
</script>

<style scoped>
.select {
  width: 100%;
}
</style>

<template>
  <div class="demo">
    <m-select :value.sync="value" :options="options" :is-lazy="true"></m-select>
  </div>
</template>

<script>
import { MSelect } from "@demo/components";
export default {
  name: "Demo",
  components: {
    MSelect: MSelect,
  },
  data() {
    return {
      value: "001",
      options: [
        {
          label: "hello",
          value: "001",
        },
        {
          label: "hi",
          value: "002",
        },
      ],
    };
  },
};
</script>

<style>
.demo {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div id="app">
    <demo></demo>
  </div>
</template>

<script>
import Demo from "./pages/demo.vue";
export default {
  name: "App",
  components: {
    Demo,
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>

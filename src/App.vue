<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
};
</script>

<style>
/* 去除默认自带的边距 */
html, body {
  margin: 0px;
  padding: 0px;
}
</style>

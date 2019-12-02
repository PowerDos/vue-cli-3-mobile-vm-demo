<template>
  <div class="sub-title-container">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'SubTitle',
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
.sub-title-container {
  h1 {
    text-align: center;
    font-size: 15px;
  }
}
</style>

<template>
  <div class="footer-container">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
.footer-container {
  p {
    margin-top: 38px;
    margin-bottom: 15px;
    text-align: center;
    font-size: 15px;
    color: #ccc;
  }
}
</style>

<template>
  <div class="home-container">
    <h1>{{msg}}</h1>
    <!-- 调用模块 -->
    <sub-title :msg="subTitle"></sub-title>
  </div>
</template>

<script>
import SubTitle from '@/components/SubTitle';
export default {
  name: 'Home',
  components: { SubTitle },
  data () {
    return {
      msg: 'Vue 企业级工程架构',
      subTitle: 'Auther: Gavin'
    };
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  background-color: $background-color;
  h1 {
    text-align: center;
    font-size: 30px;
  }
}
</style>

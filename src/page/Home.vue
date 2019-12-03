<template>
  <div class="home-container">
    <!-- 导航 -->
    <van-nav-bar :title="title" left-text="返回" left-arrow>
      <van-icon name="shopping-cart-o" slot="right" info="9" size="20px"/>
    </van-nav-bar>
    <!-- 通知栏 -->
    <van-notice-bar :text="notify" left-icon="volume-o" />
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white" class="swipe-container">
      <van-swipe-item class="swipe-box swipe-color-1">1</van-swipe-item>
      <van-swipe-item class="swipe-box swipe-color-2">2</van-swipe-item>
      <van-swipe-item class="swipe-box swipe-color-3">3</van-swipe-item>
      <van-swipe-item class="swipe-box swipe-color-4">4</van-swipe-item>
    </van-swipe>
    <!-- 菜单 -->
    <van-grid :column-num="3">
      <van-grid-item icon="like-o" text="收藏" />
      <van-grid-item icon="clock-o" text="历史订单" />
      <van-grid-item icon="balance-o" text="资金管理" />
      <van-grid-item icon="setting-o" text="设置" />
      <van-grid-item icon="location-o" text="收货地址" />
      <van-grid-item icon="service-o" text="服务中心" />
    </van-grid>
    <!-- 懒加载 -->
    <van-skeleton title avatar :row="3" class="skeleton-box"/>
    <van-skeleton title avatar :row="3" class="skeleton-box"/>
    <van-skeleton title avatar :row="3" class="skeleton-box"/>
    <!-- 底部 -->
    <Footer :msg="copyright"></Footer>
  </div>
</template>

<script>
import { Icon, NavBar, NoticeBar, Grid, GridItem, Swipe, SwipeItem, Skeleton } from 'vant';
import Footer from '@/components/Footer';
import { mapState } from 'vuex';
export default {
  name: 'Home',
  components: {
    Footer,
    [Icon.name]: Icon,
    [NavBar.name]: NavBar,
    [NoticeBar.name]: NoticeBar,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Skeleton.name]: Skeleton
  },
  data () {
    return {
      title: 'Vue 企业级工程架构',
      notify: '本项目是基于Vue-Cli3脚手架，应用VW的自适应解决方案构建的移动端企业级工程项目，下面会一步步构建起项目结构，方便大家了解整个过程。'
    };
  },
  computed: {
    ...mapState(['copyright'])
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  width: 100vw;
  min-height: 100vh;
  background-color: #fff;
  .swipe-container {
    height: 380px;
    .swipe-box {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      font-size: 58px;
      color: #fff;
    }
    .swipe-color-1 {
      background-color: #845EC2;
    }
    .swipe-color-2 {
      background-color: #FFC75F;
    }
    .swipe-color-3 {
      background-color: #008E9B;
    }
    .swipe-color-4 {
      background-color: #4D8076;
    }
  }
  .skeleton-box {
    margin-top: 15px;
  }
}
</style>

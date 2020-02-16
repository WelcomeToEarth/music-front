<template>
<div class="mobile">
  <Navs
    :list="list"
    el-class-name="mb-title" />
  <img
    class="mb-banner"
    src="../imgs/mb/banner.png" />
  <div
    v-for="(o, i) of list"
    :key="i">
    <div
      class="mb-title"
      ref="title"><i></i>{{o.t}}</div>
    <component :is="o.m" />
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import wx from '@/plugins/wx';
// import Share from '@/components/mb-share';
import Navs from '@/components/Nav';
import Singer from '@/components/Singer';
import Ablum from '@/components/Ablum';
import My from '@/components/My';

Vue.use(wx);
const list = [
  { t: '歌手', m: 'Singer' },
  { t: '专辑', m: 'Ablum' },
  { t: '我的', m: 'My' },
];

export default {
  name: 'mobile',
  components: {
    Navs,
    Singer,
    Ablum,
    My
  },
  data: () => ({ list }),
};
</script>

<style lang="scss" scoped>
$theme: #E65100;
.mobile {
  position: relative;
  padding: 0 15px;
  background: #F5F5F5;
  color: black;
  overflow-x: hidden;
}
.mb-logo {
  position: absolute; left: 15px; top: 10px;
  width: 100px; height: 40px;
  background: url(~@/imgs/mb/logo.png) no-repeat center/contain;
}
.mb-banner {
  width: 100vw; margin-bottom: 5px;
  transform: translateX(-15px);
}
.mb-title {
  position: relative;
  padding: 50px 0 0 35px; margin: -20px 0 10px;
  font-size: 22px; font-weight: 600;
  > i {
    display: block;
    position: absolute; left: 0; bottom: 2px;
    width: 22px; height: 22px;
    border-radius: 50%; border: 3px solid $theme;
    &::after {
      content: '';
      position: absolute; left: 0; top: 0; bottom: 0; right: 0;
      width: 10px; height: 10px; margin: auto;
      background: $theme;
      border-radius: 50%;
    }
  }
}
.mb-footer {
  height: 60px; margin-bottom: 45px;
  border-top: 1px solid #DBDBDB;
  line-height: 60px; color: #989898; font-size: 20px; text-align: center;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>

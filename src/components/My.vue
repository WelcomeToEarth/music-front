<template>
  <div class="my">
    <!-- <img src="./../imgs/mb/my.png" alt=""> -->
    <div class="introduce">
      <span>个人简介：我是~~~~~</span>
    </div>
    <div class="footer">
      <mt-button plain type="danger"  size="large" @click="logout">退出</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'my',
  data () {
    return {
      
    }
  },
  components: {
  },
  mounted () {
  },
  methods: {
    logout(){
      localStorage.clear()
      this.$router.push('login')
    }
  }
}
</script>
<style lang="scss" scoped>
.my {
  position: relative;
  min-height: 75vw;
  width: 100%;
  z-index: 9;
  border-radius: 9px;
  background-image:  url('./../imgs/mb/my.png');
  background-repeat: no-repeat;
  width: 100%;
  background-size: 100% 100%;

}
.introduce{
  padding: 20px 0 0 20px;
  line-height: 20px;
  font-size: 16px;
}
.footer {
  width: 80%;
  margin: 0 auto;
  margin-top: 150px;
}
</style>

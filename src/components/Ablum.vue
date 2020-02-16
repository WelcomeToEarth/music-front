<template>
<div>
  <ul class="mb-singer">
    <li v-for="(list, index) in lists"
      :key="index"
      @click="goDetail(list)">
      <p>专辑：{{list.name}}</p>
      <p>作者：{{list.author}}</p>
      <p>发表年份：{{list.year}}</p>
      <div>
        歌曲：<p v-for="(item, index) in list.songs"
          :key="index">
          《 {{item}} 》
        </p>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'mb-singer',
  data: () => ({
    lists: [],
  }),
  components: {
  },
  mounted () {
    this.getAblumList();
  },
  methods: {
    // 点击查看歌曲
    goDetail (o) {
      // setTimeout(() => {
      //   this.$router.push(`/mdetail/${o.docId}`)
      // }, 300);
    },
    // 获取歌曲列表
    getAblumList(){
      let that = this
        fetch('http://localhost:3000/api/ablumList')
          .then(function(response) {
              return response.json();
          })
          .then(function(myJson) {
              console.log(myJson);
              that.lists = myJson
          });
    }
  }
};
</script>

<style lang="scss" scoped>
.mb-singer {
  min-height: 50vw; padding:  0 15px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.04);
  border-radius: 6px;
  background: white;
  > li {
    display: block;
    min-height: 90px; padding: 20px 10px;
    border-bottom: 1px solid #E7E7E7;
    color: black;
    > p {
      line-height: 20px;
      &:nth-child(1) {
        font-size: 16px;
        overflow: hidden;
      }
      &:nth-child(2) { color: #A6A6A6; font-size: 12px; }
    }
  }
}
</style>

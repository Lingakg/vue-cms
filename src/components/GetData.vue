<template>
  <div class="zd_demo">
    <div class="inert_wrap">
      <el-container>
        <el-header><h1>获取Token</h1></el-header>
        <el-main>
          <h3>测试数据</h3>
          <p>{{testData}}</p>
          <!--<h3>当前bearer</h3>-->
          <!--<p>{{bearer}}</p>-->
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GetData',
    created() {
      const that = this;
      this.$ajax({
        url: '/api/home/testServer',
        method: "POST",
      }).then((res) => {
        const cur = res.data.data.two
        that.testData = cur
      })
    },
    data() {
      return {
        testData: ''
      }
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    },
    mounted() {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .zd_demo {
    width: 100%;
    height: 100%;
    background: #ccc;
    h3 {
      width: 1000px;
      margin: 0 auto;
      height: 100px;
      line-height: 100px;
      color: red;
      font-weight: bold;
    }
    input {
      padding: 10px;
      border-radius: 10px;
      outline: none;
    }
  }
</style>

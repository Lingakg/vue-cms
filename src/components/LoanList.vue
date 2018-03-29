<template>
  <div class="zd_demo">
    <div class="inert_wrap">
      <el-container>
        <el-header><h1>助贷列表</h1></el-header>
        <el-main>
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item :title="(item.title)" :name="(index+1)" v-for="(item,index) in loanList">
              <div>{{item.title}}  </div>
              <div>{{item.content}}</div>
            </el-collapse-item>
          </el-collapse>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoanList',
    created() {
      const that = this;
      this.$ajax({
        url: '/api/home/list',
        method: "POST",
      }).then((res) => {
        that.loanList = res.data.data
      })
    },
    data() {
      return {
        activeNames: ['1'],
        loanList: [],
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

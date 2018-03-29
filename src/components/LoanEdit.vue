<template>
  <div class="zd_demo">
    <el-row>
      <el-col :span="8" v-for="(o, index) in loanList" :key="o.id" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://static.rong360.com/upload/png/d4/25/d4252b7d9bbe120cd8009674e4dfcd8f.png" class="image" width="200px;">
          <div style="padding: 14px;">
            <span>{{o.title}}}</span>
            <p class="text">{{o.content}}</p>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="primary" @click="edit(o.id)">编辑</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'LoanEdit',
    created() {
      const that = this;
      this.$ajax({
        url: '/api/home/list',
        method: "POST",
      }).then((res) => {
        that.loanList = res.data.data
      })

      this.$ajax({
        url: '/api/user/status',
        method:"POST"
      }).then(function (res) {

      })

      this.$ajax({
        url: '/api/home/testServer',
        method:"POST"
      }).then(function (res) {

      })
    },
    data() {
      return {
        activeNames: ['1'],
        loanList: [],
        currentDate: new Date(),
        dialogVisible: false
      }
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      edit(id){
        console.log(id)
        const that = this;
       // this.$store.commit('editId',id);
        that.$router.push({path: '/edit',query:{aid:id}});
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
    height:100%;
    background: #ccc;
    h3{
      width:1000px;
      margin:  0 auto;
      height:100px;line-height:100px;
      color:red;font-weight: bold;
    }
    input{
      padding:10px; border-radius: 10px;outline: none;
    }
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 400px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .el-col.el-col-8{
    width: 400px;
  }
  .text{
    height: 300px;
    overflow: hidden;
  }
</style>

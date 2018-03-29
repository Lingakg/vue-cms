<template>
  <div class="zd_demo">
      <h3>{{msg}}</h3>
      <input type="button" name="" @click="getMoreData" value="测试ajax数据请求">
      <input type="button" name="" @click="testVuex" value="测试vuex">
      {{$store.state.num}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        msg:'这是一个助贷平台的DEMO'
    }
  },
  methods:{

    testVuex(){
      this.$store.commit('addNum',5);
    },
    getMoreData(){
      this.$ajax({
        url:'',
        method:'',
        data:{

        }
      })
      .then(function(){
        
      })


    }

  },
  mounted(){

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
</style>

<template>
  <div class="manage_page fillcontain">
    <el-row style="height: 100%;">
      <!--<keep-alive>-->
        <el-col :span="4" style="min-height: 100%; background-color: #324057;">
          <el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
            <el-menu-item index="/home"><i class="el-icon-menu"></i>首页</el-menu-item>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-document"></i>数据管理</template>
              <el-menu-item index="/users">用户列表</el-menu-item>
              <el-menu-item index="/loanlist">助贷列表</el-menu-item>
              <el-menu-item index="foodList">合作渠道</el-menu-item>
              <el-menu-item index="orderList">申请列表</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-plus"></i>添加助贷</template>
              <el-menu-item index="addloan">添加助贷</el-menu-item>
              <el-menu-item index="addGoods">添加用户</el-menu-item>
              <el-menu-item index="addGoods">添加渠道</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title"><i class="el-icon-star-on"></i>趋势图</template>
              <el-menu-item index="visitor">用户分布</el-menu-item>
              <el-menu-item index="newMember">用户数据</el-menu-item>
              <el-menu-item index="newMember">助贷趋势</el-menu-item>
              <el-menu-item index="newMember">助贷渠道</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title"><i class="el-icon-edit"></i>编辑</template>
              <!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
              <el-menu-item index="loanedit">助贷编辑</el-menu-item>
              <el-menu-item index="loanremove">助贷删除</el-menu-item>
              <el-menu-item index="vueEdit">用户编辑</el-menu-item>
              <el-menu-item index="vueEdit">渠道编辑</el-menu-item>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title"><i class="el-icon-setting"></i>设置</template>
              <el-menu-item index="adminSet">管理员设置</el-menu-item>
              <el-menu-item index="adminSet">用户设置</el-menu-item>
              <el-menu-item index="adminSet">页面设置</el-menu-item>
            <el-menu-item index="adminSet">分享设置</el-menu-item>
            <!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
          </el-submenu>
          <el-submenu index="7">
            <template slot="title"><i class="el-icon-warning"></i>说明</template>
            <el-menu-item index="explain">使用说明</el-menu-item>
            <el-menu-item index="explain">维护说明</el-menu-item>
            <el-menu-item index="explain">规则说明</el-menu-item>
            <el-menu-item index="explain">升级说明</el-menu-item>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title"><i class="el-icon-warning"></i>JAVA测试</template>
            <el-menu-item index="getToken">测试获取token</el-menu-item>
            <el-menu-item index="getData">测试请求数据</el-menu-item>
            <el-menu-item index="standard">请求规范</el-menu-item>
            <el-menu-item index="protocal">通讯协议</el-menu-item>
          </el-submenu>
          </el-menu>
      </el-col>
      <!--</keep-alive>-->
      <el-col :span="20" style="height: 100%;overflow: auto;">
          <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    computed: {
      defaultActive: function(){
        return this.$route.path.replace('/', '');
      }
    },
  }
</script>


<style lang="less" scoped>
  @import '../style/mixin';
  .manage_page{

  }
  @import '../style/mixin';
  .data_section{
    padding: 20px;
    margin-bottom: 40px;
    .section_title{
      text-align: center;
      font-size: 30px;
      margin-bottom: 10px;
    }
    .data_list{
      text-align: center;
      font-size: 14px;
      color: #666;
      border-radius: 6px;
      background: #E5E9F2;
      .data_num{
        color: #333;
        font-size: 26px;

      }
      .head{
        border-radius: 6px;
        font-size: 22px;
        padding: 4px 0;
        color: #fff;
        display: inline-block;
      }
    }
    .today_head{
      background: #FF9800;
    }
    .all_head{
      background: #20A0FF;
    }
  }
  .wan{
    .sc(16px, #333)
  }
</style>

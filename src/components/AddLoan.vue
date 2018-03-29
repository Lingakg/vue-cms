<template>
  <div class="zd_demo">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="助贷名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="助贷模式">
        <el-select v-model="form.region" placeholder="助贷模式">
          <el-option label="本渠道申请" value="shanghai"></el-option>
          <el-option label="链到第三方 " value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="申请时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="立即放款">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="贷款性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="小额贷" name="type"></el-checkbox>
          <el-checkbox label="车贷" name="type"></el-checkbox>
          <el-checkbox label="房贷" name="type"></el-checkbox>
          <el-checkbox label="公积金贷" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="针对人群">
        <el-radio-group v-model="form.resource">
          <el-radio label="个人"></el-radio>
          <el-radio label="机构"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="贷款描述">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Users',
    data () {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods:{
      onSubmit(){
        const that = this
        this.$ajax({
          url: '/api/admin/loan/addLoan',
          method: 'POST',
          data:{
            title: that.form.name,
            content: that.form.desc,
          }
        }).then((res)=>{
          console.log(res.data)
          if(res.data.code==200){
            that.open()
          }
        })
      },
      open() {
        this.$message('添加成功');
      },
      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        });
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

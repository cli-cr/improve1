<template>
  <div>
    <p>我是基础点位信息的首页</p>
    <template>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="点位名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="type"
          label="设备类型"
          width="180">
        </el-table-column>
        <el-table-column
          prop="part"
          label="所在大队">
        </el-table-column>
        <el-table-column
          prop="address"
          label="区域">
        </el-table-column>
        <el-table-column
          prop="position"
          label="经纬度">
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      tableData: [{
        name: '长江东路',
        type: '信号系统',
        part: '包河大队',
        address: '包河区',
        position: '117.39 31.86'
      },{
        name: '长江东路',
        type: '信号系统',
        part: '包河大队',
        address: '包河区',
        position: '117.39 31.86'
      },{
        name: '长江东路',
        type: '信号系统',
        part: '包河大队',
        address: '包河区',
        position: '117.39 31.86'
      },{
        name: '长江东路',
        type: '信号系统',
        part: '包河大队',
        address: '包河区',
        position: '117.39 31.86'
      },{
        name: '长江东路',
        type: '信号系统',
        part: '包河大队',
        address: '包河区',
        position: '117.39 31.86'
      },{
        name: '长江东路',
        type: '信号系统',
        part: '包河大队',
        address: '包河区',
        position: '117.39 31.86'
      }, ]
      }
  }
}
</script>

<style scoped>
</style>

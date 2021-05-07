<template>
  <navigator></navigator>
  <el-tabs v-model="activeTab" class="applying-tabs" type="border-card" tab-position="left">
    <el-tab-pane label="摊主申请" name="one">
      <div class="input-bar">
        <p>摊主名称：</p>
        <el-input v-model="ownner.name"></el-input>
      </div>
      <div class="input-bar">
        <p>联系方式：</p>
        <el-input v-model="ownner.tel"></el-input>
      </div>
      <el-button type="primary">申请</el-button>
    </el-tab-pane>
    <el-tab-pane label="骑士申请" name="two">
      <div class="input-bar">
        <p>骑士名称：</p>
        <el-input v-model="knight.name"></el-input>
      </div>
      <div class="input-bar">
        <p>联系方式：</p>
        <el-input v-model="knight.tel"></el-input>
      </div>
      <el-button type="primary">申请</el-button>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Navigator from '../components/Navigator.vue'

export default {
  name: 'Applying',
  components: {
    Navigator
  },
  data() {
    return {
      activeTab: 'one',
      ownner: {
        name: '',
        tel: ''
      },
      knight: {
        name: '',
        tel: ''
      }
    }
  }
}
</script>

<style>
.applying-tabs {
  width: 830px;
  margin: auto;
}

.applying-tabs .el-tab-pane {
  display: flex;
  flex-direction: column;
}

.applying-tabs .input-bar {
  width: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.applying-tabs .input-bar .el-input__inner, .applying-tabs .input-bar .el-input {
  width: 200px;
  border-radius: 15px;
}

.applying-tabs .input-bar .el-input {
  height: auto;
}

.applying-tabs .input-bar .el-input__inner {
  height: 30px;
}

.applying-tabs .el-button {
  margin: 20px 0 0 0;
  padding: 0;
  width: 100px;
  height: 30px;
  min-height: 30px;
  border-radius: 10px;
}
</style>
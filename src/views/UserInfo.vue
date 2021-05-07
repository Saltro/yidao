<template>
  <navigator></navigator>
  <el-tabs v-model="activeTab" class="userinfo-tabs" type="border-card" tab-position="left">
    <el-tab-pane label="个人信息" name="one">
      <div class="show-bar">
        <div class="single-bar" v-for="info in infos" :key="info.title">
          <p>{{ info.name }}</p>
          <p>{{ info.value }}</p>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="设置" name="two">
      <el-button class="button" type="primary">退出登录</el-button>
      <el-button class="button" type="danger">注销账号</el-button>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Navigator from '../components/Navigator.vue'

export default {
  name: 'UserInfo',
  components: {
    Navigator
  },
  data() {
    return {
      activeTab: 'one',
      infos: [
        {
          name: '用户名',
          value: ''
        }, {
          name: '昵称',
          value: ''
        }, {
          name: '绑定邮箱',
          value: ''
        }, {
          name: '所在学校',
          value: ''
        }
      ]
    }
  },
  beforeMount() {
    let userId = this.$route.params.userId;
    if (userId == 1) {
      this.infos[0].value = '管理员';
      this.infos[1].value = '管理员';
      this.infos[2].value = 'xxxx@whu.edu.cn';
      this.infos[3].value = '武汉大学';
    }
  }
}
</script>

<style>
.userinfo-tabs {
  width: 830px;
  margin: auto;
}

.userinfo-tabs .show-bar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.userinfo-tabs .show-bar .single-bar {
  width: 400px;
  display: flex;
  justify-content: space-between;
}
</style>
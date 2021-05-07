<template>
  <div class="register">
    <div class="header">
      <img class="link" src="../assets/icon.jpg" @click="this.$router.push('/')">
      <p class="link title highlight" @click="this.$router.push('/')">易岛</p>
    </div>
    <div class="input-area">
      <p class="title highlight">注册账号</p>
      <div class="input-bar">
        <p>用户名：</p>
        <el-input v-model="name"></el-input>
      </div>
      <div class="input-bar">
        <p>密码：</p>
        <el-input v-model="pwd"></el-input>
      </div>
      <div class="input-bar">
        <p>确认密码：</p>
        <el-input v-model="pwdRepeat"></el-input>
      </div>
      <div class="input-bar">
        <p>用户昵称：</p>
        <el-input v-model="nickname"></el-input>
      </div>
      <div class="input-bar">
        <p>邮箱：</p>
        <el-input v-model="email"></el-input>
      </div>
      <div class="input-bar">
        <p>所在学校：</p>
        <el-input v-model="school"></el-input>
      </div>
      <el-button class="register-button" type="primary" @click="register">注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      name: '',
      pwd: '',
      pwdRepeat: '',
      nickname: '',
      email: '',
      school: ''
    }
  },
  methods: {
    register() {
      this.$router.push('/');
    }
  }
}
</script>

<style>
.register {
  margin: 30px auto;
  width: 1002px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.register .header {
  padding: 0px 100px 0px 100px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.register .header img {
  width: 67px;
  height: 67px;
  margin: 0px 30px 0px 0px;
}

.register .header .title {
  font-size: 36px;
}

.register .input-area {
  width: 400px;
}

.register .input-area .title {
  text-align: left;
  font-size: 48px;
}

.register .input-area .input-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.register .input-area .input-bar .el-input__inner, .register .input-area .input-bar .el-input {
  width: 270px;
  height: 30px;
  border-radius: 10px;
}

.register .input-area .register-button {
  margin: 30px auto;
  padding: 0px;
  height: 30px;
  min-height: 30px;
  width: 86px;
  border-radius: 10px;
}
</style>
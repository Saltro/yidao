<template>
<div class="login">
    <div class="logo">
      <img class="link" src="../assets/icon.jpg" @click="this.$router.push('/')">
      <p class="link title highlight" @click="this.$router.push('/')">易岛</p>
    </div>
    <div class="input-area">
      <p class="title highlight">登录</p>
      <el-input class="input-bar" v-model="name" placeholder="用户名"></el-input>
      <el-input class="input-bar" v-model="pwd" placeholder="密码" show-password></el-input>
      <div class="inline-choice">
        <el-checkbox v-model="isAutoLogin">7 天内自动登录</el-checkbox>
        <p class="link" @click="forgetPassword">忘记密码</p>
      </div>
      <el-button class="login-button" @click="login" type="primary">登录</el-button>
      <div class="inline-choice">
        <p class="link" @click="this.$router.push('register')">账号注册</p>
        <p class="link" @click="otherPlatformLogin">使用其他平台账号登录</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      name: '',
      pwd: '',
      isAutoLogin: true
    }
  },
  methods: {
    login() {
      this.$router.push({
        path: '/',
      })
    }
  }
}
</script>

<style>
.login {
  margin: 200px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.login .logo {
  margin: 0px 48px;
  display: flex;
  align-items: center;
}

.login .logo img {
  width: 180px;
  height: 180px;
  margin: 0px 20px 0px 0px;
}

.login .logo .title {
  font-size: 72px;
  letter-spacing: 5px;
}

.login .input-area {
  padding: 0px 0px 0px 48px;
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-left: 3px solid #F96C1F;
}

.login .input-area .title {
  margin: 20px 0px 10px;
  font-size: 72px;
  letter-spacing: 10px;
}

.login .input-area .input-bar {
  margin: 10px 0px;
  width: 100%;
  height: 30px;
}

.login .input-area .input-bar .el-input__inner {
  width: 100%;
  height: 30px;
  border-radius: 10px;
}

.login .input-area .inline-choice {
  margin: 5px auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
}

.login .input-area .inline-choice .el-checkbox span {
  font-size: 12px;
}

.login .input-area .login-button {
  padding: 0px;
  width: 100%;
  height: 30px;
  min-height: 30px;
  border-radius: 10px;
}
</style>